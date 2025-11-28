import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

export function DashboardFooter() {
  return (
    <footer>
      <div className="text-muted-foreground mx-auto flex size-full max-w-7xl items-center justify-between gap-3 px-4 py-3 max-sm:flex-col sm:gap-6 sm:px-6">
        <p className="text-sm text-balance max-sm:text-center">
          {`©${new Date().getFullYear()}`}{" "}
          <Link href="#" className="text-primary">
            Shadcn/studio
          </Link>
          , Made for better web design
        </p>
        <div className="flex items-center gap-5">
          <Link href="#">
            <FacebookIcon className="size-4" />
          </Link>
          <Link href="#">
            <InstagramIcon className="size-4" />
          </Link>
          <Link href="#">
            <LinkedinIcon className="size-4" />
          </Link>
          <Link href="#">
            <TwitterIcon className="size-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
