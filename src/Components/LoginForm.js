import React, { useEffect, useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import Service from "./Service";
import SaveItems from "./SaveItems";

function LoginForm() {
  const [tbldata, setTbldata] = useState([]);
  const [reload, setReload] = useState(false);
  const [item, setItem] = useState({});
  const [isEditmode, setisEditmode] = useState(false);

  const service = new Service();

  useEffect(() => {
    service.getItems().then(
      (json) => {
        if (json) setTbldata(json);
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
          {isEditmode ? (
            <SaveItems
              setReload={setReload}
              reload={reload}
              item={item}
              isEditmode={isEditmode}
            />
          ) : (
            <SaveItems setReload={setReload} reload={reload} />
          )}
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
                <FontAwesomeIcon
                  icon={faPencilAlt}
                  onClick={() => {
                    setisEditmode(true);
                    setItem(item);
                  }}
                />
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
export default LoginForm;
