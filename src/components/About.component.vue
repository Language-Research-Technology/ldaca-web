<template>
  <div class="w-full h-screen justify-center ">
    <div class="h-auto rounded-lg pt-8 pb-8 px-8 flex-col items-center">
      <h2>{{ helpHead }}</h2>
      <p class="text-center mb-4"><a class="underline" :href="more">Investment Projects</a></p>
      <div v-for="code of this.codes" class="p-6 flex justify-center">
        <div class="container max-w-screen-lg mx-auto">
          <div class="md:col-span-5">
            <div class="relative">
              <div>
                <h3>{{ code.title }}</h3>
                <h4>{{ code.head }}</h4>
                <p class=" w-full text-sm max-h-100 shadow-lg">
                  {{ code.body }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-auto h-10 pb-20">
      <p>The Language Data Commons of Australia received investment from the Australian Research Data Commons (ARDC).
          The ARDC is funded by the National Collaborative Research Infrastructure Strategy (NCRIS).</p>
      </div>
    </div>
    <div><p>&nbsp;</p></div>
  </div>
</template>

<script>
import FooterView from './Footer.component.vue';
export default {
  components: {
    FooterView
  },
  data() {
    return {
      helpHead: 'The Language Data Commons of Australia (LDaCA) makes nationally significant language data available for academic and non-academic use and provides a model for ensuring continued access and appropriate community control',
      more: 'https://languages-cultures.uq.edu.au/research/ardc-co-investment-projects',
      codes: [
        {
          title: 'Chief Investigators:',
          head: `Michael Haugh (The University of Queensland)`,
          body: `
Catherine Travis (Australian National University)
Beau Williams (First Languages Australia)
Monika Bednarek (The University of Sydney)
Ryan Fraser (AARNet)
Nick Thieberger (The University of Melbourne)`,
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
          head: `PT Sefton`,
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
