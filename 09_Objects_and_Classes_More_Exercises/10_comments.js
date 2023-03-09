function comments(inputArray) {
    let commentsData = {
        'comments': {},
        'users': [],
        'articles': []
    };
    for (let data of inputArray) {
        if (data.startsWith('user') && !(commentsData.users.includes(data.split(' ')[0]))) {
            commentsData.users.push(data.split(' ')[1]);
        } else if (data.startsWith('article') && !(commentsData.articles.includes(data.split(' ')[0]))) {
            commentsData.articles.push(data.split(' ')[1]);
            commentsData.comments[`${data.split(' ')[1]}`] = [];
        } else {
            let username = data.split(' posts on ')[0];
            let articleName = data.split(' posts on ')[1].split(': ')[0];
            let commentTitle = data.split(' posts on ')[1].split(': ')[1].split(', ')[0]; 
            let commentContent = data.split(' posts on ')[1].split(': ')[1].split(', ')[1]; 

            if (commentsData.users.includes(username) && commentsData.articles.includes(articleName)) {
                commentsData.comments[articleName].push({username, commentTitle, commentContent})
            }
        }
    }

    let sortedComments = Object.entries(commentsData.comments)
                                .sort(([,a],[,b]) => b.length - a.length)
                                .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    let entries = Object.entries(sortedComments);

    for (const [keys, values] of entries){
        console.log(`Comments on ${keys}`);
        let sortedValues = values.sort(function(a, b) {
            if (a.username < b.username) return -1;
            if (a.username > b.username) return 1;
            return 0;
            });
        for (let i = 0; i < values.length; i++) {
            console.log(`--- From user ${sortedValues[i].username}: ${sortedValues[i].commentTitle} - ${sortedValues[i].commentContent}`);
        }
    }
}