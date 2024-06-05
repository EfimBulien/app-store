import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="name" className="mt-3">
        <Form.Label>Ваше ФИО</Form.Label>
        <Form.Control type="text" placeholder="Введите ваше имя" {...register('name', { required: true })}/>
          {errors.name && <span className="text-danger">Заполните данное поле</span>}
      </Form.Group>
      <Form.Group controlId="email" className="mt-3"> 
        <Form.Label>Ваш Email адрес</Form.Label>
        <Form.Control type="email" placeholder="Введите ваш email" {...register('email', { required: true })}/>
          {errors.email && <span className="text-danger">Заполните данное поле</span>}
      </Form.Group>
      <Form.Group controlId="message" className="mt-3">
        <Form.Label>Сообщение</Form.Label>
        <Form.Control as="textarea" rows={3} {...register('message', { required: true })}/>
          {errors.message && <span className="text-danger">Заполните данное поле</span>}
      </Form.Group>
      <Button className="mt-3" variant="primary" type="submit">Отправить</Button>
    </Form>
  );
}

export default ContactForm;
