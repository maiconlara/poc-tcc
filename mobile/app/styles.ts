import { StyleSheet } from "react-native";
import { colors } from "../src/colors";
import { fonts } from "../src/fonts";

export const styles = StyleSheet.create({
  button: {
    marginTop: 48,
    alignItems: "center",
    minWidth: "auto",
    borderRadius: 9999,
    backgroundColor: colors.blue[100],
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonText: {
    fontFamily: fonts.baiBold,
    fontSize: 14,
    textTransform: "uppercase",
    color: colors.default.bg,
  },
  container: {
    backgroundColor: colors.default.bg,
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  titleContainer: {
    gap: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontFamily: fonts.baiBold,
    color: colors.blue[400],
    textTransform: "uppercase",
    fontSize: 48,
  },
});
