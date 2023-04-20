<template>
    <div class="page-header">
        <v-icon icon="mdi-logout" @click="logout()"></v-icon>
    </div>
</template>

<script>

export default {
    name: 'PagesHeader',

    data: () => ({
        
    }),

    methods: {
        logout() {
            localStorage.removeItem('user');
            window.location.reload();
        }
    }
}

</script>

<style>

.page-header {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 20px;
    height: 70px;
    width: 100%;
    border-bottom: 1px solid #E5E7EB;
    color: #4B5563;
}

</style>