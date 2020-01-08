<template>
    <div>
        <v-toolbar
                dense
                tabs
                color="transparent"
                light
        >
            <v-toolbar-title class="pl-2">Workshops</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tabs
                    v-model="tabs"
                    color="transparent"
                    slider-color="white"
                    slot="extension"
            >
                <v-tab
                        v-for="tabsItem in tabsItems"
                        :key="tabsItem.id"
                        :to="tabsItem.link"
                >
                    <span class="pl-2 pr-2">{{ tabsItem.title }}</span>
                </v-tab>
            </v-tabs>
        </v-toolbar>

        <v-container>
            <v-layout row>
                <v-flex xs12 md8 offset-md2>
                    <v-slide-y-transition mode="out-in">
                        <router-view/>
                    </v-slide-y-transition>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tabs: null,
                tabsItems: [
                    {id: 1, title: 'Call for Workshop', link: 'indicators'},
                    {id: 2, title: 'Approaved Workshops', link: 'backup'},
                    {id: 3, title: 'SARL Tuitorial', link: 'logs'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>
