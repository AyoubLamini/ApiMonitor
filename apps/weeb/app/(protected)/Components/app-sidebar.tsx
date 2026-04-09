"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Activity, AlertTriangle, Globe, Wrench, Bell } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/app/Components/theme-toggle";
import { LogOut } from 'lucide-react';

const navItems = [
  { title: "Monitoring", href: "/monitoring", icon: Activity },
  { title: "Incidents", href: "/incidents", icon: AlertTriangle },
  { title: "Status Pages", href: "/status-pages", icon: Globe },
  { title: "Maintenance", href: "/maintenance", icon: Wrench },
  {title: "Notification system", href: "/notification-system", icon: Bell}
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="px-4 ml-3 py-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          <span className="text-lg font-bold text-sidebar-foreground">
            Api Watch
          </span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href} className="pt-0 ml-3 mt-3 ">
                  <SidebarMenuButton className="pt-5 pb-5 hover:bg-special-primary transition-all duration-300 rounded-sm"
                    asChild
                    isActive={pathname === item.href}
                  >
                    <Link href={item.href}>
                      <item.icon className="size-4" />
                      <h1 className="text-md font-semibold ">{item.title}</h1>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="px-4 py-4">
        <div className="flex items-center justify-between">
          <LogOut className="size-4" />
          <span className="text-xs font-semibold mr-4">Logout</span>
        </div>
        {/* <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Theme</span>
          <ThemeToggle />
        </div> */}
      </SidebarFooter>
    </Sidebar>
  );
}
