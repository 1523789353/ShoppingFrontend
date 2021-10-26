<template>
<div id="topbar" class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
    <div class="collapse navbar-collapse container">
        <div class="left form-inline">
            <a class="navbar-brand" href="/">商城首页</a>
            <div class="login btn-toolbar" role="toolbar" v-if="!online">
                <div class="btn-group mr-2" role="group">
                    <a role="button" href="#" class="btn btn-sm btn-outline-primary">登录</a>
                </div>
                <div class="btn-group mr-2" role="group">
                    <a role="button" href="#" class="btn btn-sm btn-primary">注册</a>
                </div>
            </div>
            <div class="nav-item dropdown" v-if="online">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown">用户</a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">个人首页</a>
                    <a class="dropdown-item" href="#">购物车</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">退出登录</a>
                </div>
            </div>
        </div>
        <div class="input-group col-3">
            <input type="text" class="form-control form-control-sm" placeholder="搜索你想要的宝贝" aria-describedby="button-addon2">
            <div class="input-group-append">
                <button class="btn btn-sm btn-primary" type="button" id="button-addon2">搜索</button>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
</style>

<script>
export default {
    name: "Topbar",
    props: ["online", "username", "userid"],
}
</script>