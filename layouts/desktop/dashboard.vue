<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="md:w-[25%] xl:w-[15%] bg-white border-r border-gray-200 p-4 shadow-md overflow-y-auto">
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
    <!-- Main Content -->
    <main class="flex-1 py-6 px-10 overflow-y-auto">
      <header class="mb-16">
        <div class="w-full">
          <nav-bar/>
        </div>
      </header>
      <section>
        <transition name="fade">
          <slot v-if="flShow"/>
        </transition>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import subMenu from '~/components/desktop/dashboard/subMenu.vue'
import subMenuItems from "~/components/desktop/dashboard/subMenuItems.vue";
import navBar from '~/components/desktop/dashboard/navBar.vue'

  let flShow = ref(false)

  onMounted(() => {
    flShow.value = true
  });
</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1000ms ease;
}
.fade-enter-from, .fade-leave-to /* .fade-leave-active in versions <2.1.8 */ {
  opacity: 0;
}
</style>