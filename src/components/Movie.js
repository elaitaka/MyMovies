import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';


const Movie = ({
  id,
  moviename,
  author,
  date,
  handleRemoveMovie
}) => {
	const history = useHistory();
	
  return (
    <Card style={{ width: '18rem' }} className="movie">
      <Card.Body>
        <Card.Title className="movie-title">{moviename}</Card.Title>
        <div className="movie-details">
          <div>Author: {author}</div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
			Edit
		</Button>{' '}
        <Button variant="danger" onClick={() => handleRemoveMovie(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Movie;
