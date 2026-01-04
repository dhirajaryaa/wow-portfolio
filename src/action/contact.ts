"use server";

import { NextRequest } from "next/server";

interface Response {
    success: boolean;
    message: string;
    error?: string;
};

const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const telegramChatId = process.env.TELEGRAM_CHAT_ID;
const telegramApiUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;


export const sendMessage = async (formData: FormData): Promise<Response> => {

    // parse message 
    const message = `
📩 *New Contact Enquiry*

👤 *Name:* ${formData.get("name")}
📞 *Phone:* ${formData.get("phone")}
📧 *Email:* ${formData.get("email")}

💬 *Message:*
${formData.get("message").toString().trim()}

-----------------------------------------------
🗓️ *Submitted:* ${formData.get("submitted")}
`;

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
            message: "Something went wrong. Please try again.⚠️",
            error: await response.text(),
        };
    };
    // when succuss 
    return {
        success: true,
        message: "Message sent successfully!🎉",
    };
};