<template>

  <div class="wrapper">
    <Header />
    <div class="wrapper-content">
      <div class="container">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { app } from "@/_config";
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      app: app,
    }
  },
};
</script>

<style lang="scss"></style>
