import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Store from "../zustand/store.js";
import  stockData  from "./data.json";

const Registration = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    Fname: "",
    company: "",
    Email: "",
    Password: "",
    conPass: "",
  });
  const { setRegUser, RegUser } = Store();



  const [erro, setErro] = useState(false);
  const [eye, seteye] = useState(true);
  const [eyeCon, setEyeCon] = useState(true);
  const [password, setpassword] = useState("password");
  const [conPassword, setConPassword] = useState("password");
  const [localData, setLocalData] = useState(stockData);

  // console.log("local data", localData);
  // let regex;
  // let mobCheck;
  // const [valEmail, setValEmail] = useState(false);
  // const [msgErrorEmail, setMsgErrorEmail] = useState("");

  // const [msgErrorPass, setMsgErrorPass] = useState("");
  // const [msgErrorMob, setMsgErrorMob] = useState("");

  useEffect(() => {
    if (localStorage.getItem("useEmail")) {
      navigate("/dashboard");
    }
    else{
      console.log("userdata:", stockData);
    }
  }, []);

  useEffect(()=>{
    console.log("I am Updated");
  },[RegUser])

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };
  
  const regUserData = async (e) => {
    e.preventDefault();
    if(user.conPass == user.Password){
      stockData.push( user);
      setRegUser(stockData);
      alert("User registerd success");
      navigate("/login")
    }
    else{alert("password not match")}
      
  };


  return (
    <>
      <div className="innerWrapper registration">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="formLeft">
                <div className="formTitle">
                  <h2>Create a new Account</h2>
                  <p className="mb-0">If you have an already account.</p>
                  <p>
                    You can{" "}
                    <Link to="/login" className="txtForm">
                      Sign-In here!
                    </Link>{" "}
                  </p>
                </div>
               
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="formRight">
                <div className="formHead">
                  <h3>Register Here!</h3>
                  <p>
                    Enter the login information for your account. You will be
                    able to visit here after the registering.{" "}
                  </p>
                </div>
                <div className="formSection">
                  <form action="" className="registerForm">
                    <div className="inputContent">
                      <div className="row">
                        <div className="col-6">
                          <div className="inputBox position-relative">
                            <label htmlFor="fname" className="form-label">
                              First Name *
                            </label>

                            <input
                              type="text"
                              className="form-control"
                              name="Fname"
                              id="fname"
                              aria-describedby="fnamellHelp"
                              onChange={handleChange}
                            />

                            <span className="inputIcon">
                              <img
                                src="./asstes/images/identification.png"
                                alt=""
                              />
                            </span>
                            
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="inputBox position-relative">
                            <label htmlFor="company" className="form-label">
                            Company *
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="company"
                              id="company"
                              aria-describedby="companylHelp"
                              onChange={handleChange}
                            />
                            <span className="inputIcon">
                              <img
                                src="./asstes/images/identification.png"
                                alt=""
                              />
                            </span>
                            
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="inputContent">
                      <div className="inputBox position-relative">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email *
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="Email"
                          id="exampleInputEmail1"
                          aria-describedby="emaillHelp"
                          onChange={handleChange}
                        />
                        <span className="inputIcon">
                          <img src="./asstes/images/mail-outline.png" alt="" />
                        </span>
                       
                      </div>
                    </div>

                    <div className="inputContent">
                      <div className="inputBox position-relative">
                        <label htmlFor="inputPass" className="form-label">
                          Password *
                        </label>
                        <input
                          type={password}
                          // type="password"
                          className="form-control"
                          name="Password"
                          id="inputPass"
                          aria-describedby="passlHelp"
                          onChange={handleChange}
                        />
                        {/* <span className="inputIcon registerInput">
                          <i
                            // onClick={Eye}
                            // className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}
                          ></i>
                        </span> */}
                      </div>
                      
                    </div>
                    <div className="inputContent">
                      <div className="inputBox position-relative">
                        <label htmlFor="confPass" className="form-label">
                          Confirm Password *
                        </label>
                        <input
                          type={conPassword}
                          className="form-control"
                          name="conPass"
                          id="confPass"
                          aria-describedby="confPasslHelp"
                          onChange={handleChange}
                        />
                        {/* <span className="inputIcon registerInput">
                          <i
                            onClick={eyeConf}
                            className={`fa ${
                              eyeCon ? "fa-eye-slash" : "fa-eye"
                            }`}
                          ></i>
                        </span> */}
                      </div>
                      
                    </div>
                   
                    <div className="col-12">
                      <button
                        onClick={regUserData}
                      >
                        Register
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

export default Registration;
