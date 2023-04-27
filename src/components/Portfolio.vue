<template>
  <section class="page-section bg-light" id="portfolio">
    <div class="container">
      <div class="text-center">
        <h2 class="section-heading text-uppercase">Portfolio</h2>
        <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
      <div class="row">
        <PortfolioCard />
      </div>
    </div>
  </section>
</template>

<script>
import PortfolioCard from '@/components/PortfolioCard.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Portfolio',
  components: {
    PortfolioCard
  }
}
</script>

<style scoped>

</style>
