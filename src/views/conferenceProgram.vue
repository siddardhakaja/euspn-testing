<template>
    <v-container grid-list-md>
        <v-layout>
            <v-col>
                    <h1 class=" display-1 font-weight-thin">Paper Submission</h1> <br>
                <a
  :href="item.url"
  v-text="item.label"
  @click.prevent="downloadItem(item)" />
            </v-col>
            
        </v-layout>

        
    </v-container>
</template>
<script>
export default {
    methods: {
  downloadItem ({ url, label }) {
    Axios.get(url, { responseType: 'blob' })
      .then(({ data }) => {
        const blob = new Blob([data], { type: 'application/pdf' })
        const link = document.createElement('a')
        link.href = URL.createObjectURL(blob)
        link.download = label
        link.click()
        URL.revokeObjectURL(link.href)
      }).catch(error => console.error(error))
    }
  }
}

</script>