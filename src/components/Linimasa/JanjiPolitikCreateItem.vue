<template>
  <div class="create-post" @click.stop="$emit('clicked')">
    <div class="card-content">
      <div class="top">
        <div class="avatar">
          <a href="javascript:void(0)">
            <img :src="avatar" v-if="avatar && avatar.length > 0" alt="avatar">
            <img src="@/assets/user.svg" alt="avatar" v-else>
          </a>
        </div>
        <h5>{{ author_name }}</h5>
      </div>
      <h4 class="title">{{ info }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JanjiPolitikCreateItem',
  props: {
    avatar: String,
    author_name: String,
    info: {
      type: String,
      default: 'Publikasi kembali Janji Politik?'
    }
  }
}
</script>
