<script setup>
import CheckField from '@/components/CheckField.vue'
import DragIcon from '@/components/DragIcon.vue'
import FieldResult from '@/components/FieldResult.vue'
import { useFormStore } from '@/stores/form'
import { ref } from 'vue'
const formStore = useFormStore()
const selected = ref({})
const dragStart = (e, item) => {
  selected.value = item
  e.dataTransfer.effectAllowed = 'move'
}
const dragEnd = (e) => {
  selected.value = {}
}
</script>

<template>
  <main class="flex h-screen md:overflow-hidden md:flex-row flex-column">
    <div class="md:w-6 p-5 md:h-full md:overflow-auto no-scroll">
      <p class="font-500 text-2xl mb-5">Поля</p>
      <div class="flex flex-column gap-3">
        <div
          v-for="(type, i) in formStore.fieldTypes"
          :key="i"
          class="border border-primary p-2 border-round-2xl border-dashed flex gap-3 align-items-center"
          draggable="true"
          @dragstart="dragStart($event, type)"
          @dragend="dragEnd()"
          @dragover.prevent
        >
          <DragIcon class="cursor-move flex-shrink-0" />
          <CheckField :item="type" />
        </div>
      </div>
    </div>
    <div class="bg-primary md:h-full md:w-6 p-5 md:overflow-auto no-scroll">
      <FieldResult :draggedField="selected" />
    </div>
  </main>
</template>
