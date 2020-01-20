<template>
<container fluid grid-list-lg>
    <v-layout row wrap>
 <v-flex xs12 sm6 md6 lg5 offset-md1 max-width="400" v-for="item in links" :key="item.id">
  <v-hover>
    <v-card slot-scope="{ hover }" :class="`elevation-${hover ? 12 : 2}`">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title primary-title>
    <div>
      <h3 class="headline mb-0">{{item.title}}</h3>
    </div>
    </v-card-title>
    </v-img>

    

    <v-card-text class="text--primary">
      <div>
        {{item.description}}
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="primary"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="primary"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
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
                        title: 'Call for Workshop Proposals ',
                        description: 'The FNC-2020 organizing committee invites proposals for workshops. The main objective of the workshops is to provide a forum for researchers and professionals to discuss a specific topics from the field of FNC-2020 and its related areas. ',
                        color: 'orange'
                    },
                    {
                        id: '2',
                        title: 'Approved Workshops',
                        description: 'FNC-2020 includes many different workshops covering various research areas. Click the link below to view a full list.',
                        color: 'teal'
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