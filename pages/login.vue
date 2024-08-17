<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
        <h2 class="text-xl font-bold mb-6 text-gray-800">Iniciar Sessão</h2>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">E-mail</label>
            <input
              id="email"
              type="email"
              v-model="email"
              required
              class="mt-1 bg-white text-gray-800 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="seu@email.com"
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700">Senha</label>
            <input
              id="password"
              type="password"
              v-model="password"
              required
              class="mt-1 bg-white text-gray-800 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="********"
            />
          </div>
          <div class="flex justify-between">
            <div id="remember-me-div" class="items-center mb-4">
                <input
                id="remember-me"
                type="checkbox"
                v-model="rememberMe"
                class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label for="remember-me" class="ml-2 text-sm text-gray-600">Lembre de mim</label>
            </div>

            <a href="" class="text-indigo-600 hover:text-indigo-700">Esqueceu a senha?</a>
          </div>
          <button
            @click="handleLogin" 
            class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Entrar
          </button>
          <div class="mt-4 text-center">
            <a href="#" class="text-indigo-600 hover:text-indigo-700">Criar Nova Conta</a>
          </div>
      </div>
    </div>
  </template>
  
  <script>
import { useApi } from '~/composables/useApi';


  definePageMeta({
    middleware: ['guest']
  })

  export default {
    data() {
      return {
        email: '',
        password: '',
        rememberMe: false,
      };
    },
    methods: {
      async handleLogin() {

        await useApi('/sanctum/csrf-cookie');
        await useApi('/login', {
          method: 'post',
          body: {
            email: this.email,
            password: this.password,
            remember: this.rememberMe,
          },
        });
        const user = await useApi('/api/user'); 

      },
    },
  };
  </script>
  
  <style scoped>
  /* Adicione estilos adicionais aqui se necessário */
  </style>
  