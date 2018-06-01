<template>
    <section class="beautypress-pricing-table-section beautypress-padding-bottom">
        <div class="container">
            <div class="beautypress-section-headinig beautypress-version-2">
                <h2>We are awesome</h2>
                <h3>Our Pricing</h3>
                <img src="img/section-heading-separetor.png" alt="">
            </div>
            <div class="row">
                <div v-for="(service, $index) in services" :key="$index" class="col-md-12 col-sm-12 col-lg-4 col-xl-4">
                    <div class="beautypress-single-pricing-table beautypress-image-overlay-1 beautypress-version-3">
                        <div class="beautypress-pricing-header">
                            <img src="img/pricing-icons-1.png" alt="">
                            <!--<img src="img/pricing-icons-2.png" alt="">-->
                            <!--<img src="img/pricing-icons-3.png" alt="">-->
                            <div class="beautypress-pricing-header-content">
                                <div class="beautypress-pricing-title">
                                    <h2>{{service.fields.name}}</h2>
                                </div>
                                <div class="beautypress-pricing-price">
                                    <h4>Starting from</h4>
                                    <h5 class="color-chocolate"><span>$</span>{{startingPrices[$index]}}</h5>
                                </div>
                            </div>
                        </div><!-- .beautypress-pricing-header END -->
                        <div class="beautypress-pricing-footer">
                            <ul class="beautypress-both-side-list beautypress-version-3">
                                <li v-for="(type, $index) in service.fields.serviceType" :key="$index"
                                >{{type.fields.serviceType}}<span>${{type.fields.serviceCost}}</span></li>
                            </ul>

                            <div class="beautypress-btn-wraper">
                                <a href="#" class="xs-btn round-btn box-shadow-btn bg-color-cyan">Appointment Now <span></span></a>
                            </div>
                        </div><!-- .beautypress-pricing-footer END -->
                    </div><!-- .beautypress-single-pricing-table END -->
                </div>
            </div>
        </div>
    </section><!-- .beautypress-pricing-table-section END -->
</template>
<script>
    export default {
      props: ['services'],
      computed: {
        startingPrices: function () {
          var packages = []
          this.services.forEach(function (service) {
            var asc = service.fields.serviceType.sort(function (a, b) {
              return a.fields.serviceCost - b.fields.serviceCost
            })
            packages.push(asc[0].fields.serviceCost)
          })
          return packages
        }
      }
    }
</script>
