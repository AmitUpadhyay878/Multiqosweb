import React from "react";
import "./Footer.css";
import SliderImage1 from "../../assets/SliderImages/pexels-andy-vu-3244513.jpg";
import SliderImage2 from "../../assets/SliderImages/pexels-eberhard-grossgasteiger-572897.jpg";
import SliderImage3 from "../../assets/SliderImages/pexels-francesco-ungaro-2325446.jpg";
import { ReactComponent as Rightarrow } from "../../assets/RightArrow.svg";
import { ReactComponent as MQlogo } from "../../assets/MQLogo.svg";
import footer_Multiqos_Logo from "../../assets/MultiqosLogo1.png";
import footer_Massege_Logo from "../../assets/MassegeLogo1.png";
import footer_Call_Logo from "../../assets/call1.png";
import footer_WhatsApp_Logo from "../../assets/whatsapp1.png";
import { ReactComponent as FootterCol4Logo1 } from "../../assets/footer_col4_logo_1.svg";
import { ReactComponent as Foottercol4Logo2 } from "../../assets/footer_col4_logo_2.svg";
import { ReactComponent as Foottercol4Logo3 } from "../../assets/footer_col4_logo_3.svg";
import { ReactComponent as LocationLogo } from "../../assets/locationlogo.svg";
import { ReactComponent as MobileFooterLogo } from "../../assets/mobilefooterlogo.svg";
import { ReactComponent as LinkedInLogo } from "../../assets/LinkedinLogo.svg";
import { ReactComponent as FacebookLogo } from "../../assets/FacebookLogo.svg";
import { ReactComponent as DribbleLogo } from "../../assets/DribbleLogo.svg";
import { ReactComponent as TwitterLogo } from "../../assets/TwitterLogo.svg";
import { ReactComponent as InstaLogo } from "../../assets/InstaLogo.svg";
import { ReactComponent as YouTubeLogo } from "../../assets/YouTubeLogo.svg";
import { ReactComponent as BeLogo } from "../../assets/BeLogo.svg";

import Col5FooterLogo1 from "../../assets/col5FooterLogo1.png";
import AppDevelopmentCompanies from "../../assets/app-development-companies.png";
import badgeTopAppCompany from "../../assets/badge-top-app-company.png";
import AppDeveloperItfirms from "../../assets/app-development-companies.png";
import BadgeTopMobileAppDevelopmentCompanies from "../../assets/Badge-Top-Mobile-App-Development-Companies.png";
import DMCALogo from "../../assets/dmca.png";
import CopyscapeBannerWhite from "../../assets/copyscape-banner-white-200x25.png";
import {
  Button,
  Carousel,
  Col,
  Container,
  FloatingLabel,
  Form,
  FormControl,
  FormLabel,
  Image,
  InputGroup,
  Nav,
  Row,
} from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className="main__footer">
        <div className="main__footer__spacing">
          <div className="main__footer__row1">
            <Row>
              <Col lg={6} className="col1">
                <Col lg={4}>
                  {" "}
                  <span class="text1">We Are Here To Help You</span>
                </Col>

                <Col lg={4}>
                  {" "}
                  <h1 class="text2">Let's Transform Your Vision Into Value.</h1>
                </Col>

                <Col lg={4}>
                  {" "}
                  <MQlogo  className="mqlogo"/>
                </Col>
              </Col>
              <Col lg={6} className="col2">
                <Form>
                  <FormLabel>
                    <span style={{ fontSize: "xx-large" }}>
                      Let's Create Awesome Projects
                    </span>
                  </FormLabel>
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Control type="text" placeholder="Your Name" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="typeofproject">
                    <Form.Control type="text" placeholder="Type Of Project" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="contactno">
                    <Form.Control type="text" placeholder="Contact No" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="contactno">
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="contactno">
                    <FloatingLabel
                      controlId="floatingTextarea2"
                      label="Comments"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: "100px" }}
                      />
                    </FloatingLabel>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>

                  <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Control type="file" multiple />
                  </Form.Group>

                  <Button variant="outline-light" type="submit">
                    <span className="form_Button_Class">SEND MASSAGE</span>
                    <Rightarrow />
                  </Button>
                </Form>
              </Col>
            </Row>

            <hr />
          </div>

          <div className="main__footer__row2">
            <Container>
              <Row>
                <Col lg={3}>
                  <Row>
                    <span>QUICK LINK</span>
                  </Row>
                  <Row>
                    <a>Careers</a>
                  </Row>
                  <Row>
                    <a>Contact Us</a>
                  </Row>
                  <Row>
                    <a>Blog</a>
                  </Row>
                  <Row>
                    <a>Portfolio</a>
                  </Row>
                  <Row>
                    <a>Sitemap</a>
                  </Row>
                </Col>
                <Col lg={3}>
                  <Row>
                    <span>SERVICES</span>
                  </Row>
                  <Row>
                    <a>Mobile App Services</a>
                  </Row>
                  <Row>
                    <a>Web Services</a>
                  </Row>
                  <Row>
                    <a>FrontEnd Services</a>
                  </Row>
                  <Row>
                    <a>BackEnd Services</a>
                  </Row>
                  <Row>
                    <a>CMS Services</a>
                  </Row>
                  <Row>
                    <a>UI / UX Services</a>
                  </Row>
                </Col>
                <Col lg={3}>
                  <Row>
                    <span>HIRE DEVELOPERS</span>
                  </Row>
                  <Row>
                    <a>Hire Mobile App developer</a>
                  </Row>
                  <Row>
                    <a>Hire Full Stack developers</a>
                  </Row>
                  <Row>
                    <a>Hire MEAN Stack developer</a>
                  </Row>
                  <Row>
                    <a>Hire MERN Stack developer</a>
                  </Row>
                  <Row>
                    <a>Hire NodeJs Developer</a>
                  </Row>
                  <Row>
                    <a>Hire GoLang Developer</a>
                  </Row>
                  <Row>
                    <a>Hire UI / UX designer</a>
                  </Row>
                </Col>
                <Col xs={3}>
                  <Row>
                    {" "}
                    <span>SOLUTIONS</span>
                  </Row>
                  <Row>
                    <a>On-Demand Solutions</a>
                  </Row>
                  <Row>
                    {" "}
                    <a>OnLine Grocery Store App</a>
                  </Row>
                  <Row>
                    <a>Food Dilevery App</a>
                  </Row>
                  <Row>
                    <a>eCommerce Fashion Store App</a>
                  </Row>
                  <Row>
                    <a>eLearning Education App</a>
                  </Row>
                  <Row>
                    <a>MarketPlace App Solution</a>
                  </Row>
                  <Row>
                    <a>Payment Wallet App</a>
                  </Row>
                </Col>
              </Row>
            </Container>
            <hr />
          </div>
          <div className="main__footer__row3">
            <Container>
              <Row>
                <Col lg={2}>
                  {/* <span style={{ color: "white" }}>Hello Multiqos</span> */}
                  <Image src={footer_Multiqos_Logo} alt="" />
                </Col>
                <Col lg={2}>
                  {" "}
                  <Image src={footer_Massege_Logo} alt="" />
                  <a>bizmultiqos@gmail.com</a>
                </Col>
                <Col lg={2}>
                  <a>biz@multiqos.com</a>
                </Col>
                <Col lg={2}>
                  {" "}
                  <Image src={footer_Call_Logo} alt="" />
                  <span>India</span>
                  <span>+91 88666 87330</span>
                </Col>
                <Col lg={2}>
                  {" "}
                  <Image src={footer_WhatsApp_Logo} alt="" />
                  <span>+91 88666 87330</span>
                </Col>
              </Row>
            </Container>
            <hr />
          </div>
          <div className="main__footer__row4">
            <Container>
              <Row>
                <Col lg={4}>
                  <FootterCol4Logo1 />
                </Col>
                <Col lg={4}>
                  <Foottercol4Logo2 />
                </Col>
                <Col lg={4}>
                  <Foottercol4Logo3 />
                </Col>
              </Row>
              <Row className="countryrow">
                <Col lg={4}>
                  {" "}
                  <LocationLogo /> <span>India</span>
                </Col>
                <Col lg={4}>
                  {" "}
                  <LocationLogo /> <span>Germany</span>
                </Col>
                <Col lg={4}>
                  {" "}
                  <LocationLogo /> <span>United States</span>
                </Col>
              </Row>
              <Row className="countryrow">
                <Col lg={4}>
                  {" "}
                  <span>
                    624, Gala Empire, Gurukul, Ahmedabad, Gujarat 380052
                  </span>
                </Col>
                <Col lg={4}>
                  {" "}
                  <span>
                  Thomas Jefferson Street 41, 68309 Mannheim, Germany
                  </span>
                </Col>
                <Col lg={4}>
                  {" "}
                  <span>
                  150 E Beech Drive, Schaumburg, IL 60193
                  </span>
                </Col>
              </Row>
              <Row className="countryrow">
                <Col lg={4}>
                  {" "}
                  <MobileFooterLogo /> <span>+91 88666 87330</span>
                </Col>
                <Col lg={4}>
                  {" "}
                  <MobileFooterLogo />
                  <span>+49 151 660 29809</span>
                </Col>
                <Col lg={4}>
                  {" "}
                  <MobileFooterLogo /> <span>+1 309 247 5073</span>
                </Col>
              </Row>
            </Container>
            <hr />
          </div>
          <div className="main__footer__row5">
            <Container>
              <Row>
                <Col lg={6} className="footer_Col5_Left">
                  <Image src={Col5FooterLogo1} alt="" />
                  <Image src={AppDevelopmentCompanies} alt="" />
                  <Image src={badgeTopAppCompany} alt="" />
                  <Image src={AppDeveloperItfirms} alt="" />
                  <Image src={BadgeTopMobileAppDevelopmentCompanies} alt="" />
                </Col>
                <Col lg={6} className="footer_Col5_RightSection">
                  <span>Follow Us</span>
                  <Col>
                    <LinkedInLogo />
                    <FacebookLogo />
                    <DribbleLogo />
                    <TwitterLogo />
                    <InstaLogo />
                    <YouTubeLogo />
                    <BeLogo />
                  </Col>
                  {/* <Col><FacebookLogo/></Col> 
                 <Col><DribbleLogo/></Col> 
                 <Col><TwitterLogo/></Col> 
                 <Col><InstaLogo/></Col> 
                 <Col><YouTubeLogo/></Col> 
                 <Col><BeLogo/></Col>  */}
                </Col>
              </Row>
            </Container>
            <hr />
          </div>
          <div className="main__footer__row6">
            <Container>
              <Row>
                <Col lg={4}>
                  © 2021 MultiQoS Technologies Pvt. Ltd. All rights reserved.
                </Col>
                <Col lg={4} className="row6_col2">
                  <Image className="row6_col2" src={DMCALogo} />
                  <Image className="row6_col2" src={CopyscapeBannerWhite} />
                </Col>
                <Col lg={4}>Privacy Policy</Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
