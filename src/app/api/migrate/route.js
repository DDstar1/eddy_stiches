import { migrate } from "../migrations";

export default async function handler(req, res) {
  try {
    await migrate();
    res.status(200).json({ message: "Migration successful" });
  } catch (error) {
    res.status(500).json({ error: "Migration failed", details: error.message });
  }
}
