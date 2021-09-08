<template>
  <div id="wrapper">
    <global-nav />
    <global-sidebar />
    <main class="content-wrapper">
      <nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import GlobalNav from '~/components/GlobalNav.vue';
import GlobalSidebar from '~/components/GlobalSidebar.vue';

export default defineComponent({
  components: { GlobalNav, GlobalSidebar },
});
</script>

<style lang="scss" modules>
</style>
