(function(){
	SelectAll();
	var str     = GetSelectedString;
	var items   = str.split('---\r\n');
	var jisseki = items[1];
	var yotei   = items[0];
	var out     = '*����*\r\n' + jisseki + '\r\n\r\n*�\��*\r\n' + yotei;
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
