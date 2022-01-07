<template>
  <table id="fileTable" class="table table-hover table-sm">
            <colgroup>
                <col width="5px">
                <col width="45%">
                <col width="10%">
                <col width="10%">
                <col width="10%">
                <col width="15%">
                <col width="5%">
            </colgroup>
            <TableHead />
            <TableBody />
        </table>
</template>

<script>
import TableHead from './tableLayout/TableHead.vue';
import TableBody from './tableLayout/TableBody.vue';

export default {
    components: {
        TableHead,
        TableBody
    }
}
</script>

<style>

</style>