console.log('Main Process running')
const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path')
const url = require('url');

let win,colorWindow;

function createWindow () {

	win = new BrowserWindow({width: 1400, height: 1400})

	win.loadURL(url.format({
		pathname: path.join(__dirname, 'views/index.html'),
		protocol: 'file:',
		slashes: true
	}));

	win.on('closed', () => {
		win = null
	});
}

app.on('ready', createWindow);


app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});