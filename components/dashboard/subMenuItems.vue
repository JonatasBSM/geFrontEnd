<template lang="">
    <li>
        <nuxt-link :class="get_route() == to ? 'active' : ''" class="cursor-pointer py-2 px-4 text-gray-600 hover:bg-gray-200 rounded flex flex-row items-center" :to="to">
            <Icon :name="icon"/>
            <div class="ml-2">{{ label }}</div>
        </nuxt-link>
    </li>
</template>
<script>
import {useRoute} from "vue-router";

export default {
    props: {
        label: {
            type: String,
            required: true
        },

        icon: {
            type: String,
            required: true
        },
      
        to: {
            type: String,
            required: true
        }
    },
  
    methods: {
        get_route() {
            if(this.$route.path == '/') {
                return '/';
            }
            return '/' + this.$route.path.split('/')[1];
        }
    }
  
}
</script>
<style>
   .active {
     background-color: #e5e7eb;
   } 
</style>