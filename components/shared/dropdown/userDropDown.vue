<script setup lang="ts">
import logout from '~/components/shared/Modals/logout.vue'

const items = [
  [{
    label: 'ben@example.com',
    slot: 'account',
    disabled: true
  }],
  [{
    label: 'Sair',
    icon: 'i-heroicons-arrow-left-on-rectangle'
  }]
];

const modalState = ref(false);

function open_logout_modal() {
  modalState.value = true;
}

</script>

<template>
  <div>
    <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }" :popper="{ placement: 'bottom-start' }">
      <UAvatar size="lg" src="https://avatars.githubusercontent.com/u/739984?v=4" />

      <template #account="{ item }">
        <div class=" text-left">
          <p>
            Autenticado como
          </p>
          <p class="truncate font-medium text-gray-900 dark:text-white">
            {{ item.label }}
          </p>
        </div>
      </template>

      <template #item="{ item }">
        <div @click="open_logout_modal()" class="w-full flex justify-between">
          <span class="truncate">{{ item.label }}</span>
          <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
        </div>
      </template>
    </UDropdown>
    <logout v-model="modalState" />
  </div>
</template>