const prisma = require('../config/prisma');

// GET /products - Listar todos os produtos
exports.getAllProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    return res.status(200).json(products);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao procurar produtos." });
  }
};

// GET /products/:id - Obter produto por ID
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { id: Number(id) }
    });

    if (!product) {
      return res.status(404).json({ error: "Produto não encontrado." });
    }

    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao procurar o produto." });
  }
};

// POST /products - Criar novo produto
exports.createProduct = async (req, res) => {
  try {
    const { title, price, description, image } = req.body;

    if (!title || price === undefined) {
      return res.status(400).json({ error: "O título e o preço são obrigatórios." });
    }

    const newProduct = await prisma.product.create({
      data: {
        title,
        price: Number(price),
        description: description || "Sem descrição disponível.",
        image: image || "https://dummyimage.com/200x200/cccccc/000000.png&text=Novo+Tech"
      }
    });

    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao registar o produto." });
  }
};

// PUT /products/:id - Atualizar produto existente
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, price, description, image } = req.body;

    const updatedProduct = await prisma.product.update({
      where: { id: Number(id) },
      data: {
        ...(title && { title }),
        ...(price !== undefined && { price: Number(price) }),
        ...(description && { description }),
        ...(image && { image })
      }
    });

    return res.status(200).json(updatedProduct);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao atualizar o produto." });
  }
};

// DELETE /products/:id - Eliminar produto
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.product.delete({
      where: { id: Number(id) }
    });

    return res.status(200).json({ message: "Produto eliminado com sucesso." });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao eliminar o produto." });
  }
};