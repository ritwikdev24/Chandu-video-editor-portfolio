import { pgTable, serial, text, timestamp, integer, boolean } from "drizzle-orm/pg-core";

export const portfolioVideos = pgTable("portfolio_videos", {
  id: serial().primaryKey(),
  title: text().notNull(),
  category: text().notNull(),
  description: text().notNull().default(""),
  youtubeUrl: text("youtube_url").notNull().default(""),
  thumbnailUrl: text("thumbnail_url").notNull().default(""),
  featured: boolean().notNull().default(false),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const testimonials = pgTable("testimonials", {
  id: serial().primaryKey(),
  name: text().notNull(),
  role: text().notNull().default(""),
  company: text().notNull().default(""),
  quote: text().notNull(),
  avatarUrl: text("avatar_url").notNull().default(""),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial().primaryKey(),
  name: text().notNull(),
  email: text().notNull(),
  message: text().notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  read: boolean().notNull().default(false),
});

export const adminUsers = pgTable("admin_users", {
  id: serial().primaryKey(),
  username: text().notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});
