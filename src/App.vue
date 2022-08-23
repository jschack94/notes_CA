<template>
  <div class="container main">
    <AddNoteBtn
     @save="saveNote"
    />
    <div class="notes" v-if="notes.length">
      <Note
       v-for="(note, index) in notes"
       :key="index"
       :note="note"
       :id="index"
       @delete="deleteNote(index)"
      />
    </div>
    <div class="no-notes" v-else>
      <h2>No notes yet ...</h2>
    </div>
  </div>
</template>

<script>
import AddNoteBtn from '@/components/AddNoteBtn.vue'
import Note from '@/components/Note.vue'

export default {
  components: {
    AddNoteBtn,
    Note
  },
  data: () => ({
    notes: []
  }),
  watch: {
    notes: {
      handler() {
        localStorage.setItem('notes', JSON.stringify(this.notes))
      },
      deep: true
    }
  },
  created() {
    if(localStorage.getItem('notes')) {
      this.notes = JSON.parse(localStorage.getItem('notes'))
    }
  },
  methods: {
    saveNote(note) {
      this.notes.push(note)
    },
    deleteNote(index){
      this.notes.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
.no-notes{
  text-align: center;
  color: #999;
}
</style>