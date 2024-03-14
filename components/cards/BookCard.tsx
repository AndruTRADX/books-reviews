import { BookType } from "@/types";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface Props {
  book: BookType;
}

const BookCard = ({ book }: Props) => {
  return (
    <Link href={`/book/${book.id}`} className="bento-grid-child group">
      <div className="flex justify-between items-center gap-x-8 ">
        <h3 className="header-md-linked">{book.title}</h3>
        <div className="w-5 h-5 flex">
          <ArrowUpRightIcon className="icon-def" />
        </div>
      </div>
      <p className="flex gap-x-1 items-center">
        <span className="text-primary group-hover:text-primary/90 text-sm font-medium">
          {book.author}
        </span>
      </p>
      <p className="text-gray-600 text-sm">{book.summary}</p>
      <p className="span-badge">{book.category}</p>
    </Link>
  );
};

export default BookCard;
