<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-xl font-bold mb-6 text-gray-800">Redefinição de Senha</h2>
      <UForm :validate="validate" :state="form" @submit="onSubmit()">
        <div class="mb-4">
          <UFormGroup label="Nova Senha:" name="password">
            <UInput
                size="lg"
                id="email"
                type="password"
                placeholder="********"
                v-model="form.password"
            />
          </UFormGroup>
        </div>
        <div class="mb-4">
          <UFormGroup label="Confirmar Senha:" name="confirm-password">
            <UInput
                size="lg"
                @keydown.down="onSubmit()"
                id="password"
                type="password"
                placeholder="********"
                v-model="form.confirmPassword"
            />
          </UFormGroup>
        </div>
        <UButton
            size="xl"
            type="submit"
            class="w-full flex justify-center bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Redefinir
        </UButton>
      </UForm>
    </div>
    <UNotifications/>
  </div>
</template>

<script setup lang="ts">
//Props

//Emits

//Reactive variables

import {definePageMeta} from "#imports";
import actions from "~/actions";

definePageMeta({
  middleware: ['guest']
})

const form = ref({
  password: '',
  confirmPassword: ''
});

const email = ref('');
const token = ref('');

//Computed

//Methods

function validate(state:any) {

  const errors = [];
  if(!state.password) {
    errors.push({path: 'password', message: 'O campo é obrigatório'});
  }

  if(!state.confirmPassword) {
    errors.push({path: 'confirm-password', message: 'O campo é obrigatório'});
  }

  if(state.password !== state.confirmPassword) {
    errors.push({path: 'confirm-password', message: 'As senhas não coincidem'});
  }

  return errors;
}

function onSubmit() {
  actions.auth.reset_password({
    'email': email.value,
    'token': token.value,
    'password': form.value.password,
    'password_confirmation': form.value.confirmPassword
  });
}
//Watchers

//Lifecycle hooks
onMounted(() => {

  const route = useRoute();

  email.value = route.params.email;
  token.value = route.params.token;
})
//Expose
</script>

<style scoped>

</style>