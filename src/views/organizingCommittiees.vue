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
             <p>Atta Badii, University of Reading, UK </p> <br>

            <h2 class="subtitle-2">Program Chairs </h2>
            <p>Stéphane Galland, Université de Technologie de Belfort-Montbéliard, France </p> 
            <p>Elhadi Shakshuki, Acadia University, Canada </p> <br>

            <h2 class="subtitle-2"> Local Arrangements Chairs </h2>
            <p>Adélio Manuel Rodrigues Gaspar, University of Coimbra, Portugal </p> 
            <p>Nuno Varandas, F6S (Where Founders Grow Together), Portugal </p> <br>

            <h2 class="subtitle-2">Workshops Chairs  </h2>
            <p>Muhammad Adnan, Hasselt University, Belgium  </p> 
            <p>Haroon Malik, Marshall University, USA  </p> <br>

            <h2 class="subtitle-2"> Publicity Chair </h2>
            <p>Monika Davidekova, Comenius University, Slovak Republic  </p> <br>

            <h2 class="subtitle-2">Tracks Chairs </h2> <br>

            <h3 class="subtitle-2">Ad hoc and Pervasive Networks </h3>
            <p>Kechar Bouabdellah, University Of Oran 1 Ahmed Benbella, Algeria </p> 
            <p>Samia Bouzefrane, CEDRIC Lab Conservatoire National des Arts et Métiers, France  </p> <br>

            <h3 class="subtitle-2">Adaptive Systems, Intelligent Computing and Applications </h3>
            <p>Yannis Korkontzelos, Edge Hill University, UK  </p> <br>

            <h3 class="subtitle-2">Big Data and Big Data Science </h3>
            <p>Alfredo Cuzzocrea, University of Trieste, Italy </p>
            <p>Evangelos Pournaras, ETH, Switzerland</p> <br>
            <h3 class="subtitle-2">Cloud, Cluster, Grid and Social Computing </h3>
            <p>Sajid Anwar, Institute of Management Sciences Peshawar, Pakistan</p> 
            <p>Fernando Moreira, Universidade Portucalense, Porto, Portugal </p> <br>
            <h3 class="subtitle-2">Emerging Pervasive/Ubiquitous Technologies  </h3>
            <p>Muhammad Imran, King Saud University, Saudi Arabia  </p>
            <p>Ibrar Yaqoob, Kyung Hee University, South Korea </p> <br>
            <h3 class="subtitle-2">Intelligent Traffic and Transportation Systems  </h3>
            <p>Stéphane Galland, Université de Technologie de Belfort-Montbéliard, France  </p> <br>
            <h3 class="subtitle-2">Internet of Things  </h3>
            <p>Nik Bessis, Edge Hill University, United Kingdom  </p> 
            <p>Euripides Petrakis, Technical University of Crete, Greece  </p> <br>
            <h3 class="subtitle-2">Mobile Computing and Wireless Communications  </h3>
            <p>Faouzi Kammoun, Ecole Supérieure Privée d'Ingénierie et de Technologies, Tunis </p> <br>
            <h3 class="subtitle-2">Security, Privacy, and Trust  </h3>
            <p>Flavio Lombardi, Universita Roma Tre, Italy   </p> <br>
            <h3 class="subtitle-2">Semantic Web Technologies  </h3>
            <p>Michael Sheng, Macquarie University, Australia    </p> 
            <p>Wei Zhang, Macquarie University, Australia   </p> <br>

            <h2 class="subtitle-2">Advisory Committee  </h2>
            <p>Ali Ghorbani, University of New Brunswick, Canada </p>
            <p>Zygmunt J. Haas, Cornell University, USA </p>
            <p>Vincenzo Loia, University of Salerno, Italy  </p>
            <p>Zakaria Maamar, Zayed University, UAE  </p>
            <p>Peter Sloot, Universiteit van Amsterdam, Netherlands  </p>
            <p>Makoto Takizawa, Seikei University, Japan  </p>
            <p>Peter Thomas, Manifesto Research, Australia  </p> <br>

           
            
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
