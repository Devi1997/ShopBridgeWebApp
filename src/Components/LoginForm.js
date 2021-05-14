import React, { useEffect, useState } from "react";
import { Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import Service from "./Service";

function LoginForm() {
  const [tbldata, setTbldata] = useState([]);

  const service = new Service();

  useEffect(() => {
    service.getItems().then(
      (json) => {
        setTbldata(json);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <>
      <div className="main-div">Shop Bridge</div>
      <div className="form-inner">
        <h2>Create</h2>
        <h2>Inventory Item</h2>
      </div>
      <Row>
        <Col></Col>
        <Col xs="auto">
          <form>
            <div className="form-group">
              <label htmlFor="name">
                <b>Name</b>
              </label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-group">
              <label htmlFor="desc">
                <b>Description</b>
              </label>
              <input type="text" name="desc" id="desc" />
            </div>
            <div className="form-group">
              <label htmlFor="price">
                <b>Price</b>
              </label>
              <input type="text" name="price" id="price" />
            </div>
            <Button variant="primary">Save</Button>
          </form>
        </Col>
        <Col></Col>
      </Row>
      <div className="form-inner-second-grp">
        <h2>List</h2>
        <h2>Inventory Items</h2>
      </div>
      <table width="100%">
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th>Action</th>
        {tbldata.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.Description}</td>
              <td>{item.price}</td>
              <td>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => {
                    alert("test");
                  }}
                />
                <FontAwesomeIcon icon={faPencilAlt} />
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
export default LoginForm;
