import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({
      experimental: {
        inspector: true,
        //  {
        //   // change shortcut
        //   toggleKeyCombo: "meta-shift",
        //   // hold and release key to toggle inspector mode
        //   holdMode: true,
        //   // show or hide the inspector option
        //   showToggleButton: "always",
        //   // inspector position
        //   toggleButtonPos: "top-right",
        // },
      },
    }),
  ],
});
