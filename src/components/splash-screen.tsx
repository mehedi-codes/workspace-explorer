export const SplashScreen = () => {
    return (
        <div className="fixed bg-white inset-0 z-50 pointer-events-none animate-out fade-out duration-500 delay-[2000ms] ease-in fill-mode-forwards">
            {/* colorful background for the glass to blur */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 -left-24 size-80 rounded-full bg-emerald-400/50 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 size-96 rounded-full bg-sky-400/40 blur-3xl" />
                <div className="absolute top-1/3 left-1/2 size-64 -translate-x-1/2 rounded-full bg-lime-300/40 blur-3xl" />
            </div>

            {/* glass panel */}
            <div className="absolute inset-0 flex items-center justify-center animate-in fade-in zoom-in-95 duration-500 ease-out fill-mode-both">
                <div className="relative size-24 flex items-center justify-center">
                    <div className="absolute inset-0 border-2 border-green-500/25 rounded-full border-t-green-500 animate-spin motion-reduce:animate-none" />
                    <img src="/favicon.svg" alt="logo" width={64} height={64} />
                </div>
            </div>
        </div>
    )
}
