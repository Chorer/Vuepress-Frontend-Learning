(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{558:function(v,_,e){"use strict";e.r(_);var t=e(12),l=Object(t.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("p",[v._v("Flex 是 Flexible Box 的缩写，意为“弹性布局”，用来为盒状模型提供最大的灵活性。利用 Flex 布局，可以简便、完整、响应式地实现各种页面布局。目前，它已经得到了所有现代浏览器的支持。")]),v._v(" "),e("p",[v._v("要使用 Flex 布局，只需给元素设置 "),e("code",[v._v("display:flex")]),v._v(" 或者 "),e("code",[v._v("display:inline-flex")]),v._v(" 。前者会将元素作为块状弹性容器，若没有指定宽度，默认撑满一整行；后者会将元素作为内联弹性容器，若没有指定宽度，默认由内容撑开。")]),v._v(" "),e("p",[v._v("注意，设为 Flex 布局以后，子元素的 "),e("code",[v._v("float")]),v._v("、"),e("code",[v._v("clear")]),v._v(" 和 "),e("code",[v._v("vertical-align")]),v._v(" 属性将失效。")]),v._v(" "),e("h2",{attrs:{id:"父容器和子项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#父容器和子项目"}},[v._v("#")]),v._v(" 父容器和子项目")]),v._v(" "),e("p",[v._v("设置了 "),e("code",[v._v("display:flex")]),v._v(" 或者 "),e("code",[v._v("display:inline-flex")]),v._v(" 的元素将成为父容器 (flex container) ，其内部所有子元素成为子项目 (flex item)。")]),v._v(" "),e("h2",{attrs:{id:"主轴和交叉轴"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#主轴和交叉轴"}},[v._v("#")]),v._v(" 主轴和交叉轴")]),v._v(" "),e("p",[v._v("如下图所示：")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-2.png",alt:""}})]),v._v(" "),e("ul",[e("li",[v._v("父容器存在两条轴，"),e("strong",[v._v("主轴")]),v._v("（main axis）和"),e("strong",[v._v("交叉轴")]),v._v("（cross axis）。")]),v._v(" "),e("li",[v._v("主轴的开始位置叫做 "),e("code",[v._v("main start")]),v._v("，结束位置叫做 "),e("code",[v._v("main end")]),v._v("；交叉轴的开始位置叫做 "),e("code",[v._v("cross start")]),v._v("，结束位置叫做 "),e("code",[v._v("cross end")]),v._v("。主轴默认情况下水平向右，我们可以通过 "),e("code",[v._v("flex-direction")]),v._v(" 指定它的方向，主轴方向确定后，我们进而可以得到交叉轴的方向。")]),v._v(" "),e("li",[v._v("子项目默认沿主轴排列。单个项目占据的主轴空间叫做 "),e("code",[v._v("main size")]),v._v("，占据的交叉轴空间叫做 "),e("code",[v._v("cross size")]),v._v("。")])]),v._v(" "),e("h2",{attrs:{id:"_6-大容器属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-大容器属性"}},[v._v("#")]),v._v(" 6 大容器属性")]),v._v(" "),e("p",[v._v("以下 6 个属性设置在父容器上：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("flex-direction")])]),v._v(" "),e("li",[e("code",[v._v("justify-content")])]),v._v(" "),e("li",[e("code",[v._v("align-items")])]),v._v(" "),e("li",[e("code",[v._v("flex-wrap")])]),v._v(" "),e("li",[e("code",[v._v("flex-flow")])]),v._v(" "),e("li",[e("code",[v._v("align-content")])])]),v._v(" "),e("h3",{attrs:{id:"flex-direction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex-direction"}},[v._v("#")]),v._v(" "),e("code",[v._v("flex-direction")])]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("flex-direction")]),v._v(" 属性定义主轴的方向，进而决定子项目的排列方向。")])]),v._v(" "),e("p",[e("code",[v._v("row")]),v._v("：默认值。主轴水平向右，同时交叉轴垂直向下")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-3.png",alt:""}})]),v._v(" "),e("p",[e("code",[v._v("row-reverse")]),v._v("：主轴水平向左，同时交叉轴垂直向下")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-4.png",alt:""}})]),v._v(" "),e("p",[e("code",[v._v("column")]),v._v("：主轴垂直向下，同时交叉轴水平向右")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-5.png",alt:""}})]),v._v(" "),e("p",[e("code",[v._v("column-reverse")]),v._v("：主轴垂直向上，同时交叉轴水平向右")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-6.png",alt:""}})]),v._v(" "),e("p",[e("strong",[v._v("注意")]),v._v("：只要主轴是 row，交叉轴就一定是向下的；而只要主轴是 column，交叉轴就一定是向右的。和所谓的逆时针、顺时针没关系。详细的解释"),e("a",{attrs:{href:"https://chorer.github.io/2019/06/07/Trs-FlexBox%20%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86/",target:"_blank",rel:"noopener noreferrer"}},[v._v("另一篇博客"),e("OutboundLink")],1),v._v("有说明。")]),v._v(" "),e("h3",{attrs:{id:"justify-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#justify-content"}},[v._v("#")]),v._v(" "),e("code",[v._v("justify-content")])]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("justify-content")]),v._v(" 属性定义子项目沿着主轴方向具体如何排列")])]),v._v(" "),e("p",[e("code",[v._v("flex-start")]),v._v("：起始端对齐")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-7.png",alt:""}})]),v._v(" "),e("p",[e("code",[v._v("flex-end")]),v._v("：末尾端对齐")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-7.5.png",alt:""}})]),v._v(" "),e("p",[e("code",[v._v("center")]),v._v(": 居中对齐（用于实现水平居中）")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-8.png",alt:""}})]),v._v(" "),e("p",[e("code",[v._v("space-between")]),v._v(": 子项目和子项目的间距相等，首尾两端的子项目与父容器相切")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-10.png",alt:""}})]),v._v(" "),e("p",[e("code",[v._v("space-around")]),v._v(": 子项目和子项目的间距相等，首尾两端的子项目到父容器的距离是子项目间距的一半（注意 around 的意思，相当于以每个子项目为中心，会有一片环绕空间）")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-9.png",alt:""}})]),v._v(" "),e("p",[e("code",[v._v("space-evenly")]),v._v("：子项目和子项目的间距相等，首尾两端的子项目到父容器的距离和子项目间距一样")]),v._v(" "),e("h3",{attrs:{id:"align-items"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#align-items"}},[v._v("#")]),v._v(" "),e("code",[v._v("align-items")])]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("align-items")]),v._v(" 属性定义子项目沿着交叉轴方向具体如何排列")])]),v._v(" "),e("p",[e("code",[v._v("flex-start")]),v._v(": 起始端对齐")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-11.png",alt:""}})]),v._v(" "),e("p",[e("code",[v._v("flex-end")]),v._v(": 末尾端对齐")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-12.png",alt:""}})]),v._v(" "),e("p",[e("code",[v._v("center")]),v._v("：居中对齐（用于实现垂直居中）")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-13.png",alt:""}})]),v._v(" "),e("p",[e("code",[v._v("baseline")]),v._v(": 基线对齐。以一开始是起始端对齐为例，"),e("code",[v._v("cross-strat")]),v._v(" 到各个子项目基线的距离可能各不相同，一旦设置了基线对齐，则：距离最大的那个子项目保持与 "),e("code",[v._v("corss-start")]),v._v(" 相切，其他子项目的基线均向该项目的基线对齐")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-14.png",alt:""}})]),v._v(" "),e("p",[e("code",[v._v("stretch")]),v._v("：子项目沿着交叉轴方向拉伸至与父容器尺寸一样（可用于实现等高布局）")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-15.png",alt:""}})]),v._v(" "),e("h3",{attrs:{id:"flex-wrap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex-wrap"}},[v._v("#")]),v._v(" "),e("code",[v._v("flex-wrap")])]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("flex-wrap")]),v._v(" 属性定义子项目是否换行、如何换行")])]),v._v(" "),e("p",[e("code",[v._v("nowrap")]),v._v("：不换行（默认）。也就是说父容器尺寸不够时，会为了达到不换行的效果而压缩子项目的尺寸")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-16.png",alt:""}})]),v._v(" "),e("p",[e("code",[v._v("wrap")]),v._v("：正常换行")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-17.png",alt:""}})]),v._v(" "),e("p",[e("code",[v._v("wrap-reverse")]),v._v("：逆序换行。即沿着交叉轴的反方向换行，如下图：")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-18.png",alt:""}})]),v._v(" "),e("p",[v._v("确定换行方向，也可以采用以下方法：")]),v._v(" "),e("ul",[e("li",[v._v("首先确定正常换行情况下的排列方式")]),v._v(" "),e("li",[v._v("保持第一行不动，将其他行沿着与主轴垂直的方向翻转")])]),v._v(" "),e("h3",{attrs:{id:"flex-flow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex-flow"}},[v._v("#")]),v._v(" "),e("code",[v._v("flex-flow")])]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("flex-flow")]),v._v(" 属性定义子项目如何流动，以及流动到终点是否换行。")])]),v._v(" "),e("p",[v._v("简单地说，它是 "),e("code",[v._v("flex-direction")]),v._v(" 和 "),e("code",[v._v("flex-wrap")]),v._v(" 属性的结合。它的取值可以是 "),e("code",[v._v("row nowrap")]),v._v("、"),e("code",[v._v("row")]),v._v("、"),e("code",[v._v("wrap")]),v._v(" 等等。")]),v._v(" "),e("h3",{attrs:{id:"align-content"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#align-content"}},[v._v("#")]),v._v(" "),e("code",[v._v("align-content")])]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("align-content")]),v._v(" 属性定义子项目存在多行时，行与行之间的对齐方式")])]),v._v(" "),e("p",[e("code",[v._v("flex-start")]),v._v("：起始端对齐")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-19.png",alt:""}})]),v._v(" "),e("p",[e("code",[v._v("flex-end")]),v._v("：末尾端对齐")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-20.png",alt:""}})]),v._v(" "),e("p",[e("code",[v._v("center")]),v._v("：居中对齐")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-21.png",alt:""}})]),v._v(" "),e("p",[e("code",[v._v("space-around")]),v._v("：各行沿交叉轴均匀分布，位于首尾两端的行到父容器的距离是行与行距离的一半")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-22.png",alt:""}})]),v._v(" "),e("p",[e("code",[v._v("space-between")]),v._v(": 各行沿交叉轴均匀分布，位于首尾两端的行到父容器相切")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-23.png",alt:""}})]),v._v(" "),e("p",[e("code",[v._v("stretch")]),v._v("：拉伸对齐")]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-24.png",alt:""}})]),v._v(" "),e("h2",{attrs:{id:"_6-大项目属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-大项目属性"}},[v._v("#")]),v._v(" 6 大项目属性")]),v._v(" "),e("p",[v._v("以下 6 个属性设置在子项目上：")]),v._v(" "),e("ul",[e("li",[e("code",[v._v("order")])]),v._v(" "),e("li",[e("code",[v._v("flex-grow")])]),v._v(" "),e("li",[e("code",[v._v("flex-shrink")])]),v._v(" "),e("li",[e("code",[v._v("flex-basis")])]),v._v(" "),e("li",[e("code",[v._v("flex")])]),v._v(" "),e("li",[e("code",[v._v("align-self")])])]),v._v(" "),e("h3",{attrs:{id:"order"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#order"}},[v._v("#")]),v._v(" "),e("code",[v._v("order")])]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("order")]),v._v(" 属性定义子项目的排列顺序，它会覆盖 HTML 结构中的顺序。"),e("strong",[v._v("默认值为 0")]),v._v(" ，即遵循 HTML 结构排列；可以是负值，数值越小越靠前。")])]),v._v(" "),e("p",[e("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/CSS%20%E5%9F%BA%E7%A1%80%E7%B3%BB%E5%88%97%EF%BC%9Aflex%20%E5%B8%83%E5%B1%80/flex%20%E5%B8%83%E5%B1%80-25.png",alt:""}})]),v._v(" "),e("h3",{attrs:{id:"flex-grow"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex-grow"}},[v._v("#")]),v._v(" "),e("code",[v._v("flex-grow")])]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("flex-grow")]),v._v(" 属性定义了父容器还有剩余空间时，子项目如何瓜分这些"),e("strong",[v._v("剩余空间")]),v._v("。")])]),v._v(" "),e("p",[e("code",[v._v("flex-grow")]),v._v(" 的值是一个权重（扩张因子），子项目将按照设定的这个权重去瓜分父容器的剩余空间。默认情况下，权重为 0，表示即使有剩余空间，子项目也不会去瓜分。")]),v._v(" "),e("h4",{attrs:{id:"权重为非-0-整数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#权重为非-0-整数"}},[v._v("#")]),v._v(" 权重为非 0 整数")]),v._v(" "),e("p",[v._v("当然，我们也可以指定权重为一个非 0 的整数。通过一个例子来理解：")]),v._v(" "),e("p",[v._v("假设父容器宽度为 500px，三个子项目的 width 分别为 100px，150px，100px，"),e("code",[v._v("flex-grow")]),v._v(" 分别是 1，2，3。那么剩余空间就是 150px，于是三个项目所得到的多余空间分别是：")]),v._v(" "),e("ul",[e("li",[v._v("150 * 1 / 6 = 25px")]),v._v(" "),e("li",[v._v("150 * 2 / 6 = 50px")]),v._v(" "),e("li",[v._v("150 * 3 / 6 = 75px")])]),v._v(" "),e("p",[v._v("于是三个项目最终的宽度分别为：")]),v._v(" "),e("ul",[e("li",[v._v("100px + 25px = 125px")]),v._v(" "),e("li",[v._v("150px + 50px = 200px")]),v._v(" "),e("li",[v._v("100px + 75px = 175px")])]),v._v(" "),e("h4",{attrs:{id:"权重为小数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#权重为小数"}},[v._v("#")]),v._v(" 权重为小数")]),v._v(" "),e("p",[v._v("当然，我们也可以指定权重为一个小数。如果权重是小数，那么将不会计算权重之和作为权重率的分母，而是直接取 1 作为分母。在这个基础上，若权重之和小于 1，则剩余空间不会全部分配给子项目。")]),v._v(" "),e("p",[v._v("比如改一下上面的例子：三个项目的 "),e("code",[v._v("flex-grow")]),v._v(" 改为 0.1、0.2、0.3，那么计算公式将变成下面这样：")]),v._v(" "),e("ul",[e("li",[v._v("150 * 0.1 / 1 = 15px")]),v._v(" "),e("li",[v._v("150 * 0.2 / 1 = 30px")]),v._v(" "),e("li",[v._v("150 * 0.3 / 1 = 45px")])]),v._v(" "),e("p",[v._v("150px - 15px - 30px - 45px = 60px，可见还有 60px 没有分配给任何子项目。\n三个项目的最终宽度分别为：")]),v._v(" "),e("ul",[e("li",[v._v("100px + 15px = 115px")]),v._v(" "),e("li",[v._v("150px + 30px = 180px")]),v._v(" "),e("li",[v._v("100px + 45px = 145px")])]),v._v(" "),e("p",[v._v("注意："),e("code",[v._v("flex-grow")]),v._v(" 还会受到 "),e("code",[v._v("max-width")]),v._v(" 的影响。如果最终 grow 后的结果大于 "),e("code",[v._v("max-width")]),v._v(" 指定的值，则 "),e("code",[v._v("max-width")]),v._v(" 的值将会优先使用。同样会导致父容器有部分剩余空间没有分配。")]),v._v(" "),e("h3",{attrs:{id:"flex-shrink"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex-shrink"}},[v._v("#")]),v._v(" "),e("code",[v._v("flex-shrink")])]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("flex-shrink")]),v._v(" 属性定义了父容器空间不足时子项目"),e("strong",[v._v("如何收缩")]),v._v("以适应有限的空间")])]),v._v(" "),e("p",[v._v("该属性与 "),e("code",[v._v("flex-grow")]),v._v(" 相对，不同的是其值的计算还与自身宽度有关。")]),v._v(" "),e("h4",{attrs:{id:"shrink-之和大于-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shrink-之和大于-1"}},[v._v("#")]),v._v(" shrink 之和大于 1")]),v._v(" "),e("p",[v._v("举个例子：父容器 500px，三个子项目宽度分别为 150px，200px，300px，"),e("code",[v._v("flex-shrink")]),v._v(" 分别为 1，2，3。")]),v._v(" "),e("p",[v._v("首先，计算子元素溢出多少：150 + 200 + 300 - 500 = -150px。那么这 -150px 将由三个元素分别收缩一定的量来弥补。")]),v._v(" "),e("p",[v._v("具体的计算方式为：每个元素收缩的权重为其 "),e("code",[v._v("flex-shrink")]),v._v(" 乘以其宽度，所以总权重为 1 * 150 + 2 * 200 + 3 * 300 = 1450")]),v._v(" "),e("p",[v._v("三个元素分别收缩：")]),v._v(" "),e("ul",[e("li",[v._v("$150*\\frac{1(flex-shrink)*150(width)}{1450}=-15.5$​")]),v._v(" "),e("li",[v._v("$150*\\frac{2(flex-shrink)*200(width)}{1450}=-41.4$​​")]),v._v(" "),e("li",[v._v("$150*\\frac{3(flex-shrink)*300(width)}{1450}=-93.1$​")])]),v._v(" "),e("p",[v._v("三个元素的最终宽度分别为：")]),v._v(" "),e("ul",[e("li",[v._v("150 - 15.5 = 134.5")]),v._v(" "),e("li",[v._v("200 - 41.4 = 158.6")]),v._v(" "),e("li",[v._v("300 - 93.1 = 206.9")])]),v._v(" "),e("h4",{attrs:{id:"shrink-之和小于-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#shrink-之和小于-1"}},[v._v("#")]),v._v(" shrink 之和小于 1")]),v._v(" "),e("p",[v._v("同样，当所有元素的 "),e("code",[v._v("flex-shrink")]),v._v(" 之和小于 1 时，计算方式也会有所不同。此时，并不会收缩所有的空间，而只会收缩 "),e("code",[v._v("flex-shrink")]),v._v(" 之和相对于 1 的比例的空间。")]),v._v(" "),e("p",[v._v("还是上面的例子，但是 "),e("code",[v._v("flex-shrink")]),v._v(" 分别改为 0.1，0.2，0.3。于是总权重为 145（正好缩小 10 倍，略去计算公式）。")]),v._v(" "),e("p",[v._v("三个元素收缩总和并不是 150px，而是只会收缩 150px 的 (0.1 + 0.2 + 0.3) / 1 即 60% 的空间：90px。")]),v._v(" "),e("p",[v._v("每个元素收缩的空间为：")]),v._v(" "),e("ul",[e("li",[v._v("$90*\\frac{0.1(flex-shrink)*150(width)}{145}=-9.31$​​")]),v._v(" "),e("li",[v._v("$90*\\frac{0.2(flex-shrink)*200(width)}{145}=-24.83$​​​​")]),v._v(" "),e("li",[v._v("$90*\\frac{0.3(flex-shrink)*300(width)}{145}=-55.86$​​")])]),v._v(" "),e("p",[v._v("三个元素的最终宽度分别为：")]),v._v(" "),e("ul",[e("li",[v._v("150 - 9.31 = 140.69")]),v._v(" "),e("li",[v._v("200 - 24.83 = 175.17")]),v._v(" "),e("li",[v._v("300 - 55.86 = 244.14")])]),v._v(" "),e("p",[v._v("当然，"),e("code",[v._v("flex-shrink")]),v._v(" 也会受到 "),e("code",[v._v("min-width")]),v._v(" 的影响。")]),v._v(" "),e("h3",{attrs:{id:"flex-basis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex-basis"}},[v._v("#")]),v._v(" "),e("code",[v._v("flex-basis")])]),v._v(" "),e("blockquote",[e("p",[e("code",[v._v("flex-basis")]),v._v(" 属性定义了子项目在不伸缩（即没有以上两个属性影响）时的原始尺寸，主轴水平时表示宽度，主轴垂直时表示高度。默认值为 auto。")])]),v._v(" "),e("p",[v._v("以主轴水平为例，说一下子项目宽度如何决定。简单地说，应用规则是：\ncontent -> width -> flex-basis (limted by max | min-width)\n也就是说：")]),v._v(" "),e("ul",[e("li",[v._v("在显式指定 "),e("code",[v._v("flex-basis")]),v._v(" 时，"),e("code",[v._v("flex-basis")]),v._v(" 即为该值，"),e("code",[v._v("width")]),v._v(" 被忽略；")]),v._v(" "),e("li",[v._v("在没有显式指定 "),e("code",[v._v("flex-basis")]),v._v(" 时，"),e("code",[v._v("flex-basis")]),v._v(" 为 "),e("code",[v._v("auto")]),v._v("，即采用 width 的值；")]),v._v(" "),e("li",[v._v("在没有设置 "),e("code",[v._v("width")]),v._v(" 的值时， "),e("code",[v._v("flex-basis")]),v._v(" 采用项目内容的大小")]),v._v(" "),e("li",[e("code",[v._v("flex-basis")]),v._v(" 始终无法小于指定的最小宽度，无法大于指定的最大宽度")])]),v._v(" "),e("h3",{attrs:{id:"flex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#flex"}},[v._v("#")]),v._v(" "),e("code",[v._v("flex")])]),v._v(" "),e("p",[e("code",[v._v("flex")]),v._v("是一个复合属性，值只有一个时等同于 "),e("code",[v._v("flex-grow")]),v._v("，值为三个时，等同于设置了 "),e("code",[v._v("flex-grow")]),v._v(","),e("code",[v._v("flex-shrink")]),v._v(","),e("code",[v._v("flex-basis")]),v._v("。虽然 flex 是多个属性的缩写，允许 1 - 3 个值连用，但通常用 1 个值就可以满足需求")]),v._v(" "),e("h3",{attrs:{id:"align-self"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#align-self"}},[v._v("#")]),v._v(" "),e("code",[v._v("align-self")])]),v._v(" "),e("p",[e("code",[v._v("align-self")]),v._v(" 属性单独定义了一个子项目在交叉轴方向上如何排列，它的可选值与 "),e("code",[v._v("align-items")]),v._v(" 的可选值完全一致，两者同时设置时将优先考虑 "),e("code",[v._v("align-self")]),v._v("。")])])}),[],!1,null,null,null);_.default=l.exports}}]);