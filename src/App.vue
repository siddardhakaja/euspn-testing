<template>
    <component :is="component">
        <slot/>
    </component>
</template>

<script>
    import VuebaseLayout from './layouts/VuebaseLayout'

    export default {
        name: 'App',

        components: {
            VuebaseLayout
        },


// Not Needed 
        computed: {
            component() {
                return VuebaseLayout
            }
        }
    }
</script>
