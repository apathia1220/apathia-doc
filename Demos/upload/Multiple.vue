<template>
  <Upload
    v-model="file2s"
    :multiple="true"
    action="/upload/path"
    :resolve-url="resolveLocation"
  />
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const file2s = ref('')

    const resolveLocation = resp => {
      return resp.data
    }

    return {
      file2s,
      resolveLocation,
    }
  },
})
</script>
