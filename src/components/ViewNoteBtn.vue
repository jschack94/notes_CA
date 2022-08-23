<template>
    <span class="view" @click="showModal = true">View</span>
    <Modal
     v-if="showModal"
     @close="showModal = false"
    >
        <template v-slot:header>
            <h3>{{note.title}}</h3>
        </template>
        <template v-slot:body>
            <div>
                {{note.content}}
            </div>
        </template>
        <template v-slot:footer>
            <button class="btn link" @click="showModal = false">Close</button>
        </template>
    </Modal>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
    components: {
        Modal
    },
    props: ['note'],
    data: () => ({
        showModal: false
    })
}
</script>