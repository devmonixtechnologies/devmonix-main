"use client";

import React from "react";
import { Badge } from "./badge";

type OrgInfo = {
  login: string;
  name: string | null;
  description: string | null;
  public_repos: number;
  followers: number;
  html_url: string;
};

export default function GithubOrgInfo({ org }: { org: string }) {
  const [data, setData] = React.useState<OrgInfo | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;
    setLoading(true);
    // Use server proxy to avoid client-side rate limits and CORS
    fetch(`/api/github/org/${org}`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`GitHub API error: ${res.status}`);
        }
        const json = (await res.json()) as OrgInfo;
        if (!cancelled) setData(json);
      })
      .catch((e) => {
        if (!cancelled) setError("GitHub info unavailable");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [org]);

  if (loading) {
    return <p className="text-sm text-muted-foreground">Loading GitHub info…</p>;
  }

  if (error) {
    return <p className="text-sm text-destructive">GitHub info unavailable</p>;
  }

  if (!data) return null;

  const orgName = data.name || data.login;

  return (
    <div className="mt-3 text-sm text-muted-foreground">
      <span className="font-medium text-foreground">{orgName}</span>
      {data.description ? <> — {data.description}</> : null}
      <div className="mt-2 flex items-center gap-2">
        <Badge variant={data.public_repos > 0 ? "outline" : "secondary"}>
          {data.public_repos > 0
            ? `${data.public_repos} public repos`
            : "No public repositories yet"}
        </Badge>
        <Badge variant="outline">{data.followers} followers</Badge>
      </div>
    </div>
  );
}