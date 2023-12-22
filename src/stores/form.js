import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', () => {
  const fields = ref(
    JSON.parse(localStorage.getItem('fields')) || [
      {
        id: 1,
        type: 'input',
        required: true,
        attributes: {
          name: 'field1',
          type: 'text',
          label: 'Field 1'
        }
      },
      {
        id: 2,
        type: 'input',
        required: false,
        attributes: {
          name: 'field2',
          type: 'number',
          label: 'Field 2'
        }
      },
      {
        id: 3,
        type: 'select',
        required: false,
        attributes: {
          name: 'field4',
          label: 'Field 4',
          options: [
            {
              id: '1',
              label: 'Option 1',
              value: 'option1'
            },
            {
              id: '2',
              label: 'Option 2',
              value: 'option2'
            },
            {
              id: '3',
              label: 'Option 3',
              value: 'option3'
            }
          ]
        }
      }
    ]
  )
  const fieldTypes = ref([
    {
      type: 'input',
      required: false,
      attributes: {
        name: 'field',
        type: 'text',
        label: 'Field',
        placeholder: 'Text'
      }
    },
    {
      type: 'input',
      required: false,
      attributes: {
        name: 'field',
        type: 'number',
        label: 'Field',
        placeholder: 'Number'
      }
    },
    {
      type: 'input',
      required: false,
      attributes: {
        name: 'field',
        type: 'checkbox',
        label: 'Field'
      }
    },
    {
      type: 'input',
      required: false,
      attributes: {
        name: 'field',
        type: 'radio',
        label: 'Field'
      }
    },
    {
      type: 'input',
      required: false,
      attributes: {
        name: 'field',
        type: 'date',
        label: 'Field',
        placeholder: 'Date'
      }
    },
    {
      type: 'textarea',
      required: false,
      attributes: {
        name: 'field',
        label: 'Field',
        rows: 3,
        autoResize: true,
        placeholder: 'Text Area'
      }
    },
    {
      type: 'select',
      required: false,
      attributes: {
        name: 'field',
        label: 'Field',
        placeholder: 'Select',
        options: [
          {
            id: '1',
            label: 'Option 1',
            value: 'option1'
          },
          {
            id: '2',
            label: 'Option 2',
            value: 'option2'
          },
          {
            id: '3',
            label: 'Option 3',
            value: 'option3'
          }
        ]
      }
    }
  ])

  const getData = computed(() => fields.value)
  const addField = (field) => {
    fields.value.push({
      ...field,
      id: fields.value.length + 1
    })
  }

  const removeField = (field) => {
    fields.value.splice(fields.value.indexOf(field), 1)
    // updateJson()
  }

  const fieldCount = computed(() => fields.value.length)
  const updateJson = () => {
    const data = JSON.stringify(fields.value)
    localStorage.setItem('fields', data)
  }

  return {
    fields,
    addField,
    removeField,
    fieldCount,
    getData,
    updateJson,
    fieldTypes
  }
})
