import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import ProductList from './ProductList';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/favorites').then(response => {
      setFavorites(response.data);
    });
  }, []);

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2>Избранные товары</h2>
          <ProductList products={favorites} />
        </Col>
      </Row>
    </Container>
  );
}

export default Favorites;
