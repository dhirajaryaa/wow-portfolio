import { myGadgets, myPc, myWebExtensions } from "@/config/gears";
import Section from "./section";
import { Metadata } from "next";
import { getMetaData } from "@/config/meta";
import Heading from "@/components/common/Heading";

export const metadata: Metadata = getMetaData("/gears");

function page() {
  return (
    <main className="w-full h-full p-4">
      {/* heading  */}
      <Heading
        title="Gears"
        description="The tools and tech that help me bring my ideas to life."
      />
      {/* content  */}
      <section className="w-full py-8">
        {/* pc section  */}
        <Section title="PC" gears={myPc} />
        {/* Gadgets section  */}
        <Section title="Gadgets" gears={myGadgets} />
        {/* web Extension section  */}
        <Section title="Web Extensions" gears={myWebExtensions} />
      </section>
    </main>
  );
}

export default page;
