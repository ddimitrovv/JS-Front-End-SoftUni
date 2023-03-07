function browserHistory(browserInfo, commands) {

    for (const command of commands) {

        if (command === 'Clear History and Cache') {
            browserInfo['Open Tabs'] = [];
            browserInfo['Recently Closed'] = [];
            browserInfo['Browser Logs'] = [];
        }
        [action, website] = command.split(' ');
        
        if (action === 'Open') {
            browserInfo['Open Tabs'].push(website);
            browserInfo['Browser Logs'].push(command);
        } else if (action === 'Close') {
            if (browserInfo['Open Tabs'].includes(website)) {
                browserInfo['Open Tabs'] = browserInfo['Open Tabs'].
                            filter(function(el) {return el !== website});
                browserInfo['Recently Closed'].push(website);
                browserInfo['Browser Logs'].push(command);
            }
        }
    }
    console.log(`${browserInfo['Browser Name']}\n`+
                `Open Tabs: ${browserInfo['Open Tabs'].join(', ')}\n` + 
                `Recently Closed: ${browserInfo['Recently Closed'].join(', ')}\n`+
                `Browser Logs: ${browserInfo['Browser Logs'].join(', ')}`);
}