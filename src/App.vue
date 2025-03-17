// JS
<script setup>
import { computed } from 'vue'
import { AppState } from './AppState.js'
import { mineService } from './services/MineService.js';


const ore = computed(() => AppState.ore)

function mine() {
  mineService.increaseOre()
}

</script>


// HTML
<template>

  <body>
    <header>
      <div class="container">
        <div class="row">
          <div class="col-12 mb-3"></div>
          <h1>🌖Moon Miner🌔</h1>
        </div>
      </div>
    </header>
    <main>
      <section class="container-fluid">
        <div class="row">
          <div class="col-12 d-flex justify-content-center">
            <div class="text-center flex-column">
              <img @click="mine()" class="moon-img w-30 m-5"
                src="https://media.istockphoto.com/id/1355330987/photo/rocket-orbiting-the-moon-with-stars-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=cgVwZTkuDSwzwBjVWwcaZmqd9H92OlIL5AFbIp57vVw="
                alt="picture of moon">
            </div>
            <div class=" text-center flex-column"> Ore Counter: {{ ore }}</div>
          </div>
        </div>
      </section>
    </main>
    <section class="col">
      <div class="row">
        <div class="col-md-6">

        </div>
      </div>
    </section>
  </body>
</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";

body {
  background-color: #5444c2;
}
</style>