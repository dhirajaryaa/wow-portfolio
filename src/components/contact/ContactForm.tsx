"use client";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { sendMessage } from "@/action/contact";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // get data
    const formData = new FormData(event.currentTarget);
    formData.append("submitted", new Date().toLocaleString());
    try {
      setIsLoading(true);
      const res = await sendMessage(formData);
      console.log(res);
      
      toast.success("Message sent successfully!🎉", {
        description: new Date().toUTCString(),
      });
    } catch (error) {
      console.error(`Contact Form Error: ${error}`);
      toast.error("Something went wrong. Please try again.⚠️");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="py-8" onSubmit={handleFormSubmit}>
      <FieldGroup>
        <FieldSet>
          <FieldLegend>Send me a message</FieldLegend>
          <FieldDescription>
            Please fill in the required fields with correct information to
            ensure a prompt response.
          </FieldDescription>
          <FieldGroup>
            <div className="grid grid-col-1 sm:grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="name">Name</FieldLabel>
                <Input id="name" name="name" placeholder="Suraj Roy" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="phone">Phone No</FieldLabel>
                <Input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+91 12xxxxxx90"
                  required
                />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="suraj@example.com"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea
                id="message"
                name="message"
                placeholder="I want to hire ..."
                required
                className="h-22"
              />
            </Field>
            <Field orientation="horizontal">
              <Button type="submit" className="w-full h-10">
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </form>
  );
};

export default ContactForm;
