import { Lusitana, Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
});

export const lusitana = Lusitana({ subsets: ["latin"], weight: ["400"] });
