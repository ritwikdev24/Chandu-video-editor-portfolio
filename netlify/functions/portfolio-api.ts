import type { Config } from "@netlify/functions";
import { db } from "../../db/index.js";
import { portfolioVideos } from "../../db/schema.js";
import { eq, asc } from "drizzle-orm";

export default async (req: Request) => {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (req.method === "GET") {
    try {
      const videos = await db
        .select()
        .from(portfolioVideos)
        .orderBy(asc(portfolioVideos.sortOrder));
      return Response.json(videos);
    } catch (error) {
      return Response.json({ error: "Failed to fetch videos" }, { status: 500 });
    }
  }

  if (req.method === "POST") {
    try {
      const body = await req.json();
      const [video] = await db.insert(portfolioVideos).values(body).returning();
      return Response.json(video, { status: 201 });
    } catch (error) {
      return Response.json({ error: "Failed to create video" }, { status: 500 });
    }
  }

  if (req.method === "PUT" && id) {
    try {
      const body = await req.json();
      const [video] = await db
        .update(portfolioVideos)
        .set({ ...body, updatedAt: new Date() })
        .where(eq(portfolioVideos.id, parseInt(id)))
        .returning();
      return Response.json(video);
    } catch (error) {
      return Response.json({ error: "Failed to update video" }, { status: 500 });
    }
  }

  if (req.method === "DELETE" && id) {
    try {
      await db.delete(portfolioVideos).where(eq(portfolioVideos.id, parseInt(id)));
      return Response.json({ success: true });
    } catch (error) {
      return Response.json({ error: "Failed to delete video" }, { status: 500 });
    }
  }

  return new Response("Method not allowed", { status: 405 });
};

export const config: Config = {
  path: "/api/portfolio",
};
