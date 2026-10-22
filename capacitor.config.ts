import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.casaspopulares.app',
  appName: 'Casas Populares',
  webDir: 'out',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Camera: {
      saveToGallery: true
    }
  }
};

export default config;
