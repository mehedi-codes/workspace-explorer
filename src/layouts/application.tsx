import React from 'react';

import { SplashScreen } from '@/components/splash-screen';

export const Application = () => {
  return (
    <React.Fragment>
      <SplashScreen />
      <main className="flex min-h-dvh flex-col items-center justify-center gap-y-2">
        <img src="/favicon.svg" alt="logo" width={64} height={64} />
        <h2 className="font-sans font-semibold">Workspace Explorer</h2>
      </main>
    </React.Fragment>
  );
};
