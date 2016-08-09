 
        (function () {
          var customDocumentWrite = function(content) {
            var jquery = null;

            if (window.jQuery) {
              jquery = window.jQuery;
            } else if (window.Checkout && window.Checkout.$) {
              jquery = window.Checkout.$;
            }

            if (jquery) {
              jquery('body').append(content);
            }
          };

          var analytics = document.createElement('script');
          var loaded = false;
          var onload = function() {
            if (loaded) return;
            loaded = true;
            window.ShopifyAnalytics.lib = window.trekkie.noConflict();
            window.ShopifyAnalytics.lib.initialize(
              {"Trekkie":{"appName":"storefront","environment":"production","defaultAttributes":{"shopId":4873021}}}
            );

            window.ShopifyAnalytics.lib.ready(function() {
              

              var originalDocumentWrite = document.write;
              document.write = customDocumentWrite;
              try { window.ShopifyAnalytics.merchantGoogleAnalytics.call(this); } catch(error) {};
              document.write = originalDocumentWrite;

              
        window.ShopifyAnalytics.lib.page(
          null,
          {"pageType":"home"}
        );
      
              
            });
          }
          analytics.onload = onload;
          analytics.onreadystatechange = function() {
            if (!/complete|loaded/.test(analytics.readyState)) return;
            onload();
          }
          analytics.async = true;
          analytics.src = 'https://cdn.shopify.com/s/javascripts/trekkie.storefront.min.js?v=2016.06.23';
          document.getElementsByTagName('head')[0].appendChild(analytics);
          
      var eventsListenerScript = document.createElement('script');
      eventsListenerScript.async = true;
      eventsListenerScript.src = "//cdn.shopify.com/s/assets/shop_events_listener-b76d2fd98d2ac218ee84279bcdf95bb8d0e6b8fe968d6e51742f83b2054d1051.js";
      document.getElementsByTagName('head')[0].appendChild(eventsListenerScript);
    
        })();
        
        function floatToString(e,t){var n=e.toFixed(t).toString();return n.match(/^\.\d+/)?"0"+n:n}function attributeToString(e){return"string"!=typeof e&&(e+="","undefined"===e&&(e="")),jQuery.trim(e)}"undefined"==typeof window.Shopify&&(window.Shopify={}),Shopify.money_format="${{amount}}",Shopify.onError=function(XMLHttpRequest,textStatus){var data=eval("("+XMLHttpRequest.responseText+")");data.message?alert(data.message+"("+data.status+"): "+data.description):alert("Error : "+Shopify.fullMessagesFromErrors(data).join("; ")+".")},Shopify.fullMessagesFromErrors=function(e){var t=[];return jQuery.each(e,function(e,n){jQuery.each(n,function(n,r){t.push(e+" "+r)})}),t},Shopify.onCartUpdate=function(e){alert("There are now "+e.item_count+" items in the cart.")},Shopify.onCartShippingRatesUpdate=function(e,t){var n="";t.zip&&(n+=t.zip+", "),t.province&&(n+=t.province+", "),n+=t.country,alert("There are "+e.length+" shipping rates available for "+n+", starting at "+Shopify.formatMoney(e[0].price)+".")},Shopify.onItemAdded=function(e){alert(e.title+" was added to your shopping cart.")},Shopify.onProduct=function(e){alert("Received everything we ever wanted to know about "+e.title)},Shopify.formatMoney=function(e,t){function n(e,t){return"undefined"==typeof e?t:e}function r(e,t,r,i){if(t=n(t,2),r=n(r,","),i=n(i,"."),isNaN(e)||null==e)return 0;e=(e/100).toFixed(t);var o=e.split("."),a=o[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+r),s=o[1]?i+o[1]:"";return a+s}"string"==typeof e&&(e=e.replace(".",""));var i="",o=/\{\{\s*(\w+)\s*\}\}/,a=t||this.money_format;switch(a.match(o)[1]){case"amount":i=r(e,2);break;case"amount_no_decimals":i=r(e,0);break;case"amount_with_comma_separator":i=r(e,2,".",",");break;case"amount_no_decimals_with_comma_separator":i=r(e,0,".",",")}return a.replace(o,i)},Shopify.resizeImage=function(e,t){try{if("original"==t)return e;var n=e.match(/(.*\/[\w\-\_\.]+)\.(\w{2,4})/);return n[1]+"_"+t+"."+n[2]}catch(r){return e}},Shopify.addItem=function(e,t,n){var t=t||1,r={type:"POST",url:"/cart/add.js",data:"quantity="+t+"&id="+e,dataType:"json",success:function(e){"function"==typeof n?n(e):Shopify.onItemAdded(e)},error:function(e,t){Shopify.onError(e,t)}};jQuery.ajax(r)},Shopify.addItemFromForm=function(e,t){var n={type:"POST",url:"/cart/add.js",data:jQuery("#"+e).serialize(),dataType:"json",success:function(e){"function"==typeof t?t(e):Shopify.onItemAdded(e)},error:function(e,t){Shopify.onError(e,t)}};jQuery.ajax(n)},Shopify.getCart=function(e){jQuery.getJSON("/cart.js",function(t,n){"function"==typeof e?e(t):Shopify.onCartUpdate(t)})},Shopify.pollForCartShippingRatesForDestination=function(e,t,n){n=n||Shopify.onError;var r=function(){jQuery.ajax("/cart/async_shipping_rates",{dataType:"json",success:function(n,i,o){200===o.status?"function"==typeof t?t(n.shipping_rates,e):Shopify.onCartShippingRatesUpdate(n.shipping_rates,e):setTimeout(r,500)},error:n})};return r},Shopify.getCartShippingRatesForDestination=function(e,t,n){n=n||Shopify.onError;var r={type:"POST",url:"/cart/prepare_shipping_rates",data:Shopify.param({shipping_address:e}),success:Shopify.pollForCartShippingRatesForDestination(e,t,n),error:n};jQuery.ajax(r)},Shopify.getProduct=function(e,t){jQuery.getJSON("/products/"+e+".js",function(e,n){"function"==typeof t?t(e):Shopify.onProduct(e)})},Shopify.changeItem=function(e,t,n){var r={type:"POST",url:"/cart/change.js",data:"quantity="+t+"&id="+e,dataType:"json",success:function(e){"function"==typeof n?n(e):Shopify.onCartUpdate(e)},error:function(e,t){Shopify.onError(e,t)}};jQuery.ajax(r)},Shopify.removeItem=function(e,t){var n={type:"POST",url:"/cart/change.js",data:"quantity=0&id="+e,dataType:"json",success:function(e){"function"==typeof t?t(e):Shopify.onCartUpdate(e)},error:function(e,t){Shopify.onError(e,t)}};jQuery.ajax(n)},Shopify.clear=function(e){var t={type:"POST",url:"/cart/clear.js",data:"",dataType:"json",success:function(t){"function"==typeof e?e(t):Shopify.onCartUpdate(t)},error:function(e,t){Shopify.onError(e,t)}};jQuery.ajax(t)},Shopify.updateCartFromForm=function(e,t){var n={type:"POST",url:"/cart/update.js",data:jQuery("#"+e).serialize(),dataType:"json",success:function(e){"function"==typeof t?t(e):Shopify.onCartUpdate(e)},error:function(e,t){Shopify.onError(e,t)}};jQuery.ajax(n)},Shopify.updateCartAttributes=function(e,t){var n="";jQuery.isArray(e)?jQuery.each(e,function(e,t){var r=attributeToString(t.key);""!==r&&(n+="attributes["+r+"]="+attributeToString(t.value)+"&")}):"object"==typeof e&&null!==e&&jQuery.each(e,function(e,t){n+="attributes["+attributeToString(e)+"]="+attributeToString(t)+"&"});var r={type:"POST",url:"/cart/update.js",data:n,dataType:"json",success:function(e){"function"==typeof t?t(e):Shopify.onCartUpdate(e)},error:function(e,t){Shopify.onError(e,t)}};jQuery.ajax(r)},Shopify.updateCartNote=function(e,t){var n={type:"POST",url:"/cart/update.js",data:"note="+attributeToString(e),dataType:"json",success:function(e){"function"==typeof t?t(e):Shopify.onCartUpdate(e)},error:function(e,t){Shopify.onError(e,t)}};jQuery.ajax(n)},jQuery.fn.jquery>="1.4"?Shopify.param=jQuery.param:(Shopify.param=function(e){var t=[],n=function(e,n){n=jQuery.isFunction(n)?n():n,t[t.length]=encodeURIComponent(e)+"="+encodeURIComponent(n)};if(jQuery.isArray(e)||e.jquery)jQuery.each(e,function(){n(this.name,this.value)});else for(var r in e)Shopify.buildParams(r,e[r],n);return t.join("&").replace(/%20/g,"+")},Shopify.buildParams=function(e,t,n){jQuery.isArray(t)&&t.length?jQuery.each(t,function(t,r){rbracket.test(e)?n(e,r):Shopify.buildParams(e+"["+("object"==typeof r||jQuery.isArray(r)?t:"")+"]",r,n)}):null!=t&&"object"==typeof t?Shopify.isEmptyObject(t)?n(e,""):jQuery.each(t,function(t,r){Shopify.buildParams(e+"["+t+"]",r,n)}):n(e,t)},Shopify.isEmptyObject=function(e){for(var t in e)return!1;return!0});

(function() {
      function asyncLoad() {
        var urls = ["https:\/\/dfjp7gc2z6ooe.cloudfront.net\/assets\/sky_pilot.js?shop=audrey-assad-store.myshopify.com","\/\/productreviews.shopifycdn.com\/assets\/v4\/spr.js?shop=audrey-assad-store.myshopify.com","https:\/\/now.apptuse.com\/api\/v3\/sendscript\/6ba83715d2dead7e1785928be2fcb752\/welcomebar.js?shop=audrey-assad-store.myshopify.com"];
        for (var i = 0; i < urls.length; i++) {
          var s = document.createElement('script');
          s.type = 'text/javascript';
          s.async = true;
          s.src = urls[i];
          var x = document.getElementsByTagName('script')[0];
          x.parentNode.insertBefore(s, x);
        }
      }
      window.attachEvent ? window.attachEvent('onload', asyncLoad) : window.addEventListener('load', asyncLoad, false);
    })();
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
      })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    var _gaUTrackerOptions = {'allowLinker': true};ga('create', 'UA-55990540-1', 'auto', _gaUTrackerOptions);ga('send', 'pageview');
      (function(){
        ga('require', 'linker');
        function addListener(element, type, callback) {
          if (element.addEventListener) {
            element.addEventListener(type, callback);
          }
          else if (element.attachEvent) {
            element.attachEvent('on' + type, callback);
          }
        }
        function decorate(event) {
          event = event || window.event;
          var target = event.target || event.srcElement;
          if (target && (target.action || target.href)) {
            ga(function (tracker) {
              var linkerParam = tracker.get('linkerParam');
              document.cookie = '_shopify_ga=' + linkerParam + '; ' + 'path=/';
            });
          }
        }
        addListener(window, 'load', function(){
          for (var i=0; i<document.forms.length; i++) {
            if(document.forms[i].action && document.forms[i].action.indexOf('/cart') >= 0) {
              addListener(document.forms[i], 'submit', decorate);
            }
          }
          for (var i=0; i<document.links.length; i++) {
            if(document.links[i].href && document.links[i].href.indexOf('/checkout') >= 0) {
              addListener(document.links[i], 'click', decorate);
            }
          }
        })
      }());
      (function () {
          var customDocumentWrite = function(content) {
            var jquery = null;

            if (window.jQuery) {
              jquery = window.jQuery;
            } else if (window.Checkout && window.Checkout.$) {
              jquery = window.Checkout.$;
            }

            if (jquery) {
              jquery('body').append(content);
            }
          };

          var analytics = document.createElement('script');
          var loaded = false;
          var onload = function() {
            if (loaded) return;
            loaded = true;
            window.ShopifyAnalytics.lib = window.trekkie.noConflict();
            window.ShopifyAnalytics.lib.initialize(
              {"Trekkie":{"appName":"storefront","environment":"production","defaultAttributes":{"shopId":4873021}}}
            );

            window.ShopifyAnalytics.lib.ready(function() {
              

              var originalDocumentWrite = document.write;
              document.write = customDocumentWrite;
              try { window.ShopifyAnalytics.merchantGoogleAnalytics.call(this); } catch(error) {};
              document.write = originalDocumentWrite;

              
        window.ShopifyAnalytics.lib.page(
          null,
          {"pageType":"home"}
        );
      
              
            });
          }
          analytics.onload = onload;
          analytics.onreadystatechange = function() {
            if (!/complete|loaded/.test(analytics.readyState)) return;
            onload();
          }
          analytics.async = true;
          analytics.src = 'https://cdn.shopify.com/s/javascripts/trekkie.storefront.min.js?v=2016.06.23';
          document.getElementsByTagName('head')[0].appendChild(analytics);
          
      var eventsListenerScript = document.createElement('script');
      eventsListenerScript.async = true;
      eventsListenerScript.src = "//cdn.shopify.com/s/assets/shop_events_listener-b76d2fd98d2ac218ee84279bcdf95bb8d0e6b8fe968d6e51742f83b2054d1051.js";
      document.getElementsByTagName('head')[0].appendChild(eventsListenerScript);
    
        })();
      function registerGA(){for(var e=document.getElementsByTagName("form"),t=0;t<e.length;t++)try{if("post"==e[t].method){var n=document.createElement("input");n.type="hidden",n.name=URCHINFIELD,n.value=getUrchinFieldValue(),e[t].appendChild(n)}}catch(r){}}!function(){var e=window.onload;void 0===e||null==e?window.onload=function(){registerGA()}:window.onload=function(){registerGA(),e()}}();
    var Shopify = Shopify || {};
      Shopify.shop = "audrey-assad-store.myshopify.com";
      Shopify.theme = {"name":"Boundless","id":89573571,"theme_store_id":766,"role":"main"};
      
function floatToString(e,t){var n=e.toFixed(t).toString();return n.match(/^\.\d+/)?"0"+n:n}function attributeToString(e){return"string"!=typeof e&&(e+="","undefined"===e&&(e="")),jQuery.trim(e)}"undefined"==typeof window.Shopify&&(window.Shopify={}),Shopify.money_format="${{amount}}",Shopify.onError=function(XMLHttpRequest,textStatus){var data=eval("("+XMLHttpRequest.responseText+")");data.message?alert(data.message+"("+data.status+"): "+data.description):alert("Error : "+Shopify.fullMessagesFromErrors(data).join("; ")+".")},Shopify.fullMessagesFromErrors=function(e){var t=[];return jQuery.each(e,function(e,n){jQuery.each(n,function(n,r){t.push(e+" "+r)})}),t},Shopify.onCartUpdate=function(e){alert("There are now "+e.item_count+" items in the cart.")},Shopify.onCartShippingRatesUpdate=function(e,t){var n="";t.zip&&(n+=t.zip+", "),t.province&&(n+=t.province+", "),n+=t.country,alert("There are "+e.length+" shipping rates available for "+n+", starting at "+Shopify.formatMoney(e[0].price)+".")},Shopify.onItemAdded=function(e){alert(e.title+" was added to your shopping cart.")},Shopify.onProduct=function(e){alert("Received everything we ever wanted to know about "+e.title)},Shopify.formatMoney=function(e,t){function n(e,t){return"undefined"==typeof e?t:e}function r(e,t,r,i){if(t=n(t,2),r=n(r,","),i=n(i,"."),isNaN(e)||null==e)return 0;e=(e/100).toFixed(t);var o=e.split("."),a=o[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+r),s=o[1]?i+o[1]:"";return a+s}"string"==typeof e&&(e=e.replace(".",""));var i="",o=/\{\{\s*(\w+)\s*\}\}/,a=t||this.money_format;switch(a.match(o)[1]){case"amount":i=r(e,2);break;case"amount_no_decimals":i=r(e,0);break;case"amount_with_comma_separator":i=r(e,2,".",",");break;case"amount_no_decimals_with_comma_separator":i=r(e,0,".",",")}return a.replace(o,i)},Shopify.resizeImage=function(e,t){try{if("original"==t)return e;var n=e.match(/(.*\/[\w\-\_\.]+)\.(\w{2,4})/);return n[1]+"_"+t+"."+n[2]}catch(r){return e}},Shopify.addItem=function(e,t,n){var t=t||1,r={type:"POST",url:"/cart/add.js",data:"quantity="+t+"&id="+e,dataType:"json",success:function(e){"function"==typeof n?n(e):Shopify.onItemAdded(e)},error:function(e,t){Shopify.onError(e,t)}};jQuery.ajax(r)},Shopify.addItemFromForm=function(e,t){var n={type:"POST",url:"/cart/add.js",data:jQuery("#"+e).serialize(),dataType:"json",success:function(e){"function"==typeof t?t(e):Shopify.onItemAdded(e)},error:function(e,t){Shopify.onError(e,t)}};jQuery.ajax(n)},Shopify.getCart=function(e){jQuery.getJSON("/cart.js",function(t,n){"function"==typeof e?e(t):Shopify.onCartUpdate(t)})},Shopify.pollForCartShippingRatesForDestination=function(e,t,n){n=n||Shopify.onError;var r=function(){jQuery.ajax("/cart/async_shipping_rates",{dataType:"json",success:function(n,i,o){200===o.status?"function"==typeof t?t(n.shipping_rates,e):Shopify.onCartShippingRatesUpdate(n.shipping_rates,e):setTimeout(r,500)},error:n})};return r},Shopify.getCartShippingRatesForDestination=function(e,t,n){n=n||Shopify.onError;var r={type:"POST",url:"/cart/prepare_shipping_rates",data:Shopify.param({shipping_address:e}),success:Shopify.pollForCartShippingRatesForDestination(e,t,n),error:n};jQuery.ajax(r)},Shopify.getProduct=function(e,t){jQuery.getJSON("/products/"+e+".js",function(e,n){"function"==typeof t?t(e):Shopify.onProduct(e)})},Shopify.changeItem=function(e,t,n){var r={type:"POST",url:"/cart/change.js",data:"quantity="+t+"&id="+e,dataType:"json",success:function(e){"function"==typeof n?n(e):Shopify.onCartUpdate(e)},error:function(e,t){Shopify.onError(e,t)}};jQuery.ajax(r)},Shopify.removeItem=function(e,t){var n={type:"POST",url:"/cart/change.js",data:"quantity=0&id="+e,dataType:"json",success:function(e){"function"==typeof t?t(e):Shopify.onCartUpdate(e)},error:function(e,t){Shopify.onError(e,t)}};jQuery.ajax(n)},Shopify.clear=function(e){var t={type:"POST",url:"/cart/clear.js",data:"",dataType:"json",success:function(t){"function"==typeof e?e(t):Shopify.onCartUpdate(t)},error:function(e,t){Shopify.onError(e,t)}};jQuery.ajax(t)},Shopify.updateCartFromForm=function(e,t){var n={type:"POST",url:"/cart/update.js",data:jQuery("#"+e).serialize(),dataType:"json",success:function(e){"function"==typeof t?t(e):Shopify.onCartUpdate(e)},error:function(e,t){Shopify.onError(e,t)}};jQuery.ajax(n)},Shopify.updateCartAttributes=function(e,t){var n="";jQuery.isArray(e)?jQuery.each(e,function(e,t){var r=attributeToString(t.key);""!==r&&(n+="attributes["+r+"]="+attributeToString(t.value)+"&")}):"object"==typeof e&&null!==e&&jQuery.each(e,function(e,t){n+="attributes["+attributeToString(e)+"]="+attributeToString(t)+"&"});var r={type:"POST",url:"/cart/update.js",data:n,dataType:"json",success:function(e){"function"==typeof t?t(e):Shopify.onCartUpdate(e)},error:function(e,t){Shopify.onError(e,t)}};jQuery.ajax(r)},Shopify.updateCartNote=function(e,t){var n={type:"POST",url:"/cart/update.js",data:"note="+attributeToString(e),dataType:"json",success:function(e){"function"==typeof t?t(e):Shopify.onCartUpdate(e)},error:function(e,t){Shopify.onError(e,t)}};jQuery.ajax(n)},jQuery.fn.jquery>="1.4"?Shopify.param=jQuery.param:(Shopify.param=function(e){var t=[],n=function(e,n){n=jQuery.isFunction(n)?n():n,t[t.length]=encodeURIComponent(e)+"="+encodeURIComponent(n)};if(jQuery.isArray(e)||e.jquery)jQuery.each(e,function(){n(this.name,this.value)});else for(var r in e)Shopify.buildParams(r,e[r],n);return t.join("&").replace(/%20/g,"+")},Shopify.buildParams=function(e,t,n){jQuery.isArray(t)&&t.length?jQuery.each(t,function(t,r){rbracket.test(e)?n(e,r):Shopify.buildParams(e+"["+("object"==typeof r||jQuery.isArray(r)?t:"")+"]",r,n)}):null!=t&&"object"==typeof t?Shopify.isEmptyObject(t)?n(e,""):jQuery.each(t,function(t,r){Shopify.buildParams(e+"["+t+"]",r,n)}):n(e,t)},Shopify.isEmptyObject=function(e){for(var t in e)return!1;return!0});
