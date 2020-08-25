<template>
  <div class="d-flex flex-column app">
    <div class="author">
      <h1>Laravel 6 + Vue SPA</h1>
      <p>By otoshigami</p>
    </div>
    <ul class="nav nav-pills justify-content-center menu">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/about">About</router-link>
      </li>
    </ul>
    <div class="content d-flex align-item-strech">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.app {
  padding: 24px;
  min-height: 100%;

  .menu {
    border-radius: 16px;
    background-color: $blue;
    .nav-item .nav-link {
      color: #fff;
    }
  }

  .content {
    flex: 1 0 0%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
}
</style>