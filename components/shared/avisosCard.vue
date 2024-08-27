<template>
  <div class="bg-white shadow-md rounded-md p-6 flex flex-col transition-shadow duration-300 hover:shadow-xl justify-between gap-8">
    <header class="flex justify-between items-center">
      <div>
        <h2 id="avisos-title" class="font-bold text-ge-violet text-lg">Avisos da Semana</h2>
      </div>
      <recurso-card-dropdown :to="to" :items="dropdownItems"/>
    </header>
    <section class="flex justify-around">
      <div class="content-div flex flex-col gap-2 w-[70%]">
        <h3 class="text-gray-600 text-sm">Title</h3>
        <p id="card-content" class="overflow-y-auto">A partir da semana que vem, vamos comer arroz todo dia no café da manhã</p>
      </div>
      <img src="/avisos.svg" width="100px" class="rounded-lg">
    </section>

    <section>

    </section>
  </div>
</template>

<script setup lang="ts">
import RecursoCardDropdown from "~/components/shared/dropdown/recursoCardDropdown.vue";

const to = '/configuracoes/avisos';

const dropdownItems = [
  [
    { label: 'Ver mais' }
  ],
  [
    { label: 'Fechar' }
  ]
]

</script>

<style scoped>
 #avisos-title {
   font-family: Montserrat;
 }

#card-content {
  font-family: Montserrat;
}
</style>