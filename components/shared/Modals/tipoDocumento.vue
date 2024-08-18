<script setup lang="ts">

import Input from "~/node_modules copy/@nuxt/ui/dist/runtime/components/forms/Input.vue";

let modalState = defineModel();

let tipoDocumento = ref(null);

const close_modal = () => {
  modalState.value = false;
}

const salvar = () => {
  console.log('salvar');
}

</script>

<template>

  <UModal v-model="modalState">
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex justify-between">
          <h3>Novo Tipo Documento</h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="close_modal()" />
        </div>
      </template>

      <div class="grid grid-col-1 gap-4">
        <div class="flex flex-col">
          <label for="name_tipo_documento" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome:</label>
          <input type="text" id="name_tipo_documento" class="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nome..." required />  
        </div>
        <div class="flex flex-col">
          <label for="descricao_tipo_documento" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrição:</label>
          <textarea id="descricao_tipo_documento" placeholder="Descrição..." class="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
      </div>

      <template #footer>
        <div class="flex justify-end">
          <UButton
              icon="i-heroicons-pencil-square"
              size="sm"
              color="primary"
              variant="solid"
              label="Salvar"
              :trailing="false"
              @click="salvar()"
          />
        </div>
      </template>
    </UCard>
  </UModal>
</template>

<style scoped>

</style>