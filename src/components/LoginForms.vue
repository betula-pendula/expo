<template>
  <div>
    <div v-if="show">
      <SignIn />
      <p>- or -</p>
      <a href="#" v-on:click="show = false">Sing Up</a>
    </div>
    <div v-if="!show">
      <SignUp />
      <p>- or -</p>
      <a href="#" v-on:click="show = true">Sing In</a>
    </div>
  </div>
</template>

<script>
import SignIn from './SignIn'
import SignUp from './SignUp'

export default {
  name: 'HelloWorld',
  components: {
    SignIn,
    SignUp
  },
  data() {
    return {
      show: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
