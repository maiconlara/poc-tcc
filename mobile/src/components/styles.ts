import { StyleSheet } from "react-native";
import { colors } from "../../src/colors";
import { fonts } from "../../src/fonts";

export const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    position: "absolute",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 2,
    paddingVertical: 8,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 8,
    paddingHorizontal: 16,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "70%",
    gap: 12,
  },
  userIconBackground: {
    backgroundColor: colors.default.bg,
    borderWidth: 2,
    borderColor: colors.steel[950],
    width: 26,
    height: 26,
    borderRadius: 9999,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: fonts.roboto,
    color: colors.steel[950],
    fontSize: 18,
  },
  timer: {
    fontFamily: fonts.robotoBold,
    color: colors.steel[950],
    fontSize: 46,
    marginBottom: 16,
  },
  timerContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.default.bg,
  },
});
