// app/coming-soon/page.tsx
import {TextReveal} from "@/components/ui/text-reveal";
import {GradientBackground} from "@/components/ui/backgrounds/gradient";

export default function ComingSoon() {
    return (
        <main className="min-h-screen w-full relative bg-black">
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
                }}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center z-10 h-full">
                <TextReveal variant="blur" className="font-bold text-6xl leading-loose text-white">
                    Coming Soon
                </TextReveal>
                <TextReveal variant="fade" delay={0.05} staggerDelay={0.001} className="text-white">
                    We’re putting the finishing touches on something great. Check back soon.
                </TextReveal>
            </div>

        </main>



    );
}
