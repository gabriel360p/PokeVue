<template>
    <div>
        <v-card variant="tonal" class="rounded-lg" hover>

            <v-card-title class="text-center">
                <h3>
                    {{ pokemon.name }}
                </h3>
            </v-card-title>

            <div class="pa-5">
                <v-img class="rounded-lg" :src="sprite" />
            </div>
            <v-card-actions class="align-center justify-center">
                <v-btn variant="plain" icon="mdi-pokeball"></v-btn>
                <v-btn variant="plain" @click="pokedex" icon="mdi-tablet-dashboard"></v-btn>
            </v-card-actions>
        </v-card>

        <v-dialog v-model="dialogController" height="" width="1072">
            <v-card>
                <div class="d-flex justify-end align-center">
                    <v-btn @click="dialogController = false" variant="plain" icon="mdi-close" />
                </div>
                <v-row>
                    <v-col>
                        <v-img :src="sprite"></v-img>
                        <div class="d-flex justify-center align-center">
                            <h6 class="text-h4">{{ pokemon.name }}</h6>
                        </div>
                    </v-col>
                    <v-divider vertical />
                    <v-col>
                        <v-card-text>
                            <h2>Habilidades:</h2>
                            <p v-for="ab in pokeDetails.abilities" :key="ab.id">
                                {{ ab.ability.name }};
                            </p>
                            <v-divider class="mt-5 mb-5" />
                            <h2>Formas:</h2>
                            <p v-for="form in pokeDetails.forms" :key="form.id">
                                {{ form.name }};
                            </p>
                            <v-divider class="mt-5 mb-5" />
                            <h2>Espécies:</h2>
                            <p>
                                {{ pokeDetails.species['name'] }};
                            </p>
                            <v-divider class="mt-5 mb-5" />
                            <h2>Tipos:</h2>
                            <p v-for="poketype in pokeDetails.types" :key="poketype.id">
                                {{ poketype.type.name }};
                            </p>
                        </v-card-text>
                    </v-col>
                </v-row>
            </v-card>
        </v-dialog>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'CardComp',
    props: {
        poke: Object
    },
    methods: {
        pokedex() {
            this.dialogController = true
        }

    },
    mounted() {
        axios.get(this.pokemon.url)
            .then(res => {
                this.pokeDetails = res.data
                // console.log(res.data)
                this.sprite = res.data.sprites.front_default
            })
    },

    data() {
        return {
            pokemon: this.poke,
            dialogController: false,
            pokeDetails: {},
            sprite: String,
        }
    },
}
</script>

<style lang="scss" scoped></style>