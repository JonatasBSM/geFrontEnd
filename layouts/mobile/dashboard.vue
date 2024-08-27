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
      <nav-bar @open-aside="open_aside()" class="w-full"/>
    </header>

    <main @click="close_aside" class="flex-1">
      <slot/>
    </main>
    <UNotifications />
  </div>
</template>
<script setup lang="ts">
import navBar from '~/components/mobile/dashboard/navBar.vue'
import subMenu from "~/components/desktop/dashboard/subMenu.vue";
import subMenuItems from "~/components/desktop/dashboard/subMenuItems.vue";

const aside = ref(null);
let flAsideVisible = ref(false);

function open_aside() {
  flAsideVisible.value = true;
}

function close_aside(event) {
  if (aside.value && !aside.value.contains(event.target)) {
    flAsideVisible.value = false;
  }
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