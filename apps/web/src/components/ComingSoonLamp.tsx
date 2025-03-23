import {LampContainer} from './Lamp.tsx'
import { motion } from "motion/react";
import BlurReveal from "./BlurReveal.tsx";

export default function ComingSoonLamp() {
    return (
        <LampContainer>
            <BlurReveal />
        </LampContainer>
    );
}