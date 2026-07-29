import { BookOpen } from "lucide-react";
import Heading from "@/components/common/Heading";
import EmptyState from "@/components/common/EmptyState";

export default function BooksPage() {
  return (
    <main className="w-full h-full px-4 py-8">
      <Heading
        hint="reading list 📚"
        title="Books"
        description="Books that shaped my thinking."
      />

      <EmptyState
        icon={BookOpen}
        message="I haven't started reading books yet. This section will be updated once I dive into some good reads."
      />
    </main>
  );
}
