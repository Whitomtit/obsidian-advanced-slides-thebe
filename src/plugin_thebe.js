
CodeMirror.defineOption("autoRefresh", false, function (cm, val) {
	Reveal.on("slidechanged", event => {
		cm.refresh();
	});
});

CodeMirror.defineOption("blurOnExecute", false, function (cm, val) {
	cm.on("keydown", (cm, event) => {
		if (event.code === "Enter" && event.shiftKey) {
			cm.display.input.blur();
		}
	});
});
let element = document.createElement('style');
document.head.appendChild(element);
let cursorSheet = element.sheet;

Reveal.on( 'resize', event => {
	if (cursorSheet.cssRules.length > 0)
		cursorSheet.deleteRule(0);

	cursorSheet.insertRule(
		`.CodeMirror-cursors,
		.CodeMirror-measure:nth-child(2) + div {
				transform: scale(${1 / event.scale});
		 		transform-origin: 0 0;
		}`,
		0);
});

function thebe_init(kernel, host) {
	thebelab.bootstrap({
		requestKernel: true,
		kernelOptions: {
			name: kernel,
			kernelName: kernel,
			path: ".",
			serverSettings: {
				"baseUrl": `http://${host}`,
				"wsUrl": `ws://${host}`
			}
		},
		codeMirrorConfig: {
			blurOnExecute: true,
			autoRefresh: true,
			singleCursorHeightPerLine: false
		}
	});
}
