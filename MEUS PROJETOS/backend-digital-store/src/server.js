const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rota da Documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas da API
app.use('/api', productRoutes);

app.get('/', (req, res) => {
  res.json({ message: "API da Digital Store a rodar com sucesso! Acede a /api-docs para a documentação." });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor a rodar em http://localhost:${PORT}`);
  console.log(`📚 Documentação Swagger disponível em http://localhost:${PORT}/api-docs`);
});