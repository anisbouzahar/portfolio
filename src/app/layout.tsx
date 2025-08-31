import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Script from 'next/script'
import {ReactNode} from "react";
import Head from "next/head";

const geistSans = Geist({
    variable: "--font-geist-sans", subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono", subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Anis Bouzahar | Full-Stack Developer",
    description: "Portfolio of Anis Bouzahar — sharing my journey as a full-stack developer, my experiences, and the projects I’ve built along the way.",
    icons: [{rel: "icon", url: "/favicon.svg", type: "image/svg+xml"}, {
        rel: "shortcut icon",
        url: "/favicon.ico"
    }, {rel: "apple-touch-icon", url: "/apple-touch-icon.png"},],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>)
{
    const isProd = process.env.NODE_ENV === "production";

    return (<html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <Head>
            {isProd && (
                <>
                    <link rel="preconnect" href="https://analytics.anis-bouzahar.dev" />
                    <link rel="dns-prefetch" href="https://analytics.anis-bouzahar.dev" />
                </>
            )}
        </Head>

        {children}
        <Footer/>
        {isProd && (<Script src="https://analytics.anis-bouzahar.dev/script.js"
                                                           data-website-id="ded1a371-f068-42c1-a2a7-de75f6e0c029"
                                                           data-domains="anis-bouzahar.dev,www.anis-bouzahar.dev"
                                                           data-do-not-track="true"
                                                           strategy="afterInteractive"/>)}
        </body>
        </html>);
}
