import { Quote } from "lucide-react"
import { quotes } from "@/config/quotes"

function Quotes() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const showQuote = quotes[randomIndex];
    return (
        <section className="w-full h-full px-4 my-18">
            <div className="bg-muted p-8 relative w-full h-full rounded-2xl border">
                <Quote className="absolute top-4 left-4 text-foreground/20"
                    fill="currentColor"
                    stroke='none'
                    size={100} />
                <div className="flex flex-col gap-2">
                    <p className="text-lg text-foreground/50 wrap-break-word">"{showQuote.quote}"</p>
                    <p className="text-lg font-medium text-right text-foreground">— {showQuote.author}</p>
                </div>
            </div>
        </section>
    )
}

export default Quotes