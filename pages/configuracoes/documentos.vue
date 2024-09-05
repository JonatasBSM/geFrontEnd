<template>


  <NuxtLayout  :name="device.isMobile ? 'mobile-dashboard' : 'desktop-dashboard'">
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
              <crud-table title="Tipo de Documento" modal-component="TipoDocumentoModal" action-class="tipoDocumento" :columns="[
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
                  key: 'actions',
                  content: 'st_descricao',
                },
              ]"/>
            </template>
            <template v-else-if="item.key == 'documentacao'">
              <crud-table title="Documentação" modal-component="DocumentacaoModal" action-class="documentacao" :columns="[
                {
                  label: 'Id',
                  key: 'id',
                },
                {
                  label: 'Nome',
                  key: 'st_nome',
                },
                {
                  label: 'Entidade',
                  key: 'actions',
                  content: 'ch_tipo_entidade'
                },
              ]"/>
            </template>
          </template>
        </UTabs>
      </UCard>
    </div>
  </NuxtLayout>

</template>

<script setup lang="ts">

import CrudTable from "~/components/shared/tables/CrudTable.vue";

definePageMeta({
  middleware: ['auth']
})

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

const breadcrumbs = [
  { label: 'Configurações', to: '/configuracoes' },
  { label: 'Documentos', to: '/configuracoes/documentos' }
]

const device = useDevice();

</script>

<style scoped>

</style>