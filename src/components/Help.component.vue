<template>
  <div class="w-full h-screen flex justify-center bg-gray-100">
    <div class="h-auto rounded-lg pt-8 pb-8 px-8 flex-col items-center">
      <h2>{{ helpHead }}</h2>
      <p class="text-right mb-4">{{ helpBody }}</p>
      <div v-for="code of this.codes" class="p-6 bg-gray-200 flex justify-center">
        <div class="container max-w-screen-lg mx-auto">
          <div class="md:col-span-5">
            <div class="relative">
              <div>
                <h3>{{ code.title }}</h3>
                <h4>{{ code.head }}</h4>
                <p class=" w-full text-sm max-h-100 rounded-lg shadow-lg">
              {{ code.body }}
            </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      helpHead: '',
      helpBody: '',
      codes: [
        {
          title: 'placeholder',
          head: ``,
          body: ``,
        }
      ]
    };
  },
  mounted() {
  }
};
</script>
