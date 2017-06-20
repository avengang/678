<template>
<div>
    <Headbar></Headbar>
</div>
</template>

<script>
	import Headbar from "./common/Headbar.vue"
export default {
  data () {
    return {
      current: 1,
      total: 0,
      list: [],
      open: false
    }
  },
  methods: {
    getList (index) {
      var _this = this;
      this.Util.request('article.page', {
        params: {
          'page': index,
          'rows': 10
        },
        successFn: function (response) {
          _this.list = response.rows;
          _this.total = response.total;
        },
        scope: _this
      })
    },
    toggle () {
      this.open = !this.open
    }
  },
  activated() {
    this.getList(1);
  },
  components: {
  	Headbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .article_list_box {
    width: 95%;
    margin: 0 auto;
  }
  .appbar-search-field{
    color: #FFF;
    margin-bottom: 0;
  &.focus-state {
     color: #FFF;
   }
  .mu-text-field-hint {
    color: fade(#FFF, 54%);
  }
  .mu-text-field-input {
    color: #FFF;
  }
  .mu-text-field-focus-line {
    background-color: #FFF;
  }
  }
</style>
