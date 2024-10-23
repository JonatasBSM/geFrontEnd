<template>
  <div >
    <UForm :class="layout" :state="endereco">
      <UFormGroup label="CEP" name="cep">
        <UInput v-maska="'#####-###'" @input="search_cep()" v-model="endereco.st_cep" placeholder="CEP..." class=""/>
      </UFormGroup>

      <UFormGroup label="Logradouro" name="logradouro">
        <UInput v-model="endereco.st_logradouro" placeholder="Logradouro..." class=""/>
      </UFormGroup>

      <UFormGroup label="Número" name="numero">
        <UInput v-model="endereco.st_numero" placeholder="Número..." class=""/>
      </UFormGroup>

      <UFormGroup label="Bairro" name="bairro">
        <UInput v-model="endereco.st_bairro" placeholder="Bairro..." class=""/>
      </UFormGroup>

      <UFormGroup label="Cidade" name="cidade">
        <USelectMenu v-model="endereco.cidade_id" :options="cidades" option-attribute="label" value-attribute="value" :searchable="search_cidade">
        </USelectMenu>
      </UFormGroup>

      <UFormGroup label="Estado" name="estado">
        <USelectMenu v-model="endereco.estado_id" :options="estados" option-attribute="label" value-attribute="value" :searchable="search_estado">
        </USelectMenu>
      </UFormGroup>
    </UForm>

  </div>
</template>

<script setup lang="ts">
import actions from "~/actions";
import { vMaska } from "maska/vue";
//Props

const props = defineProps({
  layout: {
    type: String,
    default: 'grid grid-cols-4 gap-4'
  }
});
//Emits

//Reactive variables
const endereco = defineModel('endereco');
const cidades = ref([{ label: 'Selecione a cidade', value: '' }]);
const estados = ref([{ label: 'Selecione o estado', value: '' }]);
const loadingCidade = ref(false);
let timeout: any = null;
//Computed

//Methods
async function search_cep() {

  if(!endereco.value.st_cep || endereco.value.st_cep.length < 9) {
    return;
  }

  clearTimeout(timeout);

  // Define um novo timeout
  timeout = setTimeout(async () => {
    if (!endereco.value.st_cep || endereco.value.st_cep.length < 9) {
      return;
    }

    const response = await actions.endereco.search_cep(endereco.value.st_cep);

    if (!response) {
      return useToast().add({
        title: 'Erro',
        description: 'Falha ao buscar registros.',
        icon: 'i-heroicons-x-circle',
        color: 'red',
      });
    }

    if (response.status !== 200) {
      return useToast().add({
        title: 'Erro',
        description: response.message ?? 'Falha ao buscar registros.',
        icon: 'i-heroicons-x-circle',
        color: 'red',
      });
    }

    endereco.value.st_logradouro = response.result.logradouro;
    endereco.value.st_bairro = response.result.bairro;

    const estadoResponse = response.result.estado;
    const cidadeResponse = response.result.localidade;

    if(!estados.value.find(estado => estado.value === response.result.estado.id)) {
      estados.value.push({ label: estadoResponse.st_nome, value: estadoResponse.id });
    }

    if(!cidades.value.find(cidade => cidade.value === response.result.localidade.id)) {
      cidades.value.push({ label: cidadeResponse.st_nome, value: cidadeResponse.id });
    }

    endereco.value.estado_id = estadoResponse.id;
    endereco.value.cidade_id = cidadeResponse.id;

  }, 300);
}

async function search_cidade(search: string) {

  if(!search || search.length < 3) {
    return;
  }

  loadingCidade.value = true;

  const searchObject = {
    values: [search],
    fields: ['st_nome'],
    model: 'Cidade',
    type: 'and'
  }

  const response = (await actions.endereco.cidade.search(searchObject)).data;

  if(response) {

    cidades.value = response.map((cidade: any) => {
      return { label: cidade.st_nome, value: cidade.id };
    });

    loadingCidade.value = false;
    return cidades.value;
  }

  loadingCidade.value = false;
  return [];

}

async function search_estado(search: string) {

  if(!search || search.length < 3) {
    return;
  }

  const searchObject = {
    values: [search],
    fields: ['st_nome'],
    model: 'Estado',
    type: 'and'
  }

  const response = (await actions.endereco.estado.search(searchObject)).data;

  if(response) {

    estados.value = response.map((estado: any) => {
      return { label: estado.st_nome, value: estado.id };
    });

    loadingCidade.value = false;
    return estados.value;
  }

  loadingCidade.value = false;
  return [];
}
//Watchers

//Lifecycle hooks
//Expose
</script>

<style scoped>

</style>