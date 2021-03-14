<template>
    <div>
        <button @click="reset">Reset Cart</button>
    </div>
</template>

<script>
import Control from '../control';

export default({
    methods:{
        reset(){
            Control.reset()
        }
    }
})
</script>
