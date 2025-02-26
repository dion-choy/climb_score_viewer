"use client";
import { Router, useRouter } from "next/navigation";
import React from "react";

export default function Home() {
    const router = useRouter();

    return (
        <div>
            Hello World
            <br />
            <button
                onClick={() => {
                    router.push("/test");
                }}
            >
                Press me to go to test page
            </button>
        </div>
    );
}
