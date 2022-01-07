<template>
    <div id="fileTool">
        <button type="button" id="goParent" class="btn btn-info" style="width: 90px; font-size: 14px; padding: 5px 0; box-shadow: unset; text-shadow:unset;">상위폴더</button>
        
        <!-- <button type="button" id="searchBtn" data-toggle="modal" data-target="#searchModal" onclick="searchModalPopup()" class="btn btn-primary btn-sm">검색</button> -->
        <button type="button" id="createFolderBtn" class="btn btn-primary" style="width: 90px; font-size: 14px; padding: 5px 0; box-shadow: unset; text-shadow:unset;">폴더생성</button>
        <button type="button" id="donwloadBtn" class="btn btn-primary" style="width: 90px; font-size: 14px; padding: 5px 0; box-shadow: unset; text-shadow:unset;">다운로드</button>
        <button id="workingGroup" type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style="width: 90px; font-size: 14px; padding: 5px 0; box-shadow: unset; text-shadow:unset;">
            작업
        </button>
        <div class="dropdown-menu" aria-labelledby="workingGroup">
            <a type="button" id="fileCopyBtn" class="dropdown-item" style="cursor:pointer; font-size:13px;">파일복사</a>
            <a type="button" id="filePasteBtn" class="dropdown-item d-none" style="cursor:pointer; font-size:13px;">붙여넣기</a>
        </div>
        <button type="button" id="deleteBtn" class="btn btn-danger" style="width: 90px; font-size: 14px; padding: 5px 0; box-shadow: unset; text-shadow:unset;">삭제</button>
    </div>
</template>

<script>
export default {
    name: "FileTool"
}
</script>

<style>

</style>