<template>
  <div
    id="topbar"
    class="navbar navbar-expand-lg navbar-light bg-light border-bottom"
  >
    <div class="collapse navbar-collapse container">
      <div
        class="
          left
          form-inline form-inline
          col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12
        "
      >
        <router-link class="navbar-brand" to="/">商城首页</router-link>
        <div class="login btn-toolbar" role="toolbar" v-if="!online">
          <div class="btn-group mr-2" role="group">
            <a role="button" href="#" class="btn btn-sm btn-outline-primary"
              >登录
            </a>
          </div>
          <div class="btn-group mr-2" role="group">
            <a role="button" href="#" class="btn btn-sm btn-primary">注册</a>
          </div>
        </div>
        <div class="nav-item dropdown" v-if="online">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-toggle="dropdown"
            >欢迎您&nbsp;{{username}}
          </a>
          <div class="dropdown-menu">
            <a class="dropdown-item" href="#">个人首页</a>
            <a class="dropdown-item" href="#">购物车</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">退出登录</a>
          </div>
        </div>
      </div>
      <div class="right form-inline input-group">
        <input
          type="text"
          class="
            form-control form-control-sm
            col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12
          "
          placeholder="搜索你想要的宝贝"
          aria-describedby="button-addon2"
        />
        <div class="input-group-append">
          <button
            class="btn btn-sm btn-primary"
            type="button"
            id="button-addon2"
          >
            搜索
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.left {
  justify-content: center;
  margin: auto;
}

.login {
  width: 50%;
}

.right {
  justify-content: center;
  max-width: 300px;
  text-align: right;
  margin: auto;
}

.right > * {
  display: inline-block;
}
</style>

<script>
export default {
  name: "Topbar",
  props: ["online", "username", "userid"],
};
</script>