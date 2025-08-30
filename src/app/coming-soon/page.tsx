import { TextReveal } from "@/components/ui/text-reveal";

export default function ComingSoon() {
    return (
        <main className="min-h-screen z-1 w-full relative bg-black">
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(226, 232, 240, 0.15), transparent 70%), #000000",
                }}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10 h-full">
                <TextReveal
                    variant="blur"
                    className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight md:leading-loose text-white"
                >
                    Coming Soon
                </TextReveal>
                <TextReveal
                    variant="fade"
                    delay={0.05}
                    staggerDelay={0.02}
                    className="mt-4 text-sm sm:text-base md:text-lg text-white max-w-md mx-2"
                >
                    We’re putting the finishing touches on something great. Check back soon.
                </TextReveal>
            </div>
        </main>
    );
}
