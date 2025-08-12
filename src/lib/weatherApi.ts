import axios from "axios";

export interface WeatherData {
    time: string;
    temperature: string;
    condition: string;
    location: string;
}

export async function getDoualaWeather(apiKey: string): Promise<WeatherData> {
    const lat = 4.0511;
    const lon = 9.7679;

    const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
            lat,
            lon,
            appid: apiKey,
            units: "metric",
        },
    });

    const time = new Date().toLocaleTimeString("en-US", {
        timeZone: "Africa/Douala",
        hour: "2-digit",
        minute: "2-digit",
    });

    return {
        time,
        temperature: `${data.main.temp}°C`,
        condition: data.weather[0].main,
        location: "Douala, Cameroon",
    };
}
