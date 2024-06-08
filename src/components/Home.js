import React from 'react';
import ProductList from './ProductList';
import ContactForm from './ContactForm';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h2>Добро пожаловать в магазин iPhone</h2>
          <p>Ваш универсальный магазин всей продукции Apple. Мы предлагаем широкий выбор iPhone на любой вкус.</p>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <h3>Популярные товары</h3>
          <ProductList limit={10} />
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <h3>Обратная связь</h3>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
