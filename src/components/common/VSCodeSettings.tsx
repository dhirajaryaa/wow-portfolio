import type { VSCodeGroup } from "@/config/vscode";

function VSCodeSettings({ groups }: { groups: VSCodeGroup[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
      {groups.map((group) => {
        const Icon = group.icon;
        return (
          <div
            key={group.title}
            className="rounded-lg border bg-card p-4 space-y-3"
          >
            <div className="flex items-center gap-2">
              <Icon className="size-4 text-muted-foreground/50" />
              <h3 className="text-sm font-semibold">{group.title}</h3>
            </div>
            <div className="space-y-1">
              {group.settings.map((s) => (
                <div
                  key={s.key}
                  className="flex items-center justify-between gap-2 text-xs"
                >
                  <span className="text-muted-foreground/60">{s.key}</span>
                  <span className="text-muted-foreground/80 font-mono text-[11px] truncate max-w-[60%] text-right">
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default VSCodeSettings;
