<template>
    <section id="services" class="beautypress-service-section beautypress-version-2 beautypress-padding-bottom">
        <div class="container">
            <div class="beautypress-section-headinig beautypress-version-2">
                <h2>We are awesome</h2>
                <h3>Our Services</h3>
                <img src="img/section-heading-separetor.png" alt="">
            </div>
            <div class="beautypress-tab">
                <div class="tabbable">
                    <ul class="nav nav-tabs beautypress-top-nav">
                        <li v-for="(service, $index) in services" @click="setService(service)"
                            :key="$index" :class="{'active': activeService && activeService.fields.name === service.fields.name}">
                            <a>
                                <i class="xsicon icon-cosmetics"></i>
                                <span>{{service.fields.name}}</span>
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active" id="makeup">
                            <div class="tabbable">
                                <ul v-if="activeService" class="nav nav-tabs beautypress-side-nav">
                                    <li v-for="(type, $index) in activeService.fields.serviceType"
                                        :class="{'active': $index === 0 || activePanel.fields.serviceType === type.fields.serviceType}" @click="activePanel = type">
                                        <a href="#mens_haircut" data-toggle="tab">{{type.fields.serviceType}}</a>
                                    </li>
                                </ul>
                                <div v-if="activePanel" class="tab-content">
                                    <div class="tab-pane beautypress-tab-content active">
                                        <div class="beautypress-spilit-container">
                                            <div class="beautypress-tab-image">
                                                <img :src="activePanel.fields.image.fields.file.url" alt="Image">
                                                <div class="beautypress-tab-image-content">
                                                    <span class="beautypress-iocn-btn full-round-btn bg-color-cyan">${{activePanel.fields.serviceCost}}</span>
                                                </div>
                                            </div>
                                            <div style="padding: 50px 15px" class="beautypress-tab-text-content">
                                                <h3>{{activePanel.fields.serviceType}}</h3>
                                                <p>{{activePanel.fields.serviceDescription}}</p>
                                                <div class="beautypress-btn-wraper">
                                                    <a href="#appointment" class="xs-btn round-btn box-shadow-btn bg-color-cyan">get appointment <span></span></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div><!-- #mens_makeup END -->
                                </div><!-- .tab-content END -->
                            </div>
                        </div><!-- #makeup END -->
                    </div>
                </div><!-- .tabbable END -->
            </div><!-- .beautypress-tab END -->
        </div>
    </section><!-- .beautypress-service-section END -->
</template>
<script>
    export default {
      props: ['services'],
      mounted () {
        if (this.services) {
          this.setService(this.services[0])
        }
      },
      data: function () {
        return {
          activeService: '',
          activePanel: ''
        }
      },
      methods: {
        setService: function (service) {
          this.activeService = service
          this.activePanel = service.fields.serviceType[0]
        }
      }
    }
</script>
