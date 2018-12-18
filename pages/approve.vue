<template>
  <div class="container">
    <h1 class="title">
      approve
    </h1>
    <div class="content">

      <ul>
        <li v-for="(memory, index) in content" :key="index">

          <form name="approve" netlify-honeypot="bot-field" method="post" netlify>
            <input type="hidden" name="form-name" value="approve">
            <!-- <p class="hidden">
              <label>Don’t fill this out: <input name="bot-field"></label>
            </p> -->
            <label class="form-label" for="name">
              Name:
            </label>
            <input :id="'name-' + memory.id" :value="memory.name" class="form-field" name="name">
            <label class="form-label" for="email">
              Email:
            </label>
            <input :id="'email-' + memory.id" :value="memory.email" class="form-field" name="email" >
            <label class="form-label" for="message">
              Message:
            </label>
            <textarea :id="'message-' + memory.id" :value="memory.summary" class="form-field" name="message" />

            <img :src="memory.ordered_human_fields[3].value">
            <input :id="'avatar-' + memory.id" :value="memory.ordered_human_fields[3].value" name="avatar">
            <input class="form-button" type="submit" value="Approve">
          </form>

        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState({
      content: state => state.content
    })
  },

  mounted() {
    this.$store.dispatch('content/loadContent')
  }
}
</script>
