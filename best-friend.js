function bestFriend(friendNames){
    let maxName = "";
    let maxLen = friendNames[0].length;
    for(const name of friendNames){
        if(name.length > maxLen){
            maxLen = name.length;
            maxName = name;
        }
    }
    return (maxName);
}

let myBestFriends = ['Tasnuva Kawsar Farmee', 'Ozair Alam', 'Md. Hussain Tanvir', 'Syed Ashraful Amin Hasan', 'Ishtiak Alam Rasel', 'Hussain Ahmed Rubel', 'Tanbhir Tahlil Shipul', 'Jakir Hussain', 'Tahsin Jalil Chowdhury', 'Mamnun Mannan Rajib', 'Wahid Shahin', 'Tamim Siddique'];

let myMaxFriend = bestFriend(myBestFriends);
console.log(myMaxFriend);
console.log(typeof(myMaxFriend));