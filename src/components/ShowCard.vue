<template>
<span class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
  <el-card
    class="show-card"
    shadow="hover"
    :body-style="{ padding: '0px' }"
    @click="click_handler"
  >
    <img :src="image" class="image" />
    <div style="padding: 14px">
      <span class="hide"><slot name="title"></slot></span>
      <div class="price">
        <el-link type="primary" :href="href" class="link hide"
          ><slot name="price"></slot
        ></el-link>
      </div>
    </div>
  </el-card>
</span>
</template>

<style scoped>
.show-card {
  width: 100%;
  cursor: pointer;
  margin: 15px auto;
}

.hide {
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.price {
  margin: 12px 0;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}

.link {
  font-size: 20px;
  line-height: 20px;
}
</style>

<script>
export default {
  name: "ShowCard",
  props: ["image", "href"],
  methods: {
    click_handler() {
      if (this.href !== undefined && this.href !== "") {
        window.location.href = this.href;
      }
    },
  },
};
</script>