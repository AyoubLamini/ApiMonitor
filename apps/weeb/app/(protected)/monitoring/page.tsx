"use client";

// import { ArrowUp } from 'lucide-react';
import { ShieldCheck } from 'lucide-react';
import { ShieldAlert } from 'lucide-react';
import { useState } from 'react';
import { is } from 'zod/v4/locales';
import { Card, CardHeader, CardContent, CardFooter } from '@/app/Components/ui/card';



export default function MonitoringPage() {
  const [isApiUp, setIsApiUp] = useState<boolean>(true); 
  const [status, setStatus] = useState<"Up" | "Down">("Up");
  const last24Hours = [
    { time: "00:00", status: "Up" },
    { time: "01:00", status: "Up" },
    { time: "02:00", status: "Down" },
    { time: "03:00", status: "Up" },
    { time: "04:00", status: "Up" },
    { time: "05:00", status: "Up" },
    { time: "06:00", status: "Up" },
    { time: "07:00", status: "Up" },
    { time: "08:00", status: "Up" },
    { time: "09:00", status: "Up" },
    { time: "10:00", status: "Up" },
    { time: "11:00", status: "Down" },
    { time: "12:00", status: "Up" },
    { time: "13:00", status: "Up" },
    { time: "14:00", status: "Up" },
    { time: "15:00", status: "Up" },
    { time: "16:00", status: "Up" },
    { time: "17:00", status: "Up" },
    { time: "18:00", status: "Up" },
    { time: "19:00", status: "Up" },
    { time: "20:00", status: "Up" },
    { time: "21:00", status: "Up" },
    { time: "22:00", status: "Up" },
    { time: "23:00", status: "Up" },
  ];

  return (
    <div className="p-4 ml-6 mr-6">
      <div className="flex flex-row items-center justify-left gap-2 ">
        {isApiUp ? (
          <div className="bg-primary rounded-[50%] w-12 h-12 animate-pulse">
            <ShieldCheck className="text-black relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" size={20} />
          </div>
        ) : (
          <div className="bg-red-500 rounded-[50%] w-12 h-12 animate-pulse">
            <ShieldAlert className="text-black relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" size={20} />
          </div>
        )}
       <div className="flex flex-col justify-center">
        <h1 className="text-2xl text-white font-bold">Website.com</h1>
        <p className="text-sm text-muted-foreground ">HTTP/S monitor for http://example.com/ </p>
          <div className="flex flex-row gap-3 mt-0.5">
            <span className="text-xs pl-2 pr-2 pt-1 pb-1 text-slate-300 border border-gray-700 rounded bg-gray-800">Client 1</span>
            <span className="text-xs pl-2 pr-2 pt-1 pb-1   text-slate-300 border border-gray-700 rounded bg-gray-800">Server Europe</span>
          </div>
      </div> 
      </div>
      <div className="mt-6 flex  justify-between gap-10 flex-col lg:flex-row">
        <div className="w-full   bg-gray-800 rounded-lg flex flex-col gap-1 pt-8 p-10">
          <p className="text-gray-200">Current status</p>
          <h1 className={`text-2xl font-bold ${isApiUp ? "text-primary" : "text-red-500"}`}>{status}</h1>
          <p className="text-gray-400 text-sm">Currently {status} for 5d, 4h, 22m</p>
        </div>
        <div className="w-full   bg-gray-800 rounded-lg flex flex-col gap-1 pt-8 p-10">
          <p className="text-gray-200">Last check</p>
          <h1 className={`text-2xl text-white font-bold`}>26 seconds ago</h1>
          <p className="text-gray-400 text-sm">Checked every 2 minutes</p>
        </div>
         <div className="w-full bg-gray-800 rounded-lg flex flex-col gap-1 pt-8 p-10">
          <p className="text-gray-200">Last 24 hrs</p>
        <div className="w-full h-7">
         <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMinYMid meet">
            {last24Hours.map((entry, index) => (
              <rect
                key={index}
                x={index * 40}
                y={0}
                width="25"
                height="80"
                fill={entry.status === "Up" ? "var(--primary)" : "#ef4444"}
                rx="10"
              />
              
            ))}
          </svg>
          </div>
          <p className="text-gray-400 text-sm">2 incidents 12m downtime</p>
        </div>
      </div>
      {/* <div className="mt-6">
        <h2 className="text-2xl text-white font-semibold mb-4">Uptime</h2>
        <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Uptime graph will go here</p>
        </div>
      </div> */}
    </div>
  );
}