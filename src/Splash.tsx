import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Animated, Dimensions, Image, StyleSheet, View } from "react-native";
import { useAppDispatch, useAppSelector } from "./redux/Store";
import { splashDone } from "./redux/authSlice";

SplashScreen.preventAutoHideAsync();

interface State {
  setIsReady: React.Dispatch<React.SetStateAction<boolean>>;
  children?: any;
}

export default function Splash({ setIsReady }: State) {
  return (
    <AnimatedSplashScreen setIsReady={setIsReady}>
      <MainScreen />
    </AnimatedSplashScreen>
  );
}

function AnimatedSplashScreen({ children, setIsReady }: State) {
  const { height } = Dimensions.get("window");
  const dispatch = useAppDispatch();
  const [isAppReady, setAppReady] = useState(false);
  const [isSplashAnimationComplete, setAnimationComplete] = useState(false);

  const animationUpper = useMemo(() => new Animated.Value(-height * 0.5), [height]);
  const animationLower = useMemo(() => new Animated.Value(height * 0.5), [height]);
  const animationCenter = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    if (isAppReady) {
      Animated.parallel([
        Animated.timing(animationUpper, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(animationLower, {
          toValue: 0,
          duration: 1500,
          useNativeDriver: true,
        }),
        Animated.timing(animationCenter, {
          toValue: 1,
          duration: 1500,
          useNativeDriver: true,
        }),
      ]).start(() => {
        dispatch(splashDone());
        setTimeout(() => {
          setIsReady(true);
          setAnimationComplete(true);
        }, 1000);
      });
    }
  }, [isAppReady, height, dispatch, setIsReady, animationUpper, animationLower, animationCenter]);

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
        <View style={[StyleSheet.absoluteFill, { backgroundColor: "#5E41E6" }]}>
          <Animated.Image
            style={{
              position: "absolute",
              alignSelf: "center",
              width: 68,
              height: 43,
              top: "46%",
              left: "39%",
              transform: [
                {
                  translateY: animationUpper,
                },
              ],
            }}
            source={require("../assets/island_upper.png")}
            onLoadEnd={onImageLoaded}
            fadeDuration={0}
          />
          <Animated.Image
            style={{
              position: "absolute",
              alignSelf: "center",
              width: 95,
              height: 43,
              top: "50%",
              opacity: animationCenter,
            }}
            source={require("../assets/island_center.png")}
            fadeDuration={0}
          />
          <Animated.Image
            style={{
              position: "absolute",
              alignSelf: "center",
              width: 68,
              height: 43,
              bottom: "41%",
              right: "39%", // Move lower image to the right
              transform: [
                {
                  translateY: animationLower,
                },
              ],
            }}
            source={require("../assets/island_lower.png")}
            fadeDuration={0}
          />
        </View>
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
