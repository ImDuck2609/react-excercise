import express from "express";
import pkg from "pg";

const { Pool } = pkg;
const app = express();
const port = process.env.PORT || 5000;

const pool = new Pool({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "mocktest",
  port: 5432,
});

app.get("/health", async (req, res) => {
  try {
    const dbRes = await pool.query("SELECT NOW()");
    res.status(200).json({ status: "ok", db: dbRes.rows[0] });
  } catch (err) {
    res.status(500).json({ status: "error", message: err.message });
  }
});

app.listen(port, () => console.log(`✅ Server running on port ${port}`));
