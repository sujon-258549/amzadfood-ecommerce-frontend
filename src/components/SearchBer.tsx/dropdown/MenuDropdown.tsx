"use client";

import { usePathname } from "next/navigation";
import { BarChart3, Zap, Shield, Puzzle, RefreshCw, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import clsx from "clsx";

const navItems = [
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Zap, label: "Engagement", href: "/engagement" },
  { icon: Shield, label: "Security", href: "/security" },
  { icon: Puzzle, label: "Integrations", href: "/integrations" },
  { icon: RefreshCw, label: "Automations", href: "/automations" },
] as const;

export function MenuDropdown() {
  const pathname = usePathname();

  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <button className="flex items-center gap-3 rounded-full p-1 transition-all hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
          <Avatar className="h-9 w-9 ring-2 ring-white/20">
            <AvatarImage src="/avatar.jpg" alt="User" />
            <AvatarFallback className="">
              <Menu />
            </AvatarFallback>
          </Avatar>
        </button>
      </HoverCardTrigger>

      <HoverCardContent
        sideOffset={12}
        align="end"
        className="w-60 p-0  bg-white/95 border backdrop-blur-xl shadow-2xl"
      >
        {/* Navigation Menu */}
        <nav className="p-2">
          {" "}
          {/* Reduced from p-3 to p-2 */}
          {navItems.map(({ icon: Icon, label, href }) => {
            const isActive = pathname.startsWith(href);

            return (
              <a
                key={label}
                href={href}
                className={clsx(
                  "group relative flex items-center gap-3 rounded-xl px-3 py-2 transition-all", // Reduced padding: px-4→px-3, py-3→py-2
                  isActive
                    ? "bg-gray-100 text-black"
                    : "text-gray-700 hover:bg-gray-100 hover:text-black"
                )}
              >
                <div
                  className={clsx(
                    "flex size-8 items-center justify-center rounded-lg transition-colors", // Reduced from size-10 to size-8
                    isActive
                      ? "bg-gray-200"
                      : "bg-gray-100 group-hover:bg-gray-200"
                  )}
                >
                  <Icon
                    className={clsx(
                      "size-4 transition-colors", // Reduced from size-5 to size-4
                      isActive
                        ? "text-black"
                        : "text-gray-600 group-hover:text-black"
                    )}
                    strokeWidth={1.8}
                  />
                </div>
                <span className="font-medium text-sm">{label}</span>{" "}
                {/* Added text-sm for smaller text */}
                {isActive && (
                  <div className="absolute inset-y-2 right-3 w-1.5 rounded-full bg-violet-500" />
                )}
              </a>
            );
          })}
        </nav>
      </HoverCardContent>
    </HoverCard>
  );
}
