<template>
    <v-row>
        <v-btn to="/">
            Home
        </v-btn>
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
            console.log(JSON.stringify(this.$store.getters.build, null, 2));
        }
        
    }

</script>

<style lang="scss" scoped></style>