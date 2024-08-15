// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/icon"],
  colorMode: {
    preference: 'light'
  },
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: {
            'ge-violet': '#6a6cfe'
          }
        }
      }
    }
  }
})