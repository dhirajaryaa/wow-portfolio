function SectionHeading({ subtitle, title }: { subtitle: string, title: string }) {
    return (
        <div className="space-y-0.5">
            <p className="text-muted-foreground/40 font-mono text-xs tracking-wider uppercase">
                {subtitle}
            </p>
            <h2 className="text-xl sm:text-2xl font-medium tracking-tight">{title}</h2>
        </div>
    )
}

export default SectionHeading
