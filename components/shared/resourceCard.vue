<template>
    <div class="bg-white rounded-lg shadow-md p-5 transition-shadow duration-300 cursor-pointer hover:shadow-xl">
      <header class="flex justify-between  pb-2">
        <div v-if="st_title">
          <h2 class="text-[#6a6cfe] font-bold">{{st_title}}</h2>
        </div>
        <resource-card-dropdown :to="to" :items="dropdownItems"/>
      </header>
      <section class="grid grid-cols-3 gap-0 mt-2">
        <div :class="fl_image_only ? 'col-span-3' : 'col-span-1' ">
          <img width="150px" v-if="st_image_url" :src="st_image_url" alt="" class="image"/>
        </div>
        <div v-if="!fl_image_only && st_content" class="col-span-2">
          <p>{{st_content}}</p>
        </div>
      </section>
    </div>
</template>

<script>
import ResourceCardDropdown from "~/components/shared/dropdown/resourceCardDropdown.vue";

export default {
  name: 'CustomComponent',
  components: {ResourceCardDropdown},
  props: {
    st_title: {
      type: String,
      default: ''
    },
    fl_image_only: {
      type: Boolean,
      default: false
    },
    st_image_url: {
      type: String,
      default: ''
    },
    st_content: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      dropdownItems: [
        [
          { label: 'Ver mais' }
        ],
        [
          { label: 'Fechar' }
        ]
      ]
    };
  }, 
}
  
</script>

<style scoped>
</style>
