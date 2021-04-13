<template>
  <div class="about">
    <!-- <h2>number of about:{{$store.getters.getNum}}</h2> -->
    <!-- 运用了mapGetters后 -->
    <h2>number of about:{{getNum}}</h2>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data(){
    return{
      
    }
  },
  computed:{
    ...mapGetters(['getNum'])
  }
}
</script>