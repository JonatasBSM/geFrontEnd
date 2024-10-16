<template>
  <div >
    <UForm :class="layout" :state="endereco">
      <UFormGroup label="CEP" name="cep">
        <UInput v-maska="'#####-###'" @input="buscar_cep()" v-model="endereco.st_cep" placeholder="CEP..." class=""/>
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
        <USelect v-model="endereco.cidade_id" :options="cidades" placeholder="Selecione a cidade" disabled class="">
        </USelect>
      </UFormGroup>

      <UFormGroup label="Estado" name="estado">
        <USelect v-model="endereco.estado_id" :options="estados" placeholder="Selecione o estado" disabled class="">
          <!-- Adicione opções aqui -->
        </USelect>
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
const cidades = ref([]);
const estados = ref([]);
let timeout: any = null;
//Computed

//Methods
async function buscar_cep() {

  if(!endereco.value.st_cep || endereco.value.st_cep.length < 9) {
    return;
  }

  clearTimeout(timeout);

  // Define um novo timeout
  timeout = setTimeout(async () => {
    if (!endereco.value.st_cep || endereco.value.st_cep.length < 9) {
      return;
    }

    const response = await actions.endereco.buscar_cep(endereco.value.st_cep);

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

    endereco.value.estado_id = estados.value.find((estado) => estado.label === response.result.estado)?.value;
    endereco.value.cidade_id = cidades.value.find((cidade) => cidade.label === response.result.cidade)?.value;
  }, 300);
}
//Watchers

//Lifecycle hooks
onMounted(async () => {

  const estadosResponse = (await actions.endereco.estado.list());
  estados.value = estadosResponse.data ? estadosResponse.data.map((estado) => {
    return { value: estado.id, label: estado.st_nome };
  }) : [];

  const cidadesResponse = (await actions.endereco.cidade.list());
  cidades.value = cidadesResponse.data ? cidadesResponse.data.map((cidade) => {
    return { value: cidade.id, label: cidade.st_nome, estado_id: cidade.estado_id };
  }) : [];

});
//Expose
</script>

<style scoped>

</style>