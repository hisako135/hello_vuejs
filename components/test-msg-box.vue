<template>
<div>
    <div @click="mwRatingMsg.flg = !mwRatingMsg.flg">COMFIRM YOUR RATE</div>
    <div class="msgBox" v-if="mwRatingMsg.flg" v-bind:style="[mwRatingMsg.style]">
        <div class="msgBox__star">YOUR RATE：★★★★★</div>
        <div class="msgBox__close" @click="closeRatingMsg()">CLOSE</div>
    </div>
</div>
</template>

<script>
module.exports = {
    methods: {
      closeRatingMsg: function(){
        this.$dispatch('_closeRatingMsg');
      }
    }
}
</script>