import "./Product.css";

const Products = ({ result }) => {
  return (
    <section className="card-container d-flex flex-wrap">{result}</section>
  );
};

export default Products;
