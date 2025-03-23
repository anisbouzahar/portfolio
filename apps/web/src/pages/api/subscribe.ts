import type { APIRoute } from 'astro';
import { SubscriberSchema } from '@repo/validators/subscriber';
import {getSecret} from "astro:env/server";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
    try {
        const body = await request.json();

        const result = SubscriberSchema.safeParse(body);

        if (!result.success) {
            return new Response(
                JSON.stringify({ error: 'Invalid input', details: result.error.flatten() }),
                { status: 400 }
            );
        }

        const { email, name } = result.data;

        const API_URL = import.meta.env.PUBLIC_API_URL;
        const API_SECRET =  getSecret('SECRET_API');

        if (!API_SECRET) {
            return new Response(JSON.stringify({ error: 'API secret not available' }), { status: 500 });
        }

        const mutation = `
  mutation CreateSubscriber($email: String!, $name: String!) {
    createSubscriber(data: {
      email: $email,
      name: $name
    }) {
      email
      name
    }
  }
`;
        console.log('secret!',API_SECRET)

        const res = await fetch(`${API_URL}/api/graphql`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `api API-Key ${API_SECRET}`,
            },
            body: JSON.stringify({
                query: mutation,
                variables: {
                    email,
                    name,
                },
            }),
        });

        const json = await res.json();

        if (json.errors) {
            return new Response(JSON.stringify({ error: json.errors[0].message }), {
                status: 500,
            });
        }

        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({ error: 'Internal server error' }), { status: 500 });
    }
};
