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
        label: string;
        value: string;
    }[];
}

export const profileInfo: ProfileInfo = {
    tagline: "Self-taught developer",
    githubUsername: "dhirajaryaa",
    resumeLink:
        "https://drive.google.com/file/d/1YvXHm4HrH2RnR0n8UjHwZxZxZxZxZxZx/view?usp=share_link",
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
        label: "Email"
    }, {
        label: "Phone No",
        icon: Smartphone,
        value: "+91 6201753993"
    }]
};
