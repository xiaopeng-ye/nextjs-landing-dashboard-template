import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import Link from "next/link";
import Logo from "@/components/sections/logo";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 max-md:flex-col sm:px-6 sm:py-6 md:gap-6 md:py-8">
        <a href="/">
          <div className="flex items-center gap-3">
            <Logo className="gap-3" />
          </div>
        </a>

        <div className="flex items-center gap-5 whitespace-nowrap">
          <Link href="#">About</Link>
          <Link href="#">Features</Link>
          <Link href="#">Works</Link>
          <Link href="#">Career</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="#">
            <FacebookIcon className="size-5" />
          </Link>
          <Link href="#">
            <InstagramIcon className="size-5" />
          </Link>
          <Link href="#">
            <TwitterIcon className="size-5" />
          </Link>
          <Link href="#">
            <YoutubeIcon className="size-5" />
          </Link>
        </div>
      </div>

      <Separator />

      <div className="mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6">
        <p className="text-center font-medium text-balance">
          {`©${new Date().getFullYear()}`}{" "}
          <Link href="#">Next.js Shadcn and Shadcn/studio </Link>, Made with ❤️
          for better web.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
