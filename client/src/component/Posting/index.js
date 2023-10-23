import { Form, Button, Container, Row } from "react-bootstrap";
import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { MDBContainer } from "mdb-react-ui-kit";
// import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Posting() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setPosting] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    //loading
    //   console.log("2. next", usr, pswd);
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
          url: `http://localhost:5000/createposting`,
          timeout: 12000,
          data: { title, content, status },
        }).then((response) => {
          console.log("3. berhasil  data :", response.data);
          if (response.data.data !== 400) {
            Swal.fire({
              icon: "success",
              text: "Input Success",
            });
            navigate("/lisposting");
          } else {
            Swal.fire({
              icon: "warning",
              text: response.data.code,
            });
          }
        });
      }
    });
  };

  return (
    <Container className="mt-3">
      <Row>
        <div className="text-center">
          <h2
            className="my-2 display-2 fw-bold ls-tight px-1"
            style={{ color: "rgb(205, 92, 92)" }}
          >
            Input Data Posting
          </h2>
        </div>
        <Form onSubmit={(event) => handleSubmit(event)}>
          <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="usr"
                type="usr"
                value={title || ""}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Masukkan Username"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Content</Form.Label>
              <Form.Control
                type="text"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Masukkan Password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Posting</Form.Label>
              <Form.Control
                type="text"
                value={status}
                onChange={(e) => setPosting(e.target.value)}
                placeholder="Masukkan Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </MDBContainer>
        </Form>
      </Row>
    </Container>
  );
}

export default Posting;
