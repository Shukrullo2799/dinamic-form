<template>
  <div
    class="border border-dashed border-primary px-4 py-3 border-round-3xl flex align-items-center justify-content-between gap-3 cursor-pointer"
    @click="dialogVisible = true"
  >
    <span class="">Добавить поле</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path
        d="M15 6.25V23.75"
        stroke="#3EA748"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.25 15H23.75"
        stroke="#3EA748"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
  <Dialog v-model:visible="dialogVisible" header="Добавить поле" class="w-30rem" modal>
    <div class="flex flex-column gap-4 mb-4">
      <div v-for="(item, i) in formStore.fieldTypes" class="flex align-items-center gap-3">
        <RadioButton
          :name="item.attributes.name"
          v-model="selectedField"
          :input-id="item.attributes.name"
          :value="item"
        />

        <CheckField :item="item" />
      </div>
    </div>
    <Button class="py-3 w-full" outlined label="Добавить" @click="addField" />
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import { useFormStore } from '@/stores/form'
import CheckField from './CheckField.vue'
const emit = defineEmits(['add-field'])
const formStore = useFormStore()
const selectedField = ref(null)
const addField = () => {
  emit('addField', selectedField.value)
  dialogVisible.value = false
}
const dialogVisible = ref(false)
</script>
