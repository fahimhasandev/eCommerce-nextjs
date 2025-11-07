// ✅ Use Next.js Link (not the lucide icon)

import { EllipsisVertical, ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      {/* Desktop */}
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCartIcon /> Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in">
            <UserIcon />
            <span className="ml-2">Sign In</span>
          </Link>
        </Button>
      </nav>

      {/* Mobile */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-start">
            <SheetTitle>Menu</SheetTitle>
            <ModeToggle />
            <Button asChild variant="ghost">
              <Link href="/cart">
                <ShoppingCartIcon className="mr-2" />
                Cart
              </Link>
            </Button>
            <Button asChild>
              <Link href="/sign-in">
                <UserIcon className="mr-2" />
                Sign In
              </Link>
            </Button>
            <SheetDescription />
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
