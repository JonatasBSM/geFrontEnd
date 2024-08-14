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

    <UTabs :items="tabs" >
      <template #item="{ item }">
        <template v-if="item.key == 'tipo-documento'">
          <UCard>
            <UTable
                :columns="columnsTipoDocumento"
            />
          </UCard>
        </template>
        <template v-else-if="item.key == 'documentacao'">
          <UCard>
            <UTable
                :columns="columnsDocumentacao"
            />
          </UCard>
        </template>
      </template>
    </UTabs>
</template>
<style scoped>

</style>