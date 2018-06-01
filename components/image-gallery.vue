<template>
    <section class="beautypress-photo-gallery-section beautypress-version-2 beautypress-padding-bottom">
        <div class="container">
            <div class="beautypress-section-headinig beautypress-version-2">
                <h2>We are awesome</h2>
                <h3>Photo Gallery</h3>
                <img src="img/section-heading-separetor.png" alt="">
            </div>
            <div class="beautypress-photo-gallery-wraper">
                <div class="beautypress-portfolio-nav portfolio-menu">
                    <ul id="filters" class="option-set clearfix" data-option-key="filter">
                        <li><a href="#" data-option-value="*" class="selected">All item</a></li>
                        <li v-for="(gallery, $index) in galleries" :key="$index"><a href="#" :data-option-value="'.' + gallery.fields.name">{{gallery.fields.name}}</a></li>
                    </ul>
                </div>
                <div v-if="items" class="beautypress-photo-gallery-grid">
                    <div v-for="(gallery, $index) in items" :key="$index" class="beautypress-photo-gallery-grid-item" :class="gallery.galleryName">
                        <div class="beautypress-single-photo-gallery">
                            <img :src="gallery.fields.file.url" alt="">
                            <div class="beautypress-photo-gallery-content">
                                <a :href="gallery.fields.file.url" class="beautypress-image-popup beautypress-iocn-btn full-round-btn bg-color-cyan">
                                    <i class="fa fa-eye"></i>
                                </a>
                            </div><!-- .beautypress-photo-gallery-content END -->
                            <div class="beautypress-gallery-overlay"></div>
                        </div><!-- .beautypress-single-photo-gallery END -->

                    </div><!-- .beautypress-photo-gallery-grid-item END -->
                </div><!-- .beautypress-photo-gallery-grid END -->
            </div>
        </div>
    </section><!-- .beautypress-photo-gallery-section END -->
</template>
<script>
    export default {
      props: ['galleries'],
      data: function () {
        return {
          items: ''
        }
      },
      mounted () {
        var items = []
        this.galleries.forEach(function (gallery) {
          gallery.fields.galleryImages.forEach(function (image) {
            image.galleryName = gallery.fields.name
            items.push(image)
          })
        })
        this.items = items
      }
    }
</script>
