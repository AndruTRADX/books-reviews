"use client";

import Link from "next/link";

import { BookOpenIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { Session } from "next-auth";
import { Button } from "./ui/button";
import { signOut } from "next-auth/react";

const Navbar = ({ session }: { session: Session | null }) => {
  const router = useRouter();

  return (
    <nav
      className="flex justify-center bg-white/75 backdrop-blur-md sticky border-b border-gray-200
    top-0 w-full py-5 z-50"
    >
      <div className="flex px-6 max-w-screen-lg justify-between w-full">
        <Link
          href="/"
          className="flex justify-center items-center gap-1 cursor-pointer"
        >
          <BookOpenIcon className="w-7 h-7 text-primary" />
        </Link>

        <ul className="flex items-center gap-x-8 text-sm font-medium ">
          <Link href="/" className="li-decoration-navbar hidden sm:block">
            Home
          </Link>
          <Link href="/blogs" className="li-decoration-navbar hidden sm:block">
            Blogs
          </Link>
          <Link
            href="/courses"
            className="li-decoration-navbar hidden sm:block"
          >
            Courses
          </Link>
        </ul>

        {session ? (
          <div className="flex items-center gap-2">
            <Button onClick={() => router.push("/profile")}>Perfil</Button>
            <Button variant="destructive" onClick={() => signOut()}>
              Cerrar sesión
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Button onClick={() => router.push("/signin")}>Ingresar</Button>
            <Button variant="outline" onClick={() => router.push("/signup")}>
              Registrarse
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
