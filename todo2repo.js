(function(){
	SelectAll();
	var str     = GetSelectedString;
	var index   = str.indexOf('---');
	var jisseki = str.substring(0, index);
	var yotei   = str.slice(index + 5 /* '---' + '\r\n' */);
	var out    = '*�\��*\r\n' + jisseki + '\r\n*����*\r\n' + yotei
	CopyString(out);
})();

/**
 * ��������R�s�[����B
 * @param [in] �R�s�[���镶����
 */
function CopyString(str) {
	Delete();
	InsText(str);
	SelectAll();
	Copy();
	Undo();
	Undo();
}
