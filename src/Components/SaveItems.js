import React, { useEffect, useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import Service from "./Service";

function SaveItems(props) {
  const [name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const service = new Service();
  useEffect(() => {
    setName(props.item ? props.item.name : "");
    setDescription(props.item ? props.item.Description : "");
    setPrice(props.item ? props.item.price : "");
  }, [props]);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();

        let data = {
          name: name,
          Description: Description,
          price: price,
        };
        props.setReload(!props.reload);
        if (props.isEditmode) {
          service.editItems(props.item.id, data);
          props.item.name = "";
          props.item.Description = "";
          props.item.price = "";
        } else {
          if (name != "" && Description != "" && price != "") {
            service.addItems(data).then(() => {
              setName("");
              setDescription("");
              setPrice("");
            });
          }
        }

        if (name == "") {
          alert("Please enter name");
        } else if (Description == "") {
          alert("Please enter the description");
        } else if (price == "") {
          alert("Please enter the Price");
        }
      }}
    >
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          value={Description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </Form.Group>
      <Form.Group controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </Form.Group>
      <div>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </div>
    </Form>
  );
}
export default SaveItems;
