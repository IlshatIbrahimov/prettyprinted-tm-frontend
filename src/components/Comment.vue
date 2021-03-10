<template>
  <div>
    <div v-if="comments.length">
      <div
          class="comments__item"
          v-for="comment in comments"
          :key="comment.id"
      >
        <div class="comments__left">
          <div class="comments__avatar avatar-wrapper">
              <span class="avatar">
                <small>{{ comment.author.name.slice(0, 1) }}</small>
                <small>{{ comment.author.surname.slice(0, 1) }}</small>
              </span>
          </div>
        </div>
        <div class="comments__right">
          <div class="comments__title">
            <p>{{ comment.author.name }} {{ comment.author.surname }}</p><span>{{ comment.date }}</span>
          </div>
          <div class="comments__action">

            <template v-if="comment.type === 'UPDATE_COMMENT'">
              <small v-if="comment.updateType === 'Assignee'">
                <span>{{ comment.updateType }}:</span>
                <span>
                <span class="comments__action-item comments__action-item--arrow">{{
                    comment.updateFrom.name
                  }}</span>
                <span class="comments__action-item">{{ comment.updateTo.name }}</span>
              </span>
              </small>

              <small v-else>
                <span>{{ comment.updateType }}:</span>
                <span>
                <span class="comments__action-item comments__action-item--arrow">{{ comment.from.name }}</span>
                <span class="comments__action-item">{{ comment.to.name }}</span>
              </span>
              </small>
            </template>

            <template v-else>
              <p class="comments__text" v-html="urlify(comment.message)"></p>
            </template>

          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <p>No comments yet. Be the first!</p>
    </div>

    <b-form class="form p-0 mt-5" @submit.prevent="addMessage">
      <div class="form__item">
        <b-form-textarea
            class="form__textarea-field"
            type="text"
            placeholder="Write your comment"
            v-model="content"
        ></b-form-textarea>
      </div>

      <div class="comments__footer">
        <button
            class="button comments__btn"
            type="submit"
        >Add comment
        </button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  data() {
    return {
      content: ''
    }
  },
  props: {
    comments: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    async addMessage() {
      if (!this.content.length) {
        return
      }

      this.$emit('addComment', this.content)
      this.content = ''
    },
    urlify(text) {
      let urlRegex = /^(?:([a-z]+):(?:([a-z]*):)?\/\/)?(?:([^:@]*)(?::([^:@]*))?@)?((?:[a-z0-9_-]+\.)+[a-z]{2,}|localhost|(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])\.){3}(?:(?:[01]?\d\d?|2[0-4]\d|25[0-5])))(?::(\d+))?(?:([^:\?\#]+))?(?:\?([^\#]+))?(?:\#([^\s]+))?$/i;
      return text.replace(urlRegex, function (url) {

        if (!(url.indexOf('//') + 1)) {
          url = 'https://' + url
        }

        return '<a style="color: #2193b0;" target="_blank" href="' + url + '">' + url + '</a>';
      })
    },
  }
}
</script>
