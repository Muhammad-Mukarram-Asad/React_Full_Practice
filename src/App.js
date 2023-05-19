import "./index.css";
import Lists from "./components/Lists";
import Footer from "./components/Footer";

import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";
import apiRequest from "./components/ApiRequest";
import LoadingSvg from "./loading.svg"

// Project Components Below:

// import SquareComponent from "./components/project_folder/SquareComponent";
// import InputComponent from "./components/project_folder/InputComponent";

import { useEffect, useState } from "react";

function App() {
  const API_URL = "http://localhost:3500/items";
  // const [colorValue, setColorValue] = useState("");
  // const [isDarkText, setIsDarkText] = useState(false);
  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState("");
  const [searchItem, setSearchItem] = useState("");

  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [items, setItems] = useState(JSON.parse(localStorage.getItem("Shopping_List"))||[]);

  // useEffect Hook:

  useEffect(() => {
    // console.log("Rendered Everytime if there is no dependency list.")
    // console.log("Only rendered when there is some change in items's array...")
    // localStorage.setItem("Shopping_List", JSON.stringify(items));

    // This below is the fetch method which takes the api data and perform crud operations:
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Did not receive expected data");
        const listItems = await response.json();
        console.log(listItems);
        
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        // console.log("Error Occurred --> ", err.message);
        setFetchError(err.message);
      } finally {
        setLoading(false);
      }
    };

    setTimeout(() => {
      (async () => {
        fetchItems();
      })();
    }, 3000);
  }, []);

  // const setAndSaveItems = (newItems) => {
  //   setItems(newItems);
  //   localStorage.setItem("Shopping_List", JSON.stringify(newItems));
  // };

  const handleChange = async (id) => {
    // Applying map method on the items array for checking the checked status.
    // If an element is checked then we should able to change its state means we can
    // un-checked it and vice-versa.

    let items_array = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(items_array);

    // Below is the CRUD update functionality:
    const myUpdateItem = items_array.filter((item) => item.id === id);

    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: myUpdateItem[0].checked }),
    };

    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) 
    {
      console.log("Updation Method Result is as follows: \n", result)
      setFetchError(result);
    }
  };

  const handleDelete = async (id) => {
    let filter_array = items.filter((inner_item) => inner_item.id !== id);
    setItems(filter_array);

    // Delete Method Below:
    const deleteOptions = {
      method: "DELETE",
    };

    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) 
    {
      console.log("Deletion Method Result is as follows: \n", result)
      setFetchError(result);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return; // means if there is no new item then simply does nothing.
    addItem(newItem); // calling the below function
    setNewItem("");
  };

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, text: item };
    let dummy_array = [...items, myNewItem];
    setItems(dummy_array);

    // CRUD Operation on API:

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(myNewItem),
    };
    const result = await apiRequest(API_URL, postOptions);

    if (result) setFetchError(result);
  };

  // Return Statement of App.js Below:
  return (
    <div className="App">
      <h1>Welcome to Groceries Super Store!!!</h1>

      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />

      <SearchItem search={searchItem} setSearchItem={setSearchItem} />
      {loading && <img src={LoadingSvg} alt="loading_svg" />}
      {fetchError && <p style={{ color: "red" }}> {`Error: ${fetchError}`} </p>}

      {!fetchError && !loading && (
        <Lists
          // item={items}
          items={items.filter((innerItem) =>
            innerItem.text.toLowerCase().includes(searchItem.toLowerCase())
          )}
          handleChange={handleChange}
          handleDelete={handleDelete}
        />
      )}

      <Footer length={items.length} />

{/* 1st Project Code Below: */}
      {/* <SquareComponent colorValue={colorValue} isDarkText={isDarkText} />
  
        <InputComponent
          colorValue={colorValue}
          setColorValue={setColorValue}
          isDarkText={isDarkText}
          setIsDarkText={setIsDarkText}
        /> */}
    </div>
  );
}

export default App;

// npm i react-icons -D
// npm i colornames -s --> production dependency
