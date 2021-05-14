import React from "react";
import axios from "axios";
class Service {
  getItems = async () => {
    //   {
    //     await fetch(
    //       "https://fdfb1e28-3da3-4602-9e75-a14e0c857803.mock.pstmn.io/items"
    //     )
    //       .then((response) => {
    //         return response.json();
    //       })
    //       .then((json) => {
    //         return json;
    //       });
    //   };

    try {
      const response = await axios.get(
        "https://fdfb1e28-3da3-4602-9e75-a14e0c857803.mock.pstmn.io/items"
      );
      return response.data;
    } catch (error) {}
  };
}
export default Service;
