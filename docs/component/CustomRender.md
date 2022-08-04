# CustomRender

自定义渲染

## 基础用法

as 修改标签
:::demo

<<< @/../Demos/custom-render/Basic.vue

:::

## 自定义render

:::demo

<<< @/../Demos/custom-render/Render.vue

:::

## 使用as指定组件

<<< @/../Demos/custom-render/As.vue

## props

| 参数 |  类型   | 是否必传 |   说明       | 默认值 |
| ---- | ------ | ----- | ------------- | ----- |
| offset-top | number | 否 | 距离顶部的距离 | 0 |
| offset-bottom | number | 否 | 距离底部的距离 | - |

## events

| 事件名称 |  说明   | 回调参数 |
| ---- | ------ | ----- |
| change | 当固定状态改变时触发 | true/false |

## slots

| 插槽名称 |  说明   | 参数 |
| ---- | ------ | ----- |
| default | 显示内容 | - |
