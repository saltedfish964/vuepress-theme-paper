<!--
 * @Author: zengminghong
 * @Date: 2022-02-17 05:08:18
 * @LastEditTime: 2022-02-17 10:13:05
 * @LastEditors: zengminghong
 * @Description: 
-->
<template>
  <div>
    <div class="mask-border"></div>
    <div class="head">
      <h1>
        <NavLink link="/">SaltedFish</NavLink>
        <!-- <a href="/">SaltedFish</a> -->
      </h1>
      <p>Code + Design => Magic</p>
    </div>
    <DefaultGlobalLayout />
  </div>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'
export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
  },
}
</script>

<style lang="stylus">
.mask-border
  position: relative
  z-index: 10
  pointer-events: none
  &:before
    content: ''
    width: 100%
    height: 100vh
    border: 0.625rem #ebc65a solid
    position: fixed
    top: 0
    left: 0
.head
  padding: 5rem 0
  text-align: center
  font-family: 'Abril Fatface', cursive, 'Alata', 'Noto Sans TC'
  position: relative
  h1
    font-size: 4rem
    line-height: 5.125rem
    margin-bottom: 0.625rem
    font-weight: 400
  a
    text-decoration: none
    color: #444
    &:hover
      color: #444
  p
    font-size: 0.875rem
    line-height: 1.375rem
</style>