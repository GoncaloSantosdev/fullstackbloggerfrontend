import React from "react";

const BlogsPage = (props) => {
  return (
    <div className="section__blogs">
      <h1 style={{ display: "flex", justifyContent: "center" }}>Blogs Page</h1>
        <select value={props.sortField} onChange={(e) => {
            const value = e.target.value;
            props.setSortField(value);
          }}
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="createdAt">Generated</option>
        </select>
        <select value={props.sortOrder} onChange={(e) => {
            const value = e.target.value;
            props.setSortOrder(value);
          }}
        >
          <option value="ASC">Ascend</option>
          <option value="DESC">Descend</option>
        </select>

        <h3>Filter Field</h3>
        <select value={props.filterField} onChange={(e)=> {
          const value = e.target.value;
          props.setFilterField(value)
        }}
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>

        <h3>Filter Value</h3>
        <input type="text" value={props.filterValue} onChange={(e) => {
            const value = e.target.value;
            props.setFilterValue(value);
          }}>
        </input>

        <h3>Limit</h3>
        <input type="number" value={props.limit} onChange={(e) => {
            const value = e.target.value;
            props.setLimit(value);
          }}>
        </input>

        <h3>Page</h3>
        <input value={props.page} onChange={(e) => {
            const value = e.target.value;
            props.setPage(value);
          }}></input>

          {props.serverJSON.map((blog, index) => {
          return (
            <div key={`${blog}-${index}`} style={{ display: "flex",}}>
              Id: {blog.id}
              <br></br>
              Title : {blog.title}
              <br></br>
              Author : {blog.author}
              <br></br>
              Text: {blog.text}
              <br></br>
              {blog.createdAt}
            </div>
          );
        })}
    </div>
  );
};

export default BlogsPage;