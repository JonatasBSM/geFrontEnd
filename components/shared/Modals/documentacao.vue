<script setup lang="ts">

import Select from "~/node_modules copy/@nuxt/ui/dist/runtime/components/forms/Select.vue";

let modelState = defineModel();
let documentacao = ref({
  st_nome: null,
  ch_tipo_entidade: null,
  js_tipo_documentos: []
});

const close_modal = () => {
  modelState.value = false;
}


</script>

<template>

  <UModal v-model="modelState">
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex justify-between">
          <h3>Nova Documentação</h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="close_modal()" />
        </div>
      </template>

      <div class="grid grid-cols-2 gap-2">
        <div class="flex flex-col">
          <label for="name_documentacao" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome:</label>
          <input type="text" id="name_documentacao" class="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nome..." required />
        </div>
        <div>
          <label for="name_entity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Entidade:</label>
          <select id="select" class="bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="" selected>Selecione uma entidade</option>
            <option value="Aluno">Aluno</option>
            <option value="Professor">Professor</option>
          </select>     
        </div>
        <div>
          
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
          />
        </div>
      </template>
    </UCard>
  </UModal>
</template>

<style scoped>

</style>