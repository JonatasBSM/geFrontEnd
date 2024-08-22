<template>
  <UDropdown :items="items">
    <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
  </UDropdown>
</template>

<script setup lang="ts">
//Props

//Emits
const emits = defineEmits({
  click: (item: any) => {
    item.click()
  }
})
//Reactive variables
const items = [
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    click: () => console.log('Edit', row.id)
  },
  {
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid'
  }]
]
//Computed

//Methods

//Watchers

//Lifecycle hooks

//Expose
</script>

<style scoped>

</style>