<template>
  <div class="list-item">
    <el-card shadow="hover">
      <div
        :class="['state bottom', stateClass(itemData)]"
      >{{ itemState('role.list.states', itemData) }}</div>
      <div class="role-info">
        <el-avatar :size="72" :src="circleUrl"></el-avatar>
        <p class="name">{{ itemData.name }}</p>
        <p class="desc">{{ itemData.remark }}</p>
      </div>
      <div class="operation">
        <span @click="doEdit">{{ $t('role.list.edit') }}</span>
        <span @click="manageUser(itemData.id)">{{ $t('role.list.manageUser') }}</span>
        <span @click="toAddUser(1)">{{ $t('role.list.addUser') }}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
import mixin from '@/utils/mixin'
export default {
  name: 'ListItem',
  components: {},
  mixins: [mixin],
  props: {
    itemData: {
      type: Object,
      default: () => {
        return null
      }
    }
  },
  directive: {},
  data() {
    return {
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    }
  },
  computed: {},
  watch: {},
  created() { },
  beforeMount() { },
  mounted() { },
  beforeDestroy() { },
  destroyed() { },
  methods: {
    doEdit() {
      this.$emit('edit')
    },
    manageUser(roleId) {
      this.$router.push(`/system/role/${roleId}/user`)
    },
    toAddUser(id) {
      this.$router.push('/system/user/list')
    }
  }
}
</script>

<style lang='scss' scoped>
$borderColor: #e6e6e6;
$hoverTextColor: #3b78fc;
.list-item {
  display: inline-block;
  width: 282px;
  height: 302px;
  margin: 10px 26px 10px 0;
  margin-right: 20px;
  .el-card__body {
    height: 100%;
  }
  .el-card {
    height: 100%;
    text-align: center;
    .el-card__body {
      .role-info {
        margin-top: 40px;
        .name {
          font-size: 18px;
        }
        .desc {
          font-size: 14px;
          color: #666;
          height: 30px;
        }
      }
      .operation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        text-align: left;
        margin-top: 30px;
        border-top: 1px solid $borderColor;
        padding-top: 22px;
        height: 20px;
        line-height: 20px;
        span {
          display: inline-block;
          cursor: pointer;
          &:hover {
            color: $hoverTextColor;
          }
          &:first-child {
            text-align: left;
            padding-right: 24px;
            border-right: 1px solid $borderColor;
          }
          &:nth-child(2) {
            text-align: center;
          }
          &:nth-child(3) {
            text-align: right;
            padding-left: 24px;
            border-left: 1px solid $borderColor;
          }
        }
      }
    }
  }
}
</style>
