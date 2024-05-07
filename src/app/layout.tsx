import type { Metadata } from "next";
import Cursor from "@/utils/Cursor/Cursor";
import { Exo } from "next/font/google";
import "./globals.scss";
import { cn } from "../lib/utils";

const exo = Exo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Zlaam",
  description: `I ' M   MR ZLAAM
A full-stack developer fueled by a deep passion for crafting user-friendly and efficient web applications. With 2 years of experience under my belt, I've tackled a diverse range of projects – from streamlined landing pages that capture attention to complex web platforms that power intricate functionalities. Beyond the technical expertise, what truly excites me is the user experience. While I thrive in the problem-solving world of coding, I also value a good mental challenge outside of it. When I'm not coding, I enjoy Boxing & Chess. `,
  creator: "mr-zlaam",
  publisher: "mr-zlaam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(exo.className, "font-medium")}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
