import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Cart() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/cart')
      .then(response => {
        setCart(response.data);
        const totalCost = response.data.reduce((sum, product) => sum + product.price, 0);
        setTotal(totalCost);
      })
      .catch(error => {
        console.error('Error fetching cart data:', error);
      });
  }, []);

  return (
    <Container className="d-flex flex-column flex-grow-1">
      <Row className="my-4 flex-grow-1">
        <Col>
          <h2>Ваша корзина:</h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {cart.length > 0 ? (
              <ul>
                {cart.map(product => (
                  <li key={product.id}>
                    {product.name} - ${product.price}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Корзина пуста :(</p>
            )}
            <h3>Итог: ${total}</h3>
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
