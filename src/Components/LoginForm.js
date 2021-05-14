import React, { useEffect, useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import Service from "./Service";

function LoginForm() {
  const [tbldata, setTbldata] = useState([]);
  const [reload, setReload] = useState(false);

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
  }, [reload]);

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
          {/* <form onSubmit={(e)=>{
            let form=e.target
            let data={name:form.name.va
          }}>
            <div className="form-group">
              <label >
                <b>Name</b>
              </label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-group">
              <label >
                <b>Description</b>
              </label>
              <input type="text" name="desc" id="desc" />
            </div>
            <div className="form-group">
              <label >
                <b>Price</b>
              </label>
              <input type="text" name="price" id="price" />
            </div>
            <Button variant="primary" type="submit">Save</Button>
          </form> */}
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              let form = e.target;
              let data = {
                name: form.formBasicName.value,
                Description: form.formBasicDescription.value,
                price: form.formBasicPrice.value,
              };
              service.addItems(data).then(() => {
                setReload(!reload);
              });
              console.log(form);
            }}
          >
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control type="text" />
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Form.Group>
          </Form>
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
                    service.deleteItems(item.id).then(() => {
                      setReload(!reload);
                    });
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
