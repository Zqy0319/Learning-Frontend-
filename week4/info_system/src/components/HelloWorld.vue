<template>
    <div>
    <div class="list">
      <div class="searchWord">
        <el-row>
          <el-col :span="6">
            <el-input v-model="searchData" style="display: inline-block"
              placeholder="请输入搜索内容">
              <template #prefix>
                <i class="el-input__icon el-icon-search"></i>
              </template>
            </el-input>
          </el-col>
          <el-col :span="2">
            <el-button type="success" @click="search">搜索</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-table
      v-loading="loading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
    >
      <el-table-column align="center" label="账户名" prop="name">
      </el-table-column>
      <el-table-column align="center" label="年龄" prop="age">
      </el-table-column>
      <el-table-column align="center" label="地址" prop="address"></el-table-column>
      <el-table-column align="center" label="电话" prop="phone"></el-table-column>
      <!-- 操作列 -->
      <el-table-column label="操作" align="center">
        <template v-slot="scope">
          <el-popconfirm title="确认删除这个用户吗？">
            <template #reference>
              <el-button
                type="danger"
                icon="el-icon-remove"
                @click="handleDelete(scope)"
                >删除</el-button
              >
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="page" :page-sizes="[1, 2,5, 10]" :page-size="limit"
            layout="total, sizes, prev, pager, next, jumper" :total="total">
        </el-pagination>
    </div>
</template>
<script>
    var listJson = {
        list: [
            { name: 'aa', age: 12,  address: "Beijing", phone: 123456789},
            { name: 'bb', age: 13, address: "Shanghai", phone: 123456789},
            { name: 'cc', age: 14 },
            { name: 'ad', age: 15 },
            { name: 'eaae', age: 16 },
            { name: 'faaf', age: 16 },
            { name: 'hah', age: 17 },
            { name: 'ii', age: 18 },
            { name: 'rar', age: 19 },
            { name: 'dd', age: 10 },
        ]
    }
    export default {
        data() {
            return {
                list: [],
                data: [],
                limit: 5,
                total: null,
                page: 1,
                searchData: "",
            }
        },
       created() {
            this.pageList()
        },
        methods: {
            pageList() {
                this.data = listJson.list
                this.getList()
            },
            getList() {
                let list = this.data.filter((item, index) =>
                    item.name.includes(this.searchData)
                )
                this.list = list.filter((item, index) =>
                    index < this.page * this.limit && index >= this.limit * (this.page - 1)
                )
                this.total = list.length
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.limit = val
                this.getList()
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.page = val
                this.getList()
            },
            search() {
                this.page = 1
                this.getList()
            }
        },
    }
</script>
