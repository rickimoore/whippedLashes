<template>
  <div>
    <!--[if lt IE 8]>
    <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->

    <!-- Prelaoder -->
    <div id="preloader">
      <div class="preloader-window left-window"></div>
      <div class="preloader-window right-window"></div>
      <div class="preloader-content">
        <img style="width: 100px" :src="settings.logo.fields.file.url" alt="">
        <h2>{{settings.companyName}}</h2>
      </div>
      <div class="spinner-block">
        <div class="spinner-eff spinner-eff-3">
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
          <div class="circle circle-3"></div>
        </div>
      </div>
    </div>
    <!-- Prelaoder end -->

     <!--Main menu -->

    <header class="beautypress-header-section beautypress-header-version-3 beautypress-header-version-2 header-height-calc-minus">
      <div class="beautypress-header-top bg-color-gray-2">
        <div class="container">
          <div class="beautypress-spilit-container beautypress-version-2">
            <div class="beautypress-language-select-list">
              <div class="beautypress-header-social-list">
                <ul>
                  <li v-if="settings.facebook"><a :href="settings.facebook"><i class="fa fa-facebook"></i></a></li>
                  <li v-if="settings.twitter"><a :href="settings.twitter"><i class="fa fa-twitter"></i></a></li>
                  <li v-if="settings.instagram"><a :href="settings.instagram"><i class="fa fa-instagram"></i></a></li>
                </ul>
              </div>
            </div>
            <ul class="beautypress-simple-iocn-list beautypress-version-1">
              <li v-if="settings.phone"><i class="xsicon icon-call"></i>{{settings.phone}}</li>
              <li v-if="settings.alternatePhone"><i class="xsicon icon-call"></i>{{settings.alternatePhone}}</li>
              <li><i class="xsicon icon-envelope"></i>{{settings.email}}</li>
            </ul>
          </div>
        </div>
      </div><!-- .beautypress-header-top END -->
    </header><!-- .beautypress-header-section END -->

     <!--Main menu closed -->

    <!-- welcome section -->

    <JumboSlider :sliders="sliders"></JumboSlider>

    <!-- Simple text with image-->
    <BeforeAfter v-if="settings.beforeAndAfterText" :settings="settings"></BeforeAfter>
    <!-- Simple text with image end -->


    <!-- Service section -->
      <SliderGallery :services="services"></SliderGallery>
    <!-- Service section closed -->

    <!-- Photo gallery -->
    <ImageGallery :galleries="galleries"></ImageGallery>
    <!-- Photo gallery -->

    <!-- Testimonial Slider -->
    <Testimonials :testimonials="testimonials" :settings="settings"></Testimonials>
    <!-- Testimonial Slider -->

    <!-- Pricing table -->
    <ServicePrice :services="services"></ServicePrice>
    <!-- Pricing table -->

    <!-- booking section -->
    <Booking :schedule="schedule" :settings="settings" :services="services"></Booking>
    <!-- booking section end -->

    <!-- Fun factory section -->
    <FunFactory :specialists="specialists.length" :services="services.length"></FunFactory>
    <!-- Fun factory section -->

    <!-- partner section -->
    <SpecialistGrid :specialists="specialists"></SpecialistGrid>
    <!-- partner section end -->

    <!-- Footer section -->
    <footer class="beautypress-footer-section beautypress-version-3">
      <div class="container">
        <div class="beautypress-footer-content">
          <div class="beautypress-footer-logo">
            <a href="index.html">
              <img style="width: 100px" :src="settings.logo.fields.file.url" alt="">
            </a>
          </div><!-- .beautypress-footer-logo END -->
          <div style="width: 80%; margin-top: 10%" class="beautypress-subscribe-wraper">
            <h3>Come find us!</h3>
            <div style="width: 100%; height: 350px" id="map"></div>
          </div><!-- .beautypress-subscribe-wraper END -->
          <div class="row">
            <div class="col-md-12 col-sm-12 col-lg-4 col-xl-4">
              <div class="beautypress-single-footer">
                <p>Then an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five.</p>
              </div><!-- .beautypress-single-footer END -->
            </div>
            <div class="col-md-12 col-sm-12 col-lg-4 col-xl-4">
              <div class="beautypress-single-footer beautypress-single-footer-group">
                  <p v-for="(block, $index) in schedule" :key="$index">
                      {{block.fields.day.length > 1 ? (block.fields.day[0].slice(0,3) + '-' + block.fields.day[block.fields.day.length - 1].slice(0,3)) : block.fields.day[0].slice(0,3)}} :
                      {{block.fields.availability === 'open' ?  (block.fields.startTime + ':00' + block.fields.startSuffix +' - ' + block.fields.endTime + ':00' + block.fields.endSuffix) : 'closed'}}
                  </p>
              </div><!-- .beautypress-single-footer END -->
            </div>
            <div class="col-md-12 col-sm-12 col-lg-4 col-xl-4">
              <div class="beautypress-single-footer beautypress-single-footer-group">
                <p v-if="settings.formattedLocation">{{settings.formattedLocation}}</p>
                <p>Email: {{settings.email}}</p>
                <p>Telephone: {{settings.phone}}</p>
                <p>Alternate Telephone: {{settings.alternatePhone}}</p>
              </div><!-- .beautypress-single-footer END -->
            </div>
          </div>
        </div>
      </div>
      <div class="beautypress-copyright-content">
        <div class="container">
          <div class="beautypress-copyright-text">
            <p><a href="http://www.mavrik.io/" class="color-purple"><img src="/img/mavrik.png" style="width: 100px" alt="mavrik"></a> &copy; Developed by Mavrik.</p>
          </div>
        </div>
      </div>
    </footer><!-- .beautypress-footer-section END -->
    <!-- Footer section end -->
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'
import Booking from '~/components/booking.vue'
import JumboSlider from '~/components/jumbo-slider.vue'
import SliderGallery from '~/components/service-gallery.vue'
import ServicePrice from '~/components/service-pricetable.vue'
import ImageGallery from '~/components/image-gallery.vue'
import SpecialistGrid from '~/components/specialist-grid.vue'
import FunFactory from '~/components/fun-factory.vue'
import BeforeAfter from '~/components/before-after.vue'
import Testimonials from '~/components/testimonial.vue'

const client = createClient()

export default {
  asyncData ({env}) {
    return Promise.all([
      client.getEntries({
        'content_type': 'settings',
        'include': 10
      }),
      client.getEntries({
        'content_type': 'jumboSlide',
        order: '-sys.createdAt'
      }),
      client.getEntries({
        'content_type': 'service'
      }),
      client.getEntries({
        'content_type': 'gallery'
      }),
      client.getEntries({
        'content_type': 'specialist'
      }),
      client.getEntries({
        'content_type': 'review'
      })
    ]).then(([settings, jumbos, services, galleries, specialists, review]) => {
      return {
        settings: settings.items[0].fields,
        sliders: jumbos.items,
        services: services.items,
        galleries: galleries.items,
        specialists: specialists.items,
        testimonials: review.items
      }
    }).catch(console.error)
  },
  computed: {
    schedule: function () {
      return this.settings.schedule
    }
  },
  mounted () {
    let self = this
    var myLatLng = {lat: self.settings.location.lat, lng: self.settings.location.lon};
    setTimeout(function () {
      var geocoder = new google.maps.Geocoder;
      var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: 18
      })
      geocoder.geocode({'location': myLatLng}, function(results, status) {
          if (status === 'OK') {
            if (results[0]) {
              self.settings.formattedLocation = results[0].formatted_address
            } else {
              self.settings.formattedLocation = 'Adress not Found'
            }
          }
      })
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
      })
    }, 2000)

// Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        })
  },
  components: {
    JumboSlider,
    SliderGallery,
    ServicePrice,
    ImageGallery,
    SpecialistGrid,
    Booking,
    FunFactory,
    BeforeAfter,
    Testimonials
  }
}
</script>
