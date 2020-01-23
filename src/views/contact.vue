<template>
<container fluid grid-list-lg>
    <v-layout mb-4>
 <v-flex xs12 sm6 md6 lg4 offset-md1 max-width="50" v-for="item in links" :key="item.id">
  <v-hover>
    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
    
      <v-card-title primary-title>
    <div>
      <h3 class="headline mb-0">{{item.name}}</h3>
    </div>
    </v-card-title>
    

    

    <v-card-text class="text--primary">
      <div>
        {{item.university}}
      </div>
      <div>
        {{item.address}}
      </div>
      <div>
        {{item.email}}
      </div>
    </v-card-text>

  </v-card>
  </v-hover>
  <v-spacer></v-spacer>
 </v-flex>
    </v-layout>
</container>
</template>

<script>
    export default {
        data() {
            return {
                links: [
                    {
                        id: '1',
                        name: 'Dr. Elhadi Shakshuki ',
                        university: 'Acadia University',
                        address: 'Novascotia, Canada',
                        email: 'elhadi.shakshuki@acadiau.ca'
                        
                    },
                    {
                        id: '2',
                        name: 'Dr. Ansar-Ul-Haque Yasar ',
                        university: 'Hasselt University',
                        address: 'Hasselt, Belgium',
                        email: 'ansar.yasar@uhasselt.be'
                    },
                   
                ]
            }
        }
    }
</script>

<style scoped>
    .outine-2 {
        border: 1px solid white;
    }
    .card--flex-toolbar {
        margin-top: 50px;
    }
    .learn-more-btn {
        text-transform: initial;
        text-decoration: underline;
    }
</style>