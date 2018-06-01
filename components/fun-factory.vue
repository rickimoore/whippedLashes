<template>
    <section class="beautypress-fun-factory-section bg-color-cyan">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-sm-12 col-lg-3 col-xl-3">
                    <div class="beautypress-single-fun-factory">
                        <i class="xsicon icon-fruit beautypress-watermark-icons watermark-icon-style-1"></i>
                        <div class="beautypress-counter">
                            <h2 class="numeric-count number-animate" :data-value="specialists" data-animation-duration="1200">0</h2>
                            <span>+</span>
                        </div>
                        <h5>Specialist</h5>
                    </div><!-- .beautypress-single-fun-factory END -->
                </div>
                <div class="col-md-6 col-sm-12 col-lg-3 col-xl-3">
                    <div class="beautypress-single-fun-factory">
                        <i class="xsicon icon-nail beautypress-watermark-icons watermark-icon-style-1"></i>
                        <div class="beautypress-counter">
                            <h2 class="numeric-count number-animate" data-value="123" data-animation-duration="3200">0</h2>
                            <span>+</span>
                        </div>
                        <h5>Appointments</h5>
                    </div><!-- .beautypress-single-fun-factory END -->
                </div>
                <div class="col-md-6 col-sm-12 col-lg-3 col-xl-3">
                    <div class="beautypress-single-fun-factory">
                        <i class="xsicon icon-relax beautypress-watermark-icons watermark-icon-style-1"></i>
                        <div class="beautypress-counter">
                            <h2 class="numeric-count number-animate" data-value="123" data-animation-duration="3200">0</h2>
                            <span>+</span>
                        </div>
                        <h5>Happy Clients</h5>
                    </div><!-- .beautypress-single-fun-factory END -->
                </div>
                <div class="col-md-6 col-sm-12 col-lg-3 col-xl-3">
                    <div class="beautypress-single-fun-factory">
                        <i class="xsicon icon-spa beautypress-watermark-icons watermark-icon-style-1"></i>
                        <div class="beautypress-counter">
                            <h2 class="numeric-count number-animate" :data-value="services" data-animation-duration="1200">0</h2>
                            <span>+</span>
                        </div>
                        <h5>Services</h5>
                    </div><!-- .beautypress-single-fun-factory END -->
                </div>
            </div>
        </div>
    </section><!-- .beautypress-fun-factory-section END -->
</template>
<script>
    export default {
      props: ['specialists', 'services'],
    }
</script>
