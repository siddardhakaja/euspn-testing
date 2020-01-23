<template>
  
   

    

    <v-container>
         <h1 class=" display-1 font-weight-thin">Journal Special Issues</h1> <br><br>
      <v-row>
          <div class="mb-4">
        <v-col
          cols="12"
          
        >
        <v-hover>
          <v-card
            color= light-blue darken-4
            light
            slot-scope="{ hover }" :class="`elevation-${hover ? 24 : 6}`"
            
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline white--text"
                  > 
                  Springer: Journal of Ambient Intelligence and Humanized Computing
                  </v-card-title>  
              
            
                  <v-card-actions class="justify-space-around">
              <v-btn text href="https://www.springer.com/journal/12652" target="_blank">Explore</v-btn>
            </v-card-actions>
            
              
              </div>
              <v-avatar
                class="ma-3 justify-end"
                size="125"
                tile
              >
                <img src="http://cs-conferences.acadiau.ca/euspn-18/img/journal1.gif " >
              </v-avatar>
              
            </div>
          </v-card>
        </v-hover>
        </v-col>
          </div>
         <div class="mb-4">
        <v-col
          cols="12"
        >
        <v-hover>
          <v-card
            color= cyan accent-4
            light
            slot-scope="{ hover }" :class="`elevation-${hover ? 24 : 6}`"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline white--text"
                  > 
                  CAI: International Journal of Computing and Informatics
                  </v-card-title>
                  <v-card-actions class="justify-center">
              <v-btn text href="http://www.cai.sk/ojs/index.php/cai/index" target="_blank">Explore</v-btn>
            </v-card-actions>
              </div>
              <v-avatar
                
                class="ma-3 justify-end "
                size="125"
                tile
              >
                <img src="http://cs-conferences.acadiau.ca/euspn-18/img/CAI.png" >
              </v-avatar>
            </div>
          </v-card>
        </v-hover>
        </v-col>
         </div>
         <div class="md-2">
        <v-col
          cols="12"
        >
        <v-hover>
          <v-card
            color= teal darken-3
            light
            slot-scope="{ hover }" :class="`elevation-${hover ? 24 : 6}`"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline white--text"
                  > 
                  IEEE: IEEE Intelligent Transportation Systems Magazine
                  </v-card-title> 
                  <v-card-actions class="justify-space-around">
              <v-btn text href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=5117645" target="_blank">Explore</v-btn>
            </v-card-actions>
              </div>
              <v-avatar
                class="ma-3 justify-end"
                size="125"
                tile
              >
                <img src="http://cs-conferences.acadiau.ca/euspn-18/img/Journal4.jpg" >
              </v-avatar>
            </div>
          </v-card>
        </v-hover>
        </v-col>
         </div>
      </v-row>
    </v-container>
  
</template>