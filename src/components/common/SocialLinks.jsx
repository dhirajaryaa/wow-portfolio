import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
function SocialLinks({ socialLinks, className }) {
  return (
    <div className={cn("flex flex-wrap text-foreground/40 gap-3 mt-8 ", className)}>
      {socialLinks?.map((link, idx) => (
        <Button variant={"secondary"} size="sm" key={idx} asChild className={"hover:-translate-y-0.5 duration-150 transition-all"}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {<link.icon />}
            <span className="capitalize font-normal">{link.label}</span>
          </a>
        </Button>
      ))}
    </div>
  )
}

export default SocialLinks