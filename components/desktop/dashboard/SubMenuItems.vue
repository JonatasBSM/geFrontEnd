<template>
    <li>
        <nuxt-link :class="get_route() == to ? 'active' : ''" class="cursor-pointer py-2 px-4 text-gray-600 hover:bg-[#f5f5f5] rounded flex flex-row items-center" :to="to">
            <Icon :name="icon"/>
            <div id="sub-menu-label" class="ml-2 text-black">{{ label }}</div>
        </nuxt-link>
    </li>
</template>
<script setup lang="ts">
import {useRoute} from "vue-router";

const props = defineProps({
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
})

function get_route() {
    const route = useRoute();
    if(route.path == '/') {
        return '/';
    }
    return '/' + route.path.split('/')[1];
}

</script>
<style>
   .active {
     background-color: #f5f5f5;
   }

</style>