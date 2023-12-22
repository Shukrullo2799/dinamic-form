import 'primevue/resources/themes/lara-light-green/theme.css'
import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Dropdown from 'primevue/dropdown'
import Checkbox from 'primevue/checkbox'
import Textarea from 'primevue/textarea'
import Calendar from 'primevue/calendar'
import RadioButton from 'primevue/radiobutton'
import Dialog from 'primevue/dialog'

import ColorPicker from 'primevue/colorpicker'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue)
app.use(ToastService)
app.component('Button', Button)
app.component('InputText', InputText)
app.component('InputNumber', InputNumber)
app.component('Dropdown', Dropdown)
app.component('Checkbox', Checkbox)
app.component('Textarea', Textarea)
app.component('Calendar', Calendar)
app.component('ColorPicker', ColorPicker)
app.component('RadioButton', RadioButton)
app.component('Dialog', Dialog)
app.mount('#app')
