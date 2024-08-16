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
  <nuxt-layout  :name="device.isMobile ? 'mobile-dashboard' : 'desktop-dashboard'">
    <div class="grid grid-cols-5 gap-4">
      <resource-card
          class="col-span-3"
          st_title="Avisos"
          st_image_url="https://via.placeholder.com/150"
          :fl_image_only="false"
          st_content="Aqui você encontra todos os avisos importantes"
      />
      <resource-card
          class="col-span-1"
          st_title="Documentos"
          to="/configuracoes/documentos"
          st_image_url="https://via.placeholder.com/150"
          :fl_image_only="true"
      />
      <resource-card
          class="col-span-1"
          st_title="Usuários"
          st_image_only="true"
          st_image_url="https://via.placeholder.com/150"
          :fl_image_only="true"
      />
    </div>
  </nuxt-layout>
  
  
</template>

<style scoped>

</style>