<template>
  <div class="w-full h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-gray-200 w-96 h-auto rounded-lg pt-8 pb-8 px-8 flex flex-col items-center">
      <label class="font-light text-4xl mb-4">{{ siteName }}<span class='font-bold'>{{ siteNameX }}</span></label>
      <router-link to="/about"><a class="text-gray-800 mb-4 pointer">Coming soon</a></router-link>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      siteName: 'Language Data',
      siteNameX: 'Commons of Australia'
    };
  },
  mounted() {

  },
  methods: {}
};
</script>
