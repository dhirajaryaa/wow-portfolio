import { cn } from '@/lib/utils'
import Image from 'next/image'

function SkillBadge({ icon, name, className, iconClassName }) {
    return (
        <div
            className={cn("inline-flex gap-1 bg-muted text-foreground px-2 rounded border border-foreground/50 border-dashed py-0.5", className)}
        >
            <Image
                src={icon}
                alt={name}
                width={14}
                height={14}
                className={iconClassName}
            />
            <p className=" ml-1 text-[13px]">{name}</p>
        </div>
    )
}

export { SkillBadge }
