import axios from "axios";

import Swal from "sweetalert2";

export const GET_LIST_HOME = "GET_LIST_HOME";
export const ADD_LOGIN = "ADD_LOGIN";
export const REG_LOGIN = "REG_LOGIN";
export const ABOUT_PAGE = "ABOUT_PAGE";

export const getlisthome = () => {
  console.log("2. next");

  return (distpatch) => {
    //loading
    distpatch({
      type: GET_LIST_HOME,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "GET",
      url: `http://localhost:2023/home`,
      timeout: 12000,
    })
      .then((response) => {
        console.log("3. berhasil  data :", response.data);
        distpatch({
          type: GET_LIST_HOME,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // console.log("4. Gagal dapat data :", error);
        distpatch({
          type: GET_LIST_HOME,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addLogin = (data) => {
  console.log("2. next", data);

  return (distpatch) => {
    //loading

    distpatch({
      type: ADD_LOGIN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    console.log("2. next", data);
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
          url: `http://localhost:2023/login`,
          timeout: 12000,
          data: data,
        }).then((response) => {
          console.log("3. berhasil  data :", response.data);
          if (response.data.data !== 400) {
            Swal.fire({
              icon: "success",
              text: "Login Succes",
            });

            // distpatch(redirect)
            // return <Navigate to="/home" />;
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
};

export const regLogin = (data) => {
  console.log("2. next", data);
  return (distpatch) => {
    //loading
    distpatch({
      type: REG_LOGIN,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });
    //get API
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Save It!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        axios({
          method: "POST",
          url: `http://localhost:2023/register`,
          timeout: 12000,
          data: data,
        })
          .then((response) => {
            console.log("3. berhasil  data :", response.data);
            distpatch({
              type: REG_LOGIN,
              payload: {
                loading: false,
                data: response.data,
                errorMessage: false,
              },
            });
          })
          .catch((error) => {
            console.log("4. Gagal dapat data :", error);
            distpatch({
              type: REG_LOGIN,
              payload: {
                loading: false,
                data: false,
                errorMessage: error.message,
              },
            });
          });
      }
    });
  };
};

export const aboutpage = () => {
  console.log("2. next");

  return (distpatch) => {
    //loading
    distpatch({
      type: ABOUT_PAGE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "GET",
      url: `http://localhost:2023/about`,
      timeout: 12000,
    })
      .then((response) => {
        console.log("3. berhasil  data :", response.data.data);
        distpatch({
          type: ABOUT_PAGE,
          payload: {
            loading: false,
            data: response.data.data[0],
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // console.log("4. Gagal dapat data :", error);
        distpatch({
          type: ABOUT_PAGE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
