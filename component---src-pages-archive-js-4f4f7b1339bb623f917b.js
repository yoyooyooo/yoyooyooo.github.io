(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{275:function(e,t,n){"use strict";n.r(t);n(58);var a=n(0),r=n.n(a),i=n(280),o=n(287),c=n.n(o),u=n(291),l=n.n(u),s=n(289),d=n.n(s),p=n(22),f=n(288),m=n.n(f),g=n(285),h=n.n(g),y=n(290),w=n.n(y),v=n(277),b=n(282),E=Object(p.withStyles)(function(e){return{paper:{width:400},root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}}})(function(e){var t=e.classes,n=e.children;return r.a.createElement(v.StaticQuery,{query:"3427377306",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,e.site.siteMetadata.title)),r.a.createElement(c.a,{position:"static"},r.a.createElement(m.a,null,r.a.createElement(d.a,{className:t.menuButton,color:"inherit","aria-label":"Menu",onClick:function(){return Object(v.navigate)("/")}},r.a.createElement(w.a,null)),r.a.createElement(h.a,{variant:"h6",color:"inherit",className:t.grow,onClick:function(){return Object(v.navigate)("/")}},e.site.siteMetadata.title),r.a.createElement(l.a,{to:"/archive",color:"inherit",component:v.Link},"归档"))),n)},data:i})}),x=n(286);t.default=Object(p.withStyles)(function(e){return{paper:Object.assign({},e.mixins.gutters(),{paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit,width:"80%",margin:"0 auto"})}})(function(e){e.classes;return r.a.createElement(E,null,r.a.createElement(x.a,null,"22"))})},277:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(2),o=n.n(i),c=n(276),u=n.n(c);n.d(t,"Link",function(){return u.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var l=n(278),s=n.n(l);n.d(t,"PageRenderer",function(){return s.a});var d=n(57);n.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},278:function(e,t,n){var a;e.exports=(a=n(281))&&a.default||a},280:function(e){e.exports={data:{site:{siteMetadata:{title:"yoyo"}}}}},281:function(e,t,n){"use strict";n.r(t);n(58);var a=n(0),r=n.n(a),i=n(2),o=n.n(i),c=n(86),u=n(4),l=function(e){var t=e.location,n=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},286:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o});var a=n(277),r=n(292),i=r.a.div.withConfig({displayName:"styled__Content",componentId:"sc-5w8yvr-0"})(["font-family:'微软雅黑';width:900px;margin:0 auto;padding:20px;a{text-decoration:none;color:#5050de;}"]),o=Object(r.a)(a.Link).withConfig({displayName:"styled__Link",componentId:"sc-5w8yvr-1"})(["display:block;margin-bottom:40px;text-decoration:none;color:inherit;"])}}]);