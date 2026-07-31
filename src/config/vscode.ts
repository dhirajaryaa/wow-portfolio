import { Code, Palette, TerminalSquare, Layout, GitBranch, Eye } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import rawSettings from "./vscode-settings.json";

export type { LucideIcon };

export interface VSCodeGroup {
  title: string;
  icon: LucideIcon;
  settings: { key: string; value: string }[];
}

function fmt(v: unknown): string {
  if (v === null || v === undefined) return "—";
  if (typeof v === "boolean") return v ? "Enabled" : "Disabled";
  if (typeof v === "string") return v || "—";
  if (typeof v === "number") return String(v);
  if (Array.isArray(v)) return `[${v.length} items]`;
  if (typeof v === "object") return `{${Object.keys(v as object).length} keys}`;
  return String(v);
}

function s(key: string): string {
  const v = (rawSettings as Record<string, unknown>)[key];
  return v !== undefined ? fmt(v) : "—";
}

export const rawConfig: Record<string, unknown> = rawSettings as Record<string, unknown>;

export const vscodeGroups: VSCodeGroup[] = [
  {
    title: "Editor",
    icon: Code,
    settings: [
      { key: "Font Family", value: s("editor.fontFamily") },
      { key: "Font Size", value: s("editor.fontSize") },
      { key: "Line Height", value: s("editor.lineHeight") },
      { key: "Font Weight", value: s("editor.fontWeight") },
      { key: "Tab Size", value: s("editor.tabSize") },
      { key: "Font Ligatures", value: s("editor.fontLigatures") },
      { key: "Line Numbers", value: s("editor.lineNumbers") },
      { key: "Format on Save", value: s("editor.formatOnSave") },
      { key: "Default Formatter", value: s("editor.defaultFormatter") },
    ],
  },
  {
    title: "Theme & Icons",
    icon: Palette,
    settings: [
      { key: "Color Theme", value: s("workbench.colorTheme") },
      { key: "Icon Theme", value: s("workbench.iconTheme") },
      { key: "Icon Pack", value: s("material-icon-theme.activeIconPack") },
    ],
  },
  {
    title: "Terminal",
    icon: TerminalSquare,
    settings: [
      { key: "Font Family", value: s("terminal.integrated.fontFamily") },
      { key: "Font Size", value: s("terminal.integrated.fontSize") },
      { key: "Bold Font Weight", value: s("terminal.integrated.fontWeightBold") },
      { key: "Initial Hint", value: s("terminal.integrated.initialHint") },
    ],
  },
  {
    title: "Workbench",
    icon: Layout,
    settings: [
      { key: "Side Bar Location", value: s("workbench.sideBar.location") },
      { key: "Startup Editor", value: s("workbench.startupEditor") },
      { key: "Menu Bar Visibility", value: s("window.menuBarVisibility") },
      { key: "Chat Session Orientation", value: s("chat.viewSessions.orientation") },
    ],
  },
  {
    title: "Git",
    icon: GitBranch,
    settings: [
      { key: "Auto Fetch", value: s("git.autofetch") },
      { key: "Confirm Sync", value: s("git.confirmSync") },
      { key: "Open in Parent Folders", value: s("git.openRepositoryInParentFolders") },
    ],
  },
  {
    title: "Extensions",
    icon: Eye,
    settings: [
      { key: "GitHub Copilot", value: fmt((rawSettings as Record<string, unknown>)["github.copilot.enable"]) },
      { key: "Copilot Next Edit", value: s("github.copilot.nextEditSuggestions.enabled") },
      { key: "CSpell", value: s("cSpell.userWords") },
      { key: "Code Runner", value: s("code-runner.runInTerminal") },
      { key: "Claude Code Location", value: s("claudeCode.preferredLocation") },
    ],
  },
];
