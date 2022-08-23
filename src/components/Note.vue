<template>
  <div class="note-item">
    <span class="note-title">{{ note.title }}</span>
    <span class="note-nav">
      <ViewNoteBtn :note="note" />
      <EditNoteBtn :note="note" />

      <span class="delete" @click="$emit('delete')">Delete</span>
    </span>
  </div>
</template>

<script>
import ViewNoteBtn from "@/components/ViewNoteBtn.vue";
import EditNoteBtn from './EditNoteBtn.vue';


export default {
  props: ["id", "note"],
  components: {
    ViewNoteBtn,
    EditNoteBtn,
  },
};
</script>

<style lang="scss">
.note-item{
    background-color: #f5f5f5;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    // box-shadow: 0 3px 5px rgba(0,0,0,0.05);
    border: 1px solid rgba(0,0,0,0.03);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1em;
    .note-title{
        font-size: 1.2em;
        font-weight: bold;
        color: rgb(78, 78, 78);
    }
.note-nav {

  display: flex;
  align-items: center;
  gap: 0.75em;
  font-size: 0.9em;
  cursor: pointer;
  .view {
    color: #007bff;
  }
  .edit {
    color: #28a745;
  }

  .delete {
    color: #dc3545;
  }
}
}
</style>
