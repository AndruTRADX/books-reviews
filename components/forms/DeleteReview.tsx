"use client";

import { TrashIcon } from "@radix-ui/react-icons";

const DeleteReview = ({ id }: { id: string }) => {
  return (
    <TrashIcon
      className="w-5 h-4 text-red-500 cursor-pointer"
      onClick={async () => {
        await fetch("/api/deletereview", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        });
      }}
    />
  );
};

export default DeleteReview;
