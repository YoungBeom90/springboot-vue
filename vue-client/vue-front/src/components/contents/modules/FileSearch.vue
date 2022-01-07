<template>
    <div id="search">
        <select id="searchSelect" class="form-control select-sm" style="width: 90px;">
            <option value="file">파일</option>
            <option value="folder">폴더</option>
        </select>
        <input type="text" id="searchText" class="form-control input-sm" onkeyup="enterKey();" placeholder="검색" style="width: 280px;">
        <img class="searchClear" alt="clear" src="xButton.png" style="display: none;">
        <button type="button" id="searchBtn" class="search-btn submit-button" style="font-size: 14px; padding: 3px 0; box-shadow: unset; text-shadow:unset;"></button>
    </div>
</template>

<script>
export default {
    name: "FileSearch"
}
</script>

<style>

</style>