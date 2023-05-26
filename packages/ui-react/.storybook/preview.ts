import type { Preview } from "@storybook/react";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withI18next } from "./decorators/withI18next";
import { withColorScheme } from "./decorators/withColorScheme";

import "../src/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  globalTypes: {
    locale: {
      name: "Locale",
      description: "Controls global locale",
      toolbar: {
        icon: "globe",
        dynamicTitle: true,
        items: [
          { value: "en", title: "English", left: "🇬🇧" },
          { value: "ar", title: "Arabic", left: "🇦🇪" },
        ],
      },
    },
    scheme: {
      name: "Scheme",
      description: "SelectTemplate light or dark theme",
      defaultValue: "both",
      toolbar: {
        icon: "mirror",
        items: ["light", "dark", "both"],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withI18next, withColorScheme],
};

export default preview;
