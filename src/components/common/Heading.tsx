import React from "react";

interface HeadingProps {
  title: string;
  description: string;
}

function Heading({ title, description }: HeadingProps): React.ReactElement {
  return (
    <section className="w-full text-center sm:py-16 py-10 border-b space-y-1">
      <h1 className="text-4xl sm:text-5xl font-semibold">{title}</h1>
      <p className="text-muted-foreground text-sm sm:text-lg">{description}</p>
    </section>
  );
}

export default Heading;
