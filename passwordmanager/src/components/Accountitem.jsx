import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function CardItem({
  name,
  username,
  password,
   onDelete,
}) 
{
  return (
    <Card className="card-size">
     
      <Card.Body className="card-body">
        <div className="card-body-info mb-3">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{username}</Card.Text>
          <Card.Text>{ password.replace(/./g, '*')}</Card.Text>
        </div>
        <div className="card-buttons">
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
                <Button variant="warning" onClick>
          Edit
        </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
