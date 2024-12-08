<template>
    <div class="app-container">
        Hello world {{  count  }}
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref<number>(0)
</script>