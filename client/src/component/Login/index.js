import React from 'react';
import { useState } from 'react';
import { Form, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function LoginUser() {
    const [usr, setName] = useState(''); ////import dari database
    const [pswd, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        console.log(usr,pswd)
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
                url: `http://localhost:2023/loginuser`,
                timeout: 12000,
                data: { usr, pswd },
              }).then((response) => {
                console.log("3. berhasil  data :", response.data);
                if (response.data.data !== 400) {
                  Swal.fire({
                    icon: "success",
                    text: "Login Success",
                  });
                  navigate("/Home");
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
    <Form onSubmit={(event) => handleSubmit(event)}>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Sign In</h2>
          <MDBInput wrapperClass='mb-4' label='User Name' size='lg' id='form1' type='text'
                  name="usr"
                  value={usr || ""}
                  onChange={(e) => setName(e.target.value)}/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'
                  value={pswd}
                  onChange={(e) => setPassword(e.target.value)}/>
          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Sign In</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    </Form>
  );
}

export default LoginUser;