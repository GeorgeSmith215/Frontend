<template>
  <div id="app">
    <home></home>
    <about></about>
    <btn></btn>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/views/Home'
import About from '@/views/About'
import Btn from '@/views/Btn'
export default {
  components:{
    Home,
    About,
    Btn
  }
}
</script>