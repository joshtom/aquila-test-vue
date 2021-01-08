
<template>
  <div class="container">
    <section class="container__left"></section>
    <section class="container__right"></section>

    <section class="container__banner">
      <section class="container__banner--social-icons">
        <!-- <font-awesome-icon :icon="['fas', 'facebook']" /> -->
        <a :href="data.social_media.instagram">
          <i class="fa fa-instagram"></i>
        </a>
        <a :href="data.social_media.twitter">
          <i class="fa fa-twitter"></i>
        </a>
        <a :href="data.social_media.snapchat">
          <i class="fa fa-snapchat"></i>
        </a>
        <a :href="data.social_media.email">
          <i class="fa fa-envelope"></i>
        </a>
      </section>
      <section class="container__banner--content">
        <h1>{{ data.name }}</h1>
        <div class="container__banner--content-imgDisplay">
          <img src="../assets/ladyFull.png" alt="" srcset="" />
        </div>
        <ul class="container__banner--content-links">
          <li><a href="#">home</a></li>
          <li><a href="#">about</a></li>
          <li>
            <div class="img">
              <img src="../assets/ladyPass2.png" alt="" />
            </div>
          </li>
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
  data() {
    return {
      data: {
        social_media: {},
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      const response = await fetch("https://hirng-x2021.glitch.me/api");
      const data = await response.json();
      this.data = data;
    },
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

    &--social-icons {
      height: auto;
      width: auto;
      position: absolute;
      right: 10px;
      display: flex;
      flex-direction: column;

      @media screen and (max-width: 500px) {
        right: 0;
      }

      a {
        cursor: pointer;
      }

      i.fa {
        font-size: 1.4rem;
        color: $white;
        margin: 10px;
        cursor: pointer;
        transition: 300ms all ease-in-out;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
    &--content {
      width: 100%;
      height: 100%;
      // position: absolute;
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
        font-family: "Poppins", sans-serif;
      }

      &-imgDisplay {
        width: 30%;
        height: 70vh;
        background: $primaryLight;
        box-shadow: -2px 3px 13px 3px $dark;
        position: relative;
        overflow: hidden;

        @media screen and (max-width: 967px) {
          width: 70%;
        }

        @media screen and (max-width: 500px) {
          width: 75%;
          height: 50vh;
        }

        img {
          width: 100%;
          margin-bottom: 0;
          position: absolute;
          left: 0;
          bottom: 0px;
        }
      }

      &-links {
        height: auto;
        width: 50%;
        margin-left: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 0px;

        @media screen and (max-width: 1000px) {
          width: 90%;
          margin-left: 0px;
        }

        @media screen and (max-width: 661px) {
          flex-wrap: wrap;
          justify-content: center;
        }

        & > li {
          list-style-type: none;
          margin: 10px;
          & > .img {
            width: 80px;
            height: 70px;
            border: none;
            border-radius: 50%;
            display: flex;
            overflow: hidden;

            @media screen and (max-width: 661px) {
              width: 50px;
              height: 47px;
            }

            img {
              width: 100%;
              height: 100%;
              margin: auto;
            }
          }
          & > a {
            color: $white;
            text-decoration: none;
            text-transform: uppercase;
            font-weight: lighter;
            letter-spacing: 5px;
            font-weight: 300;
            font-size: 1.2rem;
            font-family: "Poppins", sans-serif;

            @media screen and (max-width: 661px) {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>
