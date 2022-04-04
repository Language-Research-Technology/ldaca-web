<template>
  <el-row :gutter="10" class="pt-10 pb-10">
    <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2"></el-col>
    <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
      <p class="text-1xl">{{ head }}</p>
      <el-divider/>
      <p class="text-1xl">{{ description }}</p>
      <br class="h-20"/>
      <p class="text-center mb-4"><a class="underline" :href="more">Investment Projects</a></p>
      <el-divider/>
      <div v-for="code of this.codes" class="pb-6 flex justify-center">
        <div class="container max-w-screen-lg mx-auto">
          <div class="md:col-span-5">
            <div class="relative">
              <div>
                <p class="text-1xl font-semibold">{{ code.title }}</p>
                <p class="text-1xl">{{ code.head }}</p>
                <p class="">{{ code.body }}</p>
                <el-divider/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span class="text-1xl">{{ foot }}</span>
      </div>
      <div><p>&nbsp;</p></div>
    </el-col>
    <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2"></el-col>
  </el-row>
</template>

<script>
import FooterView from './Footer.component.vue';

export default {
  components: {
    FooterView
  },
  data() {
    return {
      head: 'The Language Data Commons of Australia (LDaCA) makes nationally significant language data available for academic and non-academic use and provides a model for ensuring continued access and appropriate community control',
      description: 'Australia is a massively multilingual country, in one of the world’s most linguistically diverse regions. Significant collections of this intangible cultural heritage have been amassed, including collections of Australian Indigenous languages and regional languages of the Pacific, and of Australian English, as well as collections important for cyber-security, for gauging popular sentiment, and for emergency communication. However, many collections remain under-utilised or at risk, and researchers lack the tools and skills to exploit their research potential. The aim of the Language Data Commons of Australia (LDaCA) is to capitalise on existing infrastructure to secure vulnerable and dispersed language collections and link these with improved analysis environments. Establishing an integrated national infrastructure that supports language research will enable researchers and communities to access and use nationally significant collections of written, spoken, multimodal and signed language. The project also aims to help improve researchers’ digital skills and raise awareness of best practice in digital research, render valuable collections of national significance more FAIR while adhering to CARE principles, and lay the foundations for the development of integrated national technical infrastructure to analyse language collections at scale.',
      more: 'https://languages-cultures.uq.edu.au/research/ardc-co-investment-projects',
      foot: 'The Language Data Commons of Australia received investment from the Australian Research Data Commons (ARDC).\n' +
          '          The ARDC is funded by the National Collaborative Research Infrastructure Strategy (NCRIS).',
      codes: [
        {
          title: 'Chief Investigators:',
          head: `Michael Haugh (The University of Queensland)`,
          body: `
Martin Schweinberger (The University of Queensland),
Catherine Travis (Australian National University),
Beau Williams (First Languages Australia),
Monika Bednarek (The University of Sydney),
Ryan Fraser (AARNet),
Nick Thieberger (The University of Melbourne),
Louisa Willoughby (Monash University).`,
        },
        {
          title: 'The team:',
          head: `Michael Haugh, Projects director. Marco Fahmi, Program manager.`,
          body: ``
        },
        {
          title: 'Engagement group:',
          head: `Simon Musgrave`,
          body: `
Sara King (AARNet),
Leah Gustafson,
Harriet Sheppard
`
        },
        {
          title: 'Technology group:',
          head: `Peter Sefton`,
          body: `
Alvin Sebastian,
Marco La Rosa (ANU),
Michael D’Silva (AARNet),
River Smith (Monash),
Moises Sacal`
        },
        {
          title: 'Data group:',
          head: `Kathrin Kaiser`,
          body: `
Cale Johnston (ANU),
Adam Bell (AARNet),
Maria Weaver`
        },
        {
          title: 'Applications group:',
          head: `Ben Foley`,
          body: `
Martin Schweinberger,
Marius Mather (USyd),
Michael Niemann`
        },
        {
          title: 'Indigenous industry fellows:',
          head: `Des Crump`,
          body: `
Rob McClellan`
        }
      ]
    };
  },
  mounted() {
  }
};
</script>
