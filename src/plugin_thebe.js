
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
