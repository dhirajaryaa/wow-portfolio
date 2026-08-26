import { tools } from "@/config/tools";
import { Metadata } from "next";
import { getMetaData } from "@/config/meta";
import Heading from "@/components/common/Heading";
import GoBackButton from "@/components/common/GoBackButton";
import ToolCard from "@/components/tools/ToolCard";

export const metadata: Metadata = getMetaData("/tools");

function ToolsPage() {
  return (
    <main className="w-full h-full px-4 py-8">
      <GoBackButton />
      <Heading
        hint="my dev tools 🛠️"
        title="Tools"
        description="Small, useful web utilities I build and maintain — free to use."
      />

      <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto w-full">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </main>
  );
}

export default ToolsPage;
