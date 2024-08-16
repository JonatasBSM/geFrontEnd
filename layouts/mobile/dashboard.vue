<template>
  <div  class="flex flex-col h-screen w-full bg-gray-100 relative">
    <transition name="slide">
      <aside v-show="flAsideVisible" ref="aside" class="h-screen w-9/12 bg-white border-r border-gray-200 p-4 shadow-md z-50 fixed top-0 left-0">
        <section class="h-14 flex items-center">
          <h2 class="text-lg font-bold text-gray-800">Menu</h2>
        </section>
        <sub-menu title="Navegação">
          <ul>
            <sub-menu-items label="Home" icon="line-md:home" to="/"/>
            <sub-menu-items label="Secretaria" icon="tdesign:institution" to="/secretaria"/>
            <sub-menu-items label="Configurações" icon="line-md:cog" to="/configuracoes"/>
          </ul>
        </sub-menu>
      </aside>
    </transition>

    <header class="mb-10">
      <nav-bar @open-aside="openAside()" class="w-full"/>
    </header>

    <main @click="closeAside" class="flex-1">
      <slot/>
    </main>
    <nuxt />
  </div>
</template>
<script>
import navBar from '~/components/mobile/dashboard/navBar.vue'
import subMenu from "~/components/desktop/dashboard/subMenu.vue";
import subMenuItems from "~/components/desktop/dashboard/subMenuItems.vue";

export default {
  components: {
    subMenuItems, subMenu,
    navBar,
  },
  
  data() {
    return {
      flAsideVisible: false,
    }
  },
  
  methods: {
    closeAside(event) {
      const aside = this.$refs.aside;
      if (aside && !aside.contains(event.target)) {
        this.flAsideVisible = false;
      }
    },
    openAside() {
      this.flAsideVisible = true;
    }
  },
}
</script>
<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.4s ease-in-out;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>