<template>
    <section class="beautypress-simple-text-with-img-section bg-color-gray">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xl-6 col-lg-6">
                    <div class="beautypress-simple-text beautypress-watermark-icon">
                        <div class="beautypress-separetor-sub-heading">
                            <h2>Before and After</h2>
                        </div><!-- . END -->
                        <p>{{settings.beforeAndAfterText}}</p>
                        <div class="beautypress-btn-wraper">
                            <a href="#" class="xs-btn bg-color-cyan round-btn box-shadow-btn">learn more <span></span></a>
                        </div>
                    </div><!-- . END -->
                </div>
                <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
                    <div class='twentytwenty-container beautypress-before-after'>
                        <img style="opacity: .7" :src="settings.beforeImage.fields.file.url" alt="">
                        <img :src="settings.afterImage.fields.file.url" alt="">
                    </div>
                </div>
            </div>
        </div>
    </section><!-- .beautypress-simple-text-with-img-section END -->
</template>
<script>
    export default {
      props: ['settings']
    }
</script>
