webpackJsonp([7],{"7VTr":function(t,s){},"qP2/":function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=i("Dd8w"),n=i.n(e),r=i("AyDw"),a=i("qwAB"),c=i("ZV4u"),l=i("NYxO"),o=i("PvFA"),h=i("F4+m"),u=i("tRvw"),d={mixins:[h.b],data:function(){return{currentIndex:0,switches:[{name:"我喜欢的"},{name:"最近听的"}]}},computed:n()({},Object(l.c)(["favoriteList","playHistory"]),{noResult:function(){return 0===this.currentIndex?!this.favoriteList.length:!this.playHistory.length},noResultDesc:function(){return 0===this.currentIndex?"暂无收藏歌曲":"你还没有听过歌曲"}}),methods:n()({},Object(l.b)(["insertSong","randomPlay"]),{back:function(){this.$router.back()},swicthItem:function(t){this.currentIndex=t},selectSong:function(t){this.insertSong(new o.b(t))},random:function(){var t=0===this.currentIndex?this.favoriteList:this.playHistory;0!==t.length&&(t=t.map(function(t){return new o.b(t)}),this.randomPlay({list:t}))},handlePlaylist:function(t){var s=t.length>0?"60px":"";this.$refs.listWrapper.style.bottom=s,this.$refs.favoriteList&&this.$refs.favoriteList.refresh(),this.$refs.playList&&this.$refs.playList.refresh()}}),components:{Switches:r.a,Scroll:a.a,SongList:c.a,NoResult:u.a}},f={render:function(){var t=this.$createElement,s=this._self._c||t;return s("transition",{attrs:{name:"slide"}},[s("div",{staticClass:"user-center"},[s("div",{staticClass:"back",on:{click:this.back}},[s("i",{staticClass:"icon-back"})]),this._v(" "),s("div",{staticClass:"switches-wrapper"},[s("switches",{attrs:{switches:this.switches,currentIndex:this.currentIndex},on:{switch:this.swicthItem}})],1),this._v(" "),s("div",{ref:"playBtn",staticClass:"play-btn",on:{click:this.random}},[s("i",{staticClass:"icon-play"}),this._v(" "),s("span",{staticClass:"text"},[this._v("随机播放全部")])]),this._v(" "),s("div",{ref:"listWrapper",staticClass:"list-wrapper"},[0===this.currentIndex?s("scroll",{ref:"favoriteList",staticClass:"list-scroll",attrs:{data:this.favoriteList}},[s("div",{staticClass:"list-inner"},[s("song-list",{attrs:{songs:this.favoriteList},on:{select:this.selectSong}})],1)]):this._e(),this._v(" "),1===this.currentIndex?s("scroll",{ref:"playList",staticClass:"list-scroll",attrs:{data:this.playHistory}},[s("div",{staticClass:"list-inner"},[s("song-list",{attrs:{songs:this.playHistory},on:{select:this.selectSong}})],1)]):this._e()],1),this._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:this.noResult,expression:"noResult"}],staticClass:"no-result-wrapper"},[s("no-result",{attrs:{title:this.noResultDesc}})],1)])])},staticRenderFns:[]},v=i("VU/8")(d,f,!1,function(t){i("7VTr")},"data-v-60aaafb7",null);s.default=v.exports}});
//# sourceMappingURL=7.f1177ff6667621ef16dd.js.map