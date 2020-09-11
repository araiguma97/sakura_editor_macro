(function(){
	var base_url = 'https://trial.desknets.com/cgi-bin/dneo/dneo.cgi?cmd=plantweekgrp#cmd=plantadd';
	
	// “ú‚ğ’Šo‚·‚é
	var str         = GetSelectedString;
	var raw_month   = str.match(/(\d*)\//);
	var raw_day     = str.match(/\/(\d*)/);
	var raw_hour    = str.match(/(\d*):/);
	var raw_endhour = parseInt(raw_hour[1]) + 1;
	var raw_minutes = str.match(/:(\d*)/);

	// “ú‚ğ0–„‚ß‚·‚é
	var month   = ('00' + raw_month[1]).slice(-2);
	var day     = ('00' + raw_day[1]).slice(-2);
	var hour    = ('00' + raw_hour[1]).slice(-2);
	var endhour = ('00' + raw_endhour).slice(-2);
	var minutes = ('00' + raw_minutes[1]).slice(-2);

	// URL‚ğ¶¬‚·‚é
	var date_msg	= '';
	var enddate_msg = '';
	if (month != '' && day != '') {
		date_msg    = '&date=' + month + day;
		enddate_msg = '&enddate=' + month + day;
	}
	var starttime_msg = '';
	var endtime_msg   = '';
	if (hour != '' && minutes != '') {
		starttime_msg = '&starttime=' + hour + minutes;
		endtime_msg   = '&endtime=' + endhour + minutes;
	}
	var url = base_url + date_msg + enddate_msg + starttime_msg + endtime_msg;

	// URL‚ğŠJ‚­
	var shell =  new ActiveXObject('WScript.Shell');
	shell.Run(url);
})();