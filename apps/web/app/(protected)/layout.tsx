"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./Components/app-sidebar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 min-h-screen bg-land-primary">
        <div className="flex items-center gap-2 px-4 py-3">
          {/* <SidebarTrigger /> */}
        </div>
        <div className="p-6">{children}</div>
      </main>
    </SidebarProvider>
  );
}
