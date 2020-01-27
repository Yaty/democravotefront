import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import Web3 from 'web3'
import router from './router'
import truffle from '../truffle';
import web3Contract from './web3/web3';

Vue.config.productionTip = false;

window.web3 = new Web3(new Web3.providers.HttpProvider(truffle.networks.kovan.uri));

/*
["0x727D55887AE21836F931d6FDA7390777e154e898",
    "0x6876DC2c64eb26f05be4a06984C20776b6587fF4",
    "0x5892661D310406caFAf75974a5d4ad356880066D",
    "0x9D298f0bF553F890405c6DF9537a067bB2620788"]
 */

web3Contract.init().then(() => web3Contract.vote([
  "0x727D55887AE21836F931d6FDA7390777e154e898",
  "0x6876DC2c64eb26f05be4a06984C20776b6587fF4",
  "0x5892661D310406caFAf75974a5d4ad356880066D",
])).then((res) => {
  // eslint-disable-next-line
  console.log('VOTE RES', res);
}).then(() => web3Contract.processVoteResult())
  .then(() => web3Contract.getWinner())
  .then((res) => {
    // eslint-disable-next-line
    console.log('WINNER', res);
  })
  .catch((err) => {
    // eslint-disable-next-line
    console.log('ERROR', err);
  });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
