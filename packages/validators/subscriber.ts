import { z } from 'zod';

export const SubscriberSchema = z.object({
    id: z.string().optional(),
    email: z.string().email(),
    name: z.string(),
    subscribedAt: z.string().optional(),
});

export type Subscriber = z.infer<typeof SubscriberSchema>;
