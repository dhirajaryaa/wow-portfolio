function Section({ title, hintText, children, className, ...prams }) {
  return (
    <section
      id="project"
      className={`container flex flex-col gap-2 my-18 ${className}`}
      {...prams}
    >
      <div className="space-y-1" id="section-title">
        <p className="text-foreground/30 font-mono text-sm">{hintText}</p>
        <h2 className="text-2xl font-bold tracking-wide capitalize">{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default Section;
