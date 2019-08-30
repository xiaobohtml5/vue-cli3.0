<template>
    <section id="Layout">
       {{$t('login')}}
        <el-button
                plain
                @click="open1">
            成功
        </el-button>
    </section>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        methods: {
            open1() {
                this.$notify();
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>