<template>


  <nuxt-layout  :name="device.isMobile ? 'mobile-dashboard' : 'desktop-dashboard'">
    <div class="grid grid-cols-1 gap-4">
      <UBreadcrumb 
      :links="breadcrumbs"
      :ui="{
        active: 'text-ge-violet'
      }"
      />
      
      <UCard>
        <UTabs :items="tabs" >
          <template #item="{ item }">
            <template v-if="item.key == 'tipo-documento'">
              <header class="flex justify-end mt-6">
                <UButton
                    icon="i-heroicons-pencil-square"
                    size="sm"
                    color="violet"
                    variant="solid"
                    label="Novo Tipo de Documento"
                    :trailing="false"
                    @click="open_modal_tipo_documento()"
                />
              </header>
              <UTable
                  :columns="columnsTipoDocumento"
                  :rows="tiposDocumentos"
              />
            </template>
            <template v-else-if="item.key == 'documentacao'">
              <header class="flex justify-end mt-6">
                <UButton
                    icon="i-heroicons-pencil-square"
                    size="sm"
                    color="violet"
                    variant="solid"
                    label="Nova Documentação"
                    :trailing="false"
                    @click="modalDocumentacaoState = true"
                />
              </header>
              <UTable
                  :columns="columnsDocumentacao"
              />
            </template>
          </template>
        </UTabs>
      </UCard>
    </div>
  </nuxt-layout>

  <tipo-documento @refresh-tipo-documento="refresh_tipo_documento()" :tipoDocumento="selectedTipoDocumento" v-model="modalTipoDocumentoState" />
  <documentacao v-model="modalDocumentacaoState"/>
</template>

<script setup lang="ts">

import tipoDocumento from "~/components/shared/Modals/tipoDocumento.vue";
import documentacao from "~/components/shared/Modals/documentacao.vue";
import type {CreateTipoDocumentoForm} from "~/actions/tipoDocumento/create";
import type {UpdateTipoDocumentoForm} from "~/actions/tipoDocumento/update";
import actions from "~/actions";

const modalTipoDocumentoState = ref(false);
const modalDocumentacaoState = ref(false);

const selectedTipoDocumento = ref<CreateTipoDocumentoForm|UpdateTipoDocumentoForm|null>(null);

const tabs = [
  {
    key: 'tipo-documento',
    label: 'Tipos de Documento',
  },
  {
    key: 'documentacao',
    label: 'Documentação',
  },
];

let tiposDocumentos = ref([]);
let documentacoes = ref([]);

const columnsTipoDocumento = [
  {
    label: 'Id',
    key: 'id',
  },
  {
    label: 'Nome',
    key: 'st_nome',
  },
  {
    label: 'Descrição',
    key: 'st_descricao',
  },
  {
    label: 'Ações',
    key: '',
  },
];

const columnsDocumentacao = [
  {
    label: 'Id',
    key: 'id',
  },
  {
    label: 'Nome',
    key: 'st_nome',
  },
  {
    label: 'Descrição',
    key: 'st_descricao',
  },
  {
    label: 'Ações',
    key: '',
  },
];

const breadcrumbs = [
  { label: 'Configurações', to: '/configuracoes' },
  { label: 'Documentos', to: '/configuracoes/documentos' }
]

const device = useDevice();

function open_modal_tipo_documento(tipoDocumento: UpdateTipoDocumentoForm|null = null) {

  modalTipoDocumentoState.value = true;

  if (tipoDocumento) {
    selectedTipoDocumento.value = tipoDocumento;
  } else {
    selectedTipoDocumento.value = {
      st_nome: '',
      st_descricao: '',
    };
  }

}

async function refresh_tipo_documento() {
  tiposDocumentos.value = (await actions.tipoDocumento.list()).data;
}

onMounted(async () => {
    tiposDocumentos.value  = (await actions.tipoDocumento.list()).data;
});

</script>

<style scoped>

</style>