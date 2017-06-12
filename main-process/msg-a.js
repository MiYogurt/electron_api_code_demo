const { ipcMain } = require('electron');

ipcMain.on('msg-a', (event) => {
    event.returnValue = 'Hello';
});

ipcMain.on('msg-a-1', (event, args) => {
    console.log(args.name); // alice
    event.sender.send('msg-a-1-back', { name : 'yugo'});
})