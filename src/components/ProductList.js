import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

function ProductList({ limit, searchTerm, category, products }) {
  const [allProducts, setAllProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products').then((response) => {
      setAllProducts(response.data);
    });
  }, []);

  useEffect(() => {
    let filteredProducts = products ? products : allProducts;

    if (searchTerm) {
      filteredProducts = filteredProducts.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (category) {
      filteredProducts = filteredProducts.filter(product => product.category === category);
    }

    if (limit) filteredProducts = filteredProducts.slice(0, limit);

    setDisplayedProducts(filteredProducts);
  }, [limit, searchTerm, category, products, allProducts]);

  return (
    <div className="d-flex flex-wrap">
      {displayedProducts.map(product => (
        <motion.div key={product.id} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} className="m-2">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`/${product.image}`} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text><i>«{product.description}»</i></Card.Text>
              <Card.Text><strong>${product.price}</strong></Card.Text>
              <Button as={Link} to={`/product/${product.id}`} variant="primary">Купить</Button>
              <Button as={Link} to={`/product/${product.id}`} variant="success" className="m-2">В корзину</Button>
            </Card.Body>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}

export default ProductList;
