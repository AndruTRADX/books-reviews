import { getBook } from "@/actions/book.actions";
import { getCurrentUser } from "@/actions/getCurrentUser";
import PostReview from "@/components/forms/PostReview";
import { ReviewTypeOutside } from "@/models/review";

const Hi = async ({ params }: { params: { bookID: string } }) => {
  const { bookID } = params;

  const result = await getBook(bookID);
  const user = await getCurrentUser();

  return (
    <main className="flex flex-col px-4 py-8 gap-y-6">
      <div className="flex w-full justify-between gap-x-2">
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold text-gray-800">
            {result.title}
          </h2>
        </div>
        <p className="span-badge">{result.category}</p>
      </div>
      <p className="font-semibold text-primary">
        Author: <span className="text-gray-800">{result.author}</span>
      </p>
      <p className=" text-gray-600">{result.summary}</p>

      <h2 className="text-sm text-primary font-semibold">Reseñas:</h2>
      {result?.reviews?.length === 0 ? (
        <p className="text-sm text-gray-600">No hay reseñas por ahora :(</p>
      ) : (
        <ul className="flex flex-col gap-y-2">
          {result?.reviews?.map((item: ReviewTypeOutside) => (
            <li key={item.id} className="flex items-center text-sm gap-x-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <p className="text-gray-800">{item.text}:</p>
              <p className="text-primary">{item.score}/5</p>
            </li>
          ))}
        </ul>
      )}

      <h2 className="text-sm text-primary font-semibold">Crea una reseña</h2>
      {user ? (
        <PostReview bookID={bookID} />
      ) : (
        <p className="text-sm text-gray-600">
          Accede para poder crear tu reseña
        </p>
      )}
    </main>
  );
};

export default Hi;
