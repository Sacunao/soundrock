 window.fbAsyncInit = function() {

    FB.init({
      appId      : '1597812100526722',
      xfbml      : true,
      version    : 'v2.8'
    });

     FB.Event.subscribe('auth.authResponseChange', function(response) {
        if (response && response.status == 'connected') {
          FB.api('/me', function(response) {
            alert('Nombre: ' + data.name);
          });
        }
      });
  };

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk'));