function followers(arr){
    let fbInfo = {}
    let countingFollowers = 0;
    for (let el of arr){
        if (el === 'Log out'){
            break
        }

        if (el.includes('New follower')){
            let [command, username] = el.split(': ')
            if (!fbInfo.hasOwnProperty(username)){
                fbInfo[username] = {
                    'likes':0,
                    'comments':0,
                }
                countingFollowers++
            }
        }else if(el.includes('Like')){
            let [command, username, count] = el.split(': ')
            if (!fbInfo.hasOwnProperty(username)){
                fbInfo[username] = {
                    'likes': count,
                    'comments': 0,
                }
                countingFollowers++
            }else if (fbInfo.hasOwnProperty(username)){
                fbInfo[username]['likes'] = +fbInfo[username]['likes'] + +count 
            }
        }else if(el.includes('Comment')){
            let [command, username] = el.split(': ')
            if (fbInfo.hasOwnProperty(username)){
                let summ = +fbInfo[username]['comments'] + 1
                fbInfo[username]['comments'] = summ
            }else if (!fbInfo.hasOwnProperty(username)){
                fbInfo[username] = {
                    'likes': 0,
                    'comments': 1,
                }
                countingFollowers++
            }
        }else if (el.includes('Blocked')){
            let [command, username] = el.split(': ')
            if (fbInfo.hasOwnProperty(username)){
                delete fbInfo[username]
                countingFollowers--
            }else if (!fbInfo.hasOwnProperty(username)){
                console.log(`${username} doesn't exist.`)
            }
        }
    }
    console.log(`${countingFollowers} followers`)
    for (let el in fbInfo){
        sum = +fbInfo[el].likes + +fbInfo[el].comments
        console.log(`${el}: ${sum}`)
    }

}
followers(["Like: Katy: 3",
"Comment: Katy",
"New follower: Bob",
"Blocked: Bob",
"New follower: Amy",
"Like: Amy: 4",
"Log out"])


