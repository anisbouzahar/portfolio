"use client";

import React from "react";
import { motion } from "motion/react";
import {Button} from "@repo/ui/button";
import Newsletter from "./Newsletter.tsx";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
    hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
    visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};


export default function BlurReveal() {

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.04 }}
        >
            <motion.h1 className="mt-8 bg-gradient-to-br from-white leading-20 md:leading-24 to-slate-500 py-4 bg-clip-text capitalize text-center text-5xl font-semibold tracking-tight text-transparent md:text-7xl"  transition={transition}
                       variants={variants}>
                Something remarkable <br /> is unfolding.
            </motion.h1>

                <div className="flex flex-row space-x-4 mt-10 justify-center items-center">
                    <Newsletter/>
                    <motion.div transition={transition} variants={variants}>

                    <Button variant="secondary" asChild >
                        <a href="/contact">
                            Contact

                        </a>
                    </Button>

                    </motion.div>
            </div>
        </motion.div>
    );
}