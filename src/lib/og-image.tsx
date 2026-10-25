/* eslint-disable @next/next/no-img-element -- next/image cannot be used inside ImageResponse */
import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "next/og";
import { site, socials } from "@/lib/config";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/** exact light-theme tokens from :root in globals.css */
const colors = {
    background: "#ffffff",
    foreground: "#0a0a0a",
    muted: "#737373",
};

/** domain shown on the card — comes from NEXT_PUBLIC_SITE_URL via site.url */
const siteLabel = site.url.replace(/^https?:\/\//, "").replace(/\/+$/, "");

/** @handle taken from the GitHub profile in config, so it cannot drift */
const handle = `@${socials.github.split("/").filter(Boolean).pop() ?? "dhirajaryaa"}`;

/**
 * Satori does not tile CSS backgrounds, so the graph paper is drawn as one flat
 * SVG. No radial fade or glow — just a quiet grid on the app's white background.
 */
const gridPaper = (() => {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
            <defs>
                <pattern id="minor" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#0a0a0a" stroke-opacity="0.045" stroke-width="1"/>
                </pattern>
                <pattern id="major" width="150" height="150" patternUnits="userSpaceOnUse">
                    <path d="M 150 0 L 0 0 0 150" fill="none" stroke="#0a0a0a" stroke-opacity="0.07" stroke-width="1"/>
                </pattern>
            </defs>
            <rect width="1200" height="630" fill="url(#minor)"/>
            <rect width="1200" height="630" fill="url(#major)"/>
        </svg>
    `;

    return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
})();

type OgAssets = {
    fonts: {
        name: string;
        data: ArrayBuffer;
        weight: 400 | 500 | 600 | 700;
        style: "normal";
    }[];
    avatar: string;
};

let assets: OgAssets | null = null;

/** fonts and the avatar are read once per process, then reused for every card. */
function loadAssets(): OgAssets {
    if (assets) return assets;

    const fontDir = path.join(process.cwd(), "public/fonts");

    const font = (weight: 400 | 500 | 600 | 700) => {
        const file = fs.readFileSync(path.join(fontDir, `schibsted-grotesk-${weight}.ttf`));
        return file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength) as ArrayBuffer;
    };

    const avatar = fs
        .readFileSync(path.join(process.cwd(), "public/og/avatar.png"))
        .toString("base64");

    assets = {
        fonts: [
            { name: "Schibsted Grotesk", data: font(400), weight: 400, style: "normal" },
            { name: "Schibsted Grotesk", data: font(500), weight: 500, style: "normal" },
            { name: "Schibsted Grotesk", data: font(600), weight: 600, style: "normal" },
            { name: "Schibsted Grotesk", data: font(700), weight: 700, style: "normal" },
        ],
        avatar: `data:image/png;base64,${avatar}`,
    };

    return assets;
}

type BlogOgProps = {
    title: string;
    readingTime?: string;
};

/** 1200×630 light-theme card used for blog articles and the blog index. */
export function renderBlogOgImage({ title, readingTime }: BlogOgProps) {
    const { fonts, avatar } = loadAssets();

    /* longer titles step down a size so they never run out of the card */
    const titleSize = title.length > 95 ? 44 : title.length > 62 ? 49 : 54;

    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    position: "relative",
                    background: colors.background,
                    fontFamily: "Schibsted Grotesk",
                    overflow: "hidden",
                }}
            >
                {/* flat graph paper behind the content */}
                <img
                    src={gridPaper}
                    width={1200}
                    height={630}
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: 1200,
                        height: 630,
                    }}
                    alt=""
                />

                {/* content */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: 1200,
                        height: 630,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "46px 90px 96px",
                    }}
                >
                    {/* avatar + Blog lockup */}
                    <div style={{ display: "flex", alignItems: "center", gap: 34 }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 106,
                                height: 106,
                                borderRadius: 9999,
                                border: `2px solid ${colors.foreground}`,
                                overflow: "hidden",
                                background: "#ffffff",
                            }}
                        >
                            <img
                                src={avatar}
                                width={102}
                                height={102}
                                style={{ borderRadius: 9999 }}
                                alt=""
                            />
                        </div>

                        <div
                            style={{
                                width: 2,
                                height: 88,
                                background: colors.foreground,
                                borderRadius: 2,
                            }}
                        />

                        <div
                            style={{
                                display: "flex",
                                fontSize: 66,
                                fontWeight: 700,
                                letterSpacing: "-0.045em",
                                color: colors.foreground,
                                lineHeight: 1,
                            }}
                        >
                            Blog
                        </div>
                    </div>

                    {/* article title */}
                    <div
                        style={{
                            display: "flex",
                            marginTop: 54,
                            maxWidth: 930,
                            textAlign: "center",
                            fontSize: titleSize,
                            fontWeight: 600,
                            lineHeight: 1.2,
                            letterSpacing: "-0.03em",
                            color: colors.foreground,
                            wordBreak: "break-word",
                        }}
                    >
                        {title}
                    </div>
                </div>

                {/* footer — same muted tone as the app */}
                <div
                    style={{
                        position: "absolute",
                        left: 74,
                        right: 74,
                        bottom: 56,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        color: colors.muted,
                        fontSize: 21,
                        fontWeight: 500,
                        letterSpacing: "-0.01em",
                    }}
                >
                    <div style={{ display: "flex" }}>
                        {siteLabel}/blog
                        {readingTime ? ` · ${readingTime}` : ""}
                    </div>
                    <div style={{ display: "flex" }}>{handle}</div>
                </div>
            </div>
        ),
        {
            ...OG_SIZE,
            fonts,
        },
    );
}
