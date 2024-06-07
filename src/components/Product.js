import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/products?id=${id}`)
      .then(response => {
        if (response.data.length > 0) {
          setProduct(response.data[0]);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Не удалось загрузить страницу товара. Ошибка:', error);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  const addToFavorites = () => {
    axios.post('http://localhost:5000/favorites', product).then(r =>
        console.error("Не удалось добавить товар в Избранные! Ошибка: ", r));
  };

  const addToCart = () => {
    axios.post('http://localhost:5000/cart', product).then(r =>
        console.error("Не удалось добавить товар в Корзину! Ошибка: ", r));
  };

  if (loading) {
    return <div>Загрузка...</div>;
  }
  if (error || !product) {
    return <div>Товар не найден</div>;
  }

  return (
    <Container className="d-flex flex-column flex-grow-1">
      <Row className="my-4">
        <Col md={6}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <img src={`/${product.image}`} alt={product.name} className="product-image" style={{ maxWidth: '100%', height: 'auto' }} />
          </motion.div>
        </Col>
        <Col md={6}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h2>{product.name}</h2>
            <p>Описание: {product.description}.</p>
            <p>Цвет: {product.color}</p>
            <p>Накопитель: {product.ram}</p>
            <p>Связь: {product.sim}</p>
            <p><strong>${product.price}</strong></p>
            <Button variant="primary" onClick={addToFavorites}>Добавить в избранные</Button>
            <Button variant="success" onClick={addToCart} className="m-2">В корзину</Button>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default Product;
