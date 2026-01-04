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
import { useRef, useState } from "react";
import { toast } from "sonner";
import { sendMessage } from "@/action/contact";
import { ContactSchema } from "@/lib/schema";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

export interface ContactFormProps  {
  name: string;
  phone: string;
  email: string;
  message: string
  submitted?: string
};


const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  const { register, formState: { errors }, reset, handleSubmit } = useForm<ContactFormProps>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    resolver: zodResolver(ContactSchema),
  })

  const handleFormSubmit = async (data: ContactFormProps, event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const res = await sendMessage({ ...data, submitted: new Date().toLocaleString() });

      if (!res.success) {
        throw new Error(res.error);
      };
      toast.success(res.message, {
        description: "Thank you for reaching out. I will get back to you soon.👋",
      });
      formRef.current?.reset();
    } catch (error) {
      console.error(`Contact Form Error: ${error.message}`);
      toast.error("Something went wrong. Please try again.⚠️");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="py-8" ref={formRef} onSubmit={handleSubmit(handleFormSubmit)}>
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
                <Input id="name" {...register("name")} placeholder="Suraj Roy" aria-invalid={errors.name ? "true" : "false"} />
                {errors.name && <p className="text-destructive text-xs">{errors.name.message}</p>}
              </Field>
              <Field>
                <FieldLabel htmlFor="phone">Phone No</FieldLabel>
                <Input
                  id="phone"
                  {...register("phone")}
                  placeholder="+91 12xxxxxx90"
                  aria-invalid={errors.phone ? "true" : "false"}
                />
                {errors.phone && <p className="text-destructive text-xs">{errors.phone.message}</p>}
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="email">Email</FieldLabel>
              <Input
                type="email"
                id="email"
                {...register("email")}
                placeholder="suraj@example.com"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
            </Field>
            <Field>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea
                id="message"
                {...register("message")}
                placeholder="I want to hire ..."
                className="h-22"
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && <p className="text-destructive text-xs">{errors.message.message}</p>}
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
