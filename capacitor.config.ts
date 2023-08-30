import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.pushnotification.cap',
  appName: 'base',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    "GoogleAuth": {
      "scopes": [
        "profile",
        "email"
      ],
      "serverClientId": "66853167924-97ad2ffpbg92rkob27o91qh6odffc29d.apps.googleusercontent.com",
      "forceCodeForRefreshToken": true
    }
  }
};

export default config;
