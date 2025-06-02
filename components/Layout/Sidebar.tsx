"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import {
  IconArrowLeft,
  IconSettings,
  IconUserBolt,
  IconBrandTabler,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function SidebarDemo({ children }: { children: React.ReactNode }) {
  const links = [
    {
      label: "NewChat",
      href: "/Chat",
      icon: <IconBrandTabler className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />,
    },
    {
      label: "ChatLogs",
      href: "/Chatlogs",
      icon: <IconUserBolt className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />,
    },
    {
      label: "Metrics",
      href: "/Metrics",
      icon: <IconSettings className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />,
    },
    // {
    //   label: "Settings",
    //   href: "#",
    //   icon: <IconSettings className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />,
    // },
    {
      label: "Logout",
      href: "/",
      icon: <IconArrowLeft className="h-5 w-5 shrink-0 text-white dark:text-neutral-200" />,
    },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "mx-auto flex w-full  flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-white md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-6">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-4 flex flex-col gap-3">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link}/>
              ))}
            </div>
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Pavan Kumar",
                href: "#",
                icon: (
                  <img
                    src="/boy.jpg"
                    className="h-6 w-6 shrink-0 rounded-full"
                    width={40}
                    height={40}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Here's the new part */}
      <div className="flex flex-1 overflow-hidden">
        {children}
      </div>
    </div>
  );
}

export const Logo = () => {
  return (
    <a href="#" className="relative z-20 flex items-center space-x-2 py-1 text-xs font-normal text-white">
      <img src="/logo.png" alt="Logo" className="h-7 w-auto" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium whitespace-pre text-white text-xs"
      >
      </motion.span>
    </a>
  );
};

export const LogoIcon = () => {
  return (
    <a href="#" className="relative z-20 flex items-center space-x-2 py-1 text-xs font-normal text-white">
      <img src="/neo_logo.png" alt="Logo Icon" className="h-5 w-auto" />
    </a>
  );
};
