import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao carregar detalhes do produto:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center p-5 text-info">Carregando produto...</p>;
  }

  if (!product) {
    return (
      <div className="text-center p-5">
        <h2>Produto não encontrado!</h2>
        <Button label="Voltar para a Loja" icon="pi pi-arrow-left" onClick={() => navigate("/store")} className="mt-3" />
      </div>
    );
  }

  return (
    <div className="inner-page">
      <Button 
        label="Voltar para a Loja" 
        icon="pi pi-arrow-left" 
        className="p-button-text p-button-info mb-4" 
        onClick={() => navigate("/store")} 
      />

      <div className="grid page-panel">
        <div className="col-12 md:col-6 flex justify-content-center align-items-center bg-white border-round p-4">
          <img src={product.image} alt={product.title} style={{ maxHeight: "300px", objectFit: "contain" }} />
        </div>

        <div className="col-12 md:col-6 flex flex-column justify-content-between p-4">
          <div>
            <span className="text-secondary text-sm font-bold uppercase">{product.category}</span>
            <h1 className="text-2xl mt-2 mb-3">{product.title}</h1>
            <p className="line-height-3 text-color-secondary">{product.description}</p>
          </div>

          <div className="mt-4">
            <div className="text-3xl font-bold text-teal-400 mb-3">
              R$ {product.price?.toFixed(2).replace('.', ',')}
            </div>
            <Button label="Comprar Agora" icon="pi pi-shopping-cart" className="w-full p-button-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}