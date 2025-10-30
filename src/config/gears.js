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
} from "lucide-react";

export const myPc = [
  {
    name: "CPU – Intel Core i5-3470",
    icon: Cpu,
    category: "Component",
  },
  {
    name: "Memory – 16GB RAM",
    icon: MemoryStick,
    category: "Component",
  },
  {
    name: "Storage – 256GB SSD",
    icon: HardDrive,
    category: "Component",
  },
  {
    name: "Primary Monitor (1600×900)",
    icon: Monitor,
    category: "Monitor",
  },
  {
    name: "Secondary Monitor (1400×1050)",
    icon: Monitor,
    category: "Monitor",
  },
  {
    name: "Frontech Mars-725 UPS",
    icon: BatteryCharging,
    category: "Power",
  },
];

export const myGadgets = [
  {
    name: "Punta Rainbow Keyboard",
    icon: Keyboard,
    category: "Peripheral",
  },
  {
    name: "Dell MS116-BK Wired Mouse",
    icon: Mouse,
    category: "Peripheral",
  },
  {
    name: "Lapcare Webcam",
    icon: Webcam,
    category: "Peripheral",
  },
  {
    name: "Logitech Headphones",
    icon: Headphones,
    category: "Peripheral",
  },
  {
    name: "Vivo V19 (128GB)",
    icon: Smartphone,
    category: "Mobile Device",
  },
];

