import { NextResponse } from 'next/server';

export async function GET(_request: Request, context: { params: { org?: string } }) {
  try {
    const org = context.params?.org;
    if (!org) {
      return NextResponse.json({ error: 'Missing org parameter' }, { status: 400 });
    }

    const headers: Record<string, string> = {
      'User-Agent': 'devmonix-portfolio',
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    };
    const rawToken = (process.env.GITHUB_TOKEN?.trim() || process.env.GITHUB_API_TOKEN?.trim());
    if (rawToken) {
      const isClassic = rawToken.startsWith('ghp_') || rawToken.startsWith('gho_');
      headers['Authorization'] = `${isClassic ? 'token' : 'Bearer'} ${rawToken}`;
    }

    let res = await fetch(`https://api.github.com/orgs/${org}`,
      {
        headers,
        // Cache on the server for 10 minutes to reduce rate-limit pressure
        next: { revalidate: 600 },
      }
    );

    // Fallback to users endpoint if org not found (some accounts may be users)
    if (res.status === 404) {
      res = await fetch(`https://api.github.com/users/${org}`,
        {
          headers,
          next: { revalidate: 600 },
        }
      );
    }

    if (!res.ok) {
      const status = res.status;
      return NextResponse.json({ error: 'Failed to load org info' }, { status });
    }

    const data = await res.json();
    return NextResponse.json(data, {
      status: 200,
      headers: {
        // Client-side caching hints
        'Cache-Control': 'public, max-age=60, s-maxage=300, stale-while-revalidate=1800',
      },
    });
  } catch (e) {
    return NextResponse.json({ error: 'Unexpected server error' }, { status: 500 });
  }
}