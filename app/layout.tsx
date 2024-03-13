import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { getCurrentUser } from "@/actions/getCurrentUser";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reseñas de libros",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>{
        <div className="min-h-screen flex justify-center items-center">
          <main className="min-h-screen w-full max-w-screen-lg">
            <Navbar session={currentUser} />
            {children}
          </main>
        </div>
      }</body>
    </html>
  );
}
