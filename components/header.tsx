import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import SL_Logo from "@/public/Logo/SL_Transparent_Logo.png";
import SL_Logo_Name from "@/public/Logo/Logo_name.png";
import { cn } from "@/lib/utils";
import ThemeToggle from "./theme/theme-toggle";

export function Header(params: HeaderParams) {
  const { href, type } = params;
  return (
    <header
      className={cn("border-b md:px-5", type === "SignIn" && "ani-fadeDown")}
    >
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src={SL_Logo} alt="Logo" width={48} height={48} />
          <Image
            src={SL_Logo_Name}
            alt="Logo"
            width={180}
            height={180}
            className="hidden md:block"
          />
        </Link>
        <div className="flex justify-center items-center gap-5">
          <Button asChild>
            <Link href={href}>{type}</Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
