<template>
    <div id="fileContainer">
        <form name="uploadForm" id="uploadForm" enctype="multipart/form-data" method="POST">
            <FileUpload />
            <FileTool />
            <FileSearch />
            <DropZone />
            <ModalUpload />
        </form>
    </div>
</template>

<script>
import FileUpload from './modules/FileUpload.vue';
import FileTool from './modules/FileTool.vue';
import FileSearch from './modules/FileSearch.vue';
import DropZone from './modules/DropZone.vue';
import ModalUpload from './modules/ModalUpload.vue';

export default {
    name: 'FileContainer',
    components : {
        FileUpload,
        FileTool,
        FileSearch,
        DropZone,
        ModalUpload
    },
    
}
</script>