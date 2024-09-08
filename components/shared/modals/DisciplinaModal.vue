<template>
  <UModal v-model="modalState">

    <UForm :validate="validate" :state="form" @submit="onSubmit()">

      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex justify-between">
            <h3>Disciplina</h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="close_modal()" />
          </div>
        </template>

        <div class="grid grid-col-1 gap-4">
          <div class="flex flex-col">
            <FormGroup label="Nome:" name="st_nome">
              <UInput v-model="form.st_nome" placeholder="Nome..." />
            </FormGroup>
          </div>
          <div class="flex flex-col">
            <FormGroup label="Descrição:" name="st_descricao">
              <UTextarea v-model="form.st_descricao" id="descricao_disciplina" placeholder="Descrição..." />
            </FormGroup>
          </div>
        </div>

        <template #footer>
          <div class="flex justify-end">
            <UButton
                icon="i-heroicons-pencil-square"
                size="sm"
                color="primary"
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

//Reactive variables
import FormGroup from "~/node_modules copy/@nuxt/ui/dist/runtime/components/forms/FormGroup.vue";
import actions from "~/actions";

const modalState = defineModel('modalState');
const form = defineModel('form', {
  default: {
    st_nome: '',
    st_descricao: ''
  }
});

const emits = defineEmits(['refresh']);

function close_modal() {
  modalState.value = false;
}

function validate(state: any) {
  const errors = [];

  if(!state.st_nome) {
    errors.push({ path: 'st_nome', message: 'O campo é obrigatório' });
  }

  return errors;
}

function onSubmit() {
  if(form.value) {
    if(!form.value.id) {
      actions.disciplina.create(form.value);
    } else {
      actions.disciplina.update(form.value);
    }

    close_modal();
    emits('refresh');
  }
}
</script>

<style scoped>

</style>