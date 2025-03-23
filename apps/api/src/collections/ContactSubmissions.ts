import { CollectionConfig } from "payload";
import { ContactSchema } from '@repo/validators/contact';

const ContactSubmissions: CollectionConfig = {
    slug: "contact-submissions",
    access: {
        read:  ({ req: { user } }) => {
            return Boolean(user)
        },
        create: ({ req:{user} }) => {
            return Boolean(user);
        },
    },
    admin: {
        useAsTitle: "email",
    },
    fields: [
        {
            name: "firstname",
            type: "text",
            required: !ContactSchema.shape.firstname.isOptional(),
        },
        {
            name: "lastname",
            type: "text",
            required: !ContactSchema.shape.lastname.isOptional(),
        },
        {
            name: "email",
            type: "email",
            required: !ContactSchema.shape.email.isOptional(),
        },
        {
            name: "reason",
            type: "text",
            required: !ContactSchema.shape.reason.isOptional(),
        },
        {
            name: "message",
            type: "textarea",
            required: !ContactSchema.shape.message.isOptional(),
        },
    ],
};

export default ContactSubmissions;
