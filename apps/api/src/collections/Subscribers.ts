import { CollectionConfig } from 'payload';
import { SubscriberSchema } from '@repo/validators/subscriber';

const Subscribers: CollectionConfig = {
  slug: 'subscribers',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read:  ({ req: { user } }) => {
      return Boolean(user)
    },
    create: ({ req:{user} }) => {
      return Boolean(user);
    },
  },
  fields: [
    {
      name: 'email',
      type: 'email',
      required: !SubscriberSchema.shape.email.isOptional(),
      unique: true,
    },
    {
      name: 'name',
      type: 'text',
      required: !SubscriberSchema.shape.name.isOptional(),
    },
    {
      name: 'subscribedAt',
      type: 'date',
      defaultValue: () => new Date(),
      admin: { readOnly: true },
    },
  ],
};

export default Subscribers;
