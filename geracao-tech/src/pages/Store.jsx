import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";

// 1. COMPONENTE DO CARTÃO DE PRODUTO
function ProductCard({ produto }) {
  const header = (
    <img
      alt={produto.title}
      src={produto.image}
      style={{ height: "200px", objectFit: "contain", padding: "10px", backgroundColor: "white", borderRadius: "10px 10px 0 0" }}
    />
  );

  return (
    <div className="col-12 md:col-6 lg:col-4 p-2">
      <Card title={produto.title} subTitle={`R$ ${produto.price.toFixed(2).replace('.', ',')}`} header={header} className="h-full">
        <p className="m-0 text-overflow-ellipsis" style={{ height: "60px", overflow: "hidden" }}>
          {produto.description}
        </p>
      </Card>
    </div>
  );
}

// 2. COMPONENTE PRINCIPAL (LISTA E FORMULÁRIO)
export default function Store() {
  const [produtos, setProdutos] = useState([]);
  const [novoTitulo, setNovoTitulo] = useState("");
  const [novoPreco, setNovoPreco] = useState(null);

  // Busca APENAS produtos de tecnologia (eletrônicos) da API
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics") 
      .then((resposta) => {
        setProdutos(resposta.data);
      })
      .catch((erro) => console.error("Opa, deu erro ao buscar os produtos:", erro));
  }, []);

  // Função para adicionar um produto manualmente
  function adicionarProduto(event) {
    event.preventDefault();
    if (!novoTitulo || novoPreco === null) return;

    const novoProduto = {
      id: Date.now(), // Gera um ID temporário
      title: novoTitulo,
      price: novoPreco,
      description: "Produto tech cadastrado manualmente na vitrine.",
      image: "https://dummyimage.com/200x200/cccccc/000000.png&text=Novo+Tech", // Imagem fictícia
    };

    // Coloca o novo produto no topo da vitrine
    setProdutos([novoProduto, ...produtos]);
    
    // Zera os campos depois de adicionar
    setNovoTitulo("");
    setNovoPreco(null);
  }

  return (
    <div className="inner-page">
      <section className="page-heading mb-5">
        <span className="hero-tag">E-COMMERCE GERAÇÃO TECH</span>
        <h1>Catálogo de Produtos</h1>
        <p>Nesta seção, você confere o nosso catálogo completo de tecnologia. Os produtos em exibição são carregados em tempo real através da integração com a Fake Store API, utilizando o Axios. Além disso, o layout foi todo desenhado com componentes do PrimeReact para garantir uma melhor experiência visual e responsividade.</p>
      </section>

      {/* FORMULÁRIO PARA CADASTRAR NOVO PRODUTO */}
      <section className="page-panel mb-5">
        <h2>Cadastrar Equipamento</h2>
        <form onSubmit={adicionarProduto} className="p-fluid formgrid grid mt-3">
          <div className="field col-12 md:col-6">
            <label htmlFor="titulo">Nome do Equipamento</label>
            <InputText
              id="titulo"
              value={novoTitulo}
              onChange={(e) => setNovoTitulo(e.target.value)}
              placeholder="Ex: Teclado Mecânico RGB"
              required
            />
          </div>
          <div className="field col-12 md:col-3">
            <label htmlFor="preco">Preço (R$)</label>
            <InputNumber
              inputId="preco"
              value={novoPreco}
              onValueChange={(e) => setNovoPreco(e.value)}
              mode="currency"
              currency="BRL"
              locale="pt-BR"
              required
            />
          </div>
          {/* Ajustei o botão para ficar melhor alinhado e não espremer o texto */}
          <div className="field col-12 md:col-3 flex align-items-end">
            <Button type="submit" label="Cadastrar" icon="pi pi-check" className="w-full" />
          </div>
        </form>
      </section>

      {/* VITRINE DE PRODUTOS */}
      <section>
        <div className="grid">
          {produtos.length === 0 ? (
            <p className="col-12 text-center">Buscando equipamentos...</p>
          ) : (
            produtos.map((prod) => <ProductCard key={prod.id} produto={prod} />)
          )}
        </div>
      </section>
    </div>
  );
}