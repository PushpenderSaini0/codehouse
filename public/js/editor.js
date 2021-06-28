let editor = null;
export const initEditor = (mode) => {
	if (mode == 'HOST') {
		editor = monaco.editor.create(document.getElementById("code"), {
			value: "function hello() {\n\talert('Hello world!');\n}",
			language: "javascript",
			theme: "vs-dark",
			lineNumbers: 'on',
			vertical: 'auto',
			horizintal: 'auto',
		});
	}
	if (mode == 'MEMBER') {
		editor = monaco.editor.create(document.getElementById("code"), {
			value: "function hello() {\n\talert('Hello world!');\n}",
			language: "javascript",
			theme: "vs-dark",
			lineNumbers: 'on',
			modal: null,
			readOnly: true,
			vertical: 'auto',
			horizintal: 'auto',
		});
	}
}

export const getEditorValue = () => {
	return (editor.getValue());
}

export const setEditorValue = code => {
	editor.getModel().setValue(code);
}

export const didEditorValueChange = (fn) => {
	editor.getModel().onDidChangeContent((event) => {
		fn();
	});
}