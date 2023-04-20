<template>
    <div class="side-menu">
        <div class="header">
            <v-img class="logo" src="../assets/images/gradientLogo.png"></v-img>
            <div>Powered by <span class="strong">euda</span></div>
        </div>
        <div class="body">
            <v-list v-model:opened="open">
                <v-list-group value="summary">
                    <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        prepend-icon="mdi-menu"
                        title="Summary">
                    </v-list-item>
                    </template>

                    <v-list-item
                        v-for="([title, icon], i) in admins"
                        :key="i"
                        :title="title"
                        :prepend-icon="icon"
                        :value="title">
                    </v-list-item>
                </v-list-group>
                <v-list-item prepend-icon="mdi-account-group" title="Teams"></v-list-item>
                <v-list-item prepend-icon="mdi-send" title="Pulse Survey"></v-list-item>
                <v-list-group value="materials">
                    <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        prepend-icon="mdi-package"
                        title="Materials">
                    </v-list-item>
                    </template>

                    <v-list-item
                        v-for="([title, icon], i) in admins"
                        :key="i"
                        :title="title"
                        :prepend-icon="icon"
                        :value="title">
                    </v-list-item>
                </v-list-group>
                <v-list-group value="eudaContent">
                    <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        prepend-icon="mdi-file-document"
                        title="Euda Content">
                    </v-list-item>
                    </template>

                    <v-list-item
                        v-for="([title, icon], i) in admins"
                        :key="i"
                        :title="title"
                        :prepend-icon="icon"
                        :value="title">
                    </v-list-item>
                </v-list-group>
            </v-list>
        </div>
    </div>
</template>

<script>
    export default {
        name:'SideMenu',

        data: () => ({
            open: ['Users'],
            admins: [
                ['Link 1', 'mdi-account-multiple-outline'],
                ['Link 2', 'mdi-account-multiple-outline'],
            ],
          
        })
    }

    
</script>

<style>
.side-menu{
    font-family: 'Outfit';
    font-style: normal;
    height: 100vh;
    width: 250px;
    background: linear-gradient(135deg,aliceblue,white);
}

.header {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;  
    justify-content: center;
    align-items: center;
    padding: 1.5rem 0;
}

.body {
    height: fit-content;
    padding: 20px 20px;
    
}

.logo {
    width: 150px;
}

.strong{
    font-weight: 700;
}

.v-list-item__append > .v-icon {
    margin: 0;
}

.v-list-item-title {
    font-size: 15px;
    font-weight: 600;
}

.v-theme--light {
    background-color: transparent;
}


</style>