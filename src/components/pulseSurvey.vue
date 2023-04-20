<template>
    <div class="side-menu">
        <SideMenu class="fixed-component"></SideMenu>
    </div>
    <div class="display-column">
        <PagesHeader></PagesHeader>
        <div class="content-survey">
        <div class="title-survey">Pulse Survey</div>
        <div class="subtitle-survey">
            The Pulse survey app allows Admin users to add pulse survey questions to
            their people to gain informative feedback. This app also provides Admin
            users with detailed analytical reports that provide insight to each pulse
            survey shared, based
        </div>
        <div class="msg-table">
            <v-card>
                <v-card-title>
                    Active
                    <v-spacer></v-spacer>
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
                </v-card-title>
                <v-table>
                    <thead>
                        <tr>
                            <th class="text-left">
                                Message
                            </th>
                            <th class="text-left">
                                Crated
                            </th>
                            <th class="text-left">
                                Number of responses
                            </th>
                        </tr>
                    </thead>
                    <tbody class="table">
                        <tr class="item" v-for="item in getItems()" :key="item.message" @click="onItemClick(item)">
                            <td>{{ item.message }}</td>
                            <td>{{ item.created }}</td>
                            <td>{{ item.responses }}</td>
                        </tr>
                    </tbody>
                </v-table>

            </v-card>
        </div>
        </div>
    </div>
    
</template>

<script>
import SideMenu from '@/components/sideMenu.vue'
import PagesHeader from '@/components/header.vue'
import axios from 'axios';

    export default {
    data: () => ({
        search: '',
        messages: [],
    }),
    methods: {
        getItems() {
            return this.messages.filter(item => {
                if (this.search.trim() === '')
                    return true;

                const searchTerms = new RegExp(this.search, 'i');
                return searchTerms.test(item.message);
            });
        },
        onItemClick(item) {
            console.log(item.userId); 
            // change the URL to the desired page
            window.history.pushState({}, null, `/details?id=${item.userId}`);

            // load the new page
            window.location.reload();
        }
    }, 
    components: {
        SideMenu,
        PagesHeader
    }, 
    mounted() {
        axios.get('http://localhost:3000/messages').then(response => {
            this.messages = response.data;
            console.log(this.messages)
        }).catch(error => {
            console.log(error);
        })
    }
}
</script>

<style>
    .fixed-component {
        position: fixed;
    }

    .display-columns {
    display: flex;
    flex-direction: column;
    }

    .side-menu {
        width: 250px!important;
    }

    .content-survey {
    font-family: 'Outfit';
    padding: 20px 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-height: 100vh;
    width: calc(100vw - 250px)!important;
    }

    .title-survey {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    .subtitle-survey {
        font-size: 15px;
        margin-bottom: 15px;
    }

    .msg-table {
        height: fit-content;
        width: 100%;
        border-radius: 5px;
        padding: 24px 0;
    }

    .table .item:hover{
        background-color: #efefef;
        cursor: pointer;
    }

    .flex-grow-1 {
        margin: 10px 0;
    }

    .text-left{
        font-weight: 700!important;
        color: black !important;;
    }

</style>