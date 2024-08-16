<script>

import resourceCard from "~/components/shared/resourceCard.vue";

export default {

  computed: {
    device() {
      return useDevice();
    }
  },
  
  components: {
    resourceCard
  }

}

</script>

<template>

  <NuxtLayout :name="device.isMobile ? 'mobile-dashboard' : 'desktop-dashboard'">
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
  </NuxtLayout>
</template>

<style scoped>

</style>