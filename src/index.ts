import pool from "./dbconnection";

//Database connection
async function main() {
  const result = await pool.query("SELECT NOW()");
  console.log("DB connected at:", result.rows[0]);
}
main();


import "./endpoits"

