<template>
    <div class="survey">
        <h1>{{ survey.name }}</h1>

        <div v-for="surveyOption in survey.surveyOptions" :key="surveyOption.id">
            <h2>{{ surveyOption.name }}</h2>
            <img class="surveyOptionPhoto" :src="surveyOption.photo"/>
        </div>
    </div>
</template>

<script>
  export default {
    name: "SurveyComponent",
    props: {
      id: String,
    },
    data() {
      return {
        survey: {},
      };
    },
    async mounted() {
      this.survey = (await this.axios.get('/' + this.id)).data;
    }
  }
</script>

<style scoped>
.surveyOptionPhoto {
    width: 15%;
}
</style>
