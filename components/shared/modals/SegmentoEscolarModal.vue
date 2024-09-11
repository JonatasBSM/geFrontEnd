<template>

  <UModal v-model="modalState">
    <UForm :validate="validate" :state="formattedForm" @submit="onSubmit()">
      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex justify-between">
            <h3>Segmento Escvolar</h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="close_modal()" />
          </div>
        </template>

        <div class="grid grid-cols-1 gap-2">
          <div class="flex flex-col">
            <UFormGroup label="Nome:" name="st_nome">
              <UInput v-model="formattedForm.st_nome" placeholder="nome..."/>
            </UFormGroup>
          </div>

          <div class="col-span-1 mt-4 grid grid-cols-1 gap-2">

            <UFormGroup name="disciplinas" label="Disciplinas:">
              <div class="w-full flex justify-end my-2">
                <UButton
                    :padded="false"
                    color="violet"
                    variant="link"
                    label="Adicionar"
                    icon="i-heroicons-plus-solid"
                    @click="add_disciplina()"
                />
              </div>
              <div v-for="(disciplina, index) in formattedForm.disciplinas">

                <UButtonGroup class="w-full mt-2">
                  <USelect
                      v-model="formattedForm.disciplinas[index].value"
                      class="w-full"
                      :options="formattedDisciplinas"
                      option-attribute="name"
                      name="disciplina"
                  />
                  <UButton
                      color="red"
                      icon="i-heroicons-trash-solid"
                      @click="remove_disciplina(index)"
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
//Props

//Emits
const emits = defineEmits(['refresh']);
//Reactive variables
import type {FormError} from "#ui/types";
import actions from "~/actions";

const modalState = defineModel('modalState');
const form = defineModel('form', {
  default: {
    st_nome: '',
    disciplinas: []
  }
});

const formattedForm = ref({});

const disciplinas = ref([]);

//Computed
const formattedDisciplinas = computed (() => {
  if(disciplinas.value) {
    const defaultOption = { value: '', name: 'Selecione uma disciplina...' };
    const array = disciplinas.value.map((disciplina) => {
      return { value: disciplina.id, name: disciplina.st_nome };
    });
    return [defaultOption, ...array];
  }
})
//Methods
const close_modal = () => {
  modalState.value = false;
}

function add_disciplina() {
  formattedForm.value.disciplinas.push({ value: '', name: '' });
}

function remove_disciplina(index) {
  formattedForm.value.disciplinas.splice(index, 1);
}

const validate = (state: any): FormError[] => {
  const errors = [];
  if(!state.st_nome) {
    errors.push({ path: 'st_nome', message: 'Campo não pode ser nulo' });
  }

  return errors;
}


function onSubmit() {

  if(formattedForm.value) {
    if(!formattedForm.value.id) {
      actions.segmentoEscolar.create(formattedForm.value);
    } else {
      actions.segmentoEscolar.update(formattedForm.value);
    }

    close_modal();
    emits('refresh');
  }
}
//Watchers

watch(
    () => form.value,
    (newFormValue) => {
      if (newFormValue) {
        formattedForm.value = {
          ...newFormValue,
          disciplinas: newFormValue.disciplinas.map((disciplina) => {
            return { value: disciplina.id, name: disciplina.st_nome };
          }),
        };
      }
    },
    { immediate: true },
    { deep: true }
);
//Lifecycle hooks

onMounted(async () => {
  disciplinas.value = (await actions.disciplina.list()).data;
})
//Expose
</script>

<style scoped>

</style>