import type { APIRoute } from "astro";
import { ContactSchema } from "@repo/validators/contact";
import { getSecret } from "astro:env/server";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const result = ContactSchema.safeParse(body);

    if (!result.success) {
      return new Response(
        JSON.stringify({
          error: "Invalid input",
          details: result.error.flatten(),
        }),
        { status: 400 },
      );
    }

    const { firstname, lastname, email, reason, message } = result.data;

    const API_URL = import.meta.env.PUBLIC_API_URL;
    const API_SECRET = getSecret("SECRET_API");

    if (!API_SECRET) {
      return new Response(
        JSON.stringify({ error: "API secret not available" }),
        { status: 500 },
      );
    }

    const mutation = `
     mutation CreateContactSubmission(
  $firstname: String!,
  $lastname: String!,
  $email: String!,
  $reason: String,
  $message: String
) {
  createContactSubmission(data: {
    firstname: $firstname,
    lastname: $lastname,
    email: $email,
    reason: $reason,
    message: $message
  }) {
    id
  }
}

    `;

    const variables = {
      firstname,
      lastname,
      email,
      reason,
      message,
    };

    const res = await fetch(`${API_URL}/api/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `api API-Key ${API_SECRET}`,
      },
      body: JSON.stringify({ query: mutation, variables }),
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
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
};
