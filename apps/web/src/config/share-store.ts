import { sharingConfig as initialConfig } from './meta';

type Listener = () => void;
type ShareConfig = typeof initialConfig;

class ShareStore {
  private config: ShareConfig = initialConfig;
  private listeners: Set<Listener> = new Set();

  getConfig(): ShareConfig {
    return this.config;
  }

  updateConfig(newConfig: ShareConfig) {
    this.config = newConfig;
    this.notifyListeners();
  }

  subscribe(listener: Listener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener());
  }
}

export const shareStore = new ShareStore();

// Force a full page reload when meta.ts changes
if (import.meta.hot) {
  import.meta.hot.accept('./meta', (newModule) => {
    if (newModule) {
      // Force a full page reload
      window.location.reload();
    }
  });
}