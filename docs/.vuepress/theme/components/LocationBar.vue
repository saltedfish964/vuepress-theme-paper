<!--
 * @Author: zengminghong
 * @Date: 2022-02-17 08:05:19
 * @LastEditTime: 2022-02-17 08:16:24
 * @LastEditors: zengminghong
 * @Description: 
-->
<template>
  <div class="location-bar">
    <div class="line-1">
      <div class="horizontal-line" style="height: 3px"></div>
    </div>
    <div class="line-2">
      <div class="horizontal-line" style="height: 1px"></div>
    </div>
    <p class="text">{{ name }}</p>
    <div class="line-3">
      <div class="horizontal-line" style="height: 1px"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '首页',
    }
  }
}
</script>

<style lang="stylus" scoped>
.horizontal-line
  width: 100%
  height: 2px
  background: #333
.location-bar
  position: relative
  .line-1, .line-2, .line-3
    background: #333
  .line-1
    margin-bottom: 2px
  .text
    text-align: center
    font-size: 0.875rem
    line-height: 1.375rem
    margin: 0.2em 0
    padding: 0 2.5rem
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
</style>