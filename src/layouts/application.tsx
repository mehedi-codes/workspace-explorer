import { SplashScreen } from "@/components/splash-screen"
import React from "react"

export const Application = () => {
    return (
        <React.Fragment>
            <SplashScreen />
            <main className="min-h-dvh flex flex-col gap-y-2 justify-center items-center">
                <img src="/favicon.svg" alt="logo" width={64} height={64} />
                <h2 className="font-semibold font-sans">Workspace Explorer</h2>
            </main>
        </React.Fragment>
    )
}
