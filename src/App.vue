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
  
   
  
}
</script>
