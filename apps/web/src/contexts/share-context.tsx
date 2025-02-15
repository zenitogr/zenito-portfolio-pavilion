import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { sharingConfig as initialConfig } from '../config/meta';

type ShareConfig = typeof initialConfig;

const ShareContext = createContext<ShareConfig | null>(null);

export function ShareProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState(initialConfig);

  // Update config when meta.ts changes
  useEffect(() => {
    if (import.meta.hot) {
      import.meta.hot.accept('../config/meta', (newModule) => {
        if (newModule) {
          setConfig(newModule.sharingConfig);
        }
      });
    }
  }, []);

  return (
    <ShareContext.Provider value={config}>
      {children}
    </ShareContext.Provider>
  );
}

export function useShare() {
  const context = useContext(ShareContext);
  if (!context) {
    throw new Error('useShare must be used within a ShareProvider');
  }
  return context;
}