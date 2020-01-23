<template>
    <v-app>
        
        <v-navigation-drawer
                width="270"
                class="grey lighten-5"
                light
                persistent
                :mini-variant="miniVariant"
                v-model="drawer"
                fixed
                app
                
        >
            <v-toolbar flat class="transparent" dense>
                <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
                    <v-list-tile>
                    
                        <v-list-tile-content v-if="!miniVariant">
                            <v-list-tile-title>
                                <h2 class="blue--text .display-3">EUSPN 2020</h2>
                            </v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn icon @click.stop="miniVariant = !miniVariant">
                                <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-toolbar>
            

            <v-tooltip right :disabled="!miniVariant">
                <v-toolbar flat class="transparent" dense slot="activator">
                    <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
                        <v-list-tile to="/" exact>
                            <v-list-tile-action>
                                <v-icon>home</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Home</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
                <span>Home</span>
            </v-tooltip>
            

             <v-tooltip right :disabled="!miniVariant">
                <v-toolbar flat class="transparent" dense slot="activator">
                    <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
                        <v-list-tile to="/organizingCommittiees" exact>
                            <v-list-tile-action>
                                <v-icon>tag_faces</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Organizing Committee</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
                 <span>Organizing Committee</span>
            </v-tooltip>
            

            <v-tooltip right :disabled="!miniVariant">
                <v-toolbar flat class="transparent" dense slot="activator">
                    <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
                        <v-list-tile to="/programCommittiees" exact>
                            <v-list-tile-action>
                                <v-icon>domain</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Program Committiee</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
                <span>Program Committee</span>
            </v-tooltip>
            


            <v-tooltip right :disabled="!miniVariant">
                <v-toolbar flat class="transparent" dense slot="activator">
                    <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
                        <v-list-tile to="/importantDates" exact>
                            <v-list-tile-action>
                                <v-icon>event</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Important Dates</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
                <span>Important Dates</span>
            </v-tooltip>
            

            <v-tooltip right :disabled="!miniVariant">
                <v-toolbar flat class="transparent" dense slot="activator">
                    <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
                        <v-list-tile to="/callForPapers" exact>
                            <v-list-tile-action>
                                <v-icon>file_copy</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Call for Papers</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
                <span>Call for Papers</span>
            </v-tooltip>
            

             <v-tooltip right :disabled="!miniVariant">
                <v-toolbar flat class="transparent" dense slot="activator">
                    <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
                        <v-list-tile to="/paperSubmission" exact>
                            <v-list-tile-action>
                                <v-icon>mail_outline</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Paper Submission</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
                <span>Paper Submission</span>
            </v-tooltip>
            

            <v-tooltip right :disabled="!miniVariant">
                <v-toolbar flat class="transparent" dense slot="activator">
                    <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
                        <v-list-tile to="/cameraReadySubmission" exact>
                            <v-list-tile-action>
                                <v-icon>photo_camera</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Camera Ready Submission</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
                <span>Camera Ready Submission</span>
            </v-tooltip>
            

            <v-tooltip right :disabled="!miniVariant">
                <v-toolbar flat class="transparent" dense slot="activator">
                    <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
                        <v-list-tile to="/conferenceProgram" exact>
                            <v-list-tile-action>
                                <v-icon>pages</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Conference Program</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
                <span>Conference Program</span>
            </v-tooltip>
            

            <v-tooltip right :disabled="!miniVariant">
                <v-toolbar flat class="transparent" dense slot="activator">
                    <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
                        <v-list-tile to="/keynoteSpeakers" exact>
                            <v-list-tile-action>
                                <v-icon>record_voice_over</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Keynote Speakers</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
                <span>Keynote Speakers</span>
            </v-tooltip>

            <v-tooltip right :disabled="!miniVariant">
                <v-toolbar flat class="transparent" dense slot="activator">
                    <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
                        <v-list-tile to="/dashboard/callforWorkshops" exact>
                            <v-list-tile-action>
                                <v-icon>storefront</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Workshops</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
                <span>Workshops</span>
            </v-tooltip>
         

            <v-tooltip right :disabled="!miniVariant">
                <v-toolbar flat class="transparent" dense slot="activator">
                    <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
                        <v-list-tile to="/venueandTravel/venueandAccomodations" exact>
                            <v-list-tile-action>
                                <v-icon>flight</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Venue and Travel</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
                <span>Venue and Travel</span>
            </v-tooltip>
            

            <v-tooltip right :disabled="!miniVariant">
                <v-toolbar flat class="transparent" dense slot="activator">
                    <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
                        <v-list-tile to="/registration" exact>
                            <v-list-tile-action>
                                <v-icon>beenhere</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Registration</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
                <span>Registration</span>
            </v-tooltip>
            

            <v-tooltip right :disabled="!miniVariant">
                <v-toolbar flat class="transparent" dense slot="activator">
                    <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
                        <v-list-tile to="/journalSpecialIssues" exact>
                            <v-list-tile-action>
                                <v-icon>menu_book</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Journal Special Issues</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
                <span>Journal Special Issues</span>
            </v-tooltip>
            

             <v-tooltip right :disabled="!miniVariant">
                <v-toolbar flat class="transparent" dense slot="activator">
                    <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
                        <v-list-tile to="/pastEUSPN" exact>
                            <v-list-tile-action>
                                <v-icon>toys</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Past EUSPN Conferences</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
                <span>Past EUSPN Conferences</span>
            </v-tooltip>
            

             <v-tooltip right :disabled="!miniVariant">
                <v-toolbar flat class="transparent" dense slot="activator">
                    <v-list class="pa-0" :class="{'list-border-bottom' : miniVariant}">
                        <v-list-tile to="/contact" exact>
                            <v-list-tile-action>
                                <v-icon>info</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>Contact Us</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-toolbar>
                <span>Contact Us</span>
            </v-tooltip>


        </v-navigation-drawer>

        <v-toolbar 
        
                app
                flat
                dense
                color="rgba(30, 144, 245, 0.7)"
                height="120px"
                dark
        >
            <v-toolbar-side-icon
                    @click.stop="drawer = !drawer"
                    class="hidden-lg-and-up"
                    :class="searching ? 'hidden-xs-only' : ''"
                    light
                    
            />
            <v-layout
            app 
            row wrap align-center
            justify-center 
            >
            <v-flex xs12 md1   >
            <img :src="require('./assets/resizeeuspn_1.png')" >
            </v-flex>
            <v-flex xs12 md11 >
            
            <h2 class="font-headline ">The 11th International Conference on Emerging Ubiquitous Systems and Pervasive Networks (EUSPN)</h2>
            <h3 class="font-italic ">November 2-5, 2020, Madeira, Portugal </h3>
            </v-flex>
            </v-layout>
            
            
        </v-toolbar>
        <section class="hide-overflow">
        <template>
   <v-parallax :src="require('./assets/Madeira_10.jpg')"
        
         height="500">
          <v-layout
            column
            align-center
            justify-center
            class="white--text"
          >
            
            <!--
                <h1 class="blue--text mb-2 display-3 text-center">EUSPN 2020</h1>
            
                 <div class="subheading mb-4 white--text text-center">EUSPN 2020 will be held in conjunction with ICTH 2020</div>
            
            <v-btn
              class="my-12 display-1"
              color="transparent"
              dark
              large
              href="http://cs-conferences.acadiau.ca/icth-19/" target="_blank"
            >
              Visit ICTH
            </v-btn>

        -->
          </v-layout>
        </v-parallax>
</template>
        </section>
        <v-content>
            <router-view/>
        </v-content>
       <v-footer
       height="170px"
    light
    class="white"
  >
    <v-layout row wrap 
            justify-center >
            <v-flex xs12 md1   >
            <img :src="require('./assets/acadia.png')" >
            </v-flex>

            <v-flex xs12 md1   >
            <img :src="require('./assets/logo.png')" >
            </v-flex>

            <v-flex xs12 md1   >
            <img :src="require('./assets/imoblogo.jpg')" >
            </v-flex>

            <v-flex xs12 md1   >
            <img :src="require('./assets/IntitutoPedroNunes.png')" >
            </v-flex>
            
            <v-flex xs12 md1   >
            <img :src="require('./assets/elsevier.jpg')" >
            </v-flex>
            
            </v-layout> 
  </v-footer>
        
    </v-app> 
       
</template>


<script>
    export default {
        name: 'VuebaseLayout',

        data() {
            return {
                appName: process.env.VUE_APP_APP_NAME,
                drawer: true,
                fixed: false,
                workshopItems: [
                    {
                        icon: 'dashboard',
                        title: 'Workshops',
                        link: '/dashboard/callforWorkshops'
                    },
                   
                    {
                        icon: 'comment',
                        title: 'SARL Tuitorial',
                        link: ''
                    }
                ],
                travelandvenueItems: [
                    {
                        icon: 'supervisor_account',
                        title: 'Venue& Accomodations',
                        link: '/venueandTravel/venueandAccomodations'
                    },
                    {
                        icon: 'storage',
                        title: 'Travel Information',
                        link: ''
                    },
                    {
                        icon: 'flight',
                        title: 'Visa',
                        link: ''
                    }
                   
                ],
                miniVariant: false,
                right: true,
                rightDrawer: false,
                tabs: null,
               
                
                
            }
        },

        methods: {
            onBlur() {
                this.searching = false
                this.search = ''
            },

            searchBegin() {
                this.searching = true
                setTimeout(() => document.querySelector('#search').focus(), 50)
            },

            searchEnd() {
                this.searching = false
                this.search = ''
                document.querySelector('#search').blur()
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import '../../node_modules/vuetify/src/stylus/settings/_variables.styl';

    .bottom-menu {
        position: absolute;
        width: 100%;
        bottom: 0;
    }

    .searching {
        overflow: hidden;
        width: 208px;
        padding-left: 8px;
        transition: $primary-transition;
    }

    .searching--closed {
        padding-left: 0;
        width: 0;
    }

    .searching > * {
        right: 8px;
    }

    .searching--closed > * {
        display: none;
    }

    .hidden-searching {
        @media $display-breakpoints.sm-and-down {
            display: none !important;
        }
    }

    .list-border-bottom {
        border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    }
</style>
