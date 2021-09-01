import yup from "yup";

function createSchema() {
  const metadataSchema = yup.object({
    name: yup.string().required(),
  });

  return metadataSchema;
}

export type Metadata = yup.Asserts<ReturnType<typeof createSchema>>;

export function parseMetadata(metadata: unknown): Metadata {
  const metadataSchema = yup.object({
    name: yup.string().required(),
  });

  const value = metadataSchema.validateSync(metadata);

  return value;
}
