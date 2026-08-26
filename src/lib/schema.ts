import { z } from "zod";

export const ContactSchema = z.object({
    name: z.string().min(2, {
        message: 'Name must be at least 2 characters.',
    }),
    email: z.string().email({
        message: 'Please enter a valid email address.',
    }),
    phone: z
        .string()
        .optional()
        .refine(
            (val) => !val || /^[\+]?[1-9][\d]{9,15}$/.test(val),
            { message: 'Please enter a valid phone number.' }
        ),
    message: z
        .string()
        .min(10, {
            message: 'Message must be at least 10 characters.',
        })
        .max(500, {
            message: 'Message must not exceed 500 characters.',
        }),
});