"use client";

import { useEffect, useState } from "react"

export const LiveCurrentTime = () => {
    const [time, setTime] = useState("")

    useEffect(() => {
        const updateTime = () => {
            setTime(new Intl.DateTimeFormat("en-IN", {
                timeZone: "Asia/Kolkata",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true,
            }).format(new Date()))
        }

        updateTime()
        const interval = setInterval(updateTime, 1000)
        return () => clearInterval(interval)
    }, []);

    return (
        <div className="text-center text-xs text-muted-foreground/50 hover:text-muted-foreground duration-300 transition-all mt-2 md:mt-4 w-full min-w-xs">
            Patna, India ~ <span className="uppercase">{time}</span>
        </div>
    )
}