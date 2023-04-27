<template>
  <div class="col-lg-4 col-sm-6 mb-4">
    <!-- Portfolio Card -->
    <div class="portfolio-item">
      <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
        <div class="portfolio-hover">
          <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
        </div>
        <img class="img-fluid" src="@/assets/img/portfolio/1.jpg" alt="..."/>
      </a>
      <div class="portfolio-caption">
        <div class="portfolio-caption-heading">Threads</div>
        <div class="portfolio-caption-subheading text-muted">Illustration</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'PortfolioCard',
  props: {
    item: Object
  },
  setup () {
    const boxList = (itemId) => {
      this.$axios.post('/box').then(() => {
        console.log('success')
      })
    }
    return { boxList }
  }
}
</script>

<style scoped>

</style>
