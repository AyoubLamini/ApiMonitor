"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"


const formatDate = (value: any): string => {
  const date = new Date(Date.parse(value)).toString().substring(4, 15);
  const dayAndMonth = date.substring(0, 6);
  const year = date.substring(9, 11);
 const label = dayAndMonth +",'" + year;
  return `${label}`;
};

export default function DatePicker() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild className="flex flex-row items-center">
        <p className="justify-start text-left font-normal 
        bg-land-primary rounded-md pl-2 pr-2 w-fit border-none text-gray-200">
          <CalendarIcon className="mr-2 h-4 w-4" /> 
          {date ? formatDate(date) : <span>-- -- --</span>}
        </p>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}