import Ajv, { JSONSchemaType } from "ajv";

export type Metadata = {
  name: string;
};

export function parseMetadata(metadata: unknown): Metadata {
  const metadataSchema: JSONSchemaType<Metadata> = {
    type: "object",
    properties: {
      name: { type: "string" },
    },
    required: ["name"],
    additionalProperties: false,
  };

  const ajv = new Ajv();
  const validate = ajv.compile(metadataSchema);

  if (validate(metadata)) {
    return metadata;
  }

  throw new Error();
}
