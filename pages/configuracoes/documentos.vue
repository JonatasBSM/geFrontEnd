<script>

import tipoDocumento from "~/components/shared/Modals/tipoDocumento.vue";
import documentacao from "~/components/shared/Modals/documentacao.vue";

export default {
  data() {
    return {
      tabs: [
        {
          key: 'tipo-documento',
          label: 'Tipos de Documento',
        },
        {
          key: 'documentacao',
          label: 'Documentação',
        },
      ],
      
      columnsTipoDocumento: [
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
      ],
      columnsDocumentacao: [
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
      ],
      flOpenTipoDocumento: false,
      flOpenDocumentacao: false,
      breadcrumbs: [
        { label: 'Configurações', to: '/configuracoes' },
        { label: 'Documentos', to: '/configuracoes/documentos' }
      ]
    }
  },
  
  computed: {
    device() {
      return useDevice();
    }
  },
  
  components: {
    tipoDocumento,
    documentacao,
  },
  
  mounted() {
  }
}

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
                    @click="$refs.tipoDocumento.open_modal()"
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
                    @click="$refs.documentacao.open_modal()"
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

  <documentacao ref="documentacao" />
  <tipo-documento ref="tipoDocumento" />
</template>
<style scoped>

</style>