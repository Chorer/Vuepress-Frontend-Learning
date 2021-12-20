(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{613:function(t,s,a){"use strict";a.r(s);var n=a(12),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("DNS 中所说的记录，指的是域名和 IP 的对应关系。根据使用场景，有不同类型的记录：")]),t._v(" "),a("ul",[a("li",[t._v("A记录：地址记录。如果一个域名配置了 A 记录，DNS 就会把域名解析成 A 记录指定的 IP 地址。")]),t._v(" "),a("li",[t._v("CNAME 记录：规范名称记录。如果一个域名配置了 CNAME 记录，DNS 就会把域名解析成 CNAME 记录指定的另外一个域名。A 记录和 CNAME 记录是互斥的，不能共存")]),t._v(" "),a("li",[t._v("NS 记录：域名服务器记录。返回保存下一级域名信息的服务器地址，它指定该域名应该由哪一台 DNS 服务器进行解析。")]),t._v(" "),a("li",[t._v("MX 记录：邮件记录。返回接收电子邮件的服务器地址。")]),t._v(" "),a("li",[t._v("PTR 记录：逆向查询记录。只用于从IP地址查询域名。")])]),t._v(" "),a("h2",{attrs:{id:"dns-的工作机制-未引入-cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-的工作机制-未引入-cdn"}},[t._v("#")]),t._v(" DNS 的工作机制（未引入 CDN）")]),t._v(" "),a("blockquote",[a("p",[t._v("DNS 有两种查询方式，一种是递归查询，一种是迭代查询。")])]),t._v(" "),a("h3",{attrs:{id:"递归查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#递归查询"}},[t._v("#")]),t._v(" 递归查询")]),t._v(" "),a("p",[t._v("递归查询如下图所示。可以看到，每次的查询主体都在改变，请求层层转发，再层层响应，最后一定由 根DNS 返回结果给 本地 DNS")]),t._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://static.vue-js.com/a73be9e0-b78f-11eb-85f6-6fac77c0c9b3.png"}}),t._v(" "),a("h3",{attrs:{id:"迭代查询"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#迭代查询"}},[t._v("#")]),t._v(" 迭代查询")]),t._v(" "),a("p",[t._v("迭代查询如下图所示。查询主体始终是 本地DNS，所有的请求都由它发出，其它的 DNS 只是告诉它要向谁发送请求。")]),t._v(" "),a("img",{staticStyle:{zoom:"80%"},attrs:{src:"https://static.vue-js.com/b023e1c0-b78f-11eb-85f6-6fac77c0c9b3.png"}}),t._v(" "),a("h3",{attrs:{id:"解析过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析过程"}},[t._v("#")]),t._v(" 解析过程")]),t._v(" "),a("p",[t._v("下面以这张图为例重点解释 DNS 的迭代查询：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/%E5%85%B3%E4%BA%8E%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE/4.png",alt:""}})]),t._v(" "),a("p",[t._v("我们在浏览器中直接输入的是域名，但是浏览器必须知道服务器的 ip 地址，才能建立 TCP 连接并进而发送 http 请求。那么，如何根据服务器域名查找服务器的 ip 地址呢？")]),t._v(" "),a("ol",[a("li",[t._v("浏览器地址栏中输入 https://join.qq.com，按下回车")]),t._v(" "),a("li",[t._v("浏览器从 url 中提取出域名 join.qq.com，查找浏览器缓存中（"),a("RouterLink",{attrs:{to:"chrome://net-internals/#dns"}},[t._v("chrome://net-internals/#dns")]),t._v("）是否存在该域名到 ip 地址的映射。若没有，进入下一步")],1),t._v(" "),a("li",[t._v("查找操作系统缓存中是否存在该域名到 ip 地址的映射（命令行下 ipconfig/displaydns）。若没有，进入下一步")]),t._v(" "),a("li",[t._v("查找本机的 host 文件是否存在该域名到 ip 地址的映射。若没有，进入下一步")]),t._v(" "),a("li",[t._v("向本地 dns 发送查询请求，看本地 dns 是否缓存了该域名到 ip 地址的映射。若没有，进入下一步，开始进行域名的迭代解析")]),t._v(" "),a("li",[t._v("本地 dns 将域名发送给 根dns，根dns 发现域名中包含 com，于是返回负责解析 com 的 顶级dns 的 ip 地址")]),t._v(" "),a("li",[t._v("本地 dns 将域名发送给 顶级dns，顶级dns 发现域名中包含 qq.com，于是返回负责解析 "),a("a",{attrs:{href:"http://qq.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("qq.com"),a("OutboundLink")],1),t._v(" 的 权威dns 的 ip 地址")]),t._v(" "),a("li",[t._v("本地 dns 将域名发送给 权威dns，权威dns 发现域名中包含 join.qq.com，于是查找 A 记录，发现有一条 A 记录保存着 "),a("a",{attrs:{href:"http://join.qq.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("join.qq.com"),a("OutboundLink")],1),t._v(" 到 ip 地址的映射，于是返回这个 ip 地址给本地 dns")]),t._v(" "),a("li",[t._v("本地 dns 将这个 ip 地址回传给浏览器")]),t._v(" "),a("li",[t._v("自此，浏览器已经拿到了服务器的 ip 地址，于是通过三次握手与服务器建立 TCP 连接，接着发送 http 请求")])]),t._v(" "),a("p",[t._v("PS：顶级 dns 解析的是 .com，权威 dns 解析的是 join.qq.com，那么一开始根 dns 解析的是什么呢？其实它解析的是 .root，.root 是所有域名共有的后缀，即 join.qq.com 实际上是 join.qq.com.root，不过一般都是省略不写的。")]),t._v(" "),a("h2",{attrs:{id:"dns-的工作机制-引入-cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-的工作机制-引入-cdn"}},[t._v("#")]),t._v(" DNS 的工作机制（引入 CDN）")]),t._v(" "),a("h3",{attrs:{id:"cdn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[t._v("#")]),t._v(" CDN")]),t._v(" "),a("p",[t._v("远距离通信时，通信效率是非常低的，所以一般会使用 CDN —— 在全球多个节点架设代理服务器，客户端就近向代理服务器（而不是源服务器）发送请求。")]),t._v(" "),a("p",[t._v("关于 CDN，有一些概念要了解一下：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("命中和回源：当 CDN 网络中的节点服务器刚好缓存了客户端所需要的资源，并且没有过期时，则称为命中缓存；否则，节点服务器还是需要转发请求到源服务器，回到源服务器请求资源，这个叫做回源。")]),t._v(" "),a("p",[t._v("命中和回源各自对应着命中率和回源率，这是衡量 CDN 质量的两个指标。显然，好的 CDN 应该具有较高的命中率，具有较低的回源率。")])]),t._v(" "),a("li",[a("p",[t._v("CDN 的分类：")]),t._v(" "),a("ul",[a("li",[t._v("按照拓扑结构划分：一个是分散式 CDN，即在全球部署尽可能多的代理服务器；另一种是整合式 CDN，只在主要的数据中心有少量节点，但节点性能更强大，包括网络、吞吐量以及抗 DDoS 的能力。")]),t._v(" "),a("li",[t._v("按照内容分发方式划分：一个是 Push CDN，一个是 Pull CDN。前者是由内容服务器提前把内容 push 到 CDN 缓存起来；后者则是在用户访问内容时 CDN 才去 pull 目标资源并缓存起来")])])])]),t._v(" "),a("h3",{attrs:{id:"解析过程-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析过程-2"}},[t._v("#")]),t._v(" 解析过程")]),t._v(" "),a("p",[t._v("由于引入 CDN 之后，我们不再是向源服务器发送请求，所以需要的不再是源服务器的 ip 地址了，因此，DNS 的解析过程也发生了变化。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://myblog-1258623898.cos.ap-chengdu.myqcloud.com/%E5%85%B3%E4%BA%8E%E7%BD%91%E7%BB%9C%E5%8D%8F%E8%AE%AE/5.png",alt:""}})]),t._v(" "),a("p",[t._v("首先，前面的步骤还是一样的：")]),t._v(" "),a("ol",[a("li",[t._v("浏览器地址栏中输入 "),a("a",{attrs:{href:"https://join.qq.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://join.qq.com"),a("OutboundLink")],1),t._v("，按下回车")]),t._v(" "),a("li",[t._v("浏览器从 url 中提取出域名 "),a("a",{attrs:{href:"http://join.qq.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("join.qq.com"),a("OutboundLink")],1),t._v("，查找浏览器缓存中（ "),a("RouterLink",{attrs:{to:"chrome://net-internals/#dns"}},[t._v("chrome://net-internals/#dns")]),t._v("）是否存在该域名到 ip 地址的映射。若没有，进入下一步")],1),t._v(" "),a("li",[t._v("查找本机缓存中是否存在该域名到 ip 地址的映射（命令行下 ipconfig/displaydns）。若没有，进入下一步")]),t._v(" "),a("li",[t._v("查找本机的 host 文件是否存在该域名到 ip 地址的映射。若没有，进入下一步")]),t._v(" "),a("li",[t._v("向本地 dns 发送查询请求，看本地 dns 是否缓存了该域名到 ip 地址的映射。若没有，进入下一步，开始进行域名的迭代解析")]),t._v(" "),a("li",[t._v("本地 dns 将域名发送给根dns，根dns 发现域名中包含 com，于是返回负责解析 com 的顶级dns的 ip 地址")]),t._v(" "),a("li",[t._v("本地 dns 将域名发送给顶级dns，顶级dns 发现域名中包含 "),a("a",{attrs:{href:"http://qq.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("qq.com"),a("OutboundLink")],1),t._v("，于是返回负责解析 "),a("a",{attrs:{href:"http://qq.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("qq.com"),a("OutboundLink")],1),t._v(" 的权威dns 的 ip 地址")])]),t._v(" "),a("p",[t._v("从第八步开始，发生了变化：")]),t._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[t._v("本地 dns 将域名发送给权威dns，权威dns 发现域名中包含 "),a("a",{attrs:{href:"http://join.qq.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("join.qq.com"),a("OutboundLink")],1),t._v("，于是查找 CNAME 记录和它对应的 A 记录。CNAME 记录的 name 是域名，value 是域名的一个别名，指示着一个全局负载均衡系统（GSLB），而 A 记录的 name 则是这个别名，value 是这个 GSLB 的 ip 地址。权威 dns 最终将这个 ip 地址返回给本地 dns")]),t._v(" "),a("li",[t._v("本地 dns 向 GSLB 发送请求。GSLB 根据本地 dns 的 ip 地址推测其地理位置，找出这个位置里最佳的本地负载均衡系统（SLB），并将 SLB 的 ip 地址返回给本地 dns")]),t._v(" "),a("li",[t._v("本地 dns 将这个 ip 地址回传给浏览器")]),t._v(" "),a("li",[t._v("浏览器向 SLB 发送请求。SLB 综合各种因素（距离、负载情况、响应速度、健康程度等），找出最佳的代理服务器节点，并返回这个节点的 ip 地址")]),t._v(" "),a("li",[t._v("浏览器向这个节点发送请求")]),t._v(" "),a("li",[t._v("节点判断自己的缓存中是否有浏览器请求的资源，若有的话是否已经过期，若存在且不过期，则命中；否则需要回源")])]),t._v(" "),a("h2",{attrs:{id:"dns-优化方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dns-优化方案"}},[t._v("#")]),t._v(" DNS 优化方案")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("减少 DNS 的请求次数")])]),t._v(" "),a("li",[a("p",[t._v("DNS 预解析：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("http-equiv")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("x-dns-prefetch-control"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("on"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//www.img.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//www.api.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("dns-prefetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("//www.test.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);