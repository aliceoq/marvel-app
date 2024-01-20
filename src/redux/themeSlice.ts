import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { getBrowserTheme } from "../utils/theme";
import { DarkTheme, LightTheme } from "../theme";

export const slice = createSlice({
  name: "theme",
  initialState: {
    name:
      (Cookies.get("theme") || getBrowserTheme()) === "Dark" ? "Dark" : "Light",
    theme:
      (Cookies.get("theme") || getBrowserTheme()) === "Dark"
        ? DarkTheme
        : LightTheme,
  },
  reducers: {
    flipTheme(state) {
      let name = "Light";
      let theme = LightTheme;

      if (state.name == "Light") {
        Cookies.set("theme", "Dark", { expires: 100 });
        theme = DarkTheme;
        name = "Dark";
      } else Cookies.set("theme", "Light", { expires: 100 });

      return {
        ...state,
        theme,
        name
      };
    },
  },
});

export const { flipTheme } = slice.actions;

export default slice.reducer;
