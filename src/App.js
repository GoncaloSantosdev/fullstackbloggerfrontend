import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import BlogsPage from "./Pages/Blogs";
import React from "react";

import "./App.css";

const urlEndpoint = "http://localhost:4000";

const App = (props) => {
  const [serverJSON, setServerJSON] = useState([]);
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("ASC");
  const [filterField, setFilterField] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);


  // Fetch Data from the database
  useEffect(() => {
    const fetchData = async () => {
      const apiResponse = await fetch(`${urlEndpoint}/blogs/all-blogs?sortField=${sortField}&sortOrder=${sortOrder}&filterField=${filterField}&filterValue=${filterValue}&limit=${limit}&page=${page}`);
      const apiJSON = await apiResponse.json();
      setServerJSON(apiJSON);
      return;
    };

    fetchData();
  }, [sortField, sortOrder, filterField, filterValue, limit, page]);

  return (
    <div className="app">
      <header className="app-header">
        <Routes>
          <Route
            path="/blogs"
            element=
            {<BlogsPage 
            serverJSON={serverJSON}
            setServerJSON={setServerJSON}

            sortField={sortField}
            setSortField={setSortField}

            sortOrder={sortOrder}
            setSortOrder={setSortOrder}

            filterField={filterField}
            setFilterField={setFilterField}

            filterValue={filterValue}
            setFilterValue={setFilterValue}

            limit={limit}
            setLimit={setLimit}

            page={page}
            setPage={setPage}
            />}
          />
        </Routes>
      </header>
    </div>
  );
};

export default App;