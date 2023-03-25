import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CSVLink } from "react-csv";
import Form from "react-bootstrap/Form";
import Store from "../zustand/store.js";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Dashboard = () => {
  let navigate = useNavigate();
  const { setRegUser, RegUser } = Store();
  const [localData, setLocalData] = useState(RegUser);
  const [searchData, setSearchData] = useState("");
  const [filUserList, setFilUserList] = useState(RegUser);
  const [userList, setUserList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [iteamParPage, setIteamParpage] = useState(2);
  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    Fname: "",
    Email: "",
    company: "",
    salary: "",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const totalPages = Math.ceil(filUserList?.length / iteamParPage);

  const indexOfLastItem = currentPage * iteamParPage;
  const indexOfFirstItem = indexOfLastItem - iteamParPage;

  const currentItems = filUserList?.slice(indexOfFirstItem, indexOfLastItem);

  // Create an array of page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (localStorage.getItem("useEmail")) {
      navigate("/dashboard");
      getData();
    } else {
      navigate("/");
    }
  }, []);

  const getData = () => {
    setUserList(RegUser);
  };
  const searchme = (e) => {
    let searchVal = e.target.value;
    setSearchData(e.target.value);
    console.log("Search value:", searchVal);
    if (e.target.value != "") {
      const mySearch = localData.filter(
        (item) =>
          item.Fname.toLowerCase()?.includes(e.target.value.toLowerCase()) ||
          item.salary?.includes(e.target.value)
      );
      setFilUserList(mySearch);
    } else if (!e.target.value) {
      setFilUserList(localData);
    }
  };
  const delMe = (id) => {
    let arr = localData;
    arr?.splice(id, 1);
    console.log("dgshghsdh:", arr);
    setRegUser(arr);
  };

  const saveMe = () => {
    console.log("formData", formData);
    localData.push(formData);
    handleClose();
  };

  return (
    <div>
      <h2>Welcome </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="row">
          <div className="col-6">
            Search
            <input type="text" onChange={searchme} />
          </div>

          <div className="col-6">
            <CSVLink data={filUserList ? filUserList : ""}>
              Download CSV
            </CSVLink>
            ;
          </div>
          <table className="audit table">
            <thead className="table-th">
              <tr>
                <th>S.No.</th>
                <th>First Name</th>
                <th>Company Name</th>
                <th>Email Id</th>
                <th>Salary</th>
                <center>
                  <th>Action</th>
                </center>
              </tr>
            </thead>
            <tbody className="table-body">
              {currentItems &&
                currentItems.map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td> {item.Fname}</td>
                    <td> {item.company}</td>
                    <td>{item.Email}</td>
                    <td>{item.salary}</td>
                    <td>
                      <center>
                        <button onClick={(e) => delMe(i)}>Del</button>
                      </center>
                    </td>
                    <td>
                      <center>
                        <button onClick={handleShow}>Add</button>
                      </center>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div>
            {pageNumbers.map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                disabled={currentPage === pageNumber}
              >
                {pageNumber}
              </button>
            ))}
          </div>
          <div
            className="modal show"
            style={{ display: "block", position: "initial" }}
          >
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      value={formData.Fname}
                      onChange={(e) =>
                        setFormData({ ...formData, Fname: e.target.value })
                      }
                    />
                    <Form.Label>Company</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                    />
                    <Form.Label>Email Id</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email Id"
                      value={formData.Email}
                      onChange={(e) =>
                        setFormData({ ...formData, Email: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>salary</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="salary"
                      value={formData.salary}
                      onChange={(e) =>
                        setFormData({ ...formData, salary: e.target.value })
                      }
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={saveMe}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
