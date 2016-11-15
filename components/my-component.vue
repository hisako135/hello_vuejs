<style>
.myComponent {
    color:red;
}
</style>

<template>
<div class="myComponent">
    <h2>{{msg}}</h2>
</div>
</template>

<script>
module.exports = {
    data: function(){
        return {
            msg: 'Hello!'
        }
    }
}
</script>