import Vue from 'vue'
import VueRouter from 'vue-router'
import Surveys from '../views/Surveys.vue'
import Survey from '../views/Survey.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'surveys',
    component: Surveys
  },
  {
    path: '/:surveyId',
    name: 'survey',
    component: Survey,
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
