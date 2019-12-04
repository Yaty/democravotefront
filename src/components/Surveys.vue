<template>
  <div>
    <img alt="DemocraVote logo" src="../assets/logo.png" id="logo">
    <h1>{{ msg }}</h1>
    <p>
      Pour une réélle démocratie avec un système de vote équitable et fiable, utilisez notre application de vore !
    </p>
    <h1>Votes ouverts</h1>
    <ul v-for="survey in surveys" :key="survey.id">
      <li>
        <router-link :to="survey.id">{{ survey.name }}</router-link>
      </li>
    </ul>
    <p v-if="surveys.length === 0">Il n'y pas de votes ouverts pour le moment.</p>
    <h1>Votes terminés</h1>
    <ul v-for="terminatedSurvey in terminatedSurveys" :key="terminatedSurvey.id">
      <li>
        <router-link :to="survey.id">{{ survey.name }}</router-link>
      </li>
    </ul>
    <p v-if="terminatedSurveys.length === 0">Il n'y pas de votes terminées pour le moment.</p>
  </div>
</template>

<script>

export default {
  name: 'SurveysComponent',
  props: {
    msg: String
  },
  async mounted() {
    this.surveys = (await this.axios.get('/')).data;
  },
  data() {
    return {
      surveys: [],
      terminatedSurveys: [],
    };
  },
}
</script>

<style scoped>
  #logo {
    width: 10%;
  }
</style>
