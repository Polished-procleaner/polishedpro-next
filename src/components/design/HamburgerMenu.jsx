import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
  SheetFooter,
} from "../ui/sheet";
import { Button, buttonVariants } from "../ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#works", label: "Our Work" },
  { href: "/process", label: "Process" },
  { href: "/#testimonials", label: "Reviews" },
  { href: "/contact", label: "Contact us" },
];

export default function HamburgerMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      setOpen(false);
    }
  }, [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="theme" size="icon">
          <MenuIcon size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle />
          <SheetDescription />
        </SheetHeader>
        <nav className="grid flex-1 auto-rows-min gap-6 px-4">
          <ul className="flex flex-col items-center gap-4">
            {NAV.map((route) => (
              <li key={route.label}>
                <Link
                  href={route.href}
                  className={buttonVariants({
                    variant: "link",
                    className: "hover:text-theme-primary uppercase",
                  })}
                >
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <SheetFooter>
          <Button
            variant={"theme"}
            className={"gap-1"}
            onClick={() => router.push("/contact")}
          >
            <HiOutlineChatBubbleLeftRight className="size-5" />
            Get Quote
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
