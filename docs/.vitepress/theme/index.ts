import DefaultTheme from "vitepress/theme";
import ScreenshotFigure from "./components/ScreenshotFigure.vue";
import "./style.css";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("ScreenshotFigure", ScreenshotFigure);
  },
};
