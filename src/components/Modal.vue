<template>
    <div class="modal-wrapper">
        <div class="modal-container">
            <div class="modal-header">
                <slot name="header"></slot>
                <!-- <i @click="$emit('close')">&times;</i> -->
            </div>
            <div class="modal-body">
                <slot name="body"></slot>
            </div>
            <div class="modal-footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>


