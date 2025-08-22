<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="navbar">
    <RouterLink to="/learn">learn</RouterLink>
    <RouterLink to="/spine-boy">spine-boy</RouterLink>
    <RouterLink to="/red-package">red-package</RouterLink>
  </div>
  <RouterView />
</template>

<style scoped>
.navbar {
  display: flex;
  padding: 10px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #dee2e6;
  > a {
    margin-right: 15px;
    text-decoration: none;
    color: #007bff;

    &:hover {
      text-decoration: underline;
    }

    &.router-link-active {
      font-weight: bold;
      color: #0056b3;
    }
  }
}
</style>
