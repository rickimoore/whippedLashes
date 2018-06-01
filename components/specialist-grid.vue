<template>
    <section class="beautypress-partner-section section-padding">
        <div class="beautypress-section-headinig beautypress-version-2">
            <h3>Our Specialists</h3>
            <img src="img/section-heading-separetor.png" alt="">
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="beautypress-partner-wraper">
                        <div class="row" style="justify-content: center">
                            <div class="col-md-4" v-for="person in specialists">
                                <div class="image--container"
                                     :style="{
                                backgroundImage: `url(${person.fields.image.fields.file.url}`, width:'100%',
                                 height: '250px', backgroundPosition: 'center', backgroundSize: 'cover'}"></div>
                                <p style="text-align: center; margin-top: 15px">{{person.fields.name}}</p>
                            </div>
                        </div><!-- .beautypress-partner-list END -->
                    </div><!-- .beautypress-partner-wraper END -->
                </div>
            </div>
        </div>
        <div class="beautypress-round-icons-bg" style="background-image: url(img/icons-bg.png);"></div>
    </section><!-- .beautypress-partner-section END -->
</template>
<script>
    export default {
      props: ['specialists']
    }
</script>
