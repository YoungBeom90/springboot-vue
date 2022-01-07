<template>
    <div class="dropZone" style="overflow-x: hidden; opacity: 1; border: none;">
        <FileTable />
    </div>
</template>

<script>
import FileTable from './table/FileTable.vue';

export default {
    name: "DropZone",
    components: {
        FileTable
    }
}
</script>

<style>

</style>