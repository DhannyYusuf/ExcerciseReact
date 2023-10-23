import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { aboutpage } from "../../actions/userAction";
// import axios from "axios";

function Contact() {
  const { aboutResult, aboutLoading, aboutError } = useSelector(
    (state) => state.userReducer
  );
  const dataHome = Object.entries(aboutResult);
  const obj = Object.fromEntries(dataHome.map(([v, k]) => [v, k]));
  console.log(obj, "d");
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("1. use effect home");
    dispatch(aboutpage());
  }, [dispatch]);
  return (
    <div>
      {aboutResult ? (
        Object.entries(aboutResult).map(([key, subject]) => (
          <MDBContainer
            fluid
            className="p-4 background-radial-gradient overflow-hidden"
          >
            <MDBRow>
              <MDBCol
                md="6"
                className="text-center text-md-start d-flex flex-column justify-content-center"
              >
                <h1
                  className="my-5 display-3 fw-bold ls-tight px-3"
                  style={{ color: "rgb(205, 92, 92)" }}
                >
                  {aboutResult.nama} <br />
                </h1>
                <p className="px-3" style={{ color: "	rgb(0, 0, 0)" }}>
                  Alamat: {aboutResult.alamat}
                </p>
                <p className="px-3" style={{ color: "	rgb(0, 0, 0)" }}>
                  Pendidikan: {aboutResult.pendidikan}
                </p>
                <p className="px-3" style={{ color: "	rgb(0, 0, 0)" }}>
                  Organisasi : {aboutResult.organisasi}
                </p>
                <p className="px-3" style={{ color: "	rgb(0, 0, 0)" }}>
                  Pengalaman Kerja: {aboutResult.pengalaman_kerja}
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        ))
      ) : aboutLoading ? (
        <p> Loading . . .</p>
      ) : (
        <p> {aboutError ? aboutError : "Data Kosong"}</p>
      )}
    </div>
  );
}
export default Contact;
