import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { getlisthome } from "../../actions/userAction";
// import axios from "axios";

function HomePage() {
  const { getlisthomeResult, getlisthomeLoading, getlisthomeError } =
    useSelector((state) => state.userReducer);
  // const dataHome = Object.entries(getlisthomeResult);
  // const obj = Object.fromEntries(dataHome.map(([v, k]) => [v, k]));
  // console.log(obj, "d");
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("1. use effect home");
    dispatch(getlisthome());
  }, [dispatch]);
  return (
    <div>
      {getlisthomeResult ? (
        Object.entries(getlisthomeResult).map(([key, subject]) => (
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
                  {getlisthomeResult.title} <br />
                </h1>

                <p className="px-3" style={{ color: "	rgb(0, 0, 0)" }}>
                  {getlisthomeResult.content}
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        ))
      ) : getlisthomeLoading ? (
        <p> Loading . . .</p>
      ) : (
        <p> {getlisthomeError ? getlisthomeError : "Data Kosong"}</p>
      )}
    </div>
  );
}
export default HomePage;
