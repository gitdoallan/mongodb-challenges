// Conte quantos produtos contém Mc no nome, sem considerar letras maiúsculas ou minúsculas

db.produtos.count({ nome: { $regex: /mc/i } });
