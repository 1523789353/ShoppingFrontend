<template>
  <div id="detail" class="container">
    <div class="goods container">
      <div class="left col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <el-image-viewer
          v-if="viewer_active"
          :url-list="[viewer_image]"
          @close="close_viewer"
        >
        </el-image-viewer>
        <el-carousel
          :interval="5000"
          trigger="click"
          arrow="always"
          pause-on-hover="true"
          class="ImageZoom"
        >
          <el-carousel-item v-for="image of images" :key="image['id']">
            <el-image
              :src="image['href']"
              fit="contain"
              style="width: 100%; height: 100%"
              @click="open_viewer(image['href'])"
            >
            </el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="right col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
        <h1 class="title">{{ title }}</h1>
        <div class="desc">{{ desc }}</div>
        <h3 class="price">￥{{ price }}</h3>
        <div class="tab-list">
          <label class="col-sm-2 col-form-label">尺寸:</label>
          <tab
            v-for="item of sizes"
            :key="item['id']"
            :id="'size-' + item['id']"
            name="size"
            :checked="item['id'] == 'def' ? 'checked' : null"
            >{{ item["name"] }}</tab
          >
        </div>
        <div class="tab-list">
          <label class="col-sm-2 col-form-label">颜色:</label>
          <tab
            v-for="item of colors"
            :key="item['id']"
            :id="'color-' + item['id']"
            name="color"
            :checked="item['id'] == 'def' ? 'checked' : null"
            >{{ item["name"] }}</tab
          >
        </div>
        <div class="login btn-toolbar" role="toolbar">
          <div class="btn-group mr-2" role="group">
            <a href="#" class="btn btn-primary btn-lg" role="button">购买</a>
          </div>
          <div class="btn-group mr-2" role="group">
            <a href="#" class="btn btn-secondary btn-lg" role="button"
              >加入购物车</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class="comments_list container">
      <div class="comment" v-for="item of comments" :key="item['id']">
        <hr />
        <div class="comment_head">
          <div class="comment_username">{{ item["username"] }}</div>
          <div class="comnnet_time">{{ getDate(item["timestamp"]) }}</div>
        </div>
        <div class="comment_message">{{ item["message"] }}</div>
        <el-rate v-model="item['rate']" show-score="true" disabled />
      </div>
    </div>
    <div class="leave_comment">
      <hr />
      <div class="title">评论</div>
      <textarea 
        class="comment_input form-control"
        placeholder="请输入您的评论"
      />
      <el-rate v-model="default_rate" allow-half />
      <button class="commit_comment btn btn-primary">提交</button>
    </div>
  </div>
</template>

<style scoped>
.goods {
  display: flex;
  padding-top: 72px;
}

.left >>> .ImageZoom {
  width: 420px;
  height: 420px;
  cursor: pointer;
}

.left >>> .el-carousel__container {
  height: 100%;
}

.right > .title {
  margin: 24px 0;
}

.right > .desc,
.right > .price,
.right > .tab-list {
  margin: 16px 0;
}
</style>

<script>
import Tab from "../components/Tab.vue";
export default {
  name: "Detail",
  components: {
    Tab,
  },
  props: ["online"],
  data() {
    return {
      viewer_active: false,
      viewer_image: null,
      title: "Redmi Note 10 5G",
      price: "9999",
      desc: "「购机赠价值897元善诊三人体检套餐；加39元得小米新定制T恤；光大信用卡分期支付满1000元减80元，数量有限」 5G小金刚｜旗舰长续航｜双5G待机｜5000mAh充电宝级大容量｜4800万高清相机｜天玑700八核高性能处理器",
      sizes: [{ id: "def", name: "默认" }],
      colors: [{ id: "def", name: "默认" }],
      images: [
        {
          id: "0",
          href: "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png",
        },
        {
          id: "1",
          href: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
        },
        {
          id: "2",
          href: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
        },
      ],
      comments: [
        {
          id: "1",
          username: "匿名用户",
          timestamp: "1635337564139",
          message: "很好吃，孩子很喜欢，敏感肌也能用",
          rate: "5",
        },
        {
          id: "2",
          username: "匿名用户",
          timestamp: "1635337564139",
          message: "很好吃，孩子很喜欢，敏感肌也能用",
          rate: "5",
        },
        {
          id: "3",
          username: "匿名用户",
          timestamp: "1635337564139",
          message: "很好吃，孩子很喜欢，敏感肌也能用",
          rate: "5",
        },
        {
          id: "4",
          username: "匿名用户",
          timestamp: "1635337564139",
          message: "很好吃，孩子很喜欢，敏感肌也能用",
          rate: "5",
        },
        {
          id: "5",
          username: "匿名用户",
          timestamp: "1635337564139",
          message: "很好吃，孩子很喜欢，敏感肌也能用",
          rate: "5",
        },
      ],
      default_rate: 5,
    };
  },
  methods: {
    open_viewer(image_src) {
      this.viewer_image = image_src;
      this.viewer_active = true;
    },
    close_viewer() {
      this.viewer_active = false;
    },
    getDate(timestamp) {
      var date = new Date();
      date.setTime(Number.parseInt(timestamp));
      return [date.getFullYear(), date.getMonth(), date.getDate()].join("-");
    },
  },
  mounted() {
    console.log(this.online);
    var data_sizes = [
      { id: "3", name: "s" },
      { id: "1", name: "xs" },
      { id: "4", name: "plus" },
      { id: "5", name: "max" },
    ];
    this.sizes = [...this.sizes, ...data_sizes];
    var data_colors = [
      { id: "1", name: "竹石青" },
      { id: "2", name: "星云灰" },
      { id: "3", name: "晴山蓝" },
      { id: "4", name: "月影银" },
    ];
    this.colors = [...this.colors, ...data_colors];
  },
};
</script>