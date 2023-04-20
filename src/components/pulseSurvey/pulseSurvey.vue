
<script src="./pulseSurvey"></script>
<style src="./pulseSurvey.css"></style>

<template>
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
                    Nutrition
                    <v-spacer></v-spacer>
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
                </v-card-title>
                <v-table>
                    <thead>
                        <tr>
                            <th class="text-left">
                                Name
                            </th>
                            <th class="text-left">
                                Calories
                            </th>
                        </tr>
                    </thead>
                    <tbody class="table">
                        <tr class="item" v-for="item in getItems()" :key="item.name" @click="onItemClick(item)">
                            <td>{{ item.name }}</td>
                            <td>{{ item.calories }}</td>
                        </tr>
                    </tbody>
                </v-table>

            </v-card>
        </div>
    </div>
</template>
