(function(){
	var base_url = 'https://my.redmine.jp/demo/issues/';
	
	var str = GetSelectedString;
	var url = base_url + str;

	// URL���J��
	var shell =  new ActiveXObject('WScript.Shell');
	shell.Run(url);
})();