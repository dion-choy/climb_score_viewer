"use client";
import React, { useState } from "react";

const eventsData = [
    {
        id: 1,
        name: "IFSC European Cup Munich 2025",
        location: "Munich, GER",
        date: "MAR 07 - 08",
        image: "/event1.png",
    },
    {
        id: 2,
        name: "IFSC Asian Cup Hong Kong 2025",
        location: "Hong Kong, HKG",
        date: "MAR 08 - 09",
        image: "/event2.png",
    },
    {
        id: 3,
        name: "IFSC European Cup Rome 2025",
        location: "Rome, ITA",
        date: "APR 05 - 06",
        image: "/event3.png",
    },
    {
        id: 4,
        name: "IFSC World Cup Keqiao 2025",
        location: "Keqiao, CHN",
        date: "APR 18 - 20",
        image: "/event4.png",
    },
];

export default function Home() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredEvents = eventsData.filter((event) =>
        event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-6">
                All Events
            </h1>
            <input
                type="text"
                placeholder="Search by event name, cup name or location"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm text-black mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="space-y-6">
                {filteredEvents.map((event) => (
                    <div key={event.id} className="flex items-center bg-white border border-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300">
                        <img src={event.image} alt={event.name} className="w-16 h-16 rounded-lg object-cover mr-4" />
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">{event.name}</h2>
                            <p className="text-gray-600">{event.location}</p>
                            <p className="text-gray-700 font-medium">{event.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
