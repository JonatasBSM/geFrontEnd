<script setup lang="ts">

import resourceCard from "~/components/shared/resourceCard.vue";

definePageMeta({
  layout: 'desktop-dashboard',
})

</script>

<template>

  <div class="grid grid-cols-5 gap-4">
    <resource-card
        class="col-span-1"
        st_title="Alunos"
        st_image_url="https://via.placeholder.com/150"
        :fl_image_only="true"
    />
    <resource-card
        class="col-span-1"
        st_title="Professores"
        st_image_url="https://via.placeholder.com/150"
        :fl_image_only="true"
    />
    <resource-card
        class="col-span-1"
        st_title="Turmas"
        st_image_only="true"
        st_image_url="https://via.placeholder.com/150"
        :fl_image_only="true"
    />
  </div>
</template>

<style scoped>

</style>