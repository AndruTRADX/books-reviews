import { getAllBooks } from "@/actions/book.actions";
import BookCard from "@/components/cards/BookCard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const result = await getAllBooks(
    searchParams.page ? +searchParams.page : 1,
    12
  );

  return (
    <article className="flex min-h-full w-full flex-col py-8 px-4 gap-y-12">
      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-xl text-gray-800">
          Encuentra el libro que deseas
        </h2>
        <form className="flex">
          <input
            type="text"
            className="search-input"
            placeholder="busca tu libro..."
          />
          <button className="bg-primary py-2 px-4 rounded-r-lg hover:bg-primary/90 transition-colors">
            <MagnifyingGlassIcon className="w-5 h-5 text-white font-bold" />
          </button>
        </form>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-semibold text-xl text-gray-800">
          Libros destacados
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {result.books.length === 0 ? (
            <p className="no-result">No books found :(</p>
          ) : (
            <>
              {result.books.map((post) => (
                <BookCard book={post} key={post._id} />
              ))}
            </>
          )}
        </div>
      </div>
    </article>
  );
}
