<!--
 * @Author: zhongzhenzhou zhongzhenzhou@ganweisoft.com
 * @Date: 2022-08-16 11:21:48
 * @LastEditors: zhongzhenzhou zhongzhenzhou@ganweisoft.com
 * @LastEditTime: 2022-08-17 14:15:43
 * @FilePath: ganwei-iotcenter-equip-lists\src\components\dialog\realtimeCurve\realtimeCurve.vue
 * @Description: 实时曲线
-->
<template>
    <el-dialog class="realtimeCurve" :title="`${currentSelect.equipName}·${currentSelect.ycyxName}`"
        :visible.sync="showDialog" @close="closeDialog" center>
        <div id="containerE"></div>
    </el-dialog>
</template>
<style lang="scss" src="./realtimeCurve.scss"></style>
<script src="./realtimeCurve.js"></script>