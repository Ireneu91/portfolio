/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from "react";

export const generateImageLink = (img: string) => {
    const isProduction = process.env.NEXT_PUBLIC_NODE_ENV !== 'development' || true;

    if (isProduction) {
        return `/portfolio/${img}`;
    }

    return img;
}

export const Image = (...props: any) => {
    props.src = generateImageLink(props.src)

    return <img {...props} />
}