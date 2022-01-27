import React from "react";
import Image from "next/image";

// Images component/atom.
// Billedet skal wrappes af en div som er relative, så vi kan sætte width & height.
export default function Images() {
    return (
        <div>
            <Image
                src=""
                alt=""
                layout="fill"
                objectFit="cover"
                draggable="false"
                className="select-none"
            />
        </div>
    );
}
