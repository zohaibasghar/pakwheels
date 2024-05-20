import * as SplashScreen from "expo-splash-screen";
import { Image } from "native-base";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { useAppDispatch, useAppSelector } from "./redux/Store";
import { splashDone } from "./redux/authSlice";

SplashScreen.preventAutoHideAsync();
interface State {
  isReady: boolean;
  setIsReady: React.Dispatch<React.SetStateAction<boolean>>;
  children?: any;
}
export default function Splash({ isReady, setIsReady }: State) {
  return (
    <AnimatedSplashScreen isReady={isReady} setIsReady={setIsReady}>
      <MainScreen />
    </AnimatedSplashScreen>
  );
}

function AnimatedSplashScreen({ children, isReady, setIsReady }: State) {
  const animation = useMemo(() => new Animated.Value(1), []);
  const [isAppReady, setAppReady] = useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (isAppReady) {
      Animated.timing(animation, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }).start(() => {
        dispatch(splashDone());
        setAnimationComplete(true);
        setTimeout(() => {
          setIsReady(true);
        }, 300);
      });
    }
  }, [isAppReady]);

  const onImageLoaded = useCallback(async () => {
    try {
      await SplashScreen.hideAsync();
    } finally {
      setAppReady(true);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {isAppReady && children}
      {!isSplashAnimationComplete && (
        <Animated.View
          pointerEvents="none"
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor: "#5E41E6",
              opacity: animation,
            },
          ]}
        >
          <Animated.Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
              transform: [
                {
                  scale: animation,
                },
              ],
            }}
            source={require("../assets/island_logo_big.png")}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
        </Animated.View>
      )}
    </View>
  );
}

function MainScreen() {
  const { splash } = useAppSelector((state) => state.auth);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#5E41E6",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {!splash && <Image source={require("../assets/island_logo_big.png")} alt="Island bank" />}
    </View>
  );
}
