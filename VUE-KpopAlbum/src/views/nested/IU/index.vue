<template>
  <div style="padding:30px;">
    <el-alert :closable="false" title="IU" />
    <div style="margin:50px;"> 
      <h2 style="color: silver;">IU 在售专辑 </h2>
      <div style="width: 500px; margin-bottom: 30px; float: left;" >
        <img :src="winning" alt="winning" class="article-photos">         
        <img :src="winning2" alt="winning2" class="article-photos">
        <img :src="lilac" alt="lilac" class="article-photos">
        <img :src="lovepoem" alt="lovepoem" class="article-photos">
      </div>
  </div>
</div>        
</template>
  
  
  <script>
  export default {
    data () {
      return {
        winning: require('/src/assets/iu1.jpg'),
        winning2: require('/src/assets/iu2.jpg'),
        lilac: require('/src/assets/iu3.jpg'),
        lovepoem: require('/src/assets/iu4.jpg'),
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