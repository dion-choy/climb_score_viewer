import React from "react";
import { useRouter } from "next/navigation";

export default function MyExampleButton({ path, text }) {
    const router = useRouter();
    console.log(path);

    return (
        <button
            onClick={() => {
                router.push(path);
            }}
        >
            {text}
        </button>
    );
}
