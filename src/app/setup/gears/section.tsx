import { ArrowUpRight } from "lucide-react";

function Section({ title, gears }: any) {
  return (
    <div className="space-y-4 mt-8">
      <h2 className="text-xl font-semibold my-4">{title}</h2>
      {gears.map((item: any, idx: number) => (
        <div
          key={idx}
          className="flex items-center gap-2 text-muted-foreground"
        >
          <Button
            type="button"
            variant="outline"
            size="icon-sm"
            className={"size-7"}
          >
            <item.icon />
          </Button>
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base flex gap-2 item-center"
            >
              {item.name} <ArrowUpRight className="size-4 mt-1" />
            </a>
          ) : (
            <p className="text-base">{item.name}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Section;
