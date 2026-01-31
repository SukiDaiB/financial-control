import express from 'express'
import pool from './dbconnection'


const app = express()
app.use(express.json())
app.get('/', (req, res) => {
  res.json({ status: 'ok' })
})
app.listen(3000, () => {
  console.log('API rodando na porta 3000')
})
app.get("/")


  //TRANSACTIONS
//GET transaction WHERE type = INCOME
app.get("/get_income", async (req, res) => {
  try {
    const result = await pool.query(/*sql*/`select
	transactions.description as description,
	transactions.amount as amount,
	categories.name AS category,
	frequencies.name AS frequency,
	transaction_types.name AS transaction_type,
	transactions.transaction_date,
	transactions.created_at 
FROM transactions
LEFT JOIN categories
	ON transactions.category_id = categories.id
LEFT JOIN frequencies
	ON transactions.frequency_id = frequencies.id
LEFT JOIN transaction_types
	ON transactions.transaction_type_id = transaction_types.id
where transactions.transaction_type_id = '1'`);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

//GET transaction WHERE type = EXPENSE
app.get("/get_expense", async (req, res) => {
  try {
    const result = await pool.query(/*sql*/`select
	transactions.description as description,
	transactions.amount as amount,
	categories.name AS category,
	frequencies.name AS frequency,
	transaction_types.name AS transaction_type,
	transactions.transaction_date,
	transactions.created_at 
FROM transactions
LEFT JOIN categories
	ON transactions.category_id = categories.id
LEFT JOIN frequencies
	ON transactions.frequency_id = frequencies.id
LEFT JOIN transaction_types
	ON transactions.transaction_type_id = transaction_types.id
where transactions.transaction_type_id = '2'`);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});

  //CATEGORIES
//GET categories
app.get("/get_categories", async (req, res) => {
  try {
    const result = await pool.query(/*sql*/`select categories.name from categories`);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});
//POST categories
app.get("/post_categories", async (req, res) => {
  try {
    const result = await pool.query(/*sql*/`INSERT INTO categories (name) values ('feito pela API')`);

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database error" });
  }
});
