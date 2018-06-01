<template>
    <section class="beautypress-welcome-section beautypress-welcome-version-3 welcome-height-calc-minus">
        <div class="beautypress-welcome-slider-wraper">
            <div class="beautypress-welcome-slider owl-carousel">
                <div v-for="(slide, $index) in sliders" :key="$index"
                        class="beautypress-welcome-slider-item beautypress-bg"
                     :style="{ backgroundImage: `url(${slide.fields.image.fields.file.url}` }">
                    <div class="container">
                        <div class="beautypress-welcome-content-group">
                            <div class="beautypress-welcome-container">
                                <div class="beautypress-welcome-wraper">
                                    <h2 v-if="slide.fields.subHeader" class="color-white">{{slide.fields.subHeader}}</h2>
                                    <h3 class="color-white">{{slide.fields.header}}</h3>
                                    <p class="color-white">{{slide.fields.text}}</p>
                                    <div class="beautypress-btn-wraper">
                                        <a href="#" class="xs-btn bg-chocolate round-btn box-shadow-btn">phurchase<span></span></a>
                                        <a href="#" class="xs-btn bg-color-cyan round-btn box-shadow-btn">learn more<span></span></a>
                                    </div>
                                </div>
                            </div><!-- .beautypress-welcome-container END -->
                        </div><!-- .beautypress-welcome-content-group END -->
                    </div>
                    <div class="beautypress-black-gradient-overlay"></div>
                </div><!-- .beautypress-welcome-slider-item END -->
            </div><!-- .beautypress-welcome-slider END -->
        </div>
    </section><!-- .beautypress-welcome-section END -->
</template>
<script>
    export default {
      props: ['sliders']
    }
</script>
