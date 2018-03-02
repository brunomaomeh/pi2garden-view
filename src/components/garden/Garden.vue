<template>
  <div>
    <input type="text" :value="uptime" />
    <input type="button" @click="liga" value="Ligar" />
    <input type="button" @click="desliga" value="Desligar" />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      uptime: 3000
    }
  },

  methods: {
    liga () {
      console.log(this.uptime)
      axios.get(`http://192.168.0.7:3000/garden/on?uptime=${this.uptime}`)
      // axios.get(`http://187.107.61.192:3000/garden/on?uptime=${this.uptime}`)
    },
    desliga () {
      axios.get('http://192.168.0.5:3000/garden/off')
    }
  }
}
</script>

<style>

</style>
