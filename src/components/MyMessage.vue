<template>
    <button class="msg-wrapper my-msg">
        <div class="msg-text" @click="showModal">
            {{ msg.message }}
        </div>
        <!-- <TimeOfMsg
            :msg="msg"
        />      -->
        <ModalTest 
            v-show="isModalVisible"
            @close="closeModal"
            @deleteMsg='deleteMsg'
        />
    </button>
</template>

<script>
import TimeOfMsg from '@/components/TimeOfMsg.vue'
import ModalTest from '@/components/ModalTest.vue'
import { deleteMsg } from '@/netClient/dataService'

export default{
    name: 'Message',
    components: {
        ModalTest
    },
    data: () => ({
        isModalVisible: false,
    }),
    props:{
        msg: {
            type: Object,
            required: true
        }
    },
    methods: {
        showModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        async deleteMsg() {
            try {
                const response = deleteMsg(
                    this.msg.id
                )
            } catch (error) {
                console.error({ error });
                throw error;
            }
        }
    }
}
</script>
