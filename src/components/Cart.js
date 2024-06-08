import { Container, Row, Col, Button, Table, Form } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

function Cart() {

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/cart')
      .then(response => {
        setCart(response.data);
        updateTotal(response.data);
      })
      .catch(error => {
        console.error('Не удалось загрузить страницу корзины. Ошибка:', error);
      });
  }, []);

  const updateTotal = (cartItems) => {
    const totalCost = cartItems.reduce((sum, product) =>
        sum + (parseFloat(product.price) * parseInt(product.quantity, 10)), 0);
    setTotal(isNaN(totalCost) ? 0 : totalCost);
  };

  const removeFromCart = (productId) => {
    axios.delete(`http://localhost:5000/cart/${productId}`)
      .then(() => {
        const updatedCart = cart.filter(product => product.id !== productId);
        setCart(updatedCart);
        updateTotal(updatedCart);
      })
      .catch(error => {
        console.error('Не удалось удалить товар из корзины. Ошибка:', error);
      });
  };

  const updateQuantity = (productId, newQuantity) => {
    const updatedCart = cart.map(product => {
      if (product.id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });

    setCart(updatedCart);
    updateTotal(updatedCart);

    const updatedProduct = updatedCart.find(product => product.id === productId);

    axios.put(`http://localhost:5000/cart/${productId}`, updatedProduct)
      .catch(error => {
        console.error('Не удалось обновить количество товара в корзине. Ошибка:', error);
      });
  };

  return (
    <Container className="d-flex flex-column flex-grow-1">
      <Row className="my-4 flex-grow-1">
        <Col>
          <h2>Ваша корзина:</h2>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {cart.length > 0 ? (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Название</th>
                    <th>Цена за единицу</th>
                    <th>Количество</th>
                    <th>Действие</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map(product => (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>${product.price}</td>
                      <td>
                        <Form.Control type="number" value={product.quantity} min="1"
                          onChange={(e) =>
                              updateQuantity(product.id, parseInt(e.target.value, 10))}/>
                      </td>
                      <td><Button variant="danger" onClick={() =>
                          removeFromCart(product.id)}>Удалить</Button></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : ( <p>Корзина пуста :(</p> )}
            <h3>Итог: ${total.toFixed(2)}</h3>
          </motion.div>
          <Button variant="primary" className="mt-2">Оплатить</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
