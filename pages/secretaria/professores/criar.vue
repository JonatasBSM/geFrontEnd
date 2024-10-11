<template>
  <NuxtLayout :name="device.isMobile ? 'mobile-dashboard' : 'desktop-dashboard'">
    <div class="grid grid-cols-1 gap-4">
      <UBreadcrumb
          :links="breadcrumbs"
          :ui="{
        active: 'text-ge-violet'
      }"
      />


      <UForm :validate="validate" :state="form" @submit="on_submit()">
        <UCard title="Cadastro de Professor">
          <!-- Dados Pessoais -->
          <h3>Dados Pessoais</h3>
          <div class="grid grid-cols-4 gap-4 mt-2">
            <UFormGroup class="col-span-3" label="Nome Completo" name="nome">
              <UInput v-model="form.nome" class="col-span-3" placeholder="Nome..."/>
            </UFormGroup>

            <UFormGroup label="Data de Nascimento" name="dt_nascimento">
              <UInput v-model="form.dataNascimento" type="date"/>
            </UFormGroup>

            <UFormGroup class="col-span-3" label="E-mail" name="mail">
              <UInput v-model="form.email" class="col-span-3" type="email" placeholder="E-mail..."/>
            </UFormGroup>

            <UFormGroup label="Telefone" name="telefone">
              <UInput v-model="form.telefone" type="tel" placeholder="Telefone..."/>
            </UFormGroup>

            <UFormGroup label="CPF" name="cpf">
              <UInput v-model="form.cpf" placeholder="CPF..."/>
            </UFormGroup>

            <UFormGroup label="RG" name="rg">
              <UInput v-model="form.rg" placeholder="RG..."/>
            </UFormGroup>

            <UFormGroup label="CEP" name="cep">
              <UInput v-model="form.cep" placeholder="CEP..."/>
            </UFormGroup>

            <UFormGroup label="Logradouro" name="logradouro">
              <UInput v-model="form.logradouro" placeholder="Logradouro..."/>
            </UFormGroup>

            <UFormGroup label="Número" name="numero">
              <UInput v-model="form.numero" placeholder="Número..."/>
            </UFormGroup>

            <UFormGroup label="Bairro" name="bairro">
              <UInput v-model="form.bairro" placeholder="Bairo..."/>
            </UFormGroup>

            <UFormGroup label="Cidade" name="cidade">
              <UInput v-model="form.cidade" placeholder="Cidade..."/>
            </UFormGroup>

            <UFormGroup label="Estado" name="estado">
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

//Computed

//Methods
function validate(state: any) {
  const errors = [];

  if (!state.nome) {
    errors.push({ path: 'nome', message: 'Nome é obrigatório' });
  }

  if (!state.dataNascimento) {
    errors.push({ path: 'dataNascimento', message: 'Data de nascimento é obrigatória' });
  }

  if (!state.email) {
    errors.push({ path: 'email', message: 'E-mail é obrigatório' });
  }

  if (!state.telefone) {
    errors.push({ path: 'telefone', message: 'Telefone é obrigatório' });
  }

  if (!state.cpf) {
    errors.push({ path: 'cpf', message: 'CPF é obrigatório' });
  }

  if (!state.rg) {
    errors.push({ path: 'rg', message: 'RG é obrigatório' });
  }

  if (!state.cep) {
    errors.push({ path: 'cep', message: 'CEP é obrigatório' });
  }

  if (!state.logradouro) {
    errors.push({ path: 'logradouro', message: 'Logradouro é obrigatório' });
  }

  if (!state.numero) {
    errors.push({ path: 'numero', message: 'Número é obrigatório' });
  }

  if (!state.bairro) {
    errors.push({ path: 'bairro', message: 'Bairro é obrigatório' });
  }

  if (!state.cidade) {
    errors.push({ path: 'cidade', message: 'Cidade é obrigatória' });
  }

  if (!state.estado) {
    errors.push({ path: 'estado', message: 'Estado é obrigatório' });
  }

  if (!state.segmento) {
    errors.push({ path: 'segmento', message: 'Segmento é obrigatório' });
  }

  if (!state.disciplinas) {
    errors.push({ path: 'disciplinas', message: 'Disciplinas é obrigatório' });
  }

  return errors;
}

function on_submit() {
  if (form.value) {
    // actions.professor.create(form.value);
  }
}
//Watchers

//Lifecycle hooks

//Expose
</script>

<style scoped>

</style>