import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';

const Smerch = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3009/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>HELLO WORLD</h1>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Render other product details */}
    </div>
  );
};

export default Smerch