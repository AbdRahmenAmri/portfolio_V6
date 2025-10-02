import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "lucide-react";

export default function Footer() {


  return (
    <footer className="w-full bg-gradient-to-t from-primary/[1%] to-transparent">
      <div className="container mx-auto flex flex-row items-center justify-center py-6 gap-2">
      <Link
          href="mailto:abdrahmen.3amri@gmail.com"
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"} className="flex flex-row items-center gap-2" dir="ltr">
            <MailIcon className="h-4 w-4 md:mr-2" />
            <span className="hidden md:flex">abdrahmen.3amri@gmail.com</span>
          </Button>
        </Link>
        <Link
          href="tel:+21651543503"
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"} className="flex flex-row items-center gap-2" dir="ltr">
            <PhoneIcon className="h-4 w-4 md:mr-2" />
            <span className="hidden md:flex">+216 51 543 503</span>
          </Button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/abdrahmen"
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"} className="flex flex-row items-center gap-2" dir="ltr">
            <LinkedinIcon className="h-4 w-4 md:mr-2" />
            <span className="hidden md:flex">LinkedIn</span>
          </Button>
        </Link>
        <Link
          href="https://github.com/AbdRahmenAmri"
          passHref
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          <Button variant={"outline"} className="flex flex-row items-center gap-2" dir="ltr">
            <GithubIcon className="h-4 w-4 md:mr-2" />
            <span className="hidden md:flex">GitHub</span>
          </Button>
        </Link>
      </div>
      <div className="h-1 bg-[radial-gradient(closest-side,#8486ff,#42357d,#5d83ff,transparent)] opacity-50" />
    </footer>
  );
}
