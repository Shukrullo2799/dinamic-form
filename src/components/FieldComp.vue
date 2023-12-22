<template>
  <div class="flex flex-column gap-2">
    <div class="flex gap-1 align-items-center justify-content-between text-gray-400">
      <label :for="item.attributes?.name">{{ item.attributes?.label }}</label>
      <span class="cursor-pointer hover:text-900" @click="$emit('delete-field', item)"
        >Удалить поле</span
      >
    </div>

    <CheckField :item="item" />

    <div class="flex gap-3 align-items-center">
      <Checkbox v-model="item.required" :binary="true" />
      <span class="font-500">Сделать поле обязательным</span>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'
import CheckField from './CheckField.vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})
const { item } = toRefs(props)
</script>
