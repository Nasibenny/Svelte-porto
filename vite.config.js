// import devtoolsJson from "vite-plugin-devtools-json";
// import { sveltekit } from "@sveltejs/kit/vite";
// import { defineConfig } from "vite";

// export default defineConfig({
//   plugins: [sveltekit(), devtoolsJson()],
// });
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss(), sveltekit()],
});