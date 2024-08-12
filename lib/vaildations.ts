import { z } from "zod";

export const QuestionSchema = z.object({
  title: z.string().min(10, "Title is too short").max(130, "Title is too long"),
  description: z.string().min(50, "Description is too short"),
  tags: z
    .array(z.string().min(2, "Tag is to short").max(15, "Tag is too long"))
    .min(1, "please select at least one tag")
    .max(3, "You can only select up to tags"),
});

export const AnswerSchema = z.object({
  answer: z
    .string()
    .min(50, "Answer is too short")
    .max(3000, "Answer is to long"),
});

export const ProfileSchema = z.object({
  name: z.string().min(5, "Name is too short").max(30, "Name is too long"),
  username: z
    .string()
    .min(3, "Username is to short")
    .max(20, "Username is to long"),
  bio: z.string().min(10).max(250, "Bio is too long"),
  portfolioWebsite: z.string().url(),
  location: z
    .string()
    .min(2, "Location is to short")
    .max(20, "Location is to long"),
});
