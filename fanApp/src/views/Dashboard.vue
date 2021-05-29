<template>
  <div class="about">
    <h1>Dashboard</h1>

    <div>
    <form novalidate class="md-layout" @submit.prevent="sendMsg">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <!-- <md-card-header>
          <div class="md-title">Dashboard</div>
        </md-card-header> -->

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="first-name">First Name</label>
                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="inputText"  />
                <!-- <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span> -->
              </md-field>
            </div>

            <!-- <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('lastName')">
                <label for="last-name">Last Name</label>
                <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName"  />
                <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
              </md-field>
            </div> -->
          </div>

<!-- 
          <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email"  />
            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field> -->
        </md-card-content>

        <!-- <md-progress-bar md-mode="indeterminate" v-if="sending" /> -->

        <md-card-actions>
          <md-button type="submit" class="md-primary" >Submit</md-button>
        </md-card-actions>
      </md-card>

      <!-- <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar> -->
    </form>
  </div>
    {{msgs}}
  </div>
</template>
<script>
import io from 'socket.io-client'
export default {
  data (){
    return {
      socket : io('192.168.0.162:7070'),
      inputText: '',
      msgs:[]
    }
  },
  methods:{
    sendMsg() {
      // console.log();
      this.socket.emit("mssg", this.inputText)
      this.inputText=''
    },
  },
  mounted (){
    this.socket.on('newMsg', (data) => {
      console.log(data)
      this.msgs.push(data)
    })
  }
}
</script>