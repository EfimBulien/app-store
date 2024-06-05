import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Очистка формы после успешной отправки
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="name">
        <Form.Label>Ваше ФИО</Form.Label>
        <Form.Control
          type="text"
          placeholder="Введите ваше имя"
          {...register('name', { required: true })}
        />
        {errors.name && <span className="text-danger">Заполните данное поле</span>}
      </Form.Group>
      <Form.Group controlId="email">
        <Form.Label>Ваш Email адрес</Form.Label>
        <Form.Control
          type="email"
          placeholder="Введите ваш email"
          {...register('email', { required: true })}
        />
        {errors.email && <span className="text-danger">Заполните данное поле</span>}
      </Form.Group>
      <Form.Group controlId="message">
        <Form.Label>Сообщение</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          {...register('message', { required: true })}
        />
        {errors.message && <span className="text-danger">Заполните данное поле</span>}
      </Form.Group>
      <Button variant="primary" type="submit">Отправить</Button>
    </Form>
  );
}

export default ContactForm;
