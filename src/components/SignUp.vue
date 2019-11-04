<template>
  <div class="sign-up">
    <h1>Sign Up</h1>
    <form id="form" v-on:submit.prevent="addUser">
      <input type="text" v-model="newUser.name" placeholder="Username" />
      <br />
      <input type="password" v-model="newUser.password" placeholder="Password" />
      <br />
      <input type="password" v-model="passwordControl" placeholder="Repeat password" />
      <br />
      <input type="submit" value="Sign Up" class="btn btn-danger"/>
    </form>
    <!--
    <hr />
    <div v-for="user in users" class="user" :key="user['.key']">
      <span>{{ user.id }} - {{user.name}} - {{user.password}}</span>
      <button v-on:click="removeUser(user.id)">X</button>
    </div>
    -->
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
      aaa: '',
      show: true
    }
  },
  firestore: {
    users: db.collection('users')
  },
  methods: {
    addUser() {
      if (this.newUser.password == this.passwordControl) {
        db.collection('users').add(this.newUser)
        this.newUser.name = ''
        this.newUser.password = ''
        this.passwordControl = ''
      }
      else alert('Password != Repeat password')
    },
    removeUser(userId) {
      db.collection('users').doc(userId).delete()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sign-up {
  margin-top: 60px;
}
</style>
