"use client";
import React from "react";
import MyExampleButton from "@/components/Example";

export default function Home() {
    return (
        <div>
            Hello World
            <br />
            <MyExampleButton path={"/test"} text={"Press me to route!!!"} />
        </div>
    );
}
