<template>
  <div class="container">
    <!--    <NuxtWelcome />-->
    <HelloWorld />
    <NuxtLink to="nuxt_welcome" class="link n-link-base">
      NuxtWelcome
    </NuxtLink>
  </div>
</template>

<style>
.container {
  height: 100vh;
  width: 100vw;
  background: rgb(1, 42, 53);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h1 {
  color: white;
  text-align: center;
  font-family: helvetica, arial, sans-serif;
  font-weight: 400;
}

.link {
  color: white;
  text-align: center;
  font-family: helvetica, arial, sans-serif;
}
</style>
