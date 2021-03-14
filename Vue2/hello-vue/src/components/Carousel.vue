<template>
    <div id="wrap">
        <!-- 图片 -->
        <ul>
        <!-- 这里img标签下的src路径要修改成你的实际图片路径 -->
            <li><img src="../assets/images/image1.jpg"></li>
            <li><img src="../assets/images/image2.jpg"></li>
            <li><img src="../assets/images/image3.jpg"></li>
            <li><img src="../assets/images/image4.jpg"></li>
        </ul>
        <!-- 数字 -->
        <ol id="list" type="a">
            <li class="on">1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ol>
        <!-- 两侧导航栏 -->
        <a href="javascript:;" class="left">
			&lt;
		</a>
        <a href="javascript:;" class="right">
			&gt;
		</a>
    </div>
</template>

<script>
export default({
    data(){
        return {
            
        }
    }
})
</script>

<style scoped>

</style>