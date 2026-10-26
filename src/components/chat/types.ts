export interface ChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  createdAt: number;
  followups?: string[];
  isError?: boolean;
}

export interface ChatRequest {
  messages: Array<{
    role: "user" | "assistant" | "system";
    content: string;
  }>;
}
