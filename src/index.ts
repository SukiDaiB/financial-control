import pool from "./dbconnection";
import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ status: 'ok' })
})
app.listen(3000, () => {
  console.log('API rodando na porta 3000')
})

//Database connection
async function main() {
  const result = await pool.query("SELECT NOW()");
  console.log("DB connected at:", result.rows[0]);
}
main();


app.get("/incomes", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM transaction_types");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

