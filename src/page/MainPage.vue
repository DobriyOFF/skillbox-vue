<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        152 товара
      </span>
    </div>

    <div class="content__catalog">
      <ProductFilter :price-from.sync="filterPriceFrom" :price-to.sync="filterPriceTo" :category-id.sync="filterCategoryId" :color.sync="filterColor"/>
      <section class="catalog">
        <ProductList :products="products"/>
        <BasePagination v-model="page" :count="countProducts" :per-page="productsPerPage"/>
      </section>
    </div>
  </main>
</template>

<script>
import BasePagination from "@/components/BasePagination";
import ProductList from "@/components/ProductList";
import ProductFilter from "@/components/ProductFilter";
import {products} from "@/data/product";

export default {
  components: {BasePagination, ProductList, ProductFilter},
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,
      filterColor: 0,
      page: 1,
      productsPerPage: 6,
    };
  },
  computed: {
    filteredProducts() {
      let filteredProducts = products;

      if (this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter(product => product.price > this.filterPriceFrom)
      }

      if (this.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter(product => product.price < this.filterPriceTo)
      }

      if (this.filterCategoryId) {
        filteredProducts = filteredProducts.filter(product => product.categoryId === this.filterCategoryId)
      }

      if (this.filterColor !== 0) {
        filteredProducts = filteredProducts.filter(product => product.colors.includes(this.filterColor));
      }
      return filteredProducts;
    },
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return this.filteredProducts.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return this.filteredProducts.length;
    }
  },
}
</script>
