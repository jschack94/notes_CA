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

<style lang="scss">
.modal-wrapper{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(10px);

    .modal-container{
        width: 100%;
        margin: 0 3em;
        max-width: 500px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 3px 5px rgba(0,0,0,0.05);
        border: 1px solid rgba(0,0,0,0.03);
        padding: 1.5em;
        animation: .15s popIn linear;

        .err{
            color: #ff0909;
            font-size: .9em;
            margin-top: .5em;
        }
    }

    .modal-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.5em;
        i{
            cursor: pointer;
        }
    }

    .modal-body{
        margin: 1.5em 0;
    }

    .modal-footer{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 1em;
        cursor: pointer;
        .btn{
            min-width: 100px;
        }
    }
}

@keyframes popIn{
    from{
        transform: scale(0.5) translateY(50px);
        opacity: 0;
    }
    to{
        transform: scale(1) translateY(0);
        opacity: 1;
    }
}
</style>