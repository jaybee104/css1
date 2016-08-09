 
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
