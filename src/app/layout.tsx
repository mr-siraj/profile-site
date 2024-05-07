import type { Metadata } from "next";
import { Exo, Jersey_20_Charted } from "next/font/google";
import "./globals.scss";

const exo = Exo({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Zlaam",
  description:
    "I am Zlaam, a dedicated and skilled full-stack web app developer with several years of hands-on experience. My true passion lies in transforming concepts into tangible digital solutions, and I wholeheartedly embrace new challenges that come my way. I am proficient in languages such as JavaScript and Python, and I specialize in creating dynamic and responsive web applications. My goal is to continue pushing the boundaries of innovation in the ever-evolving field of web development. ",
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
      <body className={exo.className + "font-normal"}>{children}</body>
    </html>
  );
}
