// Renomeie o campo descricao para descricaoSite em todos os documentos

// Crie uma query que faça a renomeação do campo descricao para descricaoSite em todos os documentos.

db.produtos.updateMany(
  {},
  { $rename: { descricao: "descricaoSite" } },
);

// Crie uma query que retorne o nome e descricaoSite de todos os documentos.

db.produtos.find(
  {},
  { _id: 0, nome: 1, descricaoSite: 1 },
);
