<template>
  <BaseButton success @click="success">success</BaseButton>
  <BaseButton danger @click="danger">danger</BaseButton>
  <BaseButton default @click="default1">default</BaseButton>
  <BaseButton info @click="info">info</BaseButton>
  <BaseButton warning @click="warning">warning</BaseButton>
</template>

<script>
import { getCurrentInstance, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()
    const success = () => {
      proxy.$toast({
        type: 'success',
        title: 'title',
        message: 'message'
      })
    }
    const info = () => {
      proxy.$toast.info('title', 'message')
    }
    const warning = () => {
      proxy.$toast.warning('title', 'message')
    }
    const danger = () => {
      proxy.$toast.danger('title', 'message')
    }
    const default1 = () => {
      proxy.$toast.default('title', 'message')
    }
    return {
      success,
      info,
      warning,
      danger,
      default1,
    }
  },
})
</script>
