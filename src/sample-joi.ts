import Joi from "joi";

export type Metadata = {
  name: string;
};

export function parseMetadata(metadata: unknown): Metadata {
  const metadataSchema = Joi.object<Metadata>({
    name: Joi.string(),
  });

  const { value } = metadataSchema.validate(metadata);

  return value;
}
