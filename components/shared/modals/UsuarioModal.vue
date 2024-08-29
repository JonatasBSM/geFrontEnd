<template>

  <UModal v-model="modalState">

    <UForm :validate="validate" :state="form" @submit="onSubmit()">

      <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex justify-between">
            <h3>Usuário</h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="close_modal()" />
          </div>
        </template>

        <div class="grid grid-col-1 gap-4">
          <div class="flex flex-col gap-2">
            <FormGroup label="Nome:" name="name">
              <UInput v-model="form.name" placeholder="Nome..." />
            </FormGroup>
            <FormGroup label="Email:" name="email">
              <UInput v-model="form.email" placeholder="E-mail..." />
            </FormGroup>
            <FormGroup label="Password:" name="password">
              <UInput v-model="form.password" placeholder="Password..." />
            </FormGroup>
          </div>
          <div class="flex flex-col">
            <FormGroup label="Descrição:" name="st_descricao">
              <USelect
                  v-model="form.cargo_id"
                  :options="formattedCargos"
                  :option-attribute="name"
              />
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

import Input from "~/node_modules copy/@nuxt/ui/dist/runtime/components/forms/Input.vue";
import actions from "~/actions";
import FormGroup from "~/node_modules copy/@nuxt/ui/dist/runtime/components/forms/FormGroup.vue";

const emits = defineEmits(['refresh']);

const modalState = defineModel('modalState');
const form = defineModel('form', {
  default: {
    name: '',
    email: '',
    password: '',
    cargo_id: ''
  }
});

const cargos = ref([]);

function close_modal() {
  modalState.value = false;
}

function validate(state: any) {
  const errors = [];

  if(!state.name) {
    errors.push({ path: 'name', message: 'O campo é obrigatório' });
  }
  if(!state.email) {
    errors.push({ path: 'email', message: 'O campo é obrigatório' });
  }

  if(!state.password) {
    errors.push({ path: 'password', message: 'O campo é obrigatório' });
  }

  return errors;
}

function onSubmit() {
  if(form.value) {
    if(!form.value.id) {
      actions.auth.create(form.value);
    } else {
      actions.auth.update(form.value);
    }

    close_modal();
    emits('refresh');
  }
}


onMounted(async () => {
  cargos.value = (await actions.cargos.list()).data;
});

</script>

<style scoped>

</style>