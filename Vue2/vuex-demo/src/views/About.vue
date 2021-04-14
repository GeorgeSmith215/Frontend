<template>
  <div class="about">
    <!-- <h2>number of about:{{$store.getters.getNum}}</h2> -->
    <!-- 运用了mapGetters后 -->
    <h2>number of about:{{getNum}}</h2>
    <button @click="increase()">About button for add</button>
  </div>
</template>

<script>
import { mapGetters,mapMutations } from 'vuex'
import { MUTATIONS_TYPE } from '@/store/mutations_type.js'

export default {
  data(){
    return{
      
    }
  },
  computed:{
    ...mapGetters(['getNum'])
  },
  methods:{
    // 方法一
    ...mapMutations([MUTATIONS_TYPE.INCREASE]),
    
    // 方法二
    // increase(){
    //   this.$store.commit(MUTATIONS_TYPE.INCREASE)
    // }
  }
}
</script>