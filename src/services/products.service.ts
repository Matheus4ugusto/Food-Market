import { iProduct } from "@/types/stores";

export const getProductById = (id: number): iProduct => {
  return {
    id: 1,
    nome: "méqui milhão",
    imagem: "https://placehold.co/398x157",
    preco: 45.0,
    descricao:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo odit fugiat assumenda aspernatur, distinctio dicta beatae, repellendus quam illo porro earum repellat dolore, pariatur laboriosam deserunt nihil quaerat natus officia.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo odit fugiat assumenda aspernatur, distinctio dicta beatae, repellendus quam illo porro earum repellat dolore, pariatur laboriosam deserunt nihil quaerat natus officia.",
    loja: {
      id: 1,
      nome: "Emici Donaidis",
      nota: 4.5,
      categoria: "lanches",
      distancia: "1.2km",
      tempo: "30-40 min",
      taxaEntrega: 0,
      image_logo: "https://placehold.co/100",
      path: "/",
    },
  };
};
