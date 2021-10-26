<template>
    <div id="MainPage" class="container">
        <div class="sort">
            <forms>
                <div class="form-group">
                    <div class="tab-list">
                        <label class="col-sm-1 col-form-label">品牌:</label>
                        <tab id="brand-all" name="brand" checked="checked">全部</tab>
                        <tab id="brand-1" name="brand">海尔</tab>
                        <tab id="brand-2" name="brand">乐视</tab>
                        <tab id="brand-3" name="brand">小米</tab>
                        <tab id="brand-4" name="brand">OPPO</tab>
                        <tab id="brand-5" name="brand">戴尔</tab>
                        <tab id="brand-6" name="brand">百雀羚</tab>
                        <tab id="brand-7" name="brand">格力</tab>
                        <tab id="brand-8" name="brand">康佳</tab>
                    </div>
                </div>
                <div class="form-group">
                    <div class="tab-list">
                        <label class="col-sm-1 col-form-label">类型:</label>
                        <tab id="type-all" name="type" checked="checked">全部</tab>
                        <tab id="type-1" name="type">水果类</tab>
                        <tab id="type-2" name="type">蔬菜蛋类</tab>
                        <tab id="type-3" name="type">肉禽类</tab>
                        <tab id="type-4" name="type">男装</tab>
                        <tab id="type-5" name="type">女装</tab>
                        <tab id="type-6" name="type">童装</tab>
                        <tab id="type-7" name="type">运动鞋类</tab>
                        <tab id="type-8" name="type">休闲类</tab>
                        <tab id="type-9" name="type">家居</tab>
                        <tab id="type-10" name="type">鞋子</tab>
                    </div>
                </div>
            </forms>
        </div>
        <hr/>
        <div class="show-window">
            <el-button type="primary">Primary</el-button>
        </div>
    </div>
</template>

<style scoped>
.sort {
    padding-top: 24px;
}
</style>

<script>
import Tab from '../components/Tab.vue';
export default {
  name: "MainPage",
  data() {
    return {};
  },
  components: {
    Tab,
  },
};
</script>