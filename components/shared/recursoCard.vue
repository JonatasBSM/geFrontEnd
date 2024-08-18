<template>
    <div class="bg-white rounded-lg shadow-md p-6 transition-shadow duration-300 hover:shadow-xl flex flex-col justify-between gap-8">
      <header class="flex justify-between items-center">
        <div v-if="st_title" class="flex gap-2">
          <div :class="fl_image_only ? 'col-span-3' : 'col-span-1' ">
            <img width="25px" v-if="st_image_url" :src="st_image_url" alt="" class="image rounded-lg"/>
          </div>
          <h2 id="card-title">- {{st_title}}</h2>
        </div>
        <resource-card-dropdown :to="to" :items="dropdownItems"/>
      </header>
      <section class="grid grid-cols-1">
          <p v-if="st_content"  id="card-content" class="text-sm text-gray-500">{{st_content}}</p>
      </section>

      <section v-if="st_wikipedia_url" class="flex text-xs items-center justify-end">
        <Icon style="color: #0000cc" name="tabler:brand-wikipedia"/>
        <p id="card-wiki" class="cursor-pointer transition-transform transform hover:text-[#0000cc]">&nbsp;- acessar wiki</p>
      </section>
    </div>
</template>

<script>
import ResourceCardDropdown from "~/components/shared/dropdown/recursoCardDropdown.vue";

export default {
  name: 'CustomComponent',
  components: {ResourceCardDropdown},
  props: {
    st_title: {
      type: String,
      default: ''
    },
    st_image_url: {
      type: String,
      default: ''
    },
    st_content: {
      type: String,
      default: ''
    },
    st_wikipedia_url: {
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
  #card-title {
    font-family: Montserrat;
  }

  #card-content {
    font-family: Montserrat;
  }

  #card-wiki {
    font-family: Roboto-Mono;
  }

</style>
