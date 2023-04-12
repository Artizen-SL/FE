export default () => ({
  expo: {
    name: "Artizen-FE",
    slug: "Artizen-FE",
    owner: "artizen-fe",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/main.png",
      resizeMode: "contain",
      backgroundColor: "#48B7E2",
    },
    updates: {
      fallbackToCacheTimeout: 0,
      url: "https://u.expo.dev/04c9b210-b371-4c52-a7dd-d5d45d5ed9f9",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/icon.png",
        backgroundColor: "#FFFFFF",
      },
      permissions: ["ACCESS_FINE_LOCATION", "ACCESS_COARSE_LOCATION"],
      package: "com.jiwoonseo.ArtizenFE",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      API_URL: process.env.REACT_APP_BASE_URL,
      REST_API_KEY: process.env.REST_API_KEY,
      REDIRECT_URI: process.env.REDIRECT_URI,
      eas: {
        projectId: "04c9b210-b371-4c52-a7dd-d5d45d5ed9f9",
      },
    },
    runtimeVersion: {
      policy: "sdkVersion",
    },
    plugins: [
      [
        "expo-image-picker",
        {
          photosPermission:
            "The app accesses your photos to let you share them with your friends.",
        },
      ],
    ],
  },
});
