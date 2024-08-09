<template>
  <NuxtLayout :name="$route.name == 'search' ? 'search' : 'default'">
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>
