import { getCurrentUser } from "@/actions/getCurrentUser";
import { findUser } from "@/actions/user.actions";
import DeleteReview from "@/components/forms/DeleteReview";
import { ReviewTypeOutside } from "@/models/review";

const UserProfile = async () => {
  const currentUser = await getCurrentUser();
  const user = await findUser(currentUser?.user?.email as string);

  return (
    <article className="flex flex-col p-4 gap-4">
      <h2 className="text-lg font-semibold text-gray-800 pb-16 pt-4">
        Hola <span className="text-primary">{user.name}</span>, un placer volver
        a verte!
      </h2>

      <h2 className="text-lg font-semibold text-gray-800">
        Información Personal
      </h2>

      <div className="flex flex-col gap-1 pl-2">
        <p className="text-sm font-semibold text-primary">Username:</p>
        <h2 className="font-semibold text-lg text-gray-800">{user.username}</h2>
      </div>

      <div className="flex flex-col gap-1 pl-2">
        <p className="text-sm font-semibold text-primary">Email:</p>
        <h2 className="font-semibold text-lg text-gray-800">{user.email}</h2>
      </div>

      <div className="flex flex-col text-lg gap-2 pl-2">
        <h2 className="text-sm font-semibold text-primary">
          Tus reseñas recientes
        </h2>
        {user.reviews === 0 ? (
          <p className="text-sm text-gray-600">No hay reseñas por ahora :(</p>
        ) : (
          <ul className="flex flex-col">
            {user.reviews.map((item: ReviewTypeOutside) => (
              <li key={item.id} className="flex items-center text-sm gap-x-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <p className="text-gray-800">{item.text}:</p>
                <p className="text-primary">{item.score}/5</p>
                <DeleteReview id={item.id} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};

export default UserProfile;
