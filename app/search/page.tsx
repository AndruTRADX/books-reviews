"use client";

import BookCard from "@/components/cards/BookCard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const SearchBooks = () => {
  const [query, setQuery] = useState({
    query: "",
  });
  const [books, setBooks] = useState([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/booksearch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });
    const data = await response.json();
    setBooks(data);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setQuery((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="flex flex-col gap-6 px-4 py-8">
      <h2 className="font-semibold text-xl text-gray-800">
        Puedes buscar por título, categoria o autor
      </h2>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          placeholder="busca tu libro..."
          name="query"
          value={query.query}
          onChange={handleInputChange}
        />
        <button className="bg-primary py-2 px-4 rounded-r-lg hover:bg-primary/90 transition-colors">
          <MagnifyingGlassIcon className="w-5 h-5 text-white font-bold" />
        </button>
      </form>

      <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-start">
          {books.length === 0 ? (
            <p className="no-result">No books found :(</p>
          ) : (
            <>
              {books.map((post) => (
                <BookCard book={post} key={post._id} />
              ))}
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default SearchBooks;
