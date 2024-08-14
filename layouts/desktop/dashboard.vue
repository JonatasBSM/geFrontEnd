<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="md:w-[25%] lg:w-[15%] bg-white border-r border-gray-200 p-4 shadow-md">
      <section class="h-14 flex items-center">
        <h2 class="text-lg font-bold text-gray-800">Menu</h2>
      </section>
      <sub-menu title="Navegação">
        <ul>
          <sub-menu-items label="Home" icon="line-md:home" to="/"/>
          <sub-menu-items label="Secretaria" icon="tdesign:institution" to="secretaria"/>
          <sub-menu-items label="Configurações" icon="line-md:cog" to="configuracoes"/>
        </ul>
      </sub-menu>
    </aside>
    <!-- Main Content -->
    <main class="flex-1 pt-6 px-10">
      <header class="mb-6">
        <div class="w-full">
          <nav-bar/>
        </div>
      </header>
      <body class="">
        <slot/>
      </body>
      <nuxt />
    </main>
  </div>
</template>

<script>
import subMenu from '~/components/dashboard/subMenu.vue'
import subMenuItems from "~/components/dashboard/subMenuItems.vue";
import navBar from '~/components/dashboard/navBar.vue'

export default {
  components: {
    navBar,
    subMenu,
    subMenuItems
  }    
}
</script>
<style lang="">
    
</style>