<template>
  <div>
    ID: {{ postID }} <br />
    Date: {{ timePost(dateID) }}
    <br />
    <h4>Title</h4>
    <textarea id="textarea-title" :value="postEdit(postID)[0]"></textarea>
    <br />
    <h4>TXT</h4>
    <textarea id="textarea-txt" :value="postEdit(postID)[1]"></textarea>
    <br />
    <button v-on:click="Edit()">Edit</button>
    <br />
  </div>
</template>

<script>
import { db } from './../db'
import moment from 'moment'

export default {
  props: ['postID', 'dateID'],
  data() {
    return {
      table: [],
      massage: '',
    }
  },
  firestore: {
    table: db.collection('table')
  },
  methods: {
    postEdit(id) {
      var a = ''
      var b = ''
      for (var i = 0; i < this.table.length; i++) {
        if (this.table[i].id == id) {
          a = this.table[i].title
          b = this.table[i].txt
        }
      }
      return [a, b]
    },
    timePost(seconds) {
      let date = moment(seconds * 1000).format('MM/DD/YYYY')
      return date
    },
    Edit() {
      db.collection('table').doc(this.postID).delete()
      var newNote = {
        date:  { "seconds": this.dateID, "nanoseconds": 0 },
        title: '',
        txt: ''
      }
      newNote.title = document.getElementById('textarea-title').value;
      newNote.txt = document.getElementById('textarea-txt').value;
      db.collection('table').add(newNote)
      this.$router.push('/table')
    }
  }
}
</script>

<style>
</style>