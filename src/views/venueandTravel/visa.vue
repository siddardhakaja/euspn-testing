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
            <h1 class="headline">Visa to your Conference Destination Country</h1>
            <p class="body-1"> 
                Attendees should plan their travel well in advance. Information on visas and entry requirements to 
                Portugal can be found on the website of your nearest Portuguese Embassy or Consulate.
            </p>
            <h2 class="subtitle-2">Visa Invitation Letter</h2>
            <p class="body-1"> Please note that visa invitation letters will ONLY be issued to participants who have registered
                 and paid their registration fees. Please be advised that the committee will not act as a guarantor nor issue any 
                 documents to guarantee your identity.
            </p>
            <p>
              If you need a letter of invitation from the organizers of the conference for filing a visa request,
               please send an email to <a href = "mailto:conference.visa@gmail.com?"> Conference Secretary</a>, with the following
                subject: EUSPN 2021: Visa Invitation Letter.
            </p>
            <p>
              Please include the following information when you ask for the letter in a text:
            </p>
            <p class="font-weight-medium">Full Name:</p>
            <p class="font-weight-medium">Paper ID:</p>
            <p class="font-weight-medium">Conference/Workshop Abbreviated Name:</p>
            <p class="font-weight-medium">Registration Confirmation Number:</p>
            <p class="font-weight-medium">Affiliation (University/Institution/Company):</p>
            <p class="font-weight-medium">Contact Address:</p><br>
            <p>
              The visa invitation letter will be emailed to you. It is the prerogative of the Portuguese authorities
               to grant or deny a travel visa; EUSPN committee has no responsibility for or control over such travel requests.
            </p><br>
            
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
