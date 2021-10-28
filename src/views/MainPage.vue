<template>
  <div id="MainPage" class="container">
    <div class="sort">
      <forms>
        <div class="form-group">
          <div class="tab-list">
            <label class="col-sm-1 col-form-label">品牌:</label>
            <tab
              v-for="item of brands"
              :key="item['id']"
              :id="'brand-' + item['id']"
              name="brand"
              :checked="item['id'] == 'all' ? 'checked' : null"
              >{{ item["name"] }}</tab
            >
          </div>
        </div>
        <div class="form-group">
          <div class="tab-list">
            <label class="col-sm-1 col-form-label">类型:</label>
            <tab
              v-for="item of types"
              :key="item['id']"
              :id="'type-' + item['id']"
              name="type"
              :checked="item['id'] == 'all' ? 'checked' : null"
              >{{ item["name"] }}</tab
            >
          </div>
        </div>
      </forms>
    </div>
    <hr />
    <div class="show-window" ref="loading">
      <ShowCard
        v-for="item of goods"
        :key="item.id"
        :href="item['href']"
        :image="item['image']"
      >
        <template #title>{{ item["title"] }}</template>
        <template #price>{{ item["price"] }}</template>
      </ShowCard>
      <div class="loading"></div>
    </div>
  </div>
</template>

<style>
.sort {
  padding-top: 24px;
}

.tab-list>* {
  padding-top: 0;
}

.show-window {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  margin: calc(100% mod 240px);
}

.loading {
  width: 100%;
  height: 200px;
}

.loading > * {
  background: transparent;
}
</style>

<script>
import Tab from "../components/Tab.vue";
import ShowCard from "../components/ShowCard.vue";
export default {
  name: "MainPage",
  data() {
    return {
      brands: [{ id: "all", name: "全部" }],
      types: [{ id: "all", name: "全部" }],
      goods: [],
      loadable: true,
    };
  },
  components: {
    Tab,
    ShowCard,
  },
  methods: {
    lazy_loading(count) {
      if (!this.loadable) return;
      this.loadable = false;
      var href = "https://element.eleme.io";
      var image =
        "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png";
      var last = 0;
      if (this.goods.length != 0) {
        last = this.goods[this.goods.length - 1]["id"];
      }
      for (let i = 0; i < count; i++) {
        this.goods.push({
          id: last + i + 1,
          href: href,
          image: image,
          title: "123",
          price: "￥456",
        });
      }
      setTimeout(() => {
        this.loadable = true;
      }, 1000);
    },
  },
  mounted() {
    // 动态加载品牌/类型数据
    var data_brand = [
      { id: "1", name: "海尔" },
      { id: "2", name: "乐视" },
      { id: "3", name: "小米" },
      { id: "4", name: "OPPO" },
      { id: "5", name: "戴尔" },
      { id: "6", name: "百雀羚" },
      { id: "7", name: "格力" },
      { id: "8", name: "康佳" },
    ];
    this.brands = [...this.brands, ...data_brand];

    var data_type = [
      { id: "1", name: "水果类" },
      { id: "2", name: "蔬菜类" },
      { id: "3", name: "肉禽类" },
      { id: "4", name: "男装" },
      { id: "5", name: "女装" },
      { id: "6", name: "童装" },
      { id: "7", name: "运动鞋类" },
      { id: "8", name: "休闲类" },
      { id: "9", name: "家居" },
      { id: "10", name: "鞋子" },
    ];
    this.types = [...this.types, ...data_type];

    // 异步懒加载
    this.$loading({ target: $(".loading")[0] });
    this.lazy_loading(20);
    $(document).on("scroll mousewheel DOMMouseScroll", () => {
      if (
        $(document).height() - $(document).scrollTop() <
        $(window).height() + 1500
      ) {
        setTimeout(() => {
          this.lazy_loading(20);
        }, 0);
      }
    });
  },
};
</script>