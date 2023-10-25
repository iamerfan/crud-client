export const server =
  process.env.SERVER || process.env.NODE_ENV === "production"
    ? "https://splendid-hosiery-bass.cyclic.app/api/items"
    : "http://localhost:3001/api/items";
