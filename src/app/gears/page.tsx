import { myGadgets, myPc, myWebExtensions } from "@/config/gears";
import { Metadata } from "next";
import { getMetaData } from "@/config/meta";
import GearsSection from "@/components/common/GearsSection";

export const metadata: Metadata = getMetaData("/gears");

function GearsPage() {
  return (
    <main className="w-full h-full px-4 py-8">
      <Heading
        hint="my setup ⚙️"
        title="Gears"
        description="The tools and tech that help me bring my ideas to life."
      />
      <section className="w-full py-8">
        <GearsSection title="PC" items={myPc} />
        <GearsSection title="Gadgets" items={myGadgets} />
        <GearsSection title="Web Extensions" items={myWebExtensions} />
      </section>
    </main>
  );
}

export default GearsPage;
