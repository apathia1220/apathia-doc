<template>
  <CustomRender :render="titleRender" custom="custom render"/>
</template>

<script>
import { h } from 'vue'

export default {
  setup() {
    const titleRender = ({ custom }) =>
      h('h1', {}, `自定义渲染函数 - 参数为：${custom}`)

    return {
      titleRender,
    }
  },
}
</script>
