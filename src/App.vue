<template>
  <section class="catalog">
    <ProductList :products="products"/>
    <BasePagination v-model="page" :count="countProducts" :per-page="productsPerPage"></BasePagination>
  </section>
</template>

<script>
// eslint-disable-next-line import/extensions,import/no-unresolved
import products from './data/product';
// eslint-disable-next-line import/extensions
import ProductList from './components/ProductList';
// eslint-disable-next-line import/extensions
import BasePagination from "./components/BasePagination";

export default {
  name: 'App',
  components: { BasePagination, ProductList },
  data() {
    return {
      page: 1,
      productsPerPage: 3,
    };
  },
  computed: {
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return products.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return products.length;
    }
  },
};
</script>
