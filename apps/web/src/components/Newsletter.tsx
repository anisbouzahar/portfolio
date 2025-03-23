'use client';

import { motion } from 'motion/react';
import { useActionState } from 'react';
import { Button } from '@repo/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@repo/ui/dialog';
import { Input } from '@repo/ui/input';
import { Label } from '@repo/ui/label';
import { transition, variants } from './motion/preset';

type FormStatus = {
    message: string | null;
    success: boolean;
};

async function subscribe(
    prevState: FormStatus,
    formData: FormData
): Promise<FormStatus> {
    const name = formData.get('name');
    const email = formData.get('email');

    const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
    });

    const data = await res.json();

    if (res.ok) {
        return { success: true, message: 'You’re subscribed 🎉' };
    } else {
        return { success: false, message: data?.error || 'Something went wrong' };
    }
}

export default function Newsletter() {
    const [state, formAction, isPending] = useActionState<FormStatus, FormData>(
        subscribe,
        { success: false, message: null }
    );

    return (
        <motion.div transition={transition} variants={variants}>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Join newsletter</Button>
                </DialogTrigger>
                <DialogContent className="!max-w-xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">Stay updated 🚀</DialogTitle>
                        <DialogDescription>
                            Subscribe to get notified when I launch!
                        </DialogDescription>
                    </DialogHeader>

                    <form action={formAction} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name"   className="after:content-['*'] after:ml-1 after:text-red-500"
                            >
                                Full name
                            </Label>
                            <Input type="text" name="name" id="name" required  />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email" className="after:content-['*'] after:ml-1 after:text-red-500">
                                Email
                            </Label>
                            <Input type="email" name="email" id="email" required  />
                            <p className="text-sm text-muted-foreground">
                                I’ll only use your email to notify you about the launch. No spam, ever.
                            </p>
                        </div>


                        {state.message && (
                            <p
                                className={`text-sm ${
                                    state.success ? 'text-green-600' : 'text-red-600'
                                }`}
                            >
                                {state.message}
                            </p>
                        )}

                        <DialogFooter>
                            <Button type="submit" disabled={isPending}>
                                {isPending ? 'Submitting...' : 'Subscribe'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </motion.div>
    );
}
