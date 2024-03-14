"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const SearchBooks = () => {
  const [query, setQuery] = useState({
    query: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const books = await fetch("/api/booksearch", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(query),
    });

    console.log(await books.json());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    return setQuery((prev) => ({ ...prev, [name]: value }));
  };

  return (
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
  );
};

export default SearchBooks;
