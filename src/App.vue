<template>
  <div id="app">
    <transition name="bounce" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  height: 100%;
  width: 100%;
  background: #f0f0f2;
}
</style>
