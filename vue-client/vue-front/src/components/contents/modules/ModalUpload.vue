<template>
    <b-modal id="modal-1" size="lg" title="파일 업로드" hide-footer>
        <div class="modal-dialog" role="document" style="width: 600px;">
            <div class="modal-content">
                <div class="modal-body">
                    <form id="modalForm" method="post" enctype="multipart/form-data">
                        <div class="form-group">
                            <label for="recipient-name" class="control-label">현재 경로 :</label>
                            <input type="text" class="form-control" id="modalParentPath">
                        </div>
                        <div class="form-group">
                            <label for="message-text" class="control-label">파일 :</label>
                            <input type="file" id="modalUpload" name="modalUpload" multiple="" required="">
                            <p style="font-size: 13px; margin-top: 5px; color: red;">* 폴더는 업로드 할 수 없습니다.</p>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <!-- <b-button type="button" class="btn btn-danger" modal-cancel style="width: 80px;" @click="cancel()">취소</b-button> -->
                    <button id="modalSubmit" type="button" class="btn btn-primary" style="width: 80px;">파일저장</button>
                </div>
            </div>
        </div>
    </b-modal>
</template>

<script>

export default {
    name: "ModalUpload",
}
</script>

<style>

</style>