"use client";

import { WeatherData, getDoualaWeather } from "@portfolio/lib/weatherApi";
import { useState, useEffect } from "react";

function PartialFooter() {

    const [weather, setWeather] = useState<WeatherData | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const apiKey = "046561d815b94bb6fcf7e0eb8ae63c1d" as string; // ⚠️ Visible in browser
                const data = await getDoualaWeather(apiKey);
                setWeather(data);
            } catch (err) {
                console.error("Error fetching weather:", err);
            }
        })();
    }, []);

    return (
        <footer className="flex flex-col justify-center text-[12px] gap-1.5 md:flex-row md:justify-between md:text-[20px] proximaNova px-[30px] md:px-32 pt-6 pb-8">
            <div className="md:flex md:flex-col">
                <p className="flex justify-center uppercase md:justify-start">© 2025 kangue kwelle patrick loic</p>
                <p className="hidden md:inline">This website is genuine and product of my creativity</p>
            </div>
            <div className="flex flex-col gap-1.5">
                <p className="flex justify-center md:justify-end">Weather in Douala: {weather ? weather.condition : 'Loading...'}, {weather ? weather.temperature : 'Loading...'}</p>
                <p className="flex justify-center md:justify-end">Time in Douala: {weather?.time}</p>
            </div>
        </footer>
    );
}

export default PartialFooter;