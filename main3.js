<!-- Google Tag Manager -->
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-5P98"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5P98');</script>
<!-- End Google Tag Manager -->
/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-flexbox-flexboxtweener !*/
!function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,s,l;for(var f in v)if(v.hasOwnProperty(f)){if(e=[],n=v[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)s=e[i],l=s.split("."),1===l.length?Modernizr[l[0]]=o:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=o),C.push((o?"":"no-")+l.join("-"))}}function i(e,n){return!!~(""+e).indexOf(n)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function l(e,n){return function(){return e.apply(n,arguments)}}function f(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?l(o,t||n):o);return!1}function a(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function u(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function d(){var e=n.body;return e||(e=u(b?"svg":"body"),e.fake=!0),e}function p(e,t,r,o){var i,s,l,f,a="modernizr",p=u("div"),c=d();if(parseInt(r,10))for(;r--;)l=u("div"),l.id=o?o[r]:a+(r+1),p.appendChild(l);return i=u("style"),i.type="text/css",i.id="s"+a,(c.fake?c:p).appendChild(i),c.appendChild(p),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),p.id=a,c.fake&&(c.style.background="",c.style.overflow="hidden",f=_.style.overflow,_.style.overflow="hidden",_.appendChild(c)),s=t(p,e),c.fake?(c.parentNode.removeChild(c),_.style.overflow=f,_.offsetHeight):p.parentNode.removeChild(p),!!s}function c(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(a(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+a(n[o])+":"+r+")");return i=i.join(" or "),p("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function m(e,n,o,l){function f(){d&&(delete E.style,delete E.modElem)}if(l=r(l,"undefined")?!1:l,!r(o,"undefined")){var a=c(e,o);if(!r(a,"undefined"))return a}for(var d,p,m,h,y,v=["modernizr","tspan"];!E.style;)d=!0,E.modElem=u(v.shift()),E.style=E.modElem.style;for(m=e.length,p=0;m>p;p++)if(h=e[p],y=E.style[h],i(h,"-")&&(h=s(h)),E.style[h]!==t){if(l||r(o,"undefined"))return f(),"pfx"==n?h:!0;try{E.style[h]=o}catch(g){}if(E.style[h]!=y)return f(),"pfx"==n?h:!0}return f(),!1}function h(e,n,t,o,i){var s=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+x.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?m(l,n,o,i):(l=(e+" "+S.join(s+" ")+s).split(" "),f(l,n,t))}function y(e,n,r){return h(e,t,t,n,r)}var v=[],g={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){v.push({name:e,fn:n,options:t})},addAsyncTest:function(e){v.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=g,Modernizr=new Modernizr;var C=[],w="Moz O ms Webkit",x=g._config.usePrefixes?w.split(" "):[];g._cssomPrefixes=x;var S=g._config.usePrefixes?w.toLowerCase().split(" "):[];g._domPrefixes=S;var _=n.documentElement,b="svg"===_.nodeName.toLowerCase(),z={elem:u("modernizr")};Modernizr._q.push(function(){delete z.elem});var E={style:z.elem.style};Modernizr._q.unshift(function(){delete E.style}),g.testAllProps=h,g.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("flexboxtweener",y("flexAlign","end",!0)),o(),delete g.addTest,delete g.addAsyncTest;for(var P=0;P<Modernizr._q.length;P++)Modernizr._q[P]();e.Modernizr=Modernizr}(window,document);

if (!Modernizr.flexbox && !Modernizr.flexboxtweener) {

  var $body = $('body');

  var nodesClasses = {
    wrapper: 'not-supported-browser',
    container: 'not-supported-browser__container',

    title: 'not-supported-browser__title',
    content: 'not-supported-browser__content',
    logo: 'not-supported-browser__logo'
  };

  var nodes = {
    wrapper: $('<div class="' + nodesClasses.wrapper + '"></div>'),
    title: $('<div class="' + nodesClasses.title + '">Sorry, your browser is not fully supported</div>'),
    content: $('<div class="' + nodesClasses.content + '">There may be some issues with pages layout in your current browser. <br> Please use an alternate browser until we resolve the issues. <br>Thank you.</div>'),
    container: $('<div class="' + nodesClasses.container + '"></div>'),
    logo: $('<div class="' + nodesClasses.logo + '"><svg class="sprite-img _jetbrains" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#jetbrains"></use></svg></div>')
  };

  $body.addClass('overflow-hidden');


  nodes.content
    .prepend(nodes.title)
    .prepend(nodes.logo);

  nodes.container
    .append(nodes.content);

  nodes.wrapper
    .append(nodes.container)
    .appendTo($body);
}
