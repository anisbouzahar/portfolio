export default function Footer() {
    return (
        <footer className="absolute z-2 bottom-0 left-0 w-full bg-black/50 backdrop-blur-sm text-white py-4 px-6 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 max-w-6xl mx-auto text-sm">
                {/* Left side */}
                <p className="text-gray-400">
                    © {new Date().getFullYear()} Anis Bouzahar. All rights reserved.
                </p>

                <div className="flex gap-4">
                    <a
                        href="mailto:hello@anis-bouzahar.dev"
                        className="hover:text-white transition-colors"
                    >
                        Contact
                    </a>
                    <a
                        href="https://github.com/anisbouzahar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/anis-bouzahar"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
