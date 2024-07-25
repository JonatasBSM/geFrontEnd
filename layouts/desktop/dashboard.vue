<template>
  <div class="h-screen flex flex-col bg-gray-100">
    <!-- Header -->
    <header class="bg-white px-4 p-2 border-b-2 w-full flex justify-between items-center">
      <h2 class="text-sm font-bold text-gray-800">Menu</h2>
      <div id="header-buttons flex">
        <user-dropw-down />
      </div>
    </header>

    <!-- Main Layout: Aside + Main -->
    <div class="flex flex-1">
      <!-- Sidebar -->
      <aside class="md:w-[25%] lg:w-[15%] bg-white border-r border-gray-200 p-4 shadow-lg w-64">
        <section id="routes" class="mt-3">
          <h3 class="text-xs font-semibold text-gray-700 mb-3">Navegação</h3>
          <ul>
            <sub-menu-items label="home" icon="line-md:home"/>
            <sub-menu-items label="sobre" icon="line-md:compass-loop"/>
            <sub-menu-items label="configurações" icon="line-md:cog-loop"/>
          </ul>
        </section>
      </aside>

      <!-- Main Content -->
      <main class="flex-1 p-6">
        <header class="mb-6 flex justify-between">
          <h1 class="text-xl font-bold text-gray-800">Título da Página</h1>
        </header>
        <slot/>
        <nuxt />
      </main>
    </div>
  </div>
</template>

<script>
import subMenuItems from '~/components/dashboard/subMenuItems.vue'
import userDropwDown from '~/components/dashboard/userDropDown.vue'

export default {
  components: {
    subMenuItems,
    userDropwDown
  }    
}
</script>
<style lang="">
    
</style>