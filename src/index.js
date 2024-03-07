import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";
import  {books}  from "./books";
import  Book  from "./Book";

const BookList = () => {
  
  return (
      <>
        <h1 className="headding"> Amazon Best Seller</h1>
    <section className="bookList">
      {books.map((book,index) => {
        // const { img, title, author,id } = book;
        return <Book {...book} key={book.id} number={index}/>;
      })}
    </section>

      </>  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<BookList />);
