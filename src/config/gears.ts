import {
    Monitor,
    Cpu,
    HardDrive,
    MemoryStick,
    Keyboard,
    Mouse,
    Webcam,
    Headphones,
    Smartphone,
    BatteryCharging,
    Puzzle,
} from "lucide-react";

interface Gears {
    name: string;
    icon: any;
};

interface WebExtensions {
    name: string;
    url: string;
    icon: any;
}

export const myPc: Gears[] = [
    {
        name: "CPU – Intel Core i5-3470",
        icon: Cpu,
    },
    {
        name: "Memory – 16GB RAM",
        icon: MemoryStick,
    },
    {
        name: "Storage – 256GB SSD",
        icon: HardDrive,
    },
    {
        name: "Primary Monitor (1600×900)",
        icon: Monitor,
    },
    {
        name: "Secondary Monitor (1400×1050)",
        icon: Monitor,
    },
    {
        name: "UPS – Frontech Mars725",
        icon: BatteryCharging,
    },
];

export const myGadgets:Gears[] = [
    {
        name: "Punta Rainbow Keyboard",
        icon: Keyboard,
    },
    {
        name: "Dell MS116-BK Wired Mouse",
        icon: Mouse,
    },
    {
        name: "Lapcare Webcam",
        icon: Webcam,
    },
    {
        name: "Logitech Headphones",
        icon: Headphones,
    },
    {
        name: "Vivo V19 (128GB)",
        icon: Smartphone,
    },
];

export const myWebExtensions: WebExtensions[] = [
    {
        name: "SmartForm – AI Form Filler",
        url: "https://github.com/dhirajaryaa/smartform",
        icon: Puzzle,
    },
    {
        name: "AdGuard AdBlocker",
        url: "https://adguard.com/en/adguard-browser-extension/overview.html",
        icon: Puzzle,
    },
    {
        name: "uBlock Origin",
        url: "https://ublockorigin.com/",
        icon: Puzzle,
    },
    {
        name: "React Developer Tools",
        url: "https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi",
        icon: Puzzle,
    },
    {
        name: "Redux DevTools",
        url: "https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd",
        icon: Puzzle,
    },
    {
        name: "Goal Countdown [owned]",
        url: "https://addons.mozilla.org/en-US/firefox/addon/goal-countdown/",
        icon: Puzzle,
    },
    {
        name: "Screely",
        url: "https://screely.com",
        icon: Puzzle,
    },
];
