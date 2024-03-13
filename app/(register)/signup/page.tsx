"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const SignUp = () => {
  const router = useRouter();

  const [error, setError] = useState<string>("");
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    return setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (!user.name || !user.username || !user.email || !user.password) {
        setError("Please fill all the fields");
        return;
      }

      await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      }).then(async (res) => {
        if (res.status === 200 || res.status === 201) {
          router.push("/signin");
          setError("");
        }
      });
    } catch {
      setError("Something went wrong");
    } finally {
      setUser({
        name: "",
        username: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <main className="main-page-section flex justify-center items-center min-h-screen">
      <div className="bg-light flex flex-col gap-y-4 items-center border border-light-3 py-14 px-10 rounded-xl mb-8 max-w-[400px] shadow shadow-gray-1/30">
        <UserCircleIcon className="w-10 h-10 text-primary" />
        <h2 className="text-xl text-gray-1 font-medium">Crea una cuenta</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            className="input-register-form mt-4"
          />
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={user.username}
            onChange={handleInputChange}
            className="input-register-form"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            className="input-register-form"
          />
          <div className="flex gap-2">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={user.password}
              onChange={handleInputChange}
              className="input-register-form"
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="input-register-form"
            />
          </div>
          <Button className="w-full mt-4">Registrarse</Button>
        </form>
        <div className="flex gap-2 items-center w-full">
          <hr className="border-light-3 w-full" />
          <p className="text-sm text-gray-3">O</p>
          <hr className="border-light-3 w-full" />
        </div>
        <Button
          className="w-full"
          onClick={() => signIn("google")}
          variant="outline"
        >
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/google.png"
              alt="Google"
              width={20}
              height={20}
            />
            Registrate con Google
          </div>
        </Button>
        <p className="text-sm text-gray-2">
          ¿Ya tienes una cuenta?{" "}
          <Link href="/signin" className="text-primary font-medium">
            ingresar
          </Link>
          .
        </p>
        {error !== "" && <p className="error-span">{error}</p>}
      </div>
    </main>
  );
};

export default SignUp;
