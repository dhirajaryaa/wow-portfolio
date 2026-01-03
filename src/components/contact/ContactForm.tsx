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

const ContactForm = () => {
  return (
    <form className="py-8">
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
                <Input id="name" placeholder="Suraj Roy" required />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  type="email"
                  id="email"
                  placeholder="suraj@example.com"
                  required
                />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <Textarea
                id="message"
                placeholder="I want to hire ..."
                required
                className="h-22"
              />
            </Field>
            <Field orientation="horizontal">
              <Button type="submit" className="w-full">
                {false ? "Sending..." : "Send Message"}
              </Button>
            </Field>
          </FieldGroup>
        </FieldSet>
      </FieldGroup>
    </form>
  );
};

export default ContactForm;
