<template>
  <footer>
    <el-row class="text-center p-6 bg-gray-100">
      <el-col :span="24">
        <span>{{ copyright }}</span>&nbsp;
        <a class="text-gray-600 font-semibold" :href="href">{{ hrefText }}</a>
      </el-col>
    </el-row>
  </footer>
</template>
<script>
export default {
  name: 'FooterView',
  data() {
    return {
      copyright: 'Text-Commons Group @ UQ',
      href: 'https://www.ldaca.edu.au',
      hrefText: 'LDaCA',
    }
  }
}
</script>
