import localFont from "next/font/local";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const Montcerrat = localFont({
  src: [
    {
      path: "./fonts/Montserrat/static/Montserrat-Black.ttf",
      weight: "900",
      style: "black",
    },
    {
      path: "./fonts/Montserrat/static/Montserrat-Bold.ttf",
      weight: "700",
      style: "bold",
    },
    {
      path: "./fonts/Montserrat/static/Montserrat-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./fonts/Montserrat/static/Montserrat-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/Montserrat/static/Montserrat-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Montserrat/static/Montserrat-Light.ttf",
      weight: "300",
      style: "light",
    },
  ],
});

export const metadata = {
  title: "Городские АЗС СИТИОЙЛ",
  description: "Будь в ритме города!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${Montcerrat.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
