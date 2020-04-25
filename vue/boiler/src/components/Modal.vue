<template>
    <div class="modal">
        <div class="modal__dialog">
            <div class="modal__dialog-header">
                <slot name="header"><h3>Modal header</h3></slot>
                <div class="modal__dialog-header__close-btn">
                    <button @click="$emit('closeModal')">
<!--                        <vue-icon icon="times"/>-->
                        X
                    </button>
                </div>
            </div>
            <div class="modal__dialog-body">
                <slot name="body"/>
            </div>
            <div class="modal__dialog-footer">
                <button
                        @click="$emit('closeModal')"
                        class="modal__dialog-footer__close-btn">CLOSE
                </button>
                <slot name="footer"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Modal"
    }
</script>

<style scoped lang="scss">
    .modal {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0, .65);
        &__dialog {
            width: 55%;
            min-height: 45%;
            display: flex;
            flex-direction: column;
            background-color: #eeeeee;
            margin: 105px auto;
            position: relative;
            border-radius: 4px;
            box-shadow: 1px 1px 8px 0 rgba(255,255,255,.3);
            &-header{
                display: flex;
                justify-content: space-between;
                align-items: center;
                &__close-btn button{
                    background-color: transparent;
                    border: none;
                    cursor: pointer;
                    font-size: 1.5rem;
                    outline: none;
                    margin-right: 15px;
                }
            }
            &-footer {
                align-self: flex-end;
                margin: auto 16px 16px 0;
                &__close-btn {
                    background-color: transparent;
                    border: none;
                    color: #5B6B79;
                    font-weight: bold;
                    cursor: pointer;
                    padding: 8px 12px;
                    margin-right: 4px;
                }
            }
        }
    }
</style>