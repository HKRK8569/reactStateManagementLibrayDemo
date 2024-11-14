import zustandLogo from "@/assets/zustand.svg";
import jotaiLogo from "@/assets/jotai.svg";
import recoilLogo from "@/assets/recoil.svg";
import { Link } from "react-router-dom";
import { PAGES } from "@/routes/Pages";

type Props = {
  img: string;
  alt: string;
  href: string;
};

const links = [
  {
    img: zustandLogo,
    alt: "zustand logo",
    href: PAGES.ZUSTAND,
  },
  {
    img: jotaiLogo,
    alt: "jotai logo",
    href: PAGES.JOTAI,
  },
  {
    img: recoilLogo,
    alt: "recoil logo",
    href: "/",
  },
];

const LogoPageLink: React.FC<Props> = ({ img, alt, href }: Props) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Link to={href}>
        <div className="h-52">
          <img src={img} className="w-full h-full" alt={alt} />
        </div>
      </Link>
    </div>
  );
};

const LogoPageLinks: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-10 mt-10 px-4">
      {links.map((link) => {
        return <LogoPageLink img={link.img} alt={link.alt} href={link.href} />;
      })}
    </div>
  );
};

export default LogoPageLinks;
