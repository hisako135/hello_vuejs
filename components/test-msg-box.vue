<template>
<div class="msgBox" v-if="mwRatingMsg.flg" v-bind:style="[mwRatingMsg.style]">
    <div class="msgBox__star">★★★★★</div>
    <div class="msgBox__close" @click="closeRatingMsg()">閉じる</div>
</div>
</template>

<script>
module.exports = {
    props: ['mwRatingMsg'],
    methods: {
      closeRatingMsg: function(){
        this.$dispatch('_closeRatingMsg');
      }
    }
}
</script>