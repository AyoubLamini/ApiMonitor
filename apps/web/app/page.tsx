"use client";
import { Button } from "./Components/ui/button";
import TrustedBy from "./Components/TrustedBy";
import { useRouter } from "next/navigation";
import Header from "./Components/header";

export default function Home() {
  const router = useRouter();
  return (
    <>
    <Header />
    <main className="h-screen w-full">
      {/* text + button + image */} 
    <div className="h-[80vh] bg-land-primary flex justify-around overflow-hidden">
      <div className="justify-center flex flex-col ml-20">
        <div> 
          <h1 className="text-4xl font-bold text-white">Your <span className="text-yellow-500">Free</span> <br /> <span className="text-primary"> Api Monitoring </span>tool </h1>
        </div>
        <div>
          <Button className="mt-4 cursor-pointer" onClick={() => router.push("/monitoring")}>Start monitoring your APIs now!</Button>
        </div>
      </div>
      <div className="hidden md:flex items-end justify-end -mr-130 -mb-4" >
        <img src="https://uptimerobot.com/assets/images/home-hero-full3x.png" alt="Illustration" className="mt-8 w-230 h-145 " />
       </div>
    </div>    
    {/* companies */} 
    <div className="h-[20vh] bg-card/95">
    <TrustedBy />
    </div>
    </main>
    </>
  );
}
