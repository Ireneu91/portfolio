'use client'
/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";

export const generateImageLink = (img: string) => {
    const basePath = process.env.NEXT_PUBLIC_NODE_ENV === 'development' ? "" : '/portfolio'
    return `${basePath}${img}`;
}

export const Image = (props: any) => {
    return <img {...props} src={generateImageLink(props.src)} />
}