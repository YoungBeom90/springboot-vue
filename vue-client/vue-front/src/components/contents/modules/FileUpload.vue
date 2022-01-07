<template>
    <div class="file-upload-wrap">
        <b-button v-b-modal.modal-1 id="uploadFileBtn" class="btn btn-primary" style="width: 200px; font-size: 14px; padding: 5px 0; box-shadow: unset;">파일 선택하기</b-button>
        <!-- <button type="button" id="uploadFileBtn" data-toggle="modal" data-target="#uploadModal" v-on:click="modalPopup" class="btn btn-primary" style="width: 200px; font-size: 14px; padding: 5px 0; box-shadow: unset;">파일 선택하기</button> -->
        <div style="color: #666666; font-size: 12px; margin-top: 8px;">업로드 할 파일을 선택하세요.</div>
    </div>
</template>

<script>
// import { BButton } from 'bootstrap-vue'

export default {
    name: "FileUpload",
    // components: {
    //     'b-button': BButton
    // },
    methods: {
        modalPopup: function () {
            // console.log(globalSelectFolder);
            $('#uploadModal').modal();
            // console.log($("#modalParentPath"));
            // $("#modalParentPath").val(globalSelectFolder);

            let agent = navigator.userAgent.toLowerCase();
            if ( (navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1) ){
                // ie 일때 input[type=file] init.
                $("#modalUpload").replaceWith( $("#modalUpload").clone(true) );
            } else {
                //other browser 일때 input[type=file] init.
                $("#modalUpload").val("");
            }
        }
    }
}
</script>

<style>

</style>