<template>
  <div class="dashboard-container">
    <div class="dashboard-text">这里可以做的事情还没想好</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Kpop-Album',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
