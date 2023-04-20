<template>
    <div class="side-menu">
        <SideMenu class="fixed-component"></SideMenu>
    </div>
    <div class="display-column">
        <PagesHeader></PagesHeader>
        <div class="content-details">
        
        <div class="return-btn">
            <v-btn @click="goBack()"><v-icon icon="mdi-chevron-left"></v-icon>Back</v-btn>
        </div>
        <div class="title-details">{{ employee.name }}</div>
        
        <div class="employee-details">
            <div class="photo">Insert Photo Here</div>
            <div class="contact">
                <div class="title-1">Contact</div>
                <div class="phone"><v-icon class="icon" icon="mdi-phone-in-talk-outline"></v-icon>{{ employee.phone? employee.phone : '-' }}</div>
                <div class="email"><v-icon class="icon" icon="mdi-email-outline"></v-icon>{{ employee.email? employee.email :'-' }}</div>
            </div>
            <div class="interests">
                <div class="title-1">Interests</div>
                <div class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe in itaque minus magnam quia. Optio cumque ut rerum nesciunt cum corrupti. Velit similique sit, reiciendis maiores cupiditate consectetur enim asperiores!</div>
            </div>
        </div>
        <div class="overview">
            <div class="title-2">Checking Overview - <span class="text-highlight">{{ employee.name }}</span> employee</div>
            <div class="text"></div>
        
        </div>
        <div class="pulse-responses">
            <div class="title-2">Recent Pulse Responses</div>
            <div class="text"></div>
    </div>
        </div>
    </div>
    
</template>

<script>
import SideMenu from '@/components/sideMenu.vue'
import PagesHeader from '@/components/header.vue'
import axios from 'axios';

export default {
    name: 'UserDetails',

    data: () => ({
        employee: [],
        userId: null,
        //employee: 'mannex+neu21@euda.co',
        //phone: '0443010777',
        //email: ''
    }),
    
    components: {
        SideMenu,
        PagesHeader
    },

    methods: {
        goBack() {
            window.history.pushState({}, null, '/pulse');
            window.location.reload();
        }
    },

    mounted() {
        const userId = this.$route.query.id;
        console.log('ID', userId);
        axios.get('http://localhost:3000/employee').then(response => {
            this.employee = response.data[userId];
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
        width: calc(100vw - 250px)!important;
        display: flex;
        flex-direction: column;
    }

    .content-details{
        padding: 20px 50px;
        font-family: 'Outfit';
        width: 100%;
        display: flex;
        flex-direction: column;
        max-height: 100vh;
        width: calc(100vw - 250px)!important;
    }

    .title-details {
        padding-left: 25px;
        font-size: 20px;
        font-weight: 600;
    }

    .employee-details, .overview, .pulse-responses{
        width: 100%;
        display: flex;
        border: 2px solid #E5E7EB;
        border-radius: 5px;
        padding: 15px 10px;
        font-size: 15px;
        margin: 10px 0;
        height: 150px;
    }

    .photo {
        display: flex;
        align-items: center;
        justify-content: center;
        color: #E5E7EB;
        min-width: 150px;
        height: 100%;
        padding: 0 10px;
        border-right: 2px solid #E5E7EB;
    }

    .contact {
        width: fit-content;
        height: 100%;
        padding: 0 10px;
        border-right: 2px solid #E5E7EB;
    }

    .title-1 {
        margin-bottom: 15px;
    }

    .phone {
        display: flex;
        width: fit-content;
    }

    .email {
        display: flex;
    }

    .interests {
        width: fit-content;
        height: 100%;
        padding: 0 10px;
    }

    button {
        box-shadow: none!important;
    }

    v-btn {
        text-transform: capitalize;
    }

    .icon {
        margin-right: 10px;
    }

    .overview {
    min-height: 250px;
    }

    .pulse-responses {
        min-height: 200px;
    }

    .text-highlight {
        font-weight: 600;
    }


</style>