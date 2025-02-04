import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { DropdownMenuIcon } from "@radix-ui/react-icons";
import { Ghost, Menu, MenuIcon, UsbIcon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 w-full z-50">
      <div className=" w-full bg-background to-transparent dark:bg-background"></div>
      <Dock className="w-full pointer-events-auto relative mx-auto flex justify-between min-h-full h-full items-center px-1 bg-background ">

        {/* {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))} */}
        <Link href={"/#home"} className="flex items-center">
          <UsbIcon className="size-5" />
        </Link>
        <div className="flex items-center gap-2">
          <Separator orientation="vertical" className="h-full" />
          {/* {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12"
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))} */}
          <Separator orientation="vertical" className="h-full py-2" />
          <div className="flex gap-1">
            <Tooltip>
              <TooltipTrigger asChild>
                <ModeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="hover:bg-accent hover:text-accent-foreground h-9 w-9 rounded-full flex justify-center items-center">

                <MenuIcon strokeWidth={2} size={16} />

              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link href="/#about">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer my-1"><Link href="/#work">Work</Link></DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer my-1"><Link href="/#work">Projects</Link></DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer my-1"><Button className="text-xs h-8">
              Download Resume
            </Button></DropdownMenuItem>
                
              </DropdownMenuContent>
            </DropdownMenu>

          </div>

        </div>

      </Dock>
    </div>
  );
}
