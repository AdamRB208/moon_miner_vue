import { AppState } from "@/AppState.js"
import { AutoUpgrade, ClickUpgrade } from "@/models/Upgrades.js"



class MineService {
  increaseOre() {
    console.log('moon clicked')
    AppState.ore++
  }

  purchaseClickUpgrade(ClickUpgrade) {
    console.log('click upgrade works!')
    AppState.ClickUpgrade.quantity++
    // const ClickUpgrade = new ClickUpgrade(clickUpgrade.quantity)
    // AppState.clickUpgrades.push(clickUpgrade)
    // console.log('quantity updated', clickUpgrade)
    // if (ClickUpgrade.price <= ore)
    //   AppState.ore--

  }

  purchaseAutoUpgrade(ore) {
    AutoUpgrade.quantity++
    AppState.autoUpgrades.push(this.quantity)
    // if (AutoUpgrade.price <= ore)
    //   AppState.autoUpgrades.quantity++
    console.log('auto upgrade works!')
  }

}

export const mineService = new MineService()