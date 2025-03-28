import { cn } from "./../lib/utils";
interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
    firstBlobColor: string;
    secondBlobColor: string;
}

export default function BlurryBlob({
                                       className,
                                       firstBlobColor,
                                       secondBlobColor,
                                   }: BlobProps) {
    return (
        <div className="min-h-52 min-w-52 items-center justify-center rounded-xl opacity-45 absolute">
            <div className="relative w-full max-w-lg">
                <div
                    className={cn(
                        "absolute -right-24 -top-28 h-72 w-72 animate-pop-blob rounded-full p-8 opacity-70 mix-blend-screen blur-3xl filter",
                        firstBlobColor,
                        className
                    )}
                ></div>
                <div
                    className={cn(
                        "absolute -left-40 -top-64 h-72 w-72 animate-pop-blob rounded-full p-8 opacity-70 mix-blend-screen blur-3xl filter",
                        secondBlobColor,
                        className
                    )}
                ></div>
            </div>
        </div>
    );
}
