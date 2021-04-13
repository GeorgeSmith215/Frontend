<template>
  <div class="home">
    <!-- <h2>number of home:{{$store.getters.getNum}}</h2> -->
    <!-- 运用了mapState后 -->
    <h2>number of home:{{num}}</h2>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'

export default {
  computed:{
    ...mapState(['num'])
  }
}
</script>
