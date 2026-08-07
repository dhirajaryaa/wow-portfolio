import { myGadgets, myPc, myWebExtensions } from "@/config/gears";
import { Metadata } from "next";
import { getMetaData } from "@/config/meta";
import GearsSection from "@/components/common/GearsSection";
import Heading from "@/components/common/Heading";
import GoBackButton from "@/components/common/GoBackButton";

export const metadata: Metadata = getMetaData("/gears");

function GearsPage() {
  return (
    <main className="w-full h-full px-4 py-8">
      <GoBackButton />
      <Heading
        hint="my setup ⚙️"
        title="Gears"
        description="The tools and tech that help me bring my ideas to life."
      />
      <section className="w-full">
        <GearsSection title="PC" items={myPc} />
        <GearsSection title="Gadgets" items={myGadgets} />
        <GearsSection title="Web Extensions" items={myWebExtensions} />
      </section>
    </main>
  );
}

export default GearsPage;
