const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { shoes, categories, user } = require("./src/controllers/saveInDB.js");
const { Products } = require("./src/db.js");

const PORT = process.env.SERVER_PORT || 5000;

conn.sync({ force: false }).then(async () => {
  const products = await Products.findAll();
  if (!products.length) {
    user();
    categories();
    shoes();
  }

  server.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
  });
});
