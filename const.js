export const server =
  process.env.SERVER || process.env.NODE_ENV === "production"
    ? "https://crud-server-iamerfan.vercel.app/api/items"
    : "http://localhost:3001/api/items";
