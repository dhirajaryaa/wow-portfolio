/**
 * Generates context-aware, relevant follow-up questions based on what was discussed.
 */
export function generateFollowUps(
  userQuery: string,
  assistantReply: string
): string[] {
  const combined = (userQuery + " " + assistantReply).toLowerCase();

  const questions: string[] = [];

  // Project-specific follow-ups
  if (combined.includes("hackmeet") || combined.includes("webrtc") || combined.includes("socket")) {
    questions.push("How does HackMeet handle WebRTC signaling?");
    questions.push("What were the biggest challenges building HackMeet?");
    questions.push("Tell me about BlogDrop next");
  } else if (combined.includes("blogdrop") || combined.includes("rss") || combined.includes("aggregator")) {
    questions.push("How does BlogDrop extract and clean article metadata?");
    questions.push("What background jobs does BlogDrop run with Inngest?");
    questions.push("Tell me about QueryMate");
  } else if (combined.includes("querymate") || combined.includes("sql") || combined.includes("database")) {
    questions.push("How does QueryMate ensure safe read-only queries?");
    questions.push("Which databases does QueryMate support?");
    questions.push("What other AI projects has Dhiraj built?");
  } else if (combined.includes("smartform") || combined.includes("extension")) {
    questions.push("Which AI models power SmartForm?");
    questions.push("How does SmartForm detect form inputs?");
  }
  // Tech stack & skills
  else if (
    combined.includes("stack") ||
    combined.includes("skills") ||
    combined.includes("technologies") ||
    combined.includes("next.js") ||
    combined.includes("typescript")
  ) {
    questions.push("Which projects use Next.js and Drizzle ORM?");
    questions.push("Does Dhiraj have experience with WebRTC & Socket.IO?");
    questions.push("What developer tools has Dhiraj created?");
  }
  // Tools
  else if (
    combined.includes("tool") ||
    combined.includes("temp mail") ||
    combined.includes("pdf") ||
    combined.includes("compress")
  ) {
    questions.push("How does LowPDF compress files purely in the browser?");
    questions.push("Tell me about PDFAny's 16 operations");
    questions.push("Are Dhiraj's tools free to use?");
  }
  // Contact & hiring
  else if (
    combined.includes("hire") ||
    combined.includes("contact") ||
    combined.includes("work with") ||
    combined.includes("email") ||
    combined.includes("resume")
  ) {
    questions.push("What kinds of projects or roles is Dhiraj seeking?");
    questions.push("Where can I find Dhiraj's GitHub and Telegram?");
    questions.push("What is Dhiraj's primary tech stack?");
  }
  // Bio & self-taught journey
  else if (
    combined.includes("dhiraj") ||
    combined.includes("about") ||
    combined.includes("background") ||
    combined.includes("self-taught")
  ) {
    questions.push("What are Dhiraj's top 3 featured projects?");
    questions.push("What is Dhiraj's engineering philosophy?");
    questions.push("How can I get in touch with Dhiraj?");
  }

  // Fallback defaults if no specific keywords matched
  if (questions.length < 2) {
    const defaults = [
      "Tell me about HackMeet",
      "What are Dhiraj's best projects?",
      "What tech stack does Dhiraj use?",
      "How can I contact Dhiraj?",
    ];
    for (const d of defaults) {
      if (!questions.includes(d) && !userQuery.toLowerCase().includes(d.toLowerCase())) {
        questions.push(d);
      }
      if (questions.length >= 3) break;
    }
  }

  return questions.slice(0, 3);
}
