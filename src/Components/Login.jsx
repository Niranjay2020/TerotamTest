import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Store from "../zustand/store";
import { useEffect } from "react";

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { setRegUser, RegUser } = Store();

  useEffect(() => {
    if (localStorage.getItem("useEmail")) {
      navigate("/dashboard");
    }
  }, []);
  
    const checkIt = async (e) => {
    e.preventDefault();
    console.log("user List:", RegUser);
    let status =false;
    if (email.length != 0 && pass.length != 0 ) {
      
      for(let i=0;i<RegUser.length;i++)
      {
        if(RegUser[i].Email==email && pass ==RegUser[i].Password){
          status= true;
        }
        else{

        //   alert("Invalid credential");
        }
        console.log("Status:", status);
        if(status==true){
            localStorage.setItem("useEmail", JSON.stringify(email));
            navigate("/dashboard");
        }
      }
  }
}

 

  return (
    <>
      <div className="innerWrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="formLeft">

                <div className="formTitle">
                  <h2>Sign In to Your Account</h2>
                  <p className="mb-0">If you don't have an account.</p>
                  <p>
                    You can
                    <Link className="txtForm" to="/">
                      {" "}
                      Sign-up here!
                    </Link>
                  </p>
                </div>
                {/* <div className="imgBox">
                  <img src={loginImg} alt="" className="img-fluid" />
                </div> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="formRight">
                <div className="formHead">
                  <h3>Welcome Back!</h3>
                  <p>
                    To keep connected with us please login with your personal
                    information by Email and Password.{" "}
                  </p>
                </div>
                <div className="formSection">
                  <form action="" className="loginForm">
                    <div className="inputContent">
                      <div className="inputBox position-relative">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emaillHelp"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className="inputIcon">
                          <img src="./asstes/images/mail-outline.png" alt="" />
                        </span>

                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email address
                        </label>
                      </div>
                    </div>

                    <div className="inputContent mb-3">
                      <div className="inputBox position-relative">
                        <label htmlFor="inputPass" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="inputPass"
                          aria-describedby="passlHelp"
                          onChange={(e) => setPass(e.target.value)}
                        />

                        {/* <span className="inputIcon">
                          <i
                            onClick={Eye}
                            className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}
                          ></i>
                        </span> */}

                       </div>
                      <br />
                    </div>
                    <div className="row align-items-center d-flex">
                      
                    </div>
                    <div className="col-12">
                      <button
                        onClick={checkIt}
                      >
                        LogIn
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
