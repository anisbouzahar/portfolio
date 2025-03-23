import { z } from 'zod';

export const ContactSchema = z.object({
    firstname: z.string().min(1, 'First name is required'),
    lastname: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email'),
    reason: z.string().optional(),
    message: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof ContactSchema>;
