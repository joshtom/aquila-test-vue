
<template>
  <div class="container">
    <section class="container__left"></section>
    <section class="container__right"></section>

    <section class="container__banner">
      <section class="container__banner--social-icons"></section>
      <section class="container__banner--content">
        <h1>Aquila Aveion</h1>
        <div class="container__banner--content-imgDisplay"></div>
        <ul class="container__banner--content-links">
          <li><a href="#">home</a></li>
          <li><a href="#">about</a></li>
          <li><div class="img"></div></li>
          <li><a href="#">gallery</a></li>
          <li><a href="#">contact</a></li>
        </ul>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  &__left {
    width: 50vw;
    height: 100%;
    background: $primary;
  }
  &__right {
    width: 50vw;
    height: 100%;
    background: $primaryLight;
  }

  &__banner {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    // background: red;
    &--social-icons {
      height: 200px;
      width: 50px;
      background: $white;
      position: absolute;
      right: 20px;
    }
    &--content {
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      margin: auto;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      overflow-x: hidden;

      h1 {
        color: $white;
        text-transform: uppercase;
        font-weight: 100;
        font-size: 2rem;
        letter-spacing: 15px;
      }

      &-imgDisplay {
        width: 30%;
        height: 70vh;
        background: $primaryLight;
        box-shadow: -2px 3px 13px 3px $dark;
      }

      &-links {
        height: auto;
        width: 50%;
        margin-left: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 0px;
        & > li {
          list-style-type: none;
          margin: 10px;
          & > .img {
            width: 100px;
            height: 100px;
            border: none;
            border-radius: 50%;
            background: black;
          }
          & > a {
            color: $white;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: lighter;
            letter-spacing: 5px;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
}
</style>
