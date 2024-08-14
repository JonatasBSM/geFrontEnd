<script>

definePageMeta({
  layout: 'desktop-dashboard',
})

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
    }
  }
}

</script>

<template>

  <UCard>

    <UTabs :items="tabs" >
      <template #item="{ item }">
        <template v-if="item.key == 'tipo-documento'">
            <UTable
                :columns="columnsTipoDocumento"
            />
        </template>
        <template v-else-if="item.key == 'documentacao'">
            <UTable
                :columns="columnsDocumentacao"
            />
        </template>
      </template>
    </UTabs>
  </UCard>
</template>
<style scoped>

</style>