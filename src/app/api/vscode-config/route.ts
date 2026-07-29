import { rawConfig } from "@/config/vscode";

export async function GET() {
  const json = JSON.stringify(rawConfig, null, 2);
  return new Response(json, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Disposition": 'attachment; filename="vscode-settings.json"',
    },
  });
}
