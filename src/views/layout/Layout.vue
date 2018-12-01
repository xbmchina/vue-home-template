<template>
    <div>
        这是一个layout{{userame}}
        <a @click="handleLogin">点击我</a>
    </div>
</template>

<script>
import { getTest } from '@/api/login'

export default {
    name: 'Layout',
    data() {
        return {
            userame: this.$store.state.test.mytest 
        }
    },
    computed: {
        count () {
            return this.$store.state.test.mytest 
        }
    },
    methods: {
        handleLogin() {
            getTest(this.userame).then(response => {
                alert(response.data);
            })
        }
    }
}
</script>


