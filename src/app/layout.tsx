import "@/assets/styles/globals.css";
import { type Metadata } from "next";
import { cormorant } from "@/assets/fonts";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Brown Patience | Let's Complete Your Book",
  description:
    "Get to write your book, and finally share your message. Work with a ghostwriter and book editor to flesh out your thoughts — clearly, compellingly.",
  keywords:
    "Brown Patience, Creative writing, Content writing, Ghostwriting, Writing & Editing, Book reviews, Book editor, Author interviews, Transcription, Blogging, Writing tips, Writing seminar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cormorant.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
