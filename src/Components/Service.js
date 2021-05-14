import React from "react";
import axios from "axios";
class Service {
  getItems = async () => {
    try {
      const response = await axios.get("http://localhost:3000/items");
      return response.data;
    } catch (error) {}
  };
  addItems = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/items", data);
      return response.data;
    } catch (error) {}
  };
  deleteItems = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/items/${id}`);
      return response.data;
    } catch (error) {}
  };
}
export default Service;
