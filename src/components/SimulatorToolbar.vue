<template>
    <v-row>
        <router-link to="/" tag="v-btn">
            <v-btn>
                Home
            </v-btn>
        </router-link>
        <v-btn @click="saveBuild()">
            Save
        </v-btn>
        <v-btn>
            Load
        </v-btn>
    </v-row>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Component from 'vue-class-component'

    @Component({})
    export default class SimulatorToolbar extends Vue {

        saveBuild() {
            console.log('save build');
        }
        
    }

</script>

<style lang="scss" scoped></style>