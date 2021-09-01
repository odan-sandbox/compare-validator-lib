import { z } from "zod";

function createSchema() {
  const metadataSchema = z.object({
    name: z.string(),
  });

  return metadataSchema;
}

export type Metadata = z.infer<ReturnType<typeof createSchema>>;

export function parseMetadata(metadata: unknown): Metadata {
  const metadataSchema = z.object({
    name: z.string(),
  });

  return metadataSchema.parse(metadata);
}
