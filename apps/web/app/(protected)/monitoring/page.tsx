"use client";

// import { ArrowUp } from 'lucide-react';
import {ShieldCheck, ShieldAlert, ArrowDownToLine, ArrowUpToLine, ArrowDownUp, Bell, Settings  } from 'lucide-react';
import { useState } from 'react';
import { is } from 'zod/v4/locales';
import { Card, CardHeader, CardContent, CardFooter } from '@/app/Components/ui/card';
import { Button } from '@/app/Components/ui/button';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import  DatePicker  from '@/app/(protected)/Components/date-picker';
import { useSidebarStore } from "@/app/store/sidebar-store";



const formatXAxisTick = (value: any): string => {
  const date = new Date(Date.parse(value)).toString().substring(4, 15);
  const dayAndMonth = date.substring(0, 6);
  const year = date.substring(9, 11);
 const label = dayAndMonth +",'" + year;
  return `${label}`;
};
const formatYAxisTick = (value: any): string => {

  return `${value} ms`;
};


export default function MonitoringPage() {
  const [isApiUp, setIsApiUp] = useState<boolean>(true); 
  const [status, setStatus] = useState<"Up" | "Down">("Up");
  const open = useSidebarStore((s) => s.open);
  console.log(open);

  // Mock data

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


  // Mock response time data for the last 30 days

  const data = [
  { date: "2026-03-01", responseTime: 120 },
  { date: "2026-03-02", responseTime: 98 },
  { date: "2026-03-03", responseTime: 150 },
  { date: "2026-03-04", responseTime: 110 },
  { date: "2026-03-05", responseTime: 135 },
  { date: "2026-03-06", responseTime: 90 },
  { date: "2026-03-07", responseTime: 1440 },
  { date: "2026-03-08", responseTime: 140 },
  { date: "2026-03-09", responseTime: 105 },
  { date: "2026-03-10", responseTime: 800 },
  { date: "2026-03-11", responseTime: 740 },
  { date: "2026-03-12", responseTime: 95 },
  { date: "2026-03-13", responseTime: 130 },
  { date: "2026-03-14", responseTime: 145 },
  { date: "2026-03-15", responseTime: 100 },
  { date: "2026-03-16", responseTime: 155 },
  { date: "2026-03-17", responseTime: 115 },
  { date: "2026-03-18", responseTime: 140 },
  { date: "2026-03-19", responseTime: 165 },
  { date: "2026-03-20", responseTime: 105 },
  { date: "2026-03-21", responseTime: 125 },
  { date: "2026-03-22", responseTime: 150 },
  { date: "2026-03-23", responseTime: 135 },
  { date: "2026-03-24", responseTime: 460 },
  { date: "2026-03-25", responseTime: 160 },
  { date: "2026-03-26", responseTime: 120 },
  { date: "2026-03-27", responseTime: 322 },
  { date: "2026-03-28", responseTime: 110 },
  { date: "2026-03-29", responseTime: 130 },
  { date: "2026-03-30", responseTime: 150 },
];

  return (

      <div className='w-full'>
        <header className='pl-2'>
          <div className="flex flex-row items-center justify-between gap-2 ">
        <div className='flex flex-row items-center gap-3'>
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
        <div className="flex flex-row gap-2">
          <Button size="xs" className='bg-gray-800 text-gray-300 hover:bg-gray-700 cursor-pointer'> <Bell className="" size={16} /> Test notification</Button>
          <Button size="xs" className='bg-gray-800 text-gray-300 hover:bg-gray-700 cursor-pointer'> <Settings className="" size={16} /> Edit</Button>
        </div>
      </div>
      </header>

    <main className="w-full flex flex-col lg:flex-row gap-6 xl:gap-8 lg:gap-4">
      <section className={`w-full  flex flex-col gap-7  ${open ? "lg:w-[calc(82vw-16rem)]" : "lg:w-[82vw]"}`}>
      <div className=''> 
      <div className="mt-6 flex justify-between gap-6 xl:gap-8 lg:gap-4 flex-col lg:flex-row  ">
        <div className="w-full  bg-gray-800 rounded-lg flex flex-col gap-1 pt-8 p-10 lg:p-8  ">
          <p className="text-gray-200">Current status</p>
          <h1 className={`text-lg lg:text-sm xl:text-2xl font-bold  transition-all duration-300 ease-in-out ${isApiUp ? "text-primary" : "text-red-500"}`}>{status}</h1>
          <p className="text-gray-400 lg:text-xs xl:text-sm  transition-all duration-300 ease-in-out">Currently {status} for 5d, 4h, 22m</p>
        </div>
        <div className="w-full   bg-gray-800 rounded-lg flex flex-col gap-1 pt-8 p-10 lg:p-8  transition-all duration-300 ease-in-out">
          <p className="text-gray-200">Last check</p>
          <h1 className={`text-lg lg:text-sm xl:text-2xl text-white font-bold transition-all duration-300 ease-in-out`}>26 seconds ago</h1>
          <p className="text-gray-400 lg:text-xs xl:text-sm  transition-all duration-300 ease-in-out">Checked every 2 minutes</p>
        </div>
         <div className="w-full bg-gray-800 rounded-lg flex flex-col gap-1 pt-8 p-10 lg:p-8  transition-all duration-300 ease-in-out " >
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
          <p className="text-gray-400 lg:text-xs xl:text-sm">2 incidents 12m downtime</p>
        </div>
      </div>
      {/* <div className="mt-6">
        <h2 className="text-2xl text-white font-semibold mb-4">Uptime</h2>
        <div className="w-full h-64 bg-gray-800 rounded-lg flex items-center justify-center">
        <p className="text-gray-500">Uptime graph will go here</p>
        </div>
        </div> */}
      </div>





      <div className='flex flex-col w-full bg-gray-800  gap-1  pt-8 p-10 rounded-lg'> 
        <p className="text-gray-200 font-bold">Uptime stats</p> 
          <div className='flex flex-col lg:flex-row mt-2  '> 
                <div className="flex flex-col w-full mb-6 lg:mb-0 border-b border-gray-700 lg:border-b-0 lg:border-r lg:border-r-gray-700">
                  <p className="text-gray-200">Last 24 hrs</p> 
                  <h1 className={`text-2xl font-bold ${isApiUp ? "text-primary" : "text-red-500"}`}>100%</h1>
                  <p className="text-gray-400 text-sm">0 incidents, 0 m down</p>
                </div>
                  <div className="flex flex-col lg:border-r lg:border-r-gray-700 w-full lg:ml-6 mb-6 lg:mb-0 border-b border-gray-700 lg:border-b-0 ">
                  <p className="text-gray-200">Last 7 days</p>
                  <h1 className={`text-2xl font-bold ${isApiUp ? "text-primary" : "text-red-500"}`}>98.88%</h1>
                  <p className="text-gray-400 text-sm">2 incidents, 36 m down</p>
                </div>
                  <div className="flex flex-col lg:border-r lg:border-r-gray-700 w-full lg:ml-6 mb-6 lg:mb-0 border-b border-gray-700 lg:border-b-0 ">
                  <p className="text-gray-200">Last 30 days</p>
                  <h1 className={`text-2xl font-bold ${isApiUp ? "text-primary" : "text-red-500"}`}>92%</h1>
                  <p className="text-gray-400 text-sm">5 incidents, 1h 12m down</p>
                </div>
                  <div className="flex flex-col w-full lg:ml-6 ">
                    <div className='flex flex-row'>
                        <DatePicker />
                        <p className='ml-1 mr-1 text-gray-200'>to:</p>
                        <DatePicker />
                    </div>
                    {/* <p className="text-gray-200 text-sm bg-land-primary rounded-md pl-2 pr-2 w-fit">Dec 15 '22 - May 16 '23</p> */}
                    <h1 className={`text-2xl font-bold ${isApiUp ? "text-primary" : "text-red-500"}`}>.....%</h1>
                    <p className="text-gray-400 text-sm">Upgrade Now</p>
                  </div>
           </div>
         </div>



         <div className="flex flex-col  bg-gray-800 rounded-lg gap-1 pt-8 pb-4 p-10">
          <div className='flex flex-row justify-between'>
              <p className="text-gray-200 font-bold">Response time</p> 
              <div className='flex flex-row'>
                        <DatePicker />
                        <p className='ml-1 mr-1 text-gray-200'>to:</p>
                        <DatePicker />
                    </div>
              {/* <p className="text-gray-200 font-bold  bg-land-primary rounded-md pl-2 pr-2 w-fit">Last 30 days</p>  */}
          </div>
           
            <div className='flex flex-row w-full'>
              <div className='flex flex-col w-full'>
                <div className='h-36' w-full >
                  <ResponsiveContainer tabIndex={-1} width="100%" height="100%">
                    <LineChart data={data}>
                       <CartesianGrid 
                        stroke="#374151"
                        vertical={false}   // remove vertical lines
                        />
                      <XAxis tabIndex={-1}
                        axisLine={false}   // remove X axis line
                        tickLine={false}   // remove tick lines
                        dataKey="date"
                        // tickCount={5} // 5 levels (not working)
                        tickFormatter={formatXAxisTick}
                        style={{ fontSize: '12px', outline : 'none' }}  
                        />
                      <YAxis  tabIndex={-1} 
                        // tickCount={4} // 3–4 response levels
                        ticks={[10, 805, 1600]}
                        tickFormatter={formatYAxisTick}
                        axisLine={false}   //  remove Y axis line
                        tickLine={false}   //  remove tick lines
                        style={{ fontSize: '12px', outline : 'none' }} 
                        />
                      {/* <Tooltip /> */}
                      <Line type="monotone" dataKey="responseTime" strokeWidth={1.5} stroke="#21c45d" dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className='flex flex-row w-full'>
                  <div className='w-full'>
                    <div className='flex flex-row items-center gap-1'>
                    <ArrowDownUp className='inline text-gray-500'/>
                    <p className="text-lg font-bold mt-2 text-white">101.6 ms</p>
                    </div>
                    <span className='text-gray-400 text-sm'>Average</span>
                  </div>
                  <div className='w-full'>
                     <div className='flex flex-row items-center gap-1'>
                        <ArrowDownToLine className='inline text-primary'/>
                        <p className="text-lg font-bold text-white mt-2">16.67 ms</p>
                     </div>
                    <span className='text-gray-400 text-sm'>Minimum</span>
                  </div>
                  <div className='w-full'>
                      <div className='flex flex-row items-center gap-1'>
                        <ArrowUpToLine className='inline text-red-500'/>
                        <p className="text-lg font-bold text-white mt-2">1546.12 ms</p>
                      </div>
                    <span className='text-gray-400 text-sm'>Maximum</span>
                  </div>
                  </div>
              </div>
            </div>
          </div>  
    </section>
   <aside className="flex-1 mt-6 flex flex-col gap-6">
      <div className="w-full bg-gray-800 rounded-lg p-4 pb-6 flex flex-col gap-2">
        <p className="text-gray-200 font-bold text-sm ">Domain & SSL cert </p>
        <div className="flex flex-row items-center gap-2">
          <ShieldCheck className="text-primary" size={16} />
          <p className="text-gray-400 text-sm">Valid SSL certificate</p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <ShieldCheck className="text-primary" size={16} />
          <p className="text-gray-400 text-sm">Domain expires in 120 days</p>
          </div>
        </div>
        <div className="w-full bg-gray-800 rounded-lg p-4 pb-6 flex flex-col gap-3">
        <p className="text-gray-200 font-bold text-sm ">Incidents summary </p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/90"></span>
              <span className="text-gray-400 text-sm">Hard Down</span>
            </div>
            <span className="text-red-400 font-semibold text-sm">3</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/90"></span>
              <span className="text-gray-400 text-sm">Soft Down</span>
            </div>
            <span className="text-amber-400 font-semibold text-sm">7</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="text-gray-400 text-sm">Degraded performance</span>
            </div>
            <span className="text-yellow-400/80 font-semibold text-sm">12</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500/80"></span>
              <span className="text-gray-400 text-sm">Partial outage</span>
            </div>
            <span className="text-sky-400/80 font-semibold text-sm">5</span>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-3 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">Ongoing</span>
            <span className="text-red-400 font-semibold text-sm">2</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">Resolved</span>
            <span className="text-primary font-semibold text-sm">25</span>
          </div>
        </div>
        </div>
        </aside>
    </main>
    </div>






  );
}