import React, { Fragment, useState } from "react";
import styles from "./search.module.css";
import { BiSearchAlt } from "react-icons//bi";
import axios from "axios";

const Search = () => {
  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU" +
            "&maxResults=40"
        )
        .then((res) => {
          console.log(res.data.items);
          setData(res.data.items);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
    {<div div className={styles.backgroundSearch}>
    <div className={styles.searchDiv}>
      <h2 className={styles.TitlePage}>Book Searching App</h2>
      <div className="search">
        <input
          type="text"
          className={styles.search}
          name="search"
          placeholder="Enter A Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={searchBook}
        />
        <button className={styles.searchBtn}>
          {" "}
          <BiSearchAlt className={styles.searchLogo} />
        </button>
      </div>
    </div>
  </div>

    }
    {
        bookData.map((book)=>{
            return <div>
                {book.volumeInfo.title}
            </div>
        })
    }
      

      
    </>
  );
};

export default Search;


// <div className="container">{<Cards book={bookData} />}</div>