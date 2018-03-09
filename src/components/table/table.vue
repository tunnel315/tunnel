<template>
  <div class="tableVue">
    <el-table
      :data="tableData"
      :span-method="handleSpanMethod"
      border
      style="width: 100%">
      <el-table-column
        v-for="(value,key) in tableHead"
        :key="key"
        :label="value.label"
        :prop="value.prop">
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageData.currentPage"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageData.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageData.totalPage">
    </el-pagination>
  </div>
</template>
<script>
import Data from './table';
export default {
  props : ['tableHead','tableApi','tableData'],
  data () {
    return JSON.parse(JSON.stringify(Data))
  },
  methods : {
    handleSpanMethod ({ row, column, rowIndex, columnIndex }) {//合并行或列的计算方法
      this.$emit('handleSpanMethod',{ row, column, rowIndex, columnIndex })
    },
    handleSizeChange (pageSize) {//改变每页条数
      this.pageData.pageSize = pageSize;
      this.sendTableAxios();
    },
    handleCurrentChange (currentPage) {//改变当前页
      this.pageData.currentPage = currentPage;
      this.sendTableAxios();
    },
    setDefaultData (pageSize,currentPage) {//设置默认的当前页和每页条数
      this.pageData.pageSize =pageSize;
      this.pageData.currentPage =currentPage;
    },
    sendTableAxios () {//发送请求
      const pageData = this.pageData;
      let param = {
        currentPage : pageData.currentPage,
        pageSize    : pageData.pageSize,
        totalPage   : pageData.totalPage
      };
      this.$superAgent.get(this.tableApi,param,(data) => {
        if(data.returnSuccess){
          this.$emit('tableSuccess',data)
        }
      }, (data) => {
        console.log(data);
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .tableVue{
    width:100%;
    .el-pagination{
      height:50px;
  		text-align:center;
  		padding-top:20px;
    }
  }
</style>
