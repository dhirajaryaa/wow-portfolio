import { BookOpen } from "lucide-react";
import Heading from "@/components/common/Heading";
import Card from "@/components/common/Card";
import GoBackButton from "@/components/common/GoBackButton";
import { Metadata } from "next";
import { getMetaData } from "@/config/meta";

export const metadata: Metadata = getMetaData("/books");

const books = [
  {
    title: "Ikigai",
    author: "Héctor García & Francesc Miralles",
    description:
      "The Japanese secret to a long and happy life. A journey into the Okinawan philosophy of finding purpose and joy in everyday living.",
    status: "started",
  },
];

const statusStyles: Record<string, string> = {
  completed: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  ongoing: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
  started: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
};

export default function BooksPage() {
  return (
    <main className="w-full h-full px-4 py-8">
      <GoBackButton />
      <Heading
        hint="reading list 📚"
        title="Books"
        description="Books that shaped my thinking."
      />

      <div className="flex flex-col gap-3">
        {books.map((book, idx) => (
          <Card key={idx} className="flex items-center gap-3">
            <BookOpen className="size-5 shrink-0 text-muted-foreground/30" />
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{book.title}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded border shrink-0 ${statusStyles[book.status] || ""}`}>
                  {book.status}
                </span>
              </div>
              {book.author && (
                <span className="text-xs text-muted-foreground/40">by {book.author}</span>
              )}
              <span className="text-xs text-muted-foreground/50 mt-0.5">{book.description}</span>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
