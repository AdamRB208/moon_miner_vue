// JS
<script setup>
import { computed } from 'vue'
import { AppState } from './AppState.js'
import { ref } from 'vue'; 


const ore = ref(0)

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
          <div class="text-center">
            <img onclick="mineMoon()" class="moon-img w-30 m-5"
              src="https://media.istockphoto.com/id/1355330987/photo/rocket-orbiting-the-moon-with-stars-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=cgVwZTkuDSwzwBjVWwcaZmqd9H92OlIL5AFbIp57vVw="
              alt="picture of moon">
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-3 mdi mdi-clock-time-four-outline" id="clickCounter">click counter : 0</div>
        <div id="oreObtained" class="col-3 mdi mdi-image-filter-hdr-outline">ore obtained: 0</div>
        <div class="col-3 mdi mdi-clock-time-four-outline">timer</div>
      </div>
    </section>
  </main>
  <footer>
    <section class="container-fluid">

      <div class="row">
        <div class="col-lg-6">
          <h3>Click Upgrades</h3>
          <button onclick="buyPickaxe()" class="mdi mdi-image-filter-hdr-outline">
            Pickaxe <span id="pickaxePrice">10</span>
          </button>
          <button onclick="buyDrill()" class="mdi mdi-mace">Drill <span id="drillPrice">15</span></button>
          <h3>Automatic Upgrades</h3>
          <button onclick="buyAstronaut()" class="mdi mdi-rocket-outline">Astronaut <span
              id="astronautPrice">20</span></button>
          <button onclick="buyRover()" class="mdi mdi-car-outline">Rover <span id="roverPrice">25</span></button>
        </div>
        <div class="col-lg-6">
          <h3>Click Purchases</h3>
          <span id="pickaxePurchases">Pickaxe Purchases: </span>
          <div></div>
          <span id="drillPurchases">Drill Purchases: </span>
          <h3>Automatic Purchases</h3>
          <span id="astronautPurchases">Astronaut Purchases: =</span>
          <div></div>
          <span id="roverPurchases">Rover purchases: =</span>
        </div>
      </div>
    </section>
  </footer>
</body>
</template>


// styles
<style lang="scss">
@import "./assets/scss/main.scss";

body {
  background-color: #5444c2;
}
</style>