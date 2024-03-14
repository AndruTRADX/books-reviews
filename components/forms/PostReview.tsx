"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { createReview } from "@/actions/review.actions";

const PostReview = ({ bookID }: { bookID: string }) => {
  const [error, setError] = useState("");
  const [review, setReview] = useState({
    text: "",
    score: 0,
    bookID: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    return setReview((prev) => ({ ...prev, [name]: value, bookID: bookID }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!review.text || !review.bookID) {
        setError("Please fill all the fields");
        return;
      }

      await fetch("/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      })
    } catch {
      setError("Something went wrong");
    } finally {
      setReview({
        text: "",
        score: 0,
        bookID: "",
      });
    }
  };

  return (
    <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
      <label className="text-sm text-gray-600">Review</label>
      <input
        type="text"
        placeholder="Write your review"
        name="text"
        value={review.text}
        onChange={handleInputChange}
        className="w-full border border-gray-300 text-sm text-gray-800 p-2 rounded-lg focus:outline-primary"
      />

      <label className="text-sm text-gray-600">Rate (1 to 5)</label>
      <input
        type="number"
        min={0}
        max={5}
        placeholder="Write your review"
        name="score"
        value={review.score}
        onChange={handleInputChange}
        className="w-full border border-gray-300 text-sm text-gray-800 p-2 rounded-lg focus:outline-primary"
      />
      <Button>Subir</Button>
    </form>
  );
};

export default PostReview;
