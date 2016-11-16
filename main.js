var Vue = require('vue')

// var TaskList = require('./model/task_list').default
// var task_list = global.task_list = new TaskList

var mwRatingMsg = require('./mixins/mw-rating-msg.js');

new Vue({
  el: 'body',
  mixins: {
    mwRatingMsg
  },
  data: {
    // list: task_list,
    showHideFlg: false
  },
  components: {
    MyComponent: require('./components/test-my-component.vue')
    // MyTaskList: require('./components/task_list.vue'),
    //MsgBox: require('./components/test-msg-box.vue')
  },
    created: function(){
        console.log('できたで2！');
    }
})
