<template>
  <component :is="currentPageComponent" :page-params="currentPageParams"></component>
</template>

<script>
import MainPage from "@/page/MainPage";
import ProductPage from "@/page/ProductPage";
import NotFoundPage from "@/page/NotFoundPage";
import eventBus from "@/eventBus";

const routes = {
  main: 'MainPage',
  product: 'ProductPage'
}

export default {
  components: { MainPage, ProductPage, NotFoundPage },
  data() {
    return {
      currentPage: 'main',
      currentPageParams: {},
    }
  },
  methods: {
    gotoPage(pageName, pageParams) {
      this.currentPage = pageName;
      this.currentPageParams = pageParams || {};
    }
  },
  computed: {
    currentPageComponent() {
      return routes[this.currentPage] || 'NotFoundPage';
    }
  },
  created() {
    eventBus.$on('gotoPage', (pageName, pageParams) => this.gotoPage(pageName, pageParams));
  }
};
</script>
