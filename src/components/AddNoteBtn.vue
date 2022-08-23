<template>
    <button
     class="btn block mb-2"
     @click="showModal = true"
    >Add New Note</button>
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
                    <input v-model="title" type="text" placeholder="Enter note title">
                </div>
                <div class="input-group">
                    <label>Note Content</label>
                    <textarea v-model="content" type="text" placeholder="Enter your note"></textarea>
                </div>
                <p class="err" v-if="err">{{err}}</p>
            </div>
        </template>
        <template v-slot:footer>
            <button class="btn link" @click="showModal = false">Cancel</button>
            <button class="btn" @click="saveNote">Save</button>
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
    data: () => ({
        showModal: false,
        title: '',
        content: '',
        err: ''
    }),
    methods: {
        saveNote() {
            if(!this.title.trim() && !this.content.trim()) {
                this.err = 'Please fill in all fields'
                return
            }
            if(!this.title.trim()) {
                this.err = 'Please fill in note title'
                return
            }
            if(!this.content.trim()) {
                this.err = 'Please fill in note content'
                return
            }
            
            this.err = ''
            this.showModal = false
            
            this.$emit('save', {
                title: this.title.trim(),
                content: this.content.trim()
            })

            this.title = ''
            this.content = ''

        }
    }
}
</script>