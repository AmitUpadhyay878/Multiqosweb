import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import './Blogs.css'
import PopularBlogs from './PopularBlogs'
const DummyBlog = ({data}) => {
    // {console.log(data)}
  return (
      <div className='BlogList'>
      <Container>
        {/* <Row> */}
          {/* <Col lg="8"> */}
    <Card key={data.id} style={{margin:"10px"}}>
                        <Card.Img
                          variant="top"
                          src={data.image}
                          className="blogImage"
                        />
                        <Card.Text className="BlogDate">
                          <span className="BlogDateText">{data.date}</span>
                        </Card.Text>

                        <Card.Body>
                          <Card.Text>
                            {" "}
                            <span>
                              <b>By {data.username}</b>{" "}
                            </span>{" "}
                            |{" "}
                            <span>
                              <b>{data.category}</b>
                            </span>
                          </Card.Text>
                          <Card.Title>{data.title.slice(0, 40)}...</Card.Title>
                          <Card.Text>
                            {data.description.slice(0, 100)}...
                          </Card.Text>

                          <Button variant="outline-dark">Read More...</Button>
                        </Card.Body>
             
                      </Card>
                      {/* </Col> */}
                      {/* <Col lg="4"> */}
              {/* <PopularBlogs /> */}
            {/* </Col> */}
                      {/* </Row> */}
                      </Container>
                      </div>
        
     
    
  )
}

export default DummyBlog