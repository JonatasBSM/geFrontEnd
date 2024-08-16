// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/icon", "@nuxtjs/device"],
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