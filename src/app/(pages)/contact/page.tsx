import Link from "next/link";
import {} from "react";
import { BsMessenger } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io5";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
function ContactPage() {
  const contactLinks = [
    {
      Icon: MdEmail,
      IconName: "Email",
      path: `mailto:zlaam.dev@gmail.com`,
    },
    {
      Icon: BsMessenger,
      IconName: "Messenger",
      path: `https://www.facebook.com/messages/t/100052341221564`,
    },
    {
      Icon: FaLinkedin,
      IconName: "LinkedIn",
      path: `https://www.linkedin.com/in/mr-zlaam-29b944296/`,
    },
    {
      Icon: IoLogoGithub,
      IconName: "Github",
      path: `https://github.com/mr-zlaam`,
    },
    {
      Icon: IoLogoTwitter,
      IconName: "Twitter",
      path: `https://twitter.com/mr_zlaam`,
    },
  ];
  return (
    <>
      <h1 className=" flex items-center justify-center h-10 text-center sm:text-2xl text-xl ">
        <Link href={"/terms_&_conditions"} className="link_dark">
          Read This Before Contact
        </Link>
      </h1>
      <section className="animate-page'">
        <div className="w-fit mx-auto my-4">
          {contactLinks.map((data) => {
            return (
              <div
                key={data.IconName}
                className="flex gap-4 sm:my-10 my-5 items-center"
              >
                <span className="sm:text-4xl text-2xl  ">
                  <data.Icon />
                </span>
                <Link
                  className="link_dark my-2 sm:text-4xl text-2xl font-semibold"
                  href={data.path}
                >
                  {data.IconName}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default ContactPage;
export const metadata = {
  title: "Zlaam | Contact",
  description: "",
  creator: "mr-zlaam",
  publisher: "mr-zlaam",
};
