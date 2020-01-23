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
             <h1 class=" display-1 font-weight-thin">Paper Submission</h1> <br>
            <h2 class="subtitle-2"> Guidelines to Paper Submissions</h2><br>
            <h2 class="subtitle-2">Paper Format </h2><br>
            <p class="body-1"> The submitted paper must be formatted according to the
               <a href="https://www.journals.elsevier.com/procedia-computer-science/" target="_blank">the guidelines of Procedia 
               Computer Science</a>, MS Word Template, Latex, <a href="./assets/temp.doc" target="_blank">Template Generic</a>.
               <button @click="download" class="btn btn-primary">Download file</button>
            </p><br>
             <h2 class="subtitle-2">Paper Length</h2><br>
            <p> 
              Submitted technical papers must be no longer than 8 pages including all figures, tables and references. 
            </p><br>
            <h2 class="subtitle-2">Paper Submission</h2><br>
            <p>
             Authors are requested to submit their papers electronically using the <a href=""> *online conference management system</a>
             in PDF format before the deadline.
            </p>
          
            <p>
             The submission processes will be managed by <a href=" https://easychair.org/account/signin" target="_blank"> easychair </a>. 
             If you have used this system before, you can use the same username and password. If this is your first time using EasyChair, 
             you will need to register for an account by clicking “ I have no EasyChair account” button. Upon completion of registration,
               you will get a notification email from the system and you are ready for submitting your paper. You can upload 
               and re-upload the paper to the system by the submission due date.
            </p><br>
            <h2 class="subtitle-2">Publication</h2><br>
            <p>
              All accepted papers will be scheduled for oral presentations and will be included in the conference proceedings 
              published by Elsevier Science in the open-access Procedia Computer Science series on-line. At least one author of 
              each accepted paper is required to register and attend the conference to present the work.

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
