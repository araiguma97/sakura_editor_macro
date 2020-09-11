(function(){
	SelectAll();
	var str     = GetSelectedString;
	var index   = str.indexOf('---');
	var jisseki = str.substring(0, index);
	var yotei   = str.slice(index + 5 /* '---' + '\r\n' */);
	var out    = '*予定*\r\n' + jisseki + '\r\n*実績*\r\n' + yotei
	CopyString(out);
})();

/**
 * 文字列をコピーする。
 * @param [in] コピーする文字列
 */
function CopyString(str) {
	Delete();
	InsText(str);
	SelectAll();
	Copy();
	Undo();
	Undo();
}
