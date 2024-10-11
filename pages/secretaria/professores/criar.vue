<template>
  <NuxtLayout :name="device.isMobile ? 'mobile-dashboard' : 'desktop-dashboard'">
    <div class="grid grid-cols-1 gap-4">
      <UBreadcrumb
          :links="breadcrumbs"
          :ui="{
        active: 'text-ge-violet'
      }"
      />


      <UForm>
        <UCard title="Cadastro de Professor">
          <!-- Dados Pessoais -->
          <h3>Dados Pessoais</h3>
          <div class="grid grid-cols-4 gap-4 mt-2">
            <UFormGroup class="col-span-3" label="Nome Completo">
              <UInput v-model="form.nome" class="col-span-3" placeholder="Nome..." required />
            </UFormGroup>

            <UFormGroup label="Data de Nascimento">
              <UInput v-model="form.dataNascimento" type="date" required />
            </UFormGroup>

            <UFormGroup class="col-span-3" label="E-mail">
              <UInput v-model="form.email" class="col-span-3" type="email" placeholder="E-mail..." required />
            </UFormGroup>

            <UFormGroup label="Telefone">
              <UInput v-model="form.telefone" type="tel" placeholder="Telefone..." required />
            </UFormGroup>

            <UFormGroup label="CPF">
              <UInput v-model="form.cpf" placeholder="CPF..." required />
            </UFormGroup>

            <UFormGroup label="RG">
              <UInput v-model="form.rg" placeholder="RG..." required />
            </UFormGroup>

            <UFormGroup label="CEP">
              <UInput v-model="form.cep" placeholder="CEP..." required />
            </UFormGroup>

            <UFormGroup label="Logradouro">
              <UInput v-model="form.logradouro" placeholder="Logradouro..." required />
            </UFormGroup>

            <UFormGroup label="Número">
              <UInput v-model="form.numero" placeholder="Número..." />
            </UFormGroup>

            <UFormGroup label="Bairro">
              <UInput v-model="form.bairro" placeholder="Bairo..." />
            </UFormGroup>

            <UFormGroup label="Cidade">
              <UInput v-model="form.cidade" placeholder="Cidade..." required />
            </UFormGroup>

            <UFormGroup label="Estado">
              <USelect v-model="form.estado" placeholder="Selecione o estado">
                <!-- Adicione opções aqui -->
              </USelect>
            </UFormGroup>
          </div>

          <!-- Dados Acadêmicos -->
          <h3 class="mt-8">Dados Acadêmicos</h3>
          <div class="grid grid-cols-4 gap-2 mt-2">
            <USelect v-model="form.segmento" label="Segmento Escolar" placeholder="Selecione o segmento">
            </USelect>
            <USelectMenu v-model="form.disciplinas" label="Disciplinas" placeholder="Selecione as disciplinas" multiple>
            </USelectMenu>
          </div>

          <!-- Botão de Submissão -->
          <div class="mt-6">
            <UButton type="submit" @click="submitForm">Cadastrar</UButton>
          </div>
        </UCard>
      </UForm>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
//Props

//Emits

//Reactive variables
const device = useDevice();
const breadcrumbs = [
  { label: 'Secretaria',
    to: '/secretaria'
  },
  { label: 'Professores',
    to: '/secretaria/professores'
  },
  {
    label: 'Criar',
    to: '/secretaria/professores/criar'
  }
];

let form = ref({
  nome: '',
  dataNascimento: '',
  email: '',
  telefone: '',
  endereco: '',
  cpf: '',
  rg: '',
  segmento: '',
  disciplinas: []
});
/*
const tabs = [
  { key: 'dados_pessoais', label: 'Dados Pessoais' },
  { key: 'dados_academicos', label: 'Dados Acadêmicos' }
];
*/
//Computed

//Methods

//Watchers

//Lifecycle hooks

//Expose
</script>

<style scoped>

</style>