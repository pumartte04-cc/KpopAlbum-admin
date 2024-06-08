<template> 
    <div style="margin:50px">
      <h1>BAEKHYUN 在售专辑 </h1>
      <div style="width: 500px; margin-bottom: 30px; float: left;" >
        <img :src="delight" alt="delight" class="article-photos">         
        <img :src="bambi" alt="bambi" class="article-photos">
      </div>
  </div>
         
  </template>
  
  
  <script>
  export default {
    data () {
      return {
        delight: require('/src/assets/bbh1.jpg'),
        bambi: require('/src/assets/bbh2.jpg'),
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