var Vue = require('vue')

var mwRatingMsg = require('./mixins/mw-rating-msg');
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
        // console.log(mwRatingMsg, this);
    },
    methods:{
        con: function(){
            // console.log(mwRatingMsg, this);
        }
    }
})
