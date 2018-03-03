<template>
  <div class="container-fluid">
    <header>
      <div class="main-menu">
        <div class="row align-items-center">
          <div class="col-4">
            <h1><router-link to="/">Pi2Garden</router-link></h1>
          </div>
          <div class="col-8">
            <div class="float-right">
              <a href="#"><i class="fas fa-bars"></i></a>
            </div>
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/css/style.scss'

import AppInfo from '@/components/garden/Garden'

export default {
  name: 'app',
  components: {
    AppInfo
  }
}
</script>

<style lang="scss" scoped>
.main-menu {
  background-color:#242424;
  color: #ccc;
  padding: 15px;
  margin-bottom: 10px;
}

.main-body {
  background-color: #eee;
  position: relative;
  height: 100%;
  margin: 20px;
}

</style>
