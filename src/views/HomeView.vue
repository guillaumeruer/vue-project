<template>
    <h1>Home</h1>
    <p>Scramble : {{scramble}}</p>
    <button @click="newScramble">New scramble</button>
    <scramble-display :scramble="scramble"></scramble-display>
</template>

<script>
    import * as scrambo from 'scrambo';
    import {ScrambleDisplay} from "scramble-display";

    const scrambler = new scrambo();

    export default {
        data() {
            return {
                scramble: scrambler.get(1)[0],
            }
        },
        methods: {
            newScramble() {
                this.scramble = scrambler.get(1)[0];
            }
        },
    }
</script>