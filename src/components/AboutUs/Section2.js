import React, { useState } from "react";
import Slider from "react-slick";
import "./Section2.css";
import {
    Button,
    Card,
    Col,
    Container,
    Image,
    Row,
} from "react-bootstrap";
import { ReactComponent as Innerlog } from "../../assets/InnerMQLG.svg";
import { ReactComponent as Rightarrow } from "../../assets/RightArrow.svg";
import { ReactComponent as Startups } from "../../assets/Startups.svg";
import { ReactComponent as Small } from "../../assets/Small.svg";
import { ReactComponent as Mid } from "../../assets/Mid.svg";
import { ReactComponent as Enterprise } from "../../assets/Enterprise.svg";
import Banner from "../banner/Banner";
import Discover from "./Discover";
import db from "./FakeData.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Section2 = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
    };

    const [myd] = useState([
        {
            id: 1,
            img: <Startups />,
            title:
                "We are committed to success that a client needs. Whether the project is for a small company, enterprise or any mid -level business",
        },
        {
            id: 2,
            img: <Small />,
            title:
                "We are committed to success that a client needs. Whether the project is for a small company",
        },
        {
            id: 3,
            img: <Mid />,
            title:
                "We are committed to success that a client needs. Whether the project is for a small company",
        },
        {
            id: 4,
            img: <Enterprise />,
            title:
                "We are committed to success that a client needs. Whether the project is for a small company",
        },
    ]);

    const first = db.slice(0, 3);
    const second = db.slice(3, 7);

    const [selected, setSelected] = useState()
    const [show, setShow] = useState(false)

    const toggleImage = (t) => {
        console.log(t)
        if (selected === t.id) {
            setShow(!show)
        }
        else {
            setSelected(t.id)
            setShow(true)
        }
    }


    return (
        <>
            <Banner />

            <div className="mydiv">
                <Container>
                    <Row>
                        <div className="footer_text">Who we are? </div>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <div className="left-part">
                                <div className="column_text">
                                    Lorem Ipsum is simply dummy text of the printing and typeset
                                    ting industry.
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="right-part">
                                <div className="column2_text">
                                    We are team of extremely talented web and mobile app
                                    developers who have come together to build exceptional
                                    software for our clients all over the world. Our goal is to
                                    build the future for our clients, helping them automate their
                                    businesses, engage their customers and change the world. We
                                    will be your trusted tech partner, bringing your idea to
                                    reality.
                                </div>
                                <div className="column_num">01</div>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <div className="what_we_text"> What We Do </div>
                    </Row>
                    <Row>
                        <Col lg={6}>
                            <div className="column2_text">
                                We are team of extremely talented web and mobile app developers
                                who have come together to build exceptional software for our
                                clients all over the world. Our goal is to build the future for
                                our clients, helping them automate their businesses, engage
                                their customers and change the world. We will be your trusted
                                tech partner, bringing your idea to reality.
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="column_text">
                                Lorem Ipsum is simply dummy text of the printing and typeset
                                ting industry.
                            </div>
                        </Col>
                        <div className="column2_num">02</div>
                    </Row>
                </Container>

                <Container>
                    <Row>
                        <Col lg={6}>
                            <div className="our_text"> Our Value </div>
                        </Col>
                        <Col lg={6}>
                            <div className="images">
                                <img src="../assets/MQS_RAOUNDpsd.png" alt="" />
                            </div>
                            <Innerlog className="Inner_Logo" />
                        </Col>
                    </Row>
                    <Row>
                        <div className="lorem_text"> LOREM IPSUM IS SIMPLY.</div>
                        <div className="lorem_inner_text">
                            <Col lg={6}>
                                Our mission is to equip and strengthen our business clients with
                                standout digital presence Through innovative and customer
                                focused.
                            </Col>
                        </div>
                    </Row>
                </Container>

                <Container>
                    <Row className="mt-5">
                        {first.map((e, i) => {
                            return (
                                <Col lg={4}>
                                    <Card style={{ width: "20rem", border: "none" }}>
                                        <Card.Body>
                                            <Card.Title className="d-flex">
                                                {" "}
                                                <span className="sec__side">00{i + 1}</span>
                                                <h3> {e.title}</h3>
                                            </Card.Title>
                                            <Card.Text className="my-5">{e.body}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>

                    <Container>
                        <Row>
                            <Discover />
                        </Row>
                    </Container>
                </Container>
            </div>

            {/* CLIENT FOCUS HERE-->> */}
            <div>
                <Container>
                    <Row>
                        <Col lg={10}>
                            <div>
                                <h3>Client Focus</h3>
                            </div>
                        </Col>
                        <Col lg={2}>
                            <Button variant="outline-dark">
                                DISCUSS YOUR IDEA
                                <Rightarrow />
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <div>
                            <h1>LOREM IPSUM IS SIMPLY DUMMY.</h1>
                        </div>
                    </Row>
                    <Row>
                        <Col lg={9}>
                            <div>
                                <p1>
                                    We are committed to success that a client needs. Whether the
                                    project is for a small company, enterprise or any mid-level
                                    business, we form a team and design develop a set of action to
                                    aid in the efficiency required for the winning solution.
                                </p1>
                            </div>
                        </Col>
                        <Col lg={3}></Col>
                    </Row>

                    <div>
                        <Container>
                            <Row className="mt-5">
                                {myd.map((e) => {
                                    return (
                                        <Col lg={3}>
                                            <Card
                                                className="card_column"
                                                onClick={() => {
                                                    toggleImage(e)
                                                }}
                                            >
                                                <div className="card_inner_img">
                                                    {/* {console.log(e.img)} */}
                                                    {selected == e.id && show ? e.title : e.img}
                                                </div>

                                            </Card>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </Container>
                    </div>
                </Container>
            </div>

            <div className="">
                <Container>
                    <Row className="mt-5">
                        <div>
                            <h1> MAKE A CARD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! </h1>
                        </div>
                    </Row>
                </Container>
            </div>

            {/* OUR WORK CULTURE---->>> */}

            <div>
                <Container>
                    <Row className="mt-5">
                        <div>
                            <h4>Our Work Culture</h4>
                        </div>
                    </Row>
                    <Row className="mt-4">
                        <div>
                            <h1>LOREM IPSUM IS.</h1>
                        </div>
                    </Row>
                    <Row>
                        <Col lg={9}>
                            <p1>
                                We know the formula of work life balance, join us to crack it.
                                We have a culture of friendly, collaborative team working on
                                thriving challenges. We don’t just work together we share good
                                humor, fun and delicious food together.
                            </p1>
                        </Col>
                        <Col lg={3}></Col>
                    </Row>
                </Container>
            </div>

            <div>
                <Container>
                    <Row className="mt-5">
                        <Slider {...settings}>
                            <div>
                                <Image
                                    style={{ width: "400px" }}
                                    src="../assets/work_cul.png"
                                    alt=""
                                />
                                <span>Udaipur</span>
                                <Row>
                                    <span>One year anniversary</span>
                                </Row>
                            </div>
                            <div>
                                <Image
                                    style={{ width: "400px" }}
                                    src="../assets/work_cul.png"
                                    alt=""
                                />
                                <span>Udaipur</span>
                                <Row>
                                    <span>One year anniversary</span>
                                </Row>
                            </div>
                            <div>
                                <Image
                                    style={{ width: "400px" }}
                                    src="../assets/work_cul.png"
                                    alt=""
                                />
                                <span>Udaipur</span>
                                <Row>
                                    <span>One year anniversary</span>
                                </Row>
                            </div>
                            <div>
                                <Image
                                    style={{ width: "400px" }}
                                    src="../assets/work_cul.png"
                                    alt=""
                                />
                                <span>Udaipur</span>
                                <Row>
                                    <span>One year anniversary</span>
                                </Row>
                            </div>
                            <div>
                                <Image
                                    style={{ width: "400px" }}
                                    src="../assets/work_cul.png"
                                    alt=""
                                />
                                <span>Udaipur</span>
                                <Row>
                                    <span>One year anniversary</span>
                                </Row>
                            </div>
                            <div>
                                <Image
                                    style={{ width: "400px" }}
                                    src="../assets/work_cul.png"
                                    alt=""
                                />
                                <span>Udaipur</span>
                                <Row>
                                    <span>One year anniversary</span>
                                </Row>
                            </div>
                            <div>
                                <Image
                                    style={{ width: "400px" }}
                                    src="../assets/work_cul.png"
                                    alt=""
                                />
                                <span>Udaipur</span>
                                <Row>
                                    <span>One year anniversary</span>
                                </Row>
                            </div>
                            <div>
                                <Image
                                    style={{ width: "400px" }}
                                    src="../assets/work_cul.png"
                                    alt=""
                                />
                                <span>Udaipur</span>
                                <Row>
                                    <span>One year anniversary</span>
                                </Row>
                            </div>
                            <div>
                                <Image
                                    style={{ width: "400px" }}
                                    src="../assets/work_cul.png"
                                    alt=""
                                />
                                <span>Udaipur</span>
                                <Row>
                                    <span>One year anniversary</span>
                                </Row>
                            </div>
                            <div>
                                <Image
                                    style={{ width: "400px" }}
                                    src="../assets/work_cul.png"
                                    alt=""
                                />
                                <span>Udaipur</span>
                                <Row>
                                    <span>One year anniversary</span>
                                </Row>
                            </div>
                        </Slider>
                    </Row>
                </Container>
            </div>

            <div>
                <Container>
                    <Row className="mt-5">
                        <div className="lets">
                            <Row className="mt-5">
                                <div>
                                    <h1>Let's create something awesome together!</h1>
                                </div>
                            </Row>
                            <Row className="mt-5">
                                <div className="sum_text">
                                    <h1>sum is simply dum</h1>
                                </div>
                            </Row>
                        </div>
                    </Row>
                </Container>
            </div>

            <div>
                <Container>
                    <Row className="mt-5">
                        <Col>
                            <h1 className="text-danger">Your Flexibility Is Our Priority</h1>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col>
                            <h1>PARTNER WITH BEST WEB AND MOBILE APP DEVELOPMENT COMPANY </h1>
                        </Col>
                    </Row>

                    <Row className="mt-5">
                        {second.map((ee) => {
                            return (
                                <Col lg={4}>
                                    <img src={ee.img} />
                                    <Card
                                        style={{ width: "20rem", border: "none" }}
                                        className="mt-5"
                                    >
                                        <Card.Body>
                                            <Card.Title className="d-flex mb-3">
                                                {" "}
                                                <h3> {ee.title}</h3>
                                            </Card.Title>
                                            <Card.Text>{ee.body}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Section2;
