<template>
    <section id="appointment" class="beautypress-booking-section beautypress-bg beautypress-version-2 beautypress-padding-bottom parallax-bg"
             data-parallax="scroll" :data-image-src="settings.bookingBackground ? settings.bookingBackground.fields.file.url : 'img/get_appoinment.jpg'">
        <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: white; opacity: .7" class="overlay"></div>
        <div style="position: relative; z-index: 99;" class="container">
            <div class="beautypress-section-headinig beautypress-version-2">
                <h2>We are awesome</h2>
                <h3>Request an Appoinment</h3>
                <img src="img/section-heading-separetor.png" alt="">
            </div>
            <div class="row">
                <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
                    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: white; opacity: .9" class="overlay"></div>
                    <div style="position: relative; z-index: 99;" class="beautypress-booking-text-wraper">
                        <div class="beautypress-booking-content-text beautypress-border beautypress-version-3">
                            <div class="beautypress-booking-text">
                                <h2>Time Shedule</h2>
                                <h3>Working Hours</h3>
                                <div class="beautypress-icon-bg-text">
                                    <p>{{settings.bookingText}}</p>
                                </div><!-- .beautypress-icon-bg-text END -->
                                <ul>
                                    <li v-for="(block, $index) in schedule" :key="$index">
                                        {{block.fields.day.length > 1 ? (block.fields.day[0].slice(0,3) + '-' + block.fields.day[block.fields.day.length - 1].slice(0,3)) : block.fields.day[0].slice(0,3)}} :
                                        {{block.fields.availability === 'open' ?  (block.fields.startTime + ':00' + block.fields.startSuffix +' - ' + block.fields.endTime + ':00' + block.fields.endSuffix) : 'closed'}}
                                    </li>
                                </ul>
                            </div><!-- .beautypress-booking-text END -->
                        </div><!-- .beautypress-booking-content-text END -->
                    </div><!-- .beautypress-booking-text-wraper END -->
                </div>
                <div class="col-md-12 col-sm-12 col-lg-6 col-xl-6">
                    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: white; opacity: .9" class="overlay"></div>
                    <div v-if="!isFormSubmitted" style="position: relative; z-index: 99; padding: 40px" class="beautypress-booking-form-wraper">
                        <form action="#" method="POST" id="beautypress-booking-form">
                            <input type="hidden" name="action" value="send_appointment_form"/>
                            <div class="alert hidden" id="beautypress-form-msg"></div>
                            <div class="beautypress-service-and-date">
                                <h2>Service and Date</h2>
                                <div class="beautypress-select">
                                    <div class="input-group">
                                        <select v-model="service" name="appointment-service" id="appointment-service" class="form-control">
                                            <option value="Select your service">Select your service</option>
                                            <option v-for="(service, $index) in services" :key="$index"
                                                :value="service"
                                            >{{service.fields.name}}</option>
                                        </select>
                                    </div>
                                    <div v-if="typeof service === 'object' && service !== null" class="input-group" style="margin-top: 15px">
                                        <select v-model="form.type" name="appointment-service" id="service-type" class="form-control">
                                            <option value="Select your service">Select your service type</option>
                                            <option v-for="(type, $index) in service.fields.serviceType" :key="$index"
                                                    :value="type.fields.serviceType"
                                            >{{type.fields.serviceType}} ( $ {{type.fields.serviceCost}} )</option>
                                        </select>
                                    </div>
                                </div><!-- .beautypress-select END -->
                                <div class="beautypress-spilit-container">
                                    <div class="beautypress-date-select beautypress-select">
                                        <div class="input-group">
                                            <input type="text" ref="appointment" id="appointment-date" class="form-control datepicker" name="appointment-date" placeholder="Date Shedule">
                                        </div>
                                    </div><!-- .beautypress-date-select END -->
                                    <div class="beautypress-select">
                                        <div class="input-group">
                                            <select v-model="form.time" name="appointment-time" id="appointment-time" class="form-control">
                                                <option value="">Time Shedule</option>
                                                <template v-if="selectedDayOptions.length > 0">
                                                    <option v-for="(time, $index) in selectedDayOptions" value="12:00 AM">{{time}}AM</option>
                                                </template>
                                                <template v-if="selectedDayOptions.length === 0">
                                                    <option value="">No Times Availible</option>
                                                </template>
                                            </select>
                                        </div>
                                    </div><!-- .beautypress-select END -->
                                </div>
                            </div><!-- .beautypress-service-and-date END -->
                            <div class="beautypress-personal-information">
                                <h2>Personal Information</h2>
                                <div class="beautypress-spilit-container">
                                    <div class="form-group first-name-group">
                                        <input type="text" v-model="form.name" name="name" class="form-control" id="first-name" placeholder="Name....">
                                    </div>
                                    <div class="form-group email-group">
                                        <input type="email" v-model="form.email" name="email" class="form-control" id="email" placeholder="Email Address....">
                                    </div>
                                </div>
                                <div class="form-group phone-group">
                                    <input type="number" v-model="form.phone" name="phone" class="form-control" id="phone" placeholder="Phone Number....">
                                </div>
                                <div class="form-group massage-gropu">
                                    <textarea class="form-control" v-model="form.message" rows="5" id="appointment-comment" placeholder="Enter Message...."></textarea>
                                </div>
                                <div class="form-group button-group">
                                    <input @click.prevent="submit" type="submit" name="submit" value="submit" id="beautypress-submit">
                                </div>
                            </div><!-- .beautypress-personal-information END -->
                        </form><!-- #beautypress-booking-form END -->
                    </div>
                    <div v-if="isFormSubmitted" class="row" style="position: relative; z-index: 99; padding: 40px; height: 100%; align-items: center">
                        <p>{{settings.bookingResponse}}</p>
                    </div><!-- .beautypress-icon-bg-text END -->
                </div>
            </div>
        </div>
    </section><!-- .beautypress-booking-section END -->
</template>
<script>
    import {createClientCMA} from '~/plugins/contentful.js'
    const cma = createClientCMA()
    export default {
      props: ['schedule', 'services', 'settings'],
      data: function () {
        return {
          service: 'Select your service',
          form: {
            type: 'Select your service',
            date: '',
            time: '',
            name: '',
            phone: '',
            email: '',
            message: ''
          },
          selectedDay: '',
          isFormSubmitted: false
        }
      },
      mounted () {
        let self = this
          $('.datepicker').datepicker().on('changeDate', function () {
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var selection = new Date(self.$refs.appointment.value).getDay()
            self.selectedDay = self.days[days[selection].toLowerCase()]
            $(this).datepicker('hide')
          })
      },
      computed: {
        days: function () {
          var group = {}
          this.schedule.forEach(function (block) {
            block.fields.day.forEach(function (day) {
              group[day] = {start: block.fields.startTime, end: block.fields.endTime, sFx: block.fields.startSuffix, eFx: block.fields.endSuffix}
            })
          })
          return group
        },
        selectedDayOptions: function () {
          var options = []
            if (this.selectedDay) {
              var startMilitary = (this.selectedDay.sFx === 'AM' && this.selectedDay.start !== 12) ? this.selectedDay.start : (12 + this.selectedDay.start),
                endMilitary = (this.selectedDay.eFx === 'AM' && this.selectedDay.end !== 12) ? this.selectedDay.end : (12 + this.selectedDay.end)
              for (var i = 0; i < endMilitary - startMilitary; i++) {
                options.push(startMilitary + i)
              }
            }
          return options
        }
      },
      methods: {
        submit: function () {
          this.form.date = this.$refs.appointment.value
          if (!this.service || !this.validate(this.form)) {
            console.log('not done')
          }
          let self = this
          cma.getSpace(process.env.CTF_SPACE_ID)
            .then((space) => space.createEntry('appointment', {
              fields: self.formatForm(self.form)
            }))
            .then((entry) => entry.publish()).then(function (results) {
              if (results) {
                self.isFormSubmitted = true
              }
            })
            .catch(console.error)
        },
        formatForm: function (form) {
          Object.keys(form).forEach(function (key) {
            form[key] = {
              'en-US': form[key]
            }
          })
          return form
        },
        validate: function (object) {
          if (object === null || object === '') {
            return false
          }
          if (typeof object === 'object') {
            for (var key in object) {
              if (key !== 'webkitRelativePath' && !this.validate(object[key])) {
                return false
              }
            }
          }
          return true
        }
      }
    }
</script>
