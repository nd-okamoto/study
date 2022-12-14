<template>
    <main class="main">
        <h1 class="title">{{ title }}</h1>
        <p class="publishedAt">{{ publishedAt }}</p>
        <div class="post" v-html="body"></div>
    </main>
</template>

<script>
import axios from 'axios'

export default {
async asyncData({ params }) {
    const { data } = await axios.get(
    `https://arinekoinuneko.microcms.io/api/v1/blog/${params.slug}`,
    {
        headers: { 'X-MICROCMS-API-KEY': '852600963aeb4afb989605367dcf60a88edc' }
    }
    )
    return data
}
}
</script>