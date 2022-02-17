<!--
 * @Author: zengminghong
 * @Date: 2022-02-17 04:54:30
 * @LastEditTime: 2022-02-17 10:22:00
 * @LastEditors: zengminghong
 * @Description: 
-->
<template>
  <BaseListLayout v-if="$pagination" />
  <Content v-else />
</template>