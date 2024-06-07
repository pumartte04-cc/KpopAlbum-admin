<template> 
  <div style="margin:50px">
    <h1>D.O.在售专辑 </h1>
    <div style="width: 500px; margin-bottom: 30px; float: left;" >
      <img :src="popcorn" alt="popcorn" class="article-photos">         
      <img :src="mars" alt="mars" class="article-photos">
      <img :src="mini" alt="mini" class="article-photos">
    </div>
</div>
       
</template>


<script>
export default {
  data () {
    return {
      popcorn: require('/src/assets/do1.jpg'),
      mars: require('/src/assets/do2.jpg'),
      mini: require('/src/assets/do3.jpg'),
    }
  }
}
</script>

<style lang="scss" scoped>
.article {
  &-text {
    font-size: 30px;
    line-height: 46px;
    float: right;
    color:deeppink;
     word-wrap: break-word;
     word-break: break-all; 
     padding-top: 100px;
  }
  &-photos{
    width: 300px;
  }
}
</style>