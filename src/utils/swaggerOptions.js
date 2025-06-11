import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const options = {
  failOnErrors: true,
  definition: {
    openapi: "3.0.0",
    info: {
      title: "ImageGram API",
      version: "1.0.0",
      description: "API documentation for the ImageGram app",
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1",
      },
    ],
  },
  apis: [path.resolve(__dirname, "../routers/V1/*.js")],
};
