import type { CollectionConfig } from 'payload'

export const Api: CollectionConfig = {
    slug: 'api',
    admin: {
        useAsTitle: 'label',
    },
    fields: [
        {
            name: 'label',
            type: 'text',
            required: true,
        },
        {
            name:'Domain',
            type: 'text',
            required: true,

        }
    ],
    auth: {
        useAPIKey: true,
        disableLocalStrategy: true,
    },

}