<template>
    <section class="beautypress-testimonial-section beautypress-bg parallax-bg"
             data-parallax="scroll" :data-image-src="settings.testimonialBackground ? settings.testimonialBackground.fields.file.url : 'img/testimonial-bg.jpg'">
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: white; opacity: .4" class="overlay"></div>
        <div style="position: relative" class="container">
            <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: white; opacity: .9" class="overlay"></div>
            <div style="padding: 15px" class="beautypress-testimonial-slider owl-carousel">
                <div v-for="(review, $index) in testimonials" class="beautypress-single-testimonial">
                    <h2 style="color: #3F3F3F">{{review.fields.customerName}}</h2>
                    <p style="color: #3F3F3F">{{review.fields.comment}}</p>
                    <ul class="beautypress-rating">
                        <li v-for="star in review.fields.rating"><a href=""><i class="fa fa-star"></i></a></li>
                    </ul><!-- .beautypress-rating END -->
                </div><!-- .beautypress-single-testimonial END -->
            </div><!-- .beautypress-testimonial-slider END -->
        </div>
        <div class="beautypress-black-overlay light-overlay"></div>
    </section><!-- .beautypress-testimonial-section END -->
</template>
<script>
    export default {
      props: ['testimonials', 'settings']
    }
</script>
