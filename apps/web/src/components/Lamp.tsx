"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";
import { useMediaQuery } from "usehooks-ts";

export const LampContainer = ({
                                  children,
                                  className,
                              }: {
    children: React.ReactNode;
    className?: string;
}) => {
    const isMobile = useMediaQuery("(max-width: 768px)");

    const getResponsiveWidth = (rem: number) =>
        `${isMobile ? rem / 2 : rem}rem`;

    const initialWidth = getResponsiveWidth(8);
    const targetWidth = getResponsiveWidth(30);

    return (
        <div
            className={cn(
                "relative flex  min-h-[calc(100svh-80px)] md:min-h-[calc(100svh-60px)] flex-col items-center justify-center overflow-hidden w-full z-0",
                className
            )}
        >
            <div className="relative md:translate-y-1/4 translate-y-1/2 flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
                <motion.div
                    initial={{ opacity: 0.5, width: initialWidth }}
                    whileInView={{ opacity: 1, width: targetWidth }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className={`absolute inset-auto right-1/2 h-56 overflow-visible bg-gradient-conic from-purple-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]`}
                >
                    <div className="absolute w-full left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                    <div className="absolute w-40 h-full left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0.5, width: initialWidth }}
                    whileInView={{ opacity: 1, width: targetWidth }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                    style={{
                        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
                    }}
                    className="absolute inset-auto left-1/2 h-56 bg-gradient-conic from-transparent via-transparent to-purple-500 text-white [--conic-position:from_290deg_at_center_top]"
                >
                    <div className="absolute w-40 h-full right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
                    <div className="absolute w-full right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
                </motion.div>

                <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
                <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>

                <div
                    className="absolute inset-auto z-50 h-36 -translate-y-1/2 rounded-full bg-purple-500 opacity-50 blur-3xl"
                    style={{ width: getResponsiveWidth(28) }}
                ></div>

                <motion.div
                    initial={{ width: getResponsiveWidth(4) }}
                    whileInView={{ width: getResponsiveWidth(16) }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-auto z-30 h-36 -translate-y-[4rem] rounded-full bg-purple-400 blur-2xl"
                ></motion.div>

                <motion.div
                    initial={{ width: initialWidth }}
                    whileInView={{ width: targetWidth }}
                    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-auto z-50 h-0.5 -translate-y-[7rem] bg-purple-400"
                ></motion.div>

                <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950 "></div>
            </div>

            <div className="relative z-50 flex md:-translate-y-1/2 -translate-y-3/12 flex-col items-center px-5">
                {children}
            </div>
        </div>
    );
};
