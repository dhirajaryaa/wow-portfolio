"use server";

import { ContactFormProps } from "@/components/contact/ContactForm";
import { getClientIp } from "@/lib/ip";
import { ContactSchema } from "@/lib/schema";
import { RateLimiterMemory } from "rate-limiter-flexible";
import z from "zod";


interface Response {
    success: boolean;
    message?: string;
    error?: string;
};


const rateLimiter = new RateLimiterMemory({
    points: 5,
    duration: 60,
});


const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const telegramChatId = process.env.TELEGRAM_CHAT_ID;
const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;


export const sendMessage = async (data: ContactFormProps): Promise<Response> => {
    try {
        // check data 
        const valid = ContactSchema.safeParse(data);
        if (!valid.success) {
            return {
                success: false,
                message: "Something went wrong. Please try again.⚠️",
                error: z.prettifyError(valid.error),
            };
        };

        // parse message 
        const message = `
📩 *New Contact Enquiry*

👤 *Name:* ${data.name}
📞 *Phone:* ${data.phone}
📧 *Email:* ${data.email}

💬 *Message:*
${data.message.trim()}

-----------------------------------------------
🗓️ *Submitted:* ${data.submitted}
        `;

        // rate limiter 
        const ip = await getClientIp();
        await rateLimiter.consume(ip);
        // send on telegram 
        const response = await fetch(telegramApiUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: telegramChatId,
                text: message,
                parse_mode: 'Markdown',
            }),
        });

        // when error 
        if (!response.ok) {
            return {
                success: false,
                error: "Something went wrong. Please try again.⚠️",
            };
        };
        // when succuss 
        return {
            success: true,
            message: "Message sent successfully!🎉",
        };
    } catch (error) {
        return {
            success: false,
            error: "Too many requests. Please try again later.⚠️"
        };
    }
}
