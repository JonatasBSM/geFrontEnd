<template>
  <NuxtLayout :name="device.isMobile ? 'mobile-dashboard' : 'desktop-dashboard'">
    <div class="grid grid-cols-1 gap-4">
      <UBreadcrumb
          :links="breadcrumbs"
          :ui="{
        active: 'text-ge-violet'
      }"
      />

      <UForm :validate="validate" :state="form" @submit="onSubmit()">
        <UCard title="Cadastro de Professor">
          <!-- Dados Pessoais -->
          <UDivider label="Dados Pessoais"/>
          <div class="grid md:grid-cols-4 gap-4 mt-2">
            <UFormGroup class="md:col-span-3" label="Nome Completo" name="nome">
              <UInput v-model="form.st_nome" class="col-span-3" placeholder="Nome..."/>
            </UFormGroup>

            <UFormGroup label="Data de Nascimento" name="dt_nascimento">
              <UInput v-model="form.dt_nascimento" type="date"/>
            </UFormGroup>

            <UFormGroup class="md:col-span-3" label="E-mail" name="mail">
              <UInput v-model="form.st_email" class="col-span-3" type="email" placeholder="E-mail..."/>
            </UFormGroup>

            <UFormGroup label="Telefone" name="telefone">
              <UInput v-maska="'(##) #####-####'" v-model="form.st_telefone" type="tel" placeholder="Telefone..."/>
            </UFormGroup>

            <UFormGroup label="CPF" name="cpf">
              <UInput v-maska="'###.###.###-##'" v-model="form.st_cpf" placeholder="CPF..."/>
            </UFormGroup>

            <UFormGroup label="RG" name="rg">
              <UInput v-maska="'## ###.###-##'" v-model="form.st_rg" placeholder="RG..."/>
            </UFormGroup>

            <UFormGroup label="Sexo" name="sexo">
              <URadioGroup v-model="form.ch_sexo" :options="[
                    { value: 'M', label: 'Masculino' },
                    { value: 'F', label: 'Feminino' },
                    { value: 'X', label: 'Outro' }
              ]"/>
            </UFormGroup>
          </div>

          <h3>Endereço</h3>
          <Endereco v-model:endereco="form.endereco" class="mt-2"/>

          <!-- Dados Acadêmicos -->
          <UDivider label="Dados Acadêmicos" class="mt-6"/>
          <div class="grid md:grid-cols-4 gap-2 mt-2">
            <UFormGroup name="segmento_escolar">
              <USelect v-model="form.segmento_escolar_id" label="Segmento Escolar" :options="segmentos" placeholder="Selecione o segmento">
              </USelect>
            </UFormGroup>
            <UFormGroup name="disciplinas">
              <USelectMenu v-model="form.disciplinas" label="Disciplinas" :options="disciplinas" placeholder="Selecione as disciplinas" multiple>
                <template #label>
                  <span> {{ form.disciplinas.length < 1 ? 'Nenhuma disciplina selecionada' : form.disciplinas.length + ' disciplina' + (form.disciplinas.length > 1 ? 's' : '') }}</span>
                </template>
              </USelectMenu>
            </UFormGroup>
          </div>

          <!-- Botão de Submissão -->
          <div class="mt-6">
            <UButton
                icon="i-heroicons-pencil-square"
                size="sm"
                color="violet"
                label="Salvar"
                type="submit"
            />
          </div>
        </UCard>
      </UForm>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import actions from "~/actions";
import Endereco from "~/components/shared/Endereco.vue";
import { vMaska } from "maska/vue";
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
  st_nome: '',
  dt_nascimento: '',
  st_email: '',
  st_telefone: '',
  endereco: {
    st_cep: '',
    st_logradouro: '',
    st_numero: '',
    st_bairro: '',
    cidade_id: '',
    estado_id: ''
  },
  st_cpf: '',
  st_rg: '',
  ch_sexo: '',
  segmento_escolar_id: '',
  disciplinas: []
});

const segmentos = ref([]);
//Computed
const disciplinas = computed(() => {
  if (segmentos.value) {
    const segmento = segmentos.value.find((segmento) => segmento.value == form.value.segmento_escolar_id);

    return segmento ? segmento.disciplinas.map(disciplina => {
      return { value: disciplina.id, label: disciplina.st_nome };
    }) : [];

  }
});
//Methods
function validate(state: any) {
  const errors = [];

  if (!state.st_nome) {
    errors.push({ path: 'nome', message: 'Nome é obrigatório' });
  }

  if (!state.dt_nascimento) {
    errors.push({ path: 'dt_nascimento', message: 'Data de nascimento é obrigatória' });
  }

  if (!state.st_email) {
    errors.push({ path: 'email', message: 'E-mail é obrigatório' });
  }

  if (!state.st_telefone) {
    errors.push({ path: 'telefone', message: 'Telefone é obrigatório' });
  }

  if (!state.st_cpf) {
    errors.push({ path: 'cpf', message: 'CPF é obrigatório' });
  }

  if (!state.st_rg) {
    errors.push({ path: 'rg', message: 'RG é obrigatório' });
  }

  if (!state.ch_sexo) {
    errors.push({ path: 'sexo', message: 'Sexo é obrigatório' });
  }

  if (!state.segmento_escolar_id) {
    errors.push({ path: 'segmento_escolar', message: 'Segmento é obrigatório' });
  }

  if (state.disciplinas.length < 1) {
    errors.push({ path: 'disciplinas', message: 'Selecione ao menos uma disciplina' });
  }

  return errors;
}

function onSubmit() {
  console.log('entrou')
  if (form.value) {
    actions.professor.create(form.value);
  }
}
//Watchers

//Lifecycle hooks
onMounted(async () => {

  segmentos.value = (await actions.segmentoEscolar.list()).data.map((segmento) => {
    return { value: segmento.id, label: segmento.st_nome, disciplinas: segmento.disciplinas };
  });

  //const cidades = (await actions.cidade.list()).data;
})
//Expose
</script>

<style scoped>

</style>