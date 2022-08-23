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
</style>
