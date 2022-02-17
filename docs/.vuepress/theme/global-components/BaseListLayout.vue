<!--
 * @Author: zengminghong
 * @Date: 2022-02-17 05:05:17
 * @LastEditTime: 2022-02-17 17:08:11
 * @LastEditors: zengminghong
 * @Description: 
-->
<template>
  <div class="blog-list">
    <LocationBar />
    <div class="posts">
      <div 
        class="posts-item"
        v-for="page in pages"
        :key="page.key"
      >
        <h2 class="posts-item_title">
          <!-- <a class="posts-item_title_link" :href="page.path">{{ page.title }}</a> -->
          <NavLink class="posts-item_title_link" :link="page.path">{{ page.title }}</NavLink>
        </h2>
        <client-only v-if="page.excerpt">
          <p class="posts-item_excerpt" v-html="page.excerpt"></p>
        </client-only>
        <footer>
          <div class="time-container" v-if="page.frontmatter.date">
            <ClockIcon size="1x" />
            <time :datetime="page.frontmatter.date">
              {{ resolvePostDate(page.frontmatter.date) }}
            </time>
          </div>
          <div class="tag" v-if="page.frontmatter.tags">
            <div 
              class="tag-container"
              v-for="tag in resolvePostTags(page.frontmatter.tags)"
              :key="tag"
            >
              <TagIcon size="1x" />
              <router-link :to="'/tag/' + tag">#{{ tag }}</router-link>
            </div>
          </div>
        </footer>
      </div>
      <div class="posts-item--pintop"></div>
    </div>
    <div class="horizontal-line" style="height: 1px"></div>
    <component
      :is="paginationComponent"
      v-if="$pagination.length > 1 && paginationComponent"
    ></component>
  </div>
</template>

<script>
import Vue from 'vue'
import LocationBar from '../components/LocationBar'
import { ClockIcon, TagIcon } from 'vue-feather-icons'
import Pagination from '../components/Pagination'
import SimplePagination from '../components/Pagination'
import dayjs from 'dayjs'
import dayjsPluginUTC from 'dayjs/plugin/utc'
import 'dayjs/locale/zh-cn'
dayjs.extend(dayjsPluginUTC)
dayjs.locale('zh-cn')

export default {
  components: {
    ClockIcon,
    TagIcon,
    LocationBar,
  },
  data() {
    return {
      paginationComponent: null,
    }
  },
  created() {
    this.paginationComponent = this.getPaginationComponent()
  },
  computed: {
    pages() {
      return this.$pagination.pages
    },
  },
  methods: {
    getPaginationComponent() {
      const n = THEME_BLOG_PAGINATION_COMPONENT
      if (n === 'Pagination') {
        return Pagination
      }

      if (n === 'SimplePagination') {
        return SimplePagination
      }

      return Vue.component(n) || Pagination
    },
    resolvePostDate(date) {
      return dayjs
        .utc(date)
        .format(this.$themeConfig.dateFormat || 'YYYY 年 MMM DD 日 dddd')
    },
    resolvePostTags(tags) {
      if (!tags || Array.isArray(tags)) return tags
      return [tags]
    },
  },
}
</script>

<style lang="stylus">
.blog-list
  margin: 0 auto
  width: 100%
  min-height: 100vh
  padding: 0 1.25rem
  max-width: 61.25rem
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
.posts
  position: relative
  padding: 1.25rem
.posts-item
  padding: 0.875rem 0.625rem
  margin: 0.625rem 0
  border-bottom: 1px solid #dedede
  position: relative
  &:hover
    .posts-item_title_link
      box-shadow: inset 0 -0.7em 0 #ebc65a
  .posts-item_title
    font-size: 3.25rem
    line-height: 4.125rem
    margin-bottom: 0rem
    border-bottom: 0
  .posts-item_title_link
    text-decoration: none
    box-shadow: inset 0 -0.3em 0 #ebc65a
    transition: box-shadow 0.5s cubic-bezier(0.71, 0, 0, 0.99)
    color: currentColor
  .posts-item_excerpt
    margin: 1.5rem 0
    p
      margin: 0.5rem 0
    a
      color: #333
    img
      max-width: 100%
      display: block
      margin: 0 auto
      border-radius: 5px
  footer
    display: flex
    align-items: center
    flex-wrap: wrap
    margin-top: 10px
    .time-container
      flex: 0 0 260px
      display: flex
      align-items: center
      svg
        margin-right: 5px
    time
      padding-right: 2.125rem
      line-height: 1.375rem
    .tag
      display: flex
      flex-wrap: wrap
    .tag-container
      display: flex
      align-items: center
      svg
        transform: rotateZ(90deg)
        margin-right: 8px
    a
      color: #333
      padding-right: 0.5em
      line-height: 1.375rem
.posts-item--pintop
  position: absolute
  top: 10px
  right: 0px
  width: 60px
  height: 60px
  background-image: url("data:image/png;base64,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")
  background-size: contain
  background-repeat: no-repeat
  background-position: center
</style>