import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const MovieForm = (props) => {
  const [movie, setMovie] = useState({
    moviename: props.movie ? props.movie.moviename : '',
    author: props.movie ? props.movie.author : '',
    date: props.movie ? props.movie.date : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { moviename, author } = movie;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [moviename, author];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const movie = {
        id: uuidv4(),
        moviename,
        author,
        date: new Date()
      };
      props.handleOnSubmit(movie);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'test':
       
        break;
      default:
        setMovie((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Movie Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="moviename"
            value={moviename}
            placeholder="Enter name of movie"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Movie Author</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter name of author"
            onChange={handleInputChange}
          />
		</Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default MovieForm;
