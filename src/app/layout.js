import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400','500','700','800','900'],
});
export const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "Dragon News",
  description: "Best news portal in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en" className={`h-full antialiased`}>
          <body
              className={`w-10/12 mx-auto min-h-full flex flex-col ${poppins.className}`}
          >
              {children}
              <ToastContainer />
          </body>
      </html>
  );
}
