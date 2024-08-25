<template>

  <UModal v-model="modelState">
    <UForm :validate="validate" :state="form" @submit="onSubmit()">
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex justify-between">
          <h3>Nova Documentação</h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="close_modal()" />
        </div>
      </template>

        <div class="grid grid-cols-1 gap-2">
          <div class="flex flex-col">
            <UFormGroup label="Nome:" name="st_nome">
              <UInput v-model="form.st_nome" placeholder="nome..."/>
            </UFormGroup>
          </div>
          <div>
            <UFormGroup label="Entidade:" name="ch_tipo_entidade">
              <USelect name="ch_tipo_entidade" v-model="form.ch_tipo_entidade" id="select"
                       :options="entidades"
                       option-attribute="name">
              </USelect>
            </UFormGroup>
          </div>

          <div class="col-span-1 mt-4 grid grid-cols-1 gap-2">

            <div class="w-full flex justify-end mt-2">
              <UButton
                  :padded="false"
                  color="violet"
                  variant="link"
                  label="Adicionar"
                  icon="i-heroicons-plus-solid"
                  @click="add_tipo_documento()"
              />
            </div>
            <div v-for="(tipoDocumento, index) in form.tipos_documentos">

              <UFormGroup name="tipos_documentos">
                <UButtonGroup class="w-full">
                  <select v-model="form.tipos_documentos[index].id" class="w-full">
                    <option v-for="tipoDocumento in formattedTiposDocumentos" :value="tipoDocumento.id">{{ tipoDocumento.st_nome }}</option>
                  </select>
                  <UButton
                      color="red"
                      icon="i-heroicons-trash-solid"
                      @click="remove_tipo_documento(index)"
                  />
                </UButtonGroup>
              </UFormGroup>
            </div>

          </div>
        </div>


      <template #footer>
        <div class="flex justify-end">
          <UButton
              icon="i-heroicons-pencil-square"
              size="sm"
              color="violet"
              label="Salvar"
              type="submit"
          />
        </div>
      </template>
    </UCard>
    </UForm>
  </UModal>
</template>

<script setup lang="ts">

import actions from "~/actions";
import type {FormError} from "#ui/types";

const emits = defineEmits(['refresh']);

let modelState = defineModel('modalState');
const form = defineModel('form', {
  default: {
    st_nome: '',
    ch_tipo_entidade: '',
    tipos_documentos: []
  }
});

const entidades = ref([
  { value: '', name: 'Selecione uma entidade...' },
  { value: 'aluno', name: 'Aluno' },
  { value: 'professor', name: 'Professor' }
]);

let tiposDocumentos = ref([]);

const formattedTiposDocumentos = computed (() => {
  if(tiposDocumentos.value) {
    const defaultOption = { value: '', st_nome: 'Selecione um tipo de documento...' };
    return [defaultOption, ...tiposDocumentos.value];
  }
})

const close_modal = () => {
  modelState.value = false;
}

function add_tipo_documento() {
  form.value.tipos_documentos.push({
    id: '',
    st_nome: '',
    ch_tipo_entidade: ''
  });
}

function remove_tipo_documento(index) {
  form.value.tipos_documentos.splice(index, 1);
}

const validate = (state: any): FormError[] => {
  const errors = [];
  if(!state.st_nome) {
    errors.push({ path: 'st_nome', message: 'Campo não pode ser nulo' });
  }
  if(!state.ch_tipo_entidade) {
    errors.push({ path: 'ch_tipo_entidade', message: 'Campo não pode ser nulo' });
  }

  return errors;
}

function onSubmit() {

  if(form.value) {
    if(!form.value.id) {
      actions.documentacao.create(form.value);
    } else {
      actions.documentacao.update(form.value);
    }

    close_modal();
    emits('refresh');
  }
}

onMounted(async () => {
  tiposDocumentos.value = (await actions.tipoDocumento.list()).data;
})

</script>

<style scoped>

</style>