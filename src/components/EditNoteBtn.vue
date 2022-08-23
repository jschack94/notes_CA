<template>
    <span
     class="edit"
     @click="showModal = true"
    >Edit</span>
    <Modal
     v-if="showModal"
     @close="showModal = false"
    >
        <template v-slot:header>
            <h3>Add New Note</h3>
        </template>
        <template v-slot:body>
            <div>
                <div class="input-group">
                    <label>Note Title</label>
                    <input v-model="note.title" type="text" placeholder="Enter note title">
                </div>
                <div class="input-group">
                    <label>Note Content</label>
                    <textarea v-model="note.content" type="text" placeholder="Enter your note"></textarea>
                </div>
                <p class="err" v-if="err">{{err}}</p>
            </div>
        </template>
        <template v-slot:footer>
            <button class="btn link" @click="cancelEdit">Cancel</button>
            <button class="btn" @click="saveNote">Update</button>
        </template>
    </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
    emits: ['save'],
    components: {
        Modal
    },
    props: ['note'],
    data(){
        return {
            showModal: false,
            err: '',
            default: {
                title: this.note.title,
                content: this.note.content
            }
        }
    },
    methods: {
        saveNote() {
            if(!this.note.title.trim() && !this.note.content.trim()) {
                this.err = 'Please fill in all fields'
                return
            }
            if(!this.note.title.trim()) {
                this.err = 'Please fill in note title'
                return
            }
            if(!this.note.content.trim()) {
                this.err = 'Please fill in note content'
                return
            }
            
            this.err = ''
            this.showModal = false
            
            // this.$emit('save', {
            //     title: this.title.trim(),
            //     content: this.content.trim()
            // })

            // this.title = ''
            // this.content = ''

        },
        cancelEdit(){
            this.note.title = this.default.title
            this.note.content = this.default.content
            this.showModal = false
        }
    }
}
</script>