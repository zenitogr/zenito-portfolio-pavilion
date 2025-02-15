import { sharingConfig } from '../config/meta';

// Since we're doing a full page reload on config changes,
// we can directly use the imported config
export const useShareConfig = () => {
  return sharingConfig;
};