import Heading from "@/components/common/Heading";
import Card from "@/components/common/Card";
import ContactForm from "@/components/contact/ContactForm";
import { getMetaData } from "@/config/meta";
import { profileInfo } from "@/config/profile";
import { Metadata } from "next";

export const metadata: Metadata = getMetaData("/contact");

function ContactPage() {
  return (
    <main className="w-full h-full px-4 py-8">
      <Heading
        title="Get in Touch"
        description="Get in touch for collaborations, projects, or opportunities."
      />
      <section className="w-full py-8 gap-4 flex items-center justify-evenly flex-col sm:flex-row">
        {profileInfo.contact.map((contact, index) => (
          <Card
            key={index}
            icon={contact.icon}
            title={contact.value}
            variant="accent"
            className="w-full justify-center gap-2 px-4 py-2"
          />
        ))}
      </section>
      <ContactForm />
    </main>
  );
}

export default ContactPage;
