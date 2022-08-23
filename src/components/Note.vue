<template>
    <div class="note-item">
        <span class="note-title">{{note.title}}</span>
        <span class="note-nav">
            <ViewNoteBtn :note="note" />
            <EditNoteBtn :note="note" />
            <span class="delete" @click="$emit('delete')">Delete</span>
        </span>
    </div>
</template>

<script>

export default {
    props: ['id', 'note'],
    components: {
      
    }
}
</script>

