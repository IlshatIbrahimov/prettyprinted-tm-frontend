<template>
  <div id="particle-container">
    <b-button
        type="submit"
        style="display: block; margin: 0 auto;"
        @click="logout"
    >Log Out</b-button>
    <div
        class="particle"
        v-for="i in 30"
    ></div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    logout() {
      localStorage.removeItem('jwt')
      this.$router.push('/auth')
    }
  }
}
</script>

<style lang="scss">
.particle {
  position: absolute;
}

@for $i from 1 through 30 {
  @keyframes particle-animation-#{$i} {
    100% {
      transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 1px));
    }
  }

  .particle:nth-child(#{$i}) {
    animation: particle-animation-#{$i} 60s infinite;
    $size: random(5) + 105 + px;
    opacity: random(100)/100;
    height: $size;
    width: $size;
    animation-delay: -$i * .2s;
    transform: translate3d((random(90) * 1vw), (random(90) * 1vh), (random(100) * 1px));
    background: url('../assets/img/qqq.png') no-repeat center;
    background-size: 105px;
  }
}
</style>
