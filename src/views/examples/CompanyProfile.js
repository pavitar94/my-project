/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

const Profile = () => {
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className=""
                        style={{ maxWidth: '200px',
                        borderRadius: '0.375rem',
                        transform: 'translate(-50%, 25%)',
                        position: 'absolute',
                        left: '50%',
                        transition: 'all 0.15s ease'
                      }}
                        src={
                          require("../../assets/img/brand/argon-react.png")
                            .default
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                <div className="d-flex justify-content-between">
                  <Button
                    className="mr-4"
                    color="info"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Connect
                  </Button>
                  <Button
                    className="float-right"
                    color="default"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    Message
                  </Button>
                </div>
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
            <p>sabasnkasjkcnlaskcklascmkkasmcklmcmnascasmcm,xcnncasncnasjcnasjknjksanjkasnjknasjkdnjksad</p>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Company Account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Submit
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Company Profile
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-company-name"
                        >
                          Company Name
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue="company name"
                          id="input-company-name"
                          placeholder="company name"
                          type="text"
                        />
                      </FormGroup>
                      </Col>
                      <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-company-description"
                        >
                          Company Description
                        </label>
                        <Input
                          className="form-control-alternative"
                          defaultValue="company description"
                          id="input-company-description"
                          placeholder="Company Description"
                          type="text"
                        />
                      </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-company-title"
                        >
                          Company Title
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-company-title"
                          placeholder="Title"
                          type="text"
                        />
                      </FormGroup>
                      </Col>
                      <Col lg="6">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-logo"
                        >
                          Upload Logo
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-file"
                          type="file"
                        />
                      </FormGroup>
                      </Col>
                    </Row>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
