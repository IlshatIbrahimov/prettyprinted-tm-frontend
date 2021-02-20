<template>
  <div id="particle-container">
    <div
        class="particle"
        v-for="i in 30"
    ></div>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style lang="scss">
#particle-container {
  position: absolute;
}

.particle {
  position: absolute;
  //border-radius: 50%;
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
