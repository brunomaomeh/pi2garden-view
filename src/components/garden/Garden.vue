<template>
  <div>
    <input type="text" :value="garden.uptime" />
    <button type="button" class="circle btn btn-dark"
      v-show="!garden.on" @click="toggleOnOff">
      <i class="fas fa-play fa-3x"></i>
    </button>
    <button type="button" class="circle btn btn-dark"
      v-show="garden.on" @click="toggleOnOff">
      <i class="fas fa-pause fa-3x"></i>
    </button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      garden: {
        uptime: 3000,
        on: false
      }
    }
  },

  methods: {
    toggleOnOff () {
      let url = 'http://192.168.0.7:3000'
      if (this.garden.on) {
        this.garden.on = !this.garden.on
        axios.get(`${url}/garden/off`)
      } else {
        this.garden.on = !this.garden.on
        axios.get(`${url}/garden/on?uptime=${this.garden.uptime}`)
        this.turnOff()
      }
    },
    turnOff () {
      let vm = this
      setTimeout(function () {
        vm.garden.on = !vm.garden.on
      }, this.garden.uptime)
    }

  }
}
</script>

<style lang="scss" scoped>
.circle {
  border-radius:50%
}
</style>
