<template>

  <UModal v-model="modelState">
    <UForm :validate="validate" :state="formattedForm" @submit="onSubmit()">
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
              <UInput v-model="formattedForm.st_nome" placeholder="nome..."/>
            </UFormGroup>
          </div>
          <div>
            <UFormGroup label="Entidade:" name="ch_tipo_entidade">
              <USelect name="ch_tipo_entidade" v-model="formattedForm.ch_tipo_entidade" id="select"
                       :options="entidades"
                       option-attribute="name">
              </USelect>
            </UFormGroup>
          </div>

          <div class="col-span-1 mt-4 grid grid-cols-1 gap-2">

            <UFormGroup name="tipos_documentos" label="Tipos de Documenento:">
              <div class="w-full flex justify-end my-2">
                <UButton
                    :padded="false"
                    color="violet"
                    variant="link"
                    label="Adicionar"
                    icon="i-heroicons-plus-solid"
                    @click="add_tipo_documento()"
                />
              </div>
              <div v-for="(tipoDocumento, index) in formattedForm.tipos_documentos">

                  <UButtonGroup class="w-full mt-2">
                    <USelect
                        v-model="formattedForm.tipos_documentos[index].value"
                        class="w-full"
                        :options="formattedTiposDocumentos"
                        option-attribute="name"
                        name="tipo_documento"
                    />
                    <UButton
                        color="red"
                        icon="i-heroicons-trash-solid"
                        @click="remove_tipo_documento(index)"
                    />
                  </UButtonGroup>
              </div>
            </UFormGroup>

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

const formattedForm = ref({});

watch(
    () => form.value,
    (newFormValue) => {
      if (newFormValue) {
        formattedForm.value = {
          ...newFormValue,
          tipos_documentos: newFormValue.tipos_documentos.map((tipoDocumento) => {
            return { value: tipoDocumento.id, name: tipoDocumento.st_nome };
          }),
        };
      }
    },
    { immediate: true },
    { deep: true }
);

const entidades = ref([
  { value: '', name: 'Selecione uma entidade...' },
  { value: 'aluno', name: 'Aluno' },
  { value: 'professor', name: 'Professor' }
]);

let tiposDocumentos = ref([]);

const formattedTiposDocumentos = computed (() => {
  if(tiposDocumentos.value) {
    const defaultOption = { value: '', name: 'Selecione um tipo de documento...' };
    const array = tiposDocumentos.value.map((tipoDocumento) => {
      return { value: tipoDocumento.id, name: tipoDocumento.st_nome };
    });
    return [defaultOption, ...array];
  }
})

const close_modal = () => {
  modelState.value = false;
}

function add_tipo_documento() {
  formattedForm.value.tipos_documentos.push({ value: '', name: '' });
}

function remove_tipo_documento(index) {
  formattedForm.value.tipos_documentos.splice(index, 1);
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

  if(formattedForm.value) {
    if(!formattedForm.value.id) {
      actions.documentacao.create(formattedForm.value);
    } else {
      actions.documentacao.update(formattedForm.value);
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