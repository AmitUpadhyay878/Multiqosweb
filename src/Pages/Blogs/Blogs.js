import React from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import Banner from "../../components/banner/Banner";
import DummyBlogList from "./DummyBlogData.json";
import "./Blogs.css";
import PopularBlogs from "./PopularBlogs";
import Pagination from "../../components/pagination/Pagination";
import DummyBlog from "./DummyBlog";
import { computeHeadingLevel } from "@testing-library/react";
const Blogs = () => {
  const category = [
    " All",
    "App Development",
    "web Development",
    "UI / UXDesign",
    "Cloud Computing",
    "Web Design",
    "Iot",
    "Andriod",
    "ios",
    "Technology",
    "App Marketing",
    "Trends",
    "Flutter",
    "Hire Resource",
    "News & EventSource",
    "QA Testing",
    "ECommerce",
    "Digital Marketing",
    "FrontEnd Development",
    "General",
    "devOps",
    "StartUp",
  ];
  return (
    <>
      <Banner />
      <div>
        <Container>
          <Row>
            <Col lg={8}>
              <div className="BlogList">
                <Pagination
                  data={DummyBlogList}
                  RenderComponent={DummyBlog}
                  title="Blogs"
                  pageLimit={5}
                  dataLimit={5}
                />
              </div>
            </Col>

            <Col lg="4">
              <PopularBlogs />
              <div className="categories">
                <h5 className="category_text">Categories:</h5>
                {category.map((c) => {
                  return <span className="categories_text">{c}</span>;
                })}
                {/* <span className="categories_text">All</span> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Blogs;
