import "./assets/tailwind/index.css";
import "./assets/global.css";
import { K2D } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const k2d = K2D({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Home page",
  description: "oz-store every thing you need",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      </head>
      <body className={k2d.className + " custom_scroll"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
