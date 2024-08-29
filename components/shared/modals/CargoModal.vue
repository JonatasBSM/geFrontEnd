<template>
  <UModal v-model="modalState" title="Cargo">
    <UForm :validate="validate" :state="form" @submit="onSubmit">
      <UCard>
        <template #header>
          <div class="flex justify-between">
            <h3>Cargo</h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="close_modal()" />
          </div>
        </template>

        <div class="grid grid-cols-1 gap-4">
          <UFormGroup label="Nome">
            <UInput v-model="form.st_nome" />
          </UFormGroup>
          <UFormGroup label="Descrição">
            <UTextarea v-model="form.st_descricao" />
          </UFormGroup>
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
import actions from "~/actions";
import Textarea from "~/node_modules copy/@nuxt/ui/dist/runtime/components/forms/Textarea.vue";

const emits = defineEmits(['refresh']);

//Reactive variables
const modalState = defineModel('modalState');
const form = defineModel('form', {
  default: {
    st_nome: '',
    st_descricao: ''
  }
});
//Computed

//Methods
function validate(state: any) {
  const errors = [];

  if(!state.st_nome) {
    errors.push({ path: 'st_nome', message: 'O campo é obrigatório' });
  }

  return errors;
}

function onSubmit() {
  if(form.value) {
    if(form.value.id) {
      actions.cargo.update(form.value);
    } else {
      actions.cargo.create(form.value);
    }
  }

  close_modal();
  emits('refresh');
}

function close_modal() {
  modalState.value = false;
}
//Watchers

//Lifecycle hooks

//Expose
</script>

<style scoped>

</style>