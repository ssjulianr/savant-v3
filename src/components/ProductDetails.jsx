import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3009/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>

      <section id="prodetails" className="section-p1">
    <div className="single-pro-image">
    <img src={product.ImgURL} alt={product.Alt} width='100%' id='MainImg'/>
        <img src={product.ImgUrl} width="100%" id="MainImg" alt=''/>
        <div className="small-img-group">
            <div className="small-img-col">
                <img src="../images/sproducts/wtf.webp" width="100%" className="small-img" alt=""/>
            </div>
            <div className="small-img-col">
                <img src="../images/sproducts/wtb.webp" width="100%" className="small-img" alt=""/>
            </div>
            <div className="small-img-col">
                <img src="../images/sproducts/wtf2.webp" width="100%" className="small-img" alt=""/>
            </div>
            <div className="small-img-col">
                <img src="../images/sproducts/wtb2.webp" width="100%" className="small-img" alt=""/>
            </div>
        </div>
    </div>
    <div className="single-pro-details">
        <h6>Home / {product.Category}</h6>
        <h4>{product.Description}</h4>
        <h2>${product.Price}</h2>
        <select name="" id="">
            <option value="">Select Size</option>
            <option value="">SM</option>
            <option value="">MD</option>
            <option value="">L</option>
            <option value="">XL</option>
            <option value="">XXL</option>
        </select>
        <input type="number" value="1"/>
        <button className="normal">Add to Cart</button>
        <h4>Product Details</h4>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla reprehenderit quos minus possimus 
            fugit modi quisquam accusamus pariatur recusandae, eaque veniam repellendus libero beatae et ea eligendi cumque. 
            Atque, labore!</span>
    </div>
   </section>


    <section id="newsletter" className="section-p1 section-m1">
        <div className="news-text">
            <h4>Subscribe to our Newsletter</h4>
            <p>E-Mail Updates About <span>Savant Records</span></p>
        </div>
        <div className="form">
            <input type="text" placeholder="Your email address"/>
            <button className="normal">Sign Up</button>
        </div>
      </section>

    </div>
  );
};

export default ProductDetail;
