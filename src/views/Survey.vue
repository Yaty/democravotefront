<template>
    <Survey :id="$route.params.surveyId"></Survey>
</template>

<script>
import Survey from '@/components/Survey.vue';

export default {
    name: "survey",
    components: {
      Survey,
    },
}
</script>

<style scoped>
</style>
