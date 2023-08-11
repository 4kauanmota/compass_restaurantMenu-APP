import { View, Pressable, StyleSheet, Platform } from "react-native";

function PressArea({
  children,
  onPress,
  style,
  pressStyle,
}: {
  children: any;
  onPress: any;
  style?: any;
  pressStyle?: any;
}) {
  config(style);

  return (
    <View style={[styles.container, style]}>
      {Platform.OS === "android" ? (
        <Pressable
          onPress={onPress}
          style={[styles.pressArea, pressStyle]}
          android_ripple={AndroidPressEffect}
        >
          {children}
        </Pressable>
      ) : (
        <Pressable
          onPress={onPress}
          style={({ pressed }) => [
            pressed && IosPressEffect,
            styles.pressArea,
            pressStyle,
          ]}
        >
          {children}
        </Pressable>
      )}
    </View>
  );
}

function config(style: any) {
  if (style) {
    styles.pressArea.borderRadius = style.borderRadius;
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },

  pressArea: {
    borderRadius: 0,
  },
});

const AndroidPressEffect = {
  color: "#ffffff",
  borderless: false,
};

const IosPressEffect = {
  opacity: 0.8,
};

export default PressArea;
