<template>
  <section class="catalog">
    <ProductList :products="products"/>
    <ProductItem></ProductItem>
  </section>
</template>

<script>
import products from "./data/products";
import ProductList from '@/components/ProductList';
import ProductItem from '@/components/ProductItem';

export default {
  name: 'App',
  components: { ProductItem, ProductList },
  component: {ProductList: ProductList, ProductItem},
  data() {
    return {
      products,
    };
  },
};
</script>
