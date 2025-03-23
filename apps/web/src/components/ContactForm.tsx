"use client";

import {Label} from "@repo/ui/label";
import {Input} from "@repo/ui/input";
import { cn } from "./../lib/utils";
import {Button} from "@repo/ui/button";
import {Textarea} from "@repo/ui/textarea";
import {useActionState} from "react";
type FormStatus = {
    message: string | null;
    success: boolean;
};

async function submitContact(
    prevState: FormStatus,
    formData: FormData
): Promise<FormStatus> {
    console.log(formData);
    const payload = {
        firstname: formData.get('firstname'),
        lastname: formData.get('lastname'),
        email: formData.get('email'),
        reason: formData.get('reason'),
        message: formData.get('message'),
    };

    const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (res.ok) {
        return { success: true, message: 'Message sent successfully 🎉' };
    } else {
        return {
            success: false,
            message: data?.error || 'Something went wrong. Please try again.',
        };
    }
}


export function ContactForm() {
    const [state, formAction, isPending] = useActionState<FormStatus, FormData>(
        submitContact,
        { success: false, message: null }
    );



  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white h-full md:h-auto p-4 md:rounded-2xl md:p-8  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 ">
      <h2 className="text-xl font-bold text-neutral-800 ">
        Get In touch
      </h2>

        <form className="mt-8" action={formAction}>
            <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                <LabelInputContainer>
                    <Label htmlFor="firstname">First name</Label>
                    <Input id="firstname"
                           name="firstname" placeholder="Jhon" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                    <Label htmlFor="lastname">Last name</Label>
                    <Input id="lastname"
                           name="lastname" placeholder="Doe" type="text" />
                </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email"
                       name="email" placeholder="your@email.com" type="email" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="reason">Reason for contact</Label>
                <Input id="reason"
                       name="reason" placeholder="Collaboration, Support, Feedback..." type="text" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    rows={5}
                />
            </LabelInputContainer>
            {state.message && (
                <p
                    className={`text-sm ${
                        state.success ? 'text-green-600' : 'text-red-600'
                    }`}
                >
                    {state.message}
                </p>
            )}

            <Button
                className="w-full"
                type="submit"

            >
                Send Message
            </Button>


        </form>
    </div>
  );
}

const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};