<template>
 <section>  
<v-layout>
      <v-flex
        xs12
        md12
        align-content-space-between
        layout
        :pa-5="$vuetify.breakpoint.smAndDown"
        wrap
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateY(25%)"
        />

        <v-layout
          align-center  
          justify-center
        >
          <v-flex
            xs10
            
          >
            <h1 class="headline">Welcome!</h1>
            <h2 class="subtitle-2"> EUSPN 2020</h2>
            <p class="body-1"> The 11th International Conference on Emerging Ubiquitous Systems and Pervasive Networks (EUSPN-2020)
               is a leading international conference for researchers and industry practitioners to share their new ideas,
                original research results and practical development experiences from all Ubiquitous Systems and Pervasive Networks related areas. 
                The EUSPN-2020 will be held in November 2-5, 2020, Madeira, Portugal.
                 The EUSPN-2019 will be held in conjunction with the 
                <a href="http://cs-conferences.acadiau.ca/icth-19/" target="_blank">10th International Conference on 
                 Current and Future Trends of Information and Communication Technologies in Healthcare (ICTH-2020). </a>
            </p>
            <p>
              EUSPN 2020 will be held in Madeira, a Portuguese archipelago. Madeira is a popular year-round tourist destination,
               known for its remarkable mountainous scenery and mild year-long climate. Although, Madeira is part of Europe it is approximately 1,000 km
                from the continent while being only 520 km from the coast of Africa. It is about an hour and a half flight from the capital
                 of Portugal, Lisbon. Funchal, the picturesque capital of Madeira, is situated on the south coast of the island and one of Atlantic Oceans
                  most popular cruise ship ports. Madeira is a scenic island with many unique destinations such as the Laurisilva forest, a UNESCO World Heritage site. 
            </p>
            <p>
              Visitors can also choose from a variety of activities such as boat trips, whale watching, hiking and walking
               along the mountain trails.
            </p>
          <v-container>
             <v-layout row wrap :align="alignment"
          :justify="justify" >

            <center>
            <v-flex xs12 md1   >
            <img :src="require('./assets/DiscoverMadeira-1.png')" >
            </v-flex>
            </center>
            
            </v-layout> 
          </v-container>
            <p>
              All EUSPN 2019 accepted papers will be published by Elsevier Science in the open-access Procedia Computer Science
               series on-line. Procedia Computer Science is hosted by Elsevier on www.Elsevier.com and on Elsevier content platform 
               ScienceDirect (www.sciencedirect.com), and will be freely available worldwide. All papers in Procedia will be indexed 
               by <a href="www.scopus.com" target="_blank">Scopus</a> and by <a href="http://thomsonreuters.com/conference-proceedings-citation-index/"
                target="_blank">Thomson Reuters' Conference Proceeding Citation Index </a>. All papers in Procedia will also be indexed by
                 Scopus (www.scopus.com) and Engineering Village (Ei) (www.engineeringvillage.com). This includes EI Compendex
                  (www.ei.org/compendex). Moreover, all accepted papers will be indexed in <a href="http://dblp.uni-trier.de/" target="_blank">DBLP</a>. 
                  The papers will contain linked references, XML versions and citable DOI numbers. You will be able to provide a 
                  hyperlink to all delegates and direct your conference website visitors to your proceedings.
            </p>
            
          </v-flex>
        </v-layout>

        <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
      </v-flex>
    </v-layout>
  </section>
</template>
        

<script>
    export default {
        data() {
            return {
                
            }
        }
    }
</script>

<style scoped>
    .outine-2 {
        border: 2px solid white;
    }

    .card--flex-toolbar {
        margin-top: -124px;
    }

    .learn-more-btn {
        text-transform: initial;
        text-decoration: underline;
    }
</style>
