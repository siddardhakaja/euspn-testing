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
            <h1 class=" display-1 font-weight-thin">Organizing Committee</h1> <br>
           
            <h2 class="subtitle-2">General Chair </h2>
             <p class="font-weight-light">Atta Badii, University of Reading, UK </p> <br>

            <h2 class="subtitle-2">Program Chairs </h2>
            <p class="font-weight-light">Stéphane Galland, Université de Technologie de Belfort-Montbéliard, France </p> 
            <p class="font-weight-light">Elhadi Shakshuki, Acadia University, Canada </p> <br>

            <h2 class="subtitle-2"> Local Arrangements Chairs </h2>
            <p class="font-weight-light">Adélio Manuel Rodrigues Gaspar, University of Coimbra, Portugal </p> 
            <p class="font-weight-light">Nuno Varandas, F6S (Where Founders Grow Together), Portugal </p> <br>

            <h2 class="subtitle-2">Workshops Chairs  </h2>
            <p class="font-weight-light">Muhammad Adnan, Hasselt University, Belgium  </p> 
            <p class="font-weight-light">Haroon Malik, Marshall University, USA  </p> <br>

            <h2 class="subtitle-2"> Publicity Chair </h2>
            <p class="font-weight-light">Monika Davidekova, Comenius University, Slovak Republic  </p> <br>

            <h2 class="subtitle-2">Tracks Chairs </h2> <br>

            <h3 class="subtitle-2">Ad hoc and Pervasive Networks </h3>
            <p class="font-italic font-weight-light">Kechar Bouabdellah, University Of Oran 1 Ahmed Benbella, Algeria </p> 
            <p class="font-italic font-weight-light">Samia Bouzefrane, CEDRIC Lab Conservatoire National des Arts et Métiers, France  </p> <br>

            <h3 class="subtitle-2">Adaptive Systems, Intelligent Computing and Applications </h3>
            <p class="font-italic font-weight-light">Yannis Korkontzelos, Edge Hill University, UK  </p> <br>

            <h3 class="subtitle-2">Big Data and Big Data Science </h3>
            <p class="font-italic font-weight-light">Alfredo Cuzzocrea, University of Trieste, Italy </p>
            <p class="font-italic font-weight-light">Evangelos Pournaras, ETH, Switzerland</p> <br>
            <h3 class="subtitle-2">Cloud, Cluster, Grid and Social Computing </h3>
            <p class="font-italic font-weight-light">Sajid Anwar, Institute of Management Sciences Peshawar, Pakistan</p> 
            <p class="font-italic font-weight-light">Fernando Moreira, Universidade Portucalense, Porto, Portugal </p> <br>
            <h3 class="subtitle-2">Emerging Pervasive/Ubiquitous Technologies  </h3>
            <p class="font-italic font-weight-light">Muhammad Imran, King Saud University, Saudi Arabia  </p>
            <p class="font-italic font-weight-light">Ibrar Yaqoob, Kyung Hee University, South Korea </p> <br>
            <h3 class="subtitle-2">Intelligent Traffic and Transportation Systems  </h3>
            <p class="font-italic font-weight-light">Stéphane Galland, Université de Technologie de Belfort-Montbéliard, France  </p> <br>
            <h3 class="subtitle-2">Internet of Things  </h3>
            <p class="font-italic font-weight-light">Nik Bessis, Edge Hill University, United Kingdom  </p> 
            <p class="font-italic font-weight-light">Euripides Petrakis, Technical University of Crete, Greece  </p> <br>
            <h3 class="subtitle-2">Mobile Computing and Wireless Communications  </h3>
            <p class="font-italic font-weight-light">Faouzi Kammoun, Ecole Supérieure Privée d'Ingénierie et de Technologies, Tunis </p> <br>
            <h3 class="subtitle-2">Security, Privacy, and Trust  </h3>
            <p class="font-italic font-weight-light">Flavio Lombardi, Universita Roma Tre, Italy   </p> <br>
            <h3 class="subtitle-2">Semantic Web Technologies  </h3>
            <p class="font-italic font-weight-light">Michael Sheng, Macquarie University, Australia    </p> 
            <p class="font-italic font-weight-light">Wei Zhang, Macquarie University, Australia   </p> <br>

            <h2 class="subtitle-2">Advisory Committee  </h2>
            <p class="font-weight-light">Ali Ghorbani, University of New Brunswick, Canada </p>
            <p class="font-weight-light">Zygmunt J. Haas, Cornell University, USA </p>
            <p class="font-weight-light">Vincenzo Loia, University of Salerno, Italy  </p>
            <p class="font-weight-light">Zakaria Maamar, Zayed University, UAE  </p>
            <p class="font-weight-light">Peter Sloot, Universiteit van Amsterdam, Netherlands  </p>
            <p class="font-weight-light">Makoto Takizawa, Seikei University, Japan  </p>
            <p class="font-weight-light">Peter Thomas, Manifesto Research, Australia  </p> <br>

           
            
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
                links: [
                   
                   
                    {
                        id: '2',
                        title: 'Storage',
                        description: 'Store and retrieve user-generated content, such as images, audio, and videos, without server-side code.',
                        color: 'teal'
                    },
                     {
                        id: '2',
                        title: 'Storage',
                        description: 'Store and retrieve user-generated content, such as images, audio, and videos, without server-side code.',
                        color: 'teal'
                    },

                    
                    
                ]
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
