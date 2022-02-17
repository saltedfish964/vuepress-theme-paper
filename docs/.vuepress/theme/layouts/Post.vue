<template>
  <div class="post">
    <LocationBar :name="$frontmatter.title" />
    <header>
      <h2 class="posts-item_title">
        <a class="posts-item_title_link">{{ $frontmatter.title }}</a>
      </h2>
    </header>
    <footer class="footer">
      <div class="time-container" v-if="$frontmatter.date">
        <ClockIcon size="1x" />
        <time :datetime="$frontmatter.date">
          {{ resolvePostDate($frontmatter.date) }}
        </time>
      </div>
      <div class="tag" v-if="$frontmatter.tags">
        <div 
          class="tag-container"
          v-for="tag in resolvePostTags($frontmatter.tags)"
          :key="tag"
        >
          <TagIcon size="1x" />
          <router-link :to="'/tag/' + tag">#{{ tag }}</router-link>
        </div>
      </div>
    </footer>
    <Content />
  </div>
</template>

<script>
import LocationBar from '../components/LocationBar'
import { ClockIcon, TagIcon } from 'vue-feather-icons'
import dayjs from 'dayjs'
import dayjsPluginUTC from 'dayjs/plugin/utc'
import 'dayjs/locale/zh-cn'
dayjs.extend(dayjsPluginUTC)
dayjs.locale('zh-cn')

export default {
  components: {
    LocationBar,
    ClockIcon,
    TagIcon,
  },
  methods: {
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

<style lang="stylus" scoped>
.post
  margin: 0 auto
  width: 100%
  padding: 0 1.25rem 3.75rem 1.25rem
  max-width: 61.25rem
.posts-item_title
    font-size: 3.25rem
    line-height: 4.125rem
    margin-top: 1.2rem
    margin-bottom: 3.75rem
    border-bottom: 0
  .posts-item_title_link
    text-decoration: none
    box-shadow: inset 0 -0.3em 0 #ebc65a
    transition: box-shadow 0.5s cubic-bezier(0.71, 0, 0, 0.99)
    color: currentColor
    &:hover
      box-shadow: inset 0 -0.7em 0 #ebc65a
      color: #333
      cursor: default
.footer
  display: flex
  align-items: center
  flex-wrap: wrap
  border-bottom: 1px solid #dedede
  padding-bottom: 1rem
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
</style>
