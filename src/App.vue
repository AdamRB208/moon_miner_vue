// JS
<script setup>
import { computed } from 'vue'
import { AppState } from './AppState.js'
import { mineService } from './services/MineService.js';
import { ClickUpgrade, AutoUpgrade } from './models/Upgrades.js';


const ore = computed(() => AppState.ore)

const clickUpgrades = computed(() => AppState.clickUpgrades)

const autoUpgrades = computed(() => AppState.autoUpgrades)

function mine() {
  mineService.increaseOre()
}

//note create buttons to reflect names and prices for upgrade items.
// note then update clicks to reflect purchase and increase in mine ability.

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
            <div class="text-warning"> Ore Counter: {{ ore }}</div>
          </div>
        </div>
      </section>
    </main>
    <section class="col">
      <div class="row">
        <div v-for="clickUpgrade in clickUpgrades" :key="clickUpgrade.name" class="col-md-3">
          <button class="btn btn-outline-warning rounded" type="button">
            <div class="d-flex text-warning justify-content-center align-items-center pb-2 mb-4">
              {{ clickUpgrade.name }}
            </div>
          </button>
          <span class="d-flex text-warning justify-content-between">pickaxe price : {{ clickUpgrade.price }}</span>
          <span class="d-flex text-warning justify-content-between">pickaxe quantity : {{ clickUpgrade.quantity
            }}</span>
          <span class="d-flex text-warning justify-content-between">pickaxe mine ability: {{ clickUpgrade.mineAbility
            }}</span>
        </div>
        <div v-for="autoUpgrade in autoUpgrades" :key="autoUpgrade.name" class="col-md-3">
          <button class="btn btn-outline-warning rounded" type="button">
            <div class="d-flex text-warning justify-content-center align-items-center pb-2 mb-4">
              {{ autoUpgrade.name }}
            </div>
          </button>
          <span class="d-flex text-warning justify-content-between">pickaxe price : {{ autoUpgrade.price }}</span>
          <span class="d-flex text-warning justify-content-between">pickaxe quantity : {{ autoUpgrade.quantity
            }}</span>
          <span class="d-flex text-warning justify-content-between">pickaxe mine ability: {{ autoUpgrade.mineAbility
            }}</span>
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