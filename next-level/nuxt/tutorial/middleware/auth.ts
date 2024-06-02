// Read more about middleware: https://nuxt.com/docs/guide/directory-structure/middleware

export default defineNuxtRouteMiddleware(async (to, from) => {
    if (!to.name) {
        return { name: "404" };
    }
    
    return true;
});
