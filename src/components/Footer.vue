<template>
    <footer class="footer">
        <div class="container">
            <ul class="navbar-list">
                <li class="navbar-item" v-for="link in links" :key="link.alias">
                    <router-link :to="link.url" class="navbar-link">{{ link.title }}</router-link>
                </li>
            </ul>
            <p class="info">версия: {{ app.version }}</p>
        </div>
    </footer>
</template>

<script>
import { app, links } from "@/_config";
export default {
    data() {
        return {
            app: app,
            links: links,
        }
    },
};
</script>