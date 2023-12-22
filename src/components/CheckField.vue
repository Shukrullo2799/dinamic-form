<template>
  <template v-if="item.type == 'input'">
    <template v-if="item.attributes.type == 'number'">
      <InputNumber
        :name="item.attributes.name"
        class="w-full bg-white"
        v-model="item.value"
        :placeholder="item.attributes.placeholder"
      />
    </template>
    <template v-else-if="item.attributes.type == 'checkbox'">
      <div>
        <Checkbox
          :name="item.attributes.name"
          class="bg-white"
          v-model="item.value"
          :binary="true"
        />
        <label class="ml-3" :for="item.attributes.name">{{ item.attributes.label }}</label>
      </div>
    </template>
    <template v-else-if="item.attributes.type == 'radio'">
      <div>
        <RadioButton
          :name="item.attributes.name"
          class="bg-white"
          v-model="item.value"
          :input-id="item.attributes.name"
          :value="item.attributes.name"
        />
        <label class="ml-3" :for="item.attributes.name">{{ item.attributes.label }}</label>
      </div>
    </template>
    <template v-else-if="item.attributes.type == 'date'">
      <Calendar
        :name="item.attributes.name"
        class="w-full bg-white"
        v-model="item.value"
        :placeholder="item.attributes.placeholder"
      />
    </template>
    <template v-else="item.attributes.type == 'text'">
      <InputText
        :name="item.attributes.name"
        class="w-full bg-white"
        v-model="item.value"
        :placeholder="item.attributes.placeholder"
      />
    </template>
  </template>
  <template v-else-if="item.type == 'textarea'">
    <Textarea
      :name="item.attributes.name"
      class="w-full bg-white"
      v-model="item.value"
      :rows="item.attributes.rows"
      :auto-resize="item.attributes.autoResize"
      :placeholder="item.attributes.placeholder"
    />
  </template>
  <template v-else-if="item.type == 'select'">
    <Dropdown
      :placeholder="item.attributes.placeholder"
      :name="item.attributes.name"
      class="w-full bg-white"
      :options="item.attributes.options"
      v-model="item.value"
      option-label="label"
      option-value="value"
    />
  </template>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
const { item } = toRefs(props)
</script>
