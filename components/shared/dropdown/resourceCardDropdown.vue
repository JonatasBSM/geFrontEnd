<script>

  export default {
    props: {
      items: {
        type: Array,
        required: true
      }
    } 
  } 

</script>

<template>
  <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'left-start' }">
    <Icon style="color: #4b5563" size="1.5em" name="ri:more-2-fill" class="transition-transform transform hover:-translate-y-2" />

    <template #item="{ item }">
      <span class="truncate">{{ item.label }}</span>

      <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
    </template>
    
  </UDropdown>
</template>

<style scoped>

</style>