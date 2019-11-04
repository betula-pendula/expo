<template>
  <div>
    <div class="sidenav">
      <h6>Create a new post</h6>
      <textarea id="textarea-title" placeholder="Titlt"></textarea>
      <br />
      <textarea id="textarea-txt" placeholder="Txt"></textarea>
      <br />
      <button v-on:click="addPost()" class="btn btn-danger btn-block">Add post</button>
    </div>
    <div class="main">
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">User name: {{ this.$store.state.userName }}</span>
      </nav>
      <br />
      <div class="container">
        <table class="table text-left">
          <tr>
            <td class="td-head">
              <a @click="sortParam='title'" class="table-head">ID</a>
            </td>
            <td class="td-head">
              <a @click="sortParam='company'" class="table-head">Date</a>
            </td>
            <td class="td-head">
              <a @click="sortParam='price'" class="table-head">Title</a>
            </td>
            <td class="td-head">
              <a @click="sortParam='price'" class="table-head">Txt</a>
            </td>
            <td class="text-center table-head td-head">Control</td>
          </tr>
          <tr v-for="t in paginatedData" :key="t['.key']">
            <td>{{t.id}}</td>
            <td>{{timePost(t.date.seconds)}}</td>
            <td>{{t.title}}</td>
            <td>{{t.txt}}</td>
            <td class="text-center">
              <button class="btn btn-primary btn-sm" v-on:click="Change(t.id, t.date.seconds)">
                <i class="material-icons" style="font-size:15px; padding-top: 3px;">edit</i>
              </button>
              <button class="btn btn-secondary btn-sm" v-on:click="removeNote(t.id)">
                <i class="material-icons" style="font-size:15px; padding-top: 3px;">delete</i>
              </button>
            </td>
          </tr>
        </table>
        <button
          @click="prevPage"
          :disabled="pageNumber==0"
          class="btn btn-outline-secondary"
        >Previous</button>
        <button
          @click="nextPage"
          :disabled="pageNumber >= pageCount - 1"
          class="btn btn-outline-secondary"
        >Next</button>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from './../db'
import moment from 'moment'

export default {
  props: {
    listData: {
      type: Array,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 2
    }
  },
  data() {
    return {
      table: [],
      pageNumber: 0
    }
  },
  firestore: {
    table: db.collection('table')
  },
  methods: {
    removeNote(tId) {
      db.collection('table').doc(tId).delete()
    },
    timePost(seconds) {
      let date = moment(seconds * 1000).format('MM/DD/YYYY')
      return date
    },
    Change(id, date) {
      this.$router.push('/edit/' + id + '/' + date)
    },
    addPost() {
      var myDate = new Date();
      var myEpoch = myDate.getTime() / 1000.0;
      var newPost = {
        date: { "seconds": myEpoch, "nanoseconds": 0 },
        title: 'ggg',
        txt: 'nnnn'
      }
      newPost.title = document.getElementById('textarea-title').value;
      newPost.txt = document.getElementById('textarea-txt').value;
      db.collection('table').add(newPost)
    },
    nextPage() {
      this.pageNumber++;
    },
    prevPage() {
      this.pageNumber--;
    }
  },
  computed: {
    pageCount() {
      let l = this.table.length
      let s = this.size
      // редакция переводчика спасибо комментаторам
      return Math.ceil(l / s);
      // оригинал
      // return Math.floor(l/s);
    },
    paginatedData() {
      const start = this.pageNumber * this.size,
        end = start + this.size;
      return this.table.slice(start, end);
    }
  }
}
</script>

<style>
.container {
  margin-top: 1em;
}
textarea {
  height: 100px;
  width: 170px;
}
button {
  margin: 0.5em 0.5em;
}
.table-head {
  font-weight: 700;
}
.td-head {
  background: #f8f9fa;
}
.sidenav {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: #f8f9fa;
  overflow-x: hidden;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  border-left: 1px solid white;
}

.main {
  margin-right: 200px; /* Same as the width of the sidenav */
}

@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}

.btn-block {
  margin-left: 0;
}
</style>
