import { createVuePlugin } from "vite-plugin-vue2";

export default {
  build: {
    outDir: "docs",
  },
  base: "/lu-todo/",
  plugins: [createVuePlugin()],
};
