import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Container, Row, Button } from "react-bootstrap";
import blazer from "./assets/blazer.jpeg";

const Products = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const url = "http://localhost:3000/products";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setList(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className="p-4">
      <Row>
        {list?.map((item) => {
          return (
            <Card style={{ width: "20%" }} className="m-2">
              <Card.Img variant="top" src={blazer} />
              <Card.Body key={item.id}>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{item.price}</ListGroup.Item>
                <ListGroup.Item>{item.brand}</ListGroup.Item>
                <ListGroup.Item>{item.color}</ListGroup.Item>
              </ListGroup>
              <Button variant="primary">More</Button>
            </Card>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;
