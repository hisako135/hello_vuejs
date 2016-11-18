var Vue = require('vue')

import mwRatingMsg from './mixins/mw-rating-msg'
Vue.use(mwRatingMsg);
console.log('《main.js》 mwRatingMsg : ' ,mwRatingMsg);

new Vue({
  el: 'body',
  mixins: {
    mwRatingMsg:mwRatingMsg
  },
  data: {
    showHideFlg: false
  },
  components: {
    MyComponent: require('./components/test-my-component.vue'),
    MsgBox: require('./components/test-msg-box.vue')
  },
    created: function(){
        console.log('《main.js：created》 ', this);
    },
    methods:{
        con: function(){
            console.log('《main.js：con()》 ', this);
        }
    }
})
