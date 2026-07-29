import { type LucideIcon } from 'lucide-react';
import {
    Linkedin,
    Youtube,
    Mail,
    Instagram,
    Github,
    Twitter,
    Smartphone
} from "lucide-react";

interface ProfileInfo {
    tagline: string;
    githubUsername: string;
    resumeLink: string;
    socialLinks: {
        url: string;
        icon: LucideIcon;
        label: string;
    }[];
    contact: {
        icon: LucideIcon;
        value: string;
    }[];
}

export const profileInfo: ProfileInfo = {
    tagline: "Self-taught developer",
    githubUsername: "dhirajaryaa",
    resumeLink:
        "https://drive.google.com/file/d/1ClHy3E1LAc4mVUurzYGVTI5IXY3mTY26/view",
    socialLinks: [
        {
            url: "https://github.com/dhirajaryaa",
            icon: Github,
            label: "github",
        },
        {
            url: "https://twitter.com/dhirajarya01",
            icon: Twitter,
            label: "twitter",
        },
        {
            url: "https://linkedin.com/in/dhirajarya01",
            icon: Linkedin,
            label: "linkedin",
        },
        {
            url: "https://youtube.com/@dhirajaryaa",
            icon: Youtube,
            label: "youtube",
        },
        {
            url: "https://www.instagram.com/dhirajarya01",
            icon: Instagram,
            label: "instagram",
        },
        {
            url: "mailto:dhirajkum4580@gmail.com",
            icon: Mail,
            label: "email",
        },
    ],
    contact: [{
        value: "dhirajkum4580@gmail.com",
        icon: Mail,
    }, {
        icon: Mail,
        value: "dhirajarya.ptn@gmail.com"
    }]
};
