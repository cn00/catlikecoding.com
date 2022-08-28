(function(){

	function url2crumb (text){
		var s = text.charAt(0).toUpperCase();
		for(var i = 1; i < text.length; i++){
			var c = text.charAt(i);
			if(c === '-'){
				s += ' ' + text.charAt(i + 1).toUpperCase();
				i += 1;
			}
			else{
				s += c;
			}
		}
		return s;
	}

	var header = document.getElementsByTagName('header')[0];
	var headerType = header.getAttribute('data-type');
	var headerSubnavType = header.getAttribute('data-subnav-type');
	var headerDocumentation = header.getAttribute('data-documentation');
	var headerProduct = header.getAttribute('data-product');
	var nav = '';

	if(headerType === 'documentation'){
		nav += '<div id="documentation-header">Documentation</div>';
	}
	else if(headerType === 'product'){
		nav += '<div id="product-header">Product</div>';
	}
	else if(headerType === 'tutorial'){
		nav += '<div id="tutorial-header"><div class="g-plusone" data-href="https://catlikecoding.com/unity/tutorials/" data-size="medium" data-count="true"></div><iframe src="http://www.facebook.com/plugins/like.php?app_id=224517547559857&amp;href=http%3A%2F%2Fwww.facebook.com%2Funity.c.sharp.tutorials&amp;send=false&amp;layout=button_count&amp;width=100&amp;show_faces=false&amp;action=like&amp;font&amp;height=21" style="border:none; overflow:hidden; width:100px; height:21px;"></iframe><a id="twitter-icon" href="http://twitter.com/catlikecoding" title="Catlike Coding on Twitter"></a><a id="facebook-icon" href="http://www.facebook.com/unity.c.sharp.tutorials" title="Unity C# Tutorials on Facebook"></a></div>';
		var gp = document.createElement('script');
		gp.src = 'https://apis.google.com/js/plusone.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(gp, s);
	}

	var pathParts = window.location.pathname.split('/');
	nav += '<nav id="breadcrumbs"><ul><li><a href="https://catlikecoding.com/">Catlike Coding</a></li>';
	var path = 'https://catlikecoding.com/';
	for(var i = 1; i < pathParts.length - 1; i++){
		var part = pathParts[i];
		path += part + '/';
		nav += '<li><a href="' + path + '">' + url2crumb(part) + '</a></li>';
	}
	var headerContents = nav + '</ul></nav>';

	if(headerProduct || headerDocumentation || headerSubnavType){
		nav = '<nav><ul>';
		if(headerSubnavType === 'editor/scripting'){
			if(window.location.pathname.slice(-11) === '/scripting/'){
				nav += '<li><a href="..">Editor</a></li><li><a href=".">Scripting</a></li>';
			}
			else{
				nav += '<li><a href=".">Editor</a></li><li><a href="scripting/">Scripting</a></li>';
			}
		}
		else if(headerSubnavType === 'demo'){
			nav += '<li><a href="demo/">Demo</a></li>';
		}
		if(headerDocumentation){
			nav += '<li><a href="https://catlikecoding.com/unity/documentation/' + headerDocumentation + '/">Documentation</a></li>';
		}
		if(headerProduct){
			nav += '<li><a href="https://catlikecoding.com/unity/products/' + headerProduct + '/">Product</a></li>';
		}
		headerContents += nav + '</ul>';
	}

	header.innerHTML = headerContents;

	document.getElementsByTagName('footer')[0].innerHTML = '<nav><ul><li><a href="https://catlikecoding.com/jasper-flick/">Contact</a></li></ul></nav><a href="https://catlikecoding.com/">&copy; Catlike Coding</a><p><ul><li><a href="https://twitter.com/catlikecoding" rel="me">Twitter</a></li><li><a href="https://www.facebook.com/catlikecoding" rel="me">Facebook</a></li></ul>';
})();
