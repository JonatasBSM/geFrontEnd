<template>
    <div>
       <UModal v-model="modalState" title="Logout" @close="close_modal()">
            <UCard>
                <template #header>
                    <div class="flex justify-between">
                        <h2>Desconectando</h2>
                        <UButton @click="close_modal()" color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"/>
                    </div>
                </template>

                <div class="flex justify-center pt-2">
                    <div class="flex flex-col items-center justify-center">
                        <Icon style="color:#ef4444" name="typcn:warning" size="3em"/>
                        <p class="mt-1">Tem certeza que deseja sair?</p>
                    </div>
                </div>

                <template #footer>
                    <div class="flex justify-end">
                        <div class="grid grid-cols-2 gap-2">
                            <UButton
                                size="sm"
                                color="red"
                                variant="solid"
                                label="Cancelar"
                                :trailing="false"
                                @click="close_modal()"
                            />

                            <UButton
                                size="sm"
                                color="emerald"
                                variant="solid"
                                label="Sim, sair"
                                :trailing="false"
                                @click="logout()"
                            />
                        </div>
                    </div>
                </template>
            </UCard>
        </UModal>   
    </div>
</template>
<script setup lang="ts">

  import actions from "~/actions";

  const modalState = defineModel();

  const close_modal = () => {
    modalState.value = false;
  }

  const logout = () => {
    actions.auth.logout()
  }

</script>
<style lang="">
    
</style>