const { Menu, Tray } = require('electron');
const path = require('path');

let appIcon = null;

appIcon = new Tray(path.join( __dirname, './lover.png'));

const menu = Menu.buildFromTemplate([{
    label: '关闭',
    click: function() {
        appIcon.destory()
    }
}])

appIcon.setToolTip('我最爱的 app');
appIcon.setContextMenu(menu)