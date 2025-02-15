import { sharingConfig as initialConfig } from './meta';

type ShareConfig = typeof initialConfig;
type ConfigListener = () => void;

class ShareConfigManager {
  private config: ShareConfig = initialConfig;
  private listeners = new Set<ConfigListener>();

  getConfig(): ShareConfig {
    return this.config;
  }

  subscribe(listener: ConfigListener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener());
  }

  updateConfig(newConfig: ShareConfig) {
    this.config = newConfig;
    this.notifyListeners();
  }
}

export const shareConfigManager = new ShareConfigManager();

// Update config when meta.ts changes
if (import.meta.hot) {
  import.meta.hot.accept('./meta', (newModule) => {
    if (newModule) {
      console.log('Share config updated:', newModule.sharingConfig);
      shareConfigManager.updateConfig(newModule.sharingConfig);
    }
  });
}

// Custom hook to subscribe to config changes
import { useState, useEffect } from 'react';

export function useShareConfig() {
  const [config, setConfig] = useState(shareConfigManager.getConfig());

  useEffect(() => {
    const unsubscribe = shareConfigManager.subscribe(() => {
      setConfig(shareConfigManager.getConfig());
    });
    return unsubscribe;
  }, []);

  return config;
}