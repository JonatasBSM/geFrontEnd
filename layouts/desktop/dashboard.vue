<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar -->
    <aside class="md:w-[25%] lg:w-[15%] bg-white border-r border-gray-200 p-4 shadow-lg">
      <h2 class="text-sm font-bold text-gray-800 mb-6">Menu</h2>
      <section id="routes">
        <h3 class="text-xs font-semibold text-gray-700 mb-3">Navegação</h3>
        <ul>
            <li><a href="#" class="block text-xs py-2 px-4 text-gray-600 hover:bg-gray-200 rounded">Home</a></li>
            <li><a href="#" class="block text-xs py-2 px-4 text-gray-600 hover:bg-gray-200 rounded">Sobre</a></li>
            <li><a href="#" class="block text-xs py-2 px-4 text-gray-600 hover:bg-gray-200 rounded">Serviços</a></li>
            <li><a href="#" class="block text-xs py-2 px-4 text-gray-600 hover:bg-gray-200 rounded">Contato</a></li>
        </ul>
      </section>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 p-6">
      <header class="mb-6">
        <h1 class="text-xl font-bold text-gray-800">Título da Página</h1>
      </header>
      <slot/>
      <nuxt />
    </main>
  </div>
</template>
<script>

export default {
    
}
</script>
<style lang="">
    
</style>