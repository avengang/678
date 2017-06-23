<template>
	<div class="container">
		<div class="so-header">
			<div class="box display-inline-block">
				<a class="navigation logo floatL touchable">678</a>
				<a class="navigation floatL line-height58 display-inline-block padding-0-12 touchable">Questions</a>
				<a class="navigation floatL line-height58 display-inline-block padding-0-12 touchable">Developer Jobs</a>
				<a class="navigation floatL line-height58 display-inline-block padding-0-12 touchable">Documentation</a>
				<a class="navigation floatL line-height58 display-inline-block padding-0-12 touchable">Tags</a>
				<a class="navigation floatL line-height58 display-inline-block padding-0-12 touchable">Users</a>
				<form id="search" action="/search" method="get" class="searchbar" autocomplete="off" role="search">
	                <svg role="icon" class="svg-icon iconSearch" width="18" height="18" viewBox="0 0 18 18"><path d="M12.864 11.321L18 16.5 16.5 18l-5.178-5.136v-.357a7 7 0 1 1 1.186-1.186h.356zM7 12A5 5 0 1 0 7 2a5 5 0 0 0 0 10z"></path></svg>
	                <input name="q" type="text" placeholder="Search..." value="" tabindex="1" autocomplete="off" maxlength="240" class="f-input js-search-field">
	                <button type="submit" class="btn js-search-submit">
	                    <svg role="icon" class="svg-icon iconSearch" width="18" height="18" viewBox="0 0 18 18"><path d="M12.864 11.321L18 16.5 16.5 18l-5.178-5.136v-.357a7 7 0 1 1 1.186-1.186h.356zM7 12A5 5 0 1 0 7 2a5 5 0 0 0 0 10z"></path></svg>
	                </button>
	            </form>
	            <a class="headerbar-icon-a navigation floatL line-height58 display-inline-block padding-0-12 touchable"><svg role="icon" class="headerbar-icon svg-icon iconHelp" width="18" height="18" viewBox="0 0 18 18"><path d="M9 1a8 8 0 1 0 0 16.001A8 8 0 0 0 9 1zm.812 12.126c-.02.716-.55 1.157-1.238 1.137-.659-.02-1.177-.49-1.157-1.209.02-.715.566-1.17 1.225-1.15.691.021 1.194.507 1.17 1.222zm1.956-5.114c-.168.237-.546.542-1.02.912l-.527.361c-.257.197-.417.43-.502.695-.044.141-.076.507-.084.752-.004.048-.032.156-.181.156H7.883c-.165 0-.185-.096-.18-.144.023-.667.12-1.218.397-1.66.374-.594 1.426-1.221 1.426-1.221.161-.12.286-.25.382-.39.177-.24.321-.51.321-.8 0-.333-.08-.65-.293-.915-.249-.31-.518-.458-1.036-.458-.51 0-.808.257-1.021.594-.213.338-.177.735-.177 1.097H5.746c0-1.366.357-2.238 1.112-2.752.51-.35 1.162-.502 1.921-.502.996 0 1.788.184 2.487.715.647.49.988 1.181.988 2.113 0 .575-.2 1.057-.486 1.447z"></path></svg></a>
				<a class="headerbar-icon-a navigation floatL line-height58 display-inline-block padding-0-12 touchable"><svg role="icon" class="headerbar-icon svg-icon iconStackExchange" width="18" height="18" viewBox="0 0 18 18"><path d="M1 13a2 2 0 0 0 2 2h8v3l3-3h1a2 2 0 0 0 2-2v-2H1v2zM15 1H3a2 2 0 0 0-2 2v2h16V3a2 2 0 0 0-2-2zM1 6h16v4H1V6z"></path></svg></a>
				<a class="navigation floatL line-height58 display-inline-block padding-0-12 touchable">Log In</a>
				<a class="navigation floatL line-height58 display-inline-block padding-0-12 touchable">Sign Up</a>
			</div>
		</div>
		
		<!--<ol class="-list">
		    <li class="-item"><a href="#" class="-link js-help-button" title="Help Center and other resources">
		        <svg role="icon" class="svg-icon iconHelp" width="18" height="18" viewBox="0 0 18 18"><path d="M9 1a8 8 0 1 0 0 16.001A8 8 0 0 0 9 1zm.812 12.126c-.02.716-.55 1.157-1.238 1.137-.659-.02-1.177-.49-1.157-1.209.02-.715.566-1.17 1.225-1.15.691.021 1.194.507 1.17 1.222zm1.956-5.114c-.168.237-.546.542-1.02.912l-.527.361c-.257.197-.417.43-.502.695-.044.141-.076.507-.084.752-.004.048-.032.156-.181.156H7.883c-.165 0-.185-.096-.18-.144.023-.667.12-1.218.397-1.66.374-.594 1.426-1.221 1.426-1.221.161-.12.286-.25.382-.39.177-.24.321-.51.321-.8 0-.333-.08-.65-.293-.915-.249-.31-.518-.458-1.036-.458-.51 0-.808.257-1.021.594-.213.338-.177.735-.177 1.097H5.746c0-1.366.357-2.238 1.112-2.752.51-.35 1.162-.502 1.921-.502.996 0 1.788.184 2.487.715.647.49.988 1.181.988 2.113 0 .575-.2 1.057-.486 1.447z"></path></svg>
		    </a></li>
            <li class="-item">
		        <a href="https://stackexchange.com" class="-link js-site-switcher-button js-gps-track" data-gps-track="site_switcher.show" title="A list of all 169 Stack Exchange sites">
		            <svg role="icon" class="svg-icon iconStackExchange" width="18" height="18" viewBox="0 0 18 18"><path d="M1 13a2 2 0 0 0 2 2h8v3l3-3h1a2 2 0 0 0 2-2v-2H1v2zM15 1H3a2 2 0 0 0-2 2v2h16V3a2 2 0 0 0-2-2zM1 6h16v4H1V6z"></path></svg>
		        </a>
		    </li>
        </ol>-->
	</div>
</template>

<script>
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.container {
		width: 100vw;
		border: none;
		border: 0;
		border-bottom: 1px solid #ccc;
		background-color: rgb(250, 250, 251);
	}
	.so-header {
	    max-width: 1060px;
	    width: 100%;
	    height: 100%;
	    margin: 0 auto;
	    position: relative;
	    box-sizing: content-box;
	    display: -webkit-flex;
	    display: flex;
	    -webkit-flex-flow: row nowrap;
	    flex-flow: row nowrap;
	    -webkit-justify-content: space-between;
	    justify-content: space-between;
	    -webkit-align-items: center;
	    align-items: center;
	    
	}
	.box {
		width: 100%;
		height: 58px;
	    height: 100%;
	    width: 100%;
	    display: -webkit-flex;
	    display: flex;
	    -webkit-flex-flow: row nowrap;
	    flex-flow: row nowrap;
	    -webkit-align-items: center;
	    align-items: center;
	    box-sizing: border-box;
	    padding: 0 15px;
	}
	.logo {
		font-size: 22px;
		line-height: 58px;
	}
	.navigation {
		text-decoration: none;
		white-space: nowrap;
    	position: relative;
    	height: 57px;
	    color: #535a60;
	    text-align: center;
        outline: none;
	}
	a:hover {
		transition: background-color cubic-bezier(.165, .84, .44, 1) .25s,border-bottom-color ease-in-out .25s;
		background-color: rgb(239, 240, 241);
	    outline: none;
	}
	.form {
	    margin: 0;
	    padding: 0;
	    border: 0;
	    font-size: 100%;
	    font: inherit;
	    vertical-align: baseline;
        display: block;
	}
	.so-header .searchbar {
	    padding-left: 12px;
	    width: 100%;
	    position: relative;
	    -webkit-flex: 1;
	    flex: 1;
	}
	.so-header * {
	    box-sizing: border-box;
	}
	.so-header .searchbar>.svg-icon {
	    position: absolute;
	    left: 25px;
	    top: 50%;
	    transform: translateY(-50%);
	    color: #848d95;
	    pointer-events: none;
	    transition: opacity .25s cubic-bezier(.165, .84, .44, 1);
	}
	.so-header * {
	    box-sizing: border-box;
	}
	.svg-icon {
	    vertical-align: bottom;
	}
	html|* > svg {
	    transform-origin: 50% 50% 0px;
	}
	svg:not(:root), symbol, image, marker, pattern, foreignObject {
	    overflow: hidden;
	}
	* {
	    transform-origin: 0px 0px 0px;
	}
	.so-header .searchbar input[type="text"].f-input {
	    margin: 0;
	    padding-left: 38px;
	    height: 36px;
	    border-radius: 2px;
	    width: 100%;
	    color: #6a737c;
	}
	.so-header .searchbar .btn {
	    height: 36px;
	    opacity: 0;
	    margin: 0;
	    position: absolute;
	    right: 0;
	    top: 50%;
	    transform: translateY(-50%);
	    z-index: -1;
	    transition: all .35s cubic-bezier(.165, .84, .44, 1);
	}
	.svg-icon {
	    vertical-align: bottom;
	}
	.headerbar-icon {
		vertical-align: middle;
		color: #848d95;
	}
	.headerbar-icon-a {
		color: #848d95;
	}
	.headerbar-icon-a:hover {
		color: #3b4045;
	}
	a {
		color: red;
	}
</style>
