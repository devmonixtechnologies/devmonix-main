import { Metadata } from "next";

export const generateMetadata = ({
    title = `DevMonix Technologies | Enterprise Software Development & AI Solutions`,
    description = `DevMonix Technologies delivers cutting-edge enterprise software development, AI platforms, cloud modernization, and DevOps services. Transform your business with scalable, secure digital solutions tailored to your needs.`,
    image = "/Devmonix-drk.png",
    keywords = [
        "enterprise software development",
        "AI solutions",
        "cloud modernization",
        "DevOps services",
        "product engineering",
        "custom software development",
        "AI chatbots",
        "logistics ERP",
        "software consulting",
        "digital transformation"
    ],
    url,
    type = "website",
    siteName = "DevMonix Technologies",
    locale = "en_US",
    icons = [
        {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            url: "/singledr.png"
        },
        {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            url: "/singledr.png"
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/singledr.png"
        },
    ],
    noIndex = false
}: {
    title?: string;
    description?: string;
    image?: string | null;
    keywords?: string[];
    url?: string;
    type?: string;
    siteName?: string;
    locale?: string;
    icons?: Metadata["icons"];
    noIndex?: boolean;
} = {}): Metadata => ({
    title,
    description,
    keywords: keywords.join(", "),
    authors: [{ name: "DevMonix Technologies", url: "https://devmonix.io" }],
    creator: "DevMonix Technologies",
    publisher: "DevMonix Technologies",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons,
    metadataBase: new URL(process.env.NEXT_PUBLIC_APP_DOMAIN ? `https://${process.env.NEXT_PUBLIC_APP_DOMAIN}` : "https://devmonix.io"),
    alternates: {
        canonical: url,
    },
    openGraph: {
        title,
        description,
        url,
        siteName,
        locale,
        type: type as any,
        ...(image && { 
            images: [{
                url: image,
                width: 1200,
                height: 630,
                alt: title,
            }] 
        }),
    },
    twitter: {
        card: "summary_large_image",
        title,
        description,
        creator: "@devmonixtech",
        site: "@devmonixtech",
        ...(image && { images: [image] }),
    },
    robots: {
        index: !noIndex,
        follow: !noIndex,
        googleBot: {
            index: !noIndex,
            follow: !noIndex,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    }
})
