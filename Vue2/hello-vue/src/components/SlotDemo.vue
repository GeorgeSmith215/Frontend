<template>
    <div class="SlotDemo">
        <!-- 可以在子组件中用<slot></slot>标签传入父组件的内容 -->
        <button>
            <slot></slot>
        </button>
        <!-- 具名插槽：可以通过定义名字的方式给一个组件定义多个插槽 -->
        <div class="header">
            <slot name="header"></slot>
        </div>
        <div class="content">
            <slot name="content"></slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style scoped>
.SlotDemo{
    border: red solid 2px;
}
</style>