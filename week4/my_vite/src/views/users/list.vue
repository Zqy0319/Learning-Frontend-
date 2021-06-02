<template>
  <div class="app-container">
    <!-- <div class="btn-container"> -->
      <!-- 新增按钮 -->
      <!-- <el-input
        placeholder="请输入内容"
        v-model="input4">
        <template #prefix>
          <i class="el-input__icon el-icon-search"></i>
        </template>
      </el-input>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div> -->
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
      <el-table-column align="center" label="ID" prop="id"></el-table-column>
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

    <!-- 分页 -->
    <pagination
      v-show="total > 0"
      :total="total"
      v-model:page="listQuery.page"
      v-model:limit="listQuery.limit"
      @pagination="getList"
    ></pagination>
  </div>
</template>

<script>
import { toRefs } from "vue";
import { useRouter } from "vue-router";
import { Message } from "element3";
import Pagination from "comps/Pagination.vue";
import { useList } from "./model/userModel";

export default {
  name: "UserList",
  components: {
    Pagination,
  },

  methods: {
    created() {
          this.pageList()
      },
    pageList() {
                // 发请求拿到数据并暂存全部数据,方便之后操作
                this.data = listJson.list
                this.getList()
      },
    // 处理数据
    getList() {
        // es6过滤得到满足搜索条件的展示数据list
        let list = this.data.filter((item, index) =>
            item.name.includes(this.searchData)
        )
        this.list = list.filter((item, index) =>
            index < this.page * this.limit && index >= this.limit * (this.page - 1)
        )
        this.total = list.length
    },
    // 搜索过滤数据
    search() {
        this.page = 1
        this.getList()
    }
  },

  setup() {
    // 玩家列表数据
    const router = useRouter();
    const { state, getList, delItem } = useList();

    // 用户更新
    function handleEdit({ row }) {
      router.push({
        name: "userEdit",
        params: { id: row.id },
      });
    }

    // 删除玩家
    function handleDelete({ row }) {
      delItem(row.id).then(() => {
        // todo:删除这一行，或者重新获取数据
        // 通知用户
        Message.success("删除成功！");
      });
    }

    return {
      ...toRefs(state),
      getList,
      handleEdit,
      handleDelete,
    };
  },
};
</script>

<style scoped>
.btn-container {
  text-align: left;
  padding: 0px 10px 20px 0px;
}
</style>
