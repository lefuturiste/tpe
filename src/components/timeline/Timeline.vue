<template>
    <div id='timeline-embed' style="width: 100%; height: 600px"></div>
</template>

<script>
    export default {
        mounted() {
            async function init() {
                let response = await fetch('/timeline.json')
                let data = await response.json()
                window.timeline = new TL.Timeline('timeline-embed', data);
            }
            init()
        }
    }
</script>

<style>
    .tl-attribution {
        display: none !important;
    }
    #timeline-embed {
        z-index: 0;
    }
</style>