<template>
  <div class="sign-in">
    <div class="error">{{ error }}</div>
    <br />
    <h1>Sign In</h1>
    <form id="signIn" v-on:submit.prevent="control(controlUser, controlPassword)">
      <input type="text" v-model="controlUser" placeholder="Name" />
      <br />
      <input type="password" v-model="controlPassword" placeholder="Password" />
      <br />
      <input type="submit" value="Sign In" class="btn btn-danger"/>
      <br />
    </form>
  </div>
</template>

<script>
import { db } from './../db'

export default {
  data() {
    return {
      users: [],
      newUser: {
        name: '',
        password: ''
      },
      passwordControl: '',
      controlUser: '',
      controlPassword: '',
      error: '',
      show: true
    }
  },
  firestore: {
    users: db.collection('users')
  },
  methods: {
    control(inputUserControl, inputPasswordControl) {
      let control = {
        name: inputUserControl,
        password: inputPasswordControl
      }
      for (var i = 0; i <= this.users.length; i++) {
        if (this.users[i].name == control.name && this.users[i].password == control.password) {
          this.aaa = this.users[i]
          this.$store.commit('orederOK')
          this.$store.commit('setUser', control.name, control.password)
          this.$router.push('Table')
          break
        }
        else {
          this.error = 'This user is not registered'
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sign-in {
  margin-top: 37px;
}
.error {
  color: red;
}
</style>
