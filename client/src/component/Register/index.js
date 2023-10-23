import React from 'react';
import { useState } from 'react';
import { Form, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import axios from "axios";
import Swal from "sweetalert2";



function Register(){
    const [usr, setName] = useState(''); ////import dari database
    const [pswd, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes",
          }).then(async (result) => {
            if (result.isConfirmed) {
              axios({
                method: "POST",
                url: `http://localhost:2023/createuser`,
                timeout: 12000,
                data: { usr, pswd },
              }).then((response) => {
                console.log("3. berhasil  data :", response.data);
                if (response.data.data !== 400) {
                  Swal.fire({
                    icon: "success",
                    text: "Register Success",
                  });
                  navigate("/Login");
                } else {
                  Swal.fire({
                    icon: "warning",
                    text: response.data.code,
                  });
                }
              });
            }
          });
    }



    return (
        <div>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <MDBContainer
            fluid
            className="p-4 background-radial-gradient overflow-hidden"
          >
            <MDBRow>
              {/* <MDBCol
                md="6"
                className="text-center text-md-start d-flex flex-column justify-content-center"
              >
                <h1
                  className="my-5 display-3 fw-bold ls-tight px-3"
                  style={{ color: "hsl(218, 81%, 95%)" }}
                >
                  The best offer <br />
                  <span style={{ color: "hsl(218, 81%, 75%)" }}>
                    for your business
                  </span>
                </h1>
  
                <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                  quibusdam tempora at cupiditate quis eum maiores libero
                  veritatis? Dicta facilis sint aliquid ipsum atque?
                </p>
              </MDBCol> */}
              <MDBCol sm="6">
                <div className="d-flex flex-row ps-5 pt-5">
                  <MDBIcon
                    fas
                    icon="crow fa-3x me-3"
                    style={{ color: "#709085" }}
                  />
                </div>
  
                <div className="d-flex flex-column justify-content-center h-custom-2 w-75 pt-4">
                  <h3
                    className="fw-normal mb-3 ps-5 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Register
                  </h3>
  
                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    label="Email address"
                    id="formControlLg"
                    type="text"
                    size="lg"
                    name="usr"
                    value={usr || ""}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <MDBInput
                    wrapperClass="mb-4 mx-5 w-100"
                    label="Password"
                    id="formControlLg"
                    type="password"
                    size="lg"
                    value={pswd}
                    onChange={(e) => setPassword(e.target.value)}
                  />
  
                  <MDBBtn className="mb-4 px-5 mx-5 w-100" color="info" size="lg">
                    Create Account
                  </MDBBtn>
  
                  <p className="ms-5">
                    have an account?{" "}
                    <a href="/login" class="link-info">
                      Login here
                    </a>
                  </p>
                </div>
              </MDBCol>
  
              <MDBCol sm="6" className="d-none d-sm-block px-0">
                <Image
                  src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                  class="w-100 rounded-4 shadow-4"
                  alt="Login image"
                  className="w-100"
                  style={{ objectFit: "cover", objectPosition: "left" }}
                />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </Form>
      </div>
    );
}

export default Register;
