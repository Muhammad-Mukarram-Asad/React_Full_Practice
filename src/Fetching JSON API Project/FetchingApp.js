import React, { useState, useEffect } from "react";
import LoadingSvg from "../../loading.svg";
import Form from "./Form";
// import List from './List';
import Table from "./Table";

function FetchingApp() {
  const [items, setItems] = useState([]);
  const [reqType, setReqType] = useState("users");
  const [error, setError] = useState(null);
  const JSON_API_URL = "https://jsonplaceholder.typicode.com";

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const response = await fetch(`${JSON_API_URL}/${reqType}`);
        // if(!response.ok) throw Error("Something is wrong at somewhere...")
        const data = await response.json();
        setItems(data);
        console.log("items array --> \n ", items);
      } 
      
      catch (err) {
        setError(err.message);
      }
    };

    fetchingData();
  }, [reqType]);
  
  return (
    <div>
      {error == !null ? (
        <img src={LoadingSvg} alt="loading-svg" />
      ) : (
        <>
          <Form reqType={reqType} setReqType={setReqType} />
          {/* <List items={items} /> */}
          <Table items={items} />
        </>
      )}
    </div>
  );
}

export default FetchingApp;
