import { vscodeGroups } from "@/config/vscode";
import { Metadata } from "next";
import { getMetaData } from "@/config/meta";
import Heading from "@/components/common/Heading";
import VSCodeSettings from "@/components/common/VSCodeSettings";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import GoBackButton from "@/components/common/GoBackButton";

export const metadata: Metadata = getMetaData("/setup");

function SetupPage() {
  return (
    <main className="w-full h-full px-4 py-8">
      <GoBackButton />
      <Heading
        hint="dev environment 🖥️"
        title="Setup"
        description="My VSCode configuration and dev environment preferences."
      />
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-muted-foreground/50">Settings synced from local VSCode config</p>
        <a href="/api/vscode-config" download>
          <Button variant="outline" size="sm" className="gap-1.5">
            <Download className="size-3.5" /> Download Full Config
          </Button>
        </a>
      </div>
      <VSCodeSettings groups={vscodeGroups} />
    </main>
  );
}

export default SetupPage;
