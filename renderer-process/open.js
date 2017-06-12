const click = document.querySelector('#click');
const path = require('path');
const BrowserWindow = require('electron').remote.BrowserWindow;

let win;

console.log(this)

click.onclick = () => {
    // window.open('http://nodelover.me');

    win = new BrowserWindow({
        width: 300,
        height: 200,
        frame: false,
        transparent: true
    });

    win.on('close', () => { win = null });
    win.loadURL(path.join('file:', __dirname, '../model.html'));
    console.dir(win)

}