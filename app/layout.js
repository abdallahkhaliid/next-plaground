import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import { Josefin_Sans } from "next/font/google";

import "@/app/_styles/globals.css";
import Header from "./_components/Header";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome to The Wild Oasis",
  },

  description: "Where nature's beauty and comfortable living blend seamlessly.",

  favicon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased flex flex-col min-h-screen bg-primary-950 text-primary-100 ${josefin.className} re`}
      >
        <Header />

        <div className="grid flex-1 px-8 py-12 ">
          <main className="w-full mx-auto max-w-7xl">{children}</main>
        </div>

        <footer className="px-8 py-5 text-center border-t ">
          Copyright &copy; by The Wild Oasis
        </footer>
      </body>
    </html>
  );
}
