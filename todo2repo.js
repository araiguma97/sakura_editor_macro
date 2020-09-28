(function(){
	SelectAll();
	var str     = GetSelectedString;
	var items   = str.split('---\r\n');
	var jisseki = items[1];
	var yotei   = items[0];
	var out     = '*実績*\r\n' + jisseki + '\r\n\r\n*予定*\r\n' + yotei;
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
