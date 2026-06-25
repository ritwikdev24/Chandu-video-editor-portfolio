import type { Config } from "@netlify/functions";
import { db } from "../../db/index.js";
import { contactMessages } from "../../db/schema.js";
import { desc } from "drizzle-orm";

export default async (req: Request) => {
  if (req.method === "GET") {
    try {
      const messages = await db
        .select()
        .from(contactMessages)
        .orderBy(desc(contactMessages.createdAt));
      return Response.json(messages);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
      return Response.json({ error: "Failed to fetch messages" }, { status: 500 });
    }
  }
  return new Response("Method not allowed", { status: 405 });
};

export const config: Config = {
  path: "/api/admin/messages",
};
