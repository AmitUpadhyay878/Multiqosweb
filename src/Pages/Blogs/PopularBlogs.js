import React from "react";
import DummyBlogList from "./DummyBlogData.json";
import { Card, Container, Row } from "react-bootstrap";
import './popularBlogs.css'
const PopularBlogs = () => {
  return (
    <div>
      <Container>
        <Row>
        <div className="PopularBlogList">
          <h1>Popular Posts</h1>
          {DummyBlogList.slice(6, 9).map((blog) => {
            return (
              <Card key={blog.id} className="myCard">
                <Card.Img
                  variant="top"
                  src={blog.image}
                  className="popularblogImage"
                />
                <Card.Body>
                  <Card.Title>{blog.title.slice(0, 40)}...</Card.Title>
                  {/* <Button variant="outline-dark">Read More...</Button> */}
                </Card.Body>
              </Card>
            );
          })}
        </div>
        </Row>
      </Container>
    </div>
  );
};

export default PopularBlogs;
