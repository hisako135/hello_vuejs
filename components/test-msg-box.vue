<template>
<div>
    <div class="msgBox" v-if="mwRatingMsg.flg" v-bind:style="[mwRatingMsg.style]">
        <div class="msgBox__star">YOUR RATE：★★★★★</div>
        <div class="msgBox__close" @click="closeRatingMsg()">CLOSE</div>
    </div>
</div>
</template>

<script>
var mwRatingMsg =  require('../mixins/mw-rating-msg');

console.log('《test-msg-box.vue》 mwRatingMsg : ', mwRatingMsg);

module.exports = {
    props: [mwRatingMsg],
    methods: {
      closeRatingMsg: function(){
        this.$dispatch('_closeRatingMsg');
      }
    }
}
</script>