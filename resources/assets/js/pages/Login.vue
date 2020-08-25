<template>
  <div class="login d-flex justify-content-center align-items-center flex-column">
    <div class="login__header d-flex align-items-end my-n2 position-relative">
      <div class="login__header__logo-container shadow bg-white p-3">
        <img src="@/img/logo.png" alt="company logo" class="login__header__logo" />
      </div>
      <h1 class="login__header__title display-4 px-3 text-white">Sign In</h1>
    </div>
    <div class="login__box p-3 pt-5 mb-5 bg-white">
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" id="username" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" />
      </div>
      <div class="form-group d-flex flex-wrap justify-content-end align-items-center">
        <a href class="mx-3">forgot password?</a>
        <button class="btn btn-primary">Login</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  background: $blue;
  min-height: 100%;

  &__header {
    &__logo-container {
      border-radius: 16px 0 0 0;
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -25px;
        border-right: 25px solid #fff;
        border-bottom: 25px solid transparent;
      }
    }

    &__logo {
      max-width: 48px;
    }

    &__title {
      text-align: center;
      min-width: 200px;
    }
  }

  &__box {
    border-radius: 0 0 16px 0;
  }
}
</style>