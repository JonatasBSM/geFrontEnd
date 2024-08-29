<template>
  <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'left-start' }">
    <Icon style="color: #4b5563" size="1.5em" name="ri:more-2-fill" class="transition-transform transform hover:-translate-y-2" />

    <template #item="{ item }">
      
      <nuxt-link class="w-full text-left" v-if="item.label != 'Fechar'" :to="to">
        <span class="truncate">{{ item.label }}</span>
      </nuxt-link>

      <span v-else>{{ item.label }}</span>

    </template>
    
  </UDropdown>
</template>

<script setup lang="ts">

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: [
      { label: 'Ver mais' },
      { label: 'Fechar' }
    ]
  },
  to: {
    type: String,
    default: ''
  }
})

</script>

<style scoped>

</style>