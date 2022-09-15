// Adicione ketchup aos ingredientes para todos os sanduíches menos o McChicken, garantindo que não haja duplicidade nos ingredientes

db.produtos.updateMany(
  { nome: { $ne: "McChicken" } },
  { $addToSet: { ingredientes: "ketchup" } },
);

// Retorne o nome e ingredientes de todos os documentos

db.produtos.find(
  {},
  { _id: 0, nome: 1, ingredientes: 1 },
);
