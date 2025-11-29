"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  showHomeIcon?: boolean;
  homeHref?: string;
  className?: string;
  itemClassName?: string;
  activeClassName?: string;
  separatorClassName?: string;
}

const Breadcrumb = ({
  items,
  separator,
  showHomeIcon = false,
  homeHref = "/",
  className,
  itemClassName,
  activeClassName,
  separatorClassName,
}: BreadcrumbProps) => {
  const defaultSeparator = <ChevronRight className="w-3 h-3 text-gray-400" />;
  const separatorElement = separator || defaultSeparator;

  const allItems: BreadcrumbItem[] = showHomeIcon
    ? [{ label: "Home", href: homeHref, icon: Home }, ...items]
    : items;

  return (
    <nav
      className={cn(
        "flex items-center gap-2 text-xs sm:text-sm text-gray-600",
        className
      )}
      aria-label="Breadcrumb"
    >
      {allItems.map((item, index) => {
        const isLast = index === allItems.length - 1;
        const Icon = item.icon;

        return (
          <React.Fragment key={index}>
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-1 hover:text-primary text-sm md:text-[18px]  font-medium",
                  itemClassName
                )}
              >
               
                <span>{item.label}</span>
              </Link>
            ) : (
              <span
                className={cn(
                  "flex items-center gap-1",
                  isLast && "text-primary font-semibold",
                  isLast && activeClassName,
                  itemClassName
                )}
                aria-current={isLast ? "page" : undefined}
              >
                {Icon && <Icon className="w-3 h-3 sm:w-4 sm:h-4" />}
                <span>{item.label}</span>
              </span>
            )}
            {!isLast && (
              <span
                className={cn("flex items-center", separatorClassName)}
                aria-hidden="true"
              >
                {separatorElement}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;

