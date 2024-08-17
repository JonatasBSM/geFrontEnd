<script setup lang="ts">

import tipoDocumento from "~/components/shared/Modals/tipoDocumento.vue";
import documentacao from "~/components/shared/Modals/documentacao.vue";

const modalTipoDocumentoState = ref(false);
const modalDocumentacaoState = ref(false);

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

</script>

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
                    @click="modalTipoDocumentoState = true"
                />
              </header>
              <UTable
                  :columns="columnsTipoDocumento"
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

  <tipo-documento v-model="modalTipoDocumentoState" />
  <documentacao v-model="modalDocumentacaoState"/>
</template>
<style scoped>

</style>