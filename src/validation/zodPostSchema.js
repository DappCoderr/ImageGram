import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/jpg",
];

export const zodPostSchema = z.object({
  caption: z.string().min(3, { message: "Caption is requires" }),
  image: z
    .any()
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.type),
      ".jpg, .png, .jpeg and .webp files are accepted"
    ),
});
