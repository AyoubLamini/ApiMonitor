import Providers from "./providers";
import { ThemeSync } from "./Components/theme-sync";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", geist.variable)}>
      <ThemeSync />
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Api Watch</title>
      </head>
      <body>
      <main>
        <Providers>{children}</Providers>       
      </main>
      </body>
    </html>
  );
}
