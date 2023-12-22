<template>
  <form
    @submit.prevent="formStore.updateJson()"
    class="bg-white text-black-alpha-90 p-4 mx-auto border-round-2xl"
  >
    <h2 class="mb-4">Форма</h2>
    <div
      class="flex flex-column gap-3 mb-4 border border-dashed border-round-2xl p-2"
      @drop.stop="drop"
      @dragenter.prevent="active = true"
      @dragover.stop="dragOver"
      @dragleave.prevent="active = false"
      :class="active ? 'border-primary' : ' border-white'"
    >
      <template v-if="formStore.fieldCount">
        <div class="flex flex-column gap-2" v-for="(field, i) in getData" :key="i">
          <FieldComp :item="field" @delete-field="formStore.removeField($event)" />
        </div>
      </template>
    </div>

    <Button class="py-3 w-full" outlined label="Сохранить" type="submit" />
  </form>
  <div class="bg-white px-5 py-3 mx-auto border-round-2xl mt-5 text-black-alpha-90">
    <AddField @add-field="formStore.addField($event)" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import AddField from './AddField.vue'
import { useFormStore } from '@/stores/form'
import FieldComp from './FieldComp.vue'
const props = defineProps({
  draggedField: {
    type: Object,
    default: () => ({})
  }
})

const formStore = useFormStore()
const getData = computed(() => formStore.getData)
const active = ref(false)
const drop = (e) => {
  e.preventDefault()
  console.log(props.draggedField)
  formStore.addField(props.draggedField)
  active.value = false
}
const dragOver = (e) => {
  e.preventDefault()
  active.value = true
}
</script>
