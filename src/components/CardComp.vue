<template>
    <div>
        <v-card variant="tonal" class="rounded-lg" hover>

            <v-card-title class="text-center">
                <h3>
                    Pika
                </h3>
            </v-card-title>

            <div class="pa-5">
                <v-img class="rounded-lg"
                    src="https://conteudo.imguol.com.br/c/entretenimento/58/2017/05/30/pikachu-nervoso-1496159464346_v2_450x450.png.webp" />
            </div>
            <v-card-actions class="align-center justify-center">
                <v-btn variant="plain" icon="mdi-pokeball"></v-btn>
                <v-btn variant="plain" icon="mdi-information"></v-btn>
                <v-btn variant="plain" icon="mdi-tablet-dashboard"></v-btn>
            </v-card-actions>
        </v-card>

    </div>
</template>

<script>
export default {
    name: 'CardComp',
    props: {
        name: String,
        foto: String,
        descricacao: String,
    },
}
</script>

<style lang="scss" scoped></style>