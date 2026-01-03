import { myGadgets, myPc, myWebExtensions } from "@/data/devtool/gears";
import Section from "./section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gears",
  description:
    "Explore the PC setup, gadgets, and web extensions I use daily as a full-stack developer to build fast, modern web applications.",
};

function page() {
  return (
    <main className="w-full h-full p-4">
      {/* heading  */}
      <section className="w-full text-center py-16 border-b">
        <h1 className="text-4xl sm:text-5xl font-semibold">Gears</h1>
        <p className="text-muted-foreground text-sm sm:text-lg">
          The tools and tech that help me bring my ideas to life.
        </p>
      </section>
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
