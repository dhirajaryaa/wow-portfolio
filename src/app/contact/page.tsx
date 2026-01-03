import Heading from "@/components/common/Heading";
import ContactForm from "@/components/contact/ContactForm";
import { getMetaData } from "@/config/meta";
import { profileInfo } from "@/config/profile";
import { Metadata } from "next";

export const metadata: Metadata = getMetaData("/contact");

function ContactPage() {
  return (
    <main className="w-full h-full p-4">
      {/* heading  */}
      <Heading
        title="Get in Touch"
        description="Get in touch for collaborations, projects, or opportunities."
      />
      {/* link  */}
      <section className="w-full py-8 gap-4 flex items-center justify-evenly flex-col sm:flex-row">
        {profileInfo.contact.map((contact, index) => (
          <div
            key={index}
            className="w-full flex items-center justify-center gap-2 border px-4 py-2  rounded-lg bg-accent/60"
          >
            <contact.icon size={18} />
            <span className="text-sm sm:text-base">{contact.value}</span>
          </div>
        ))}
      </section>
      {/* contact form  */}
      <ContactForm />
    </main>
  );
}

export default ContactPage;
