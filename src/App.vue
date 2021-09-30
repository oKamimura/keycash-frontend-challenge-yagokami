<template>
  <div id="app">

    <Header />
    <Home />
    <Footer />

  </div>
</template>

<script>
import './Styles/global.css';

import Header from './components/Header';
import Footer from './components/Footer.vue';
import Home from './pages/Home.vue';






export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer
  }
}
</script>

