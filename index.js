var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: '47.9M',
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: "53.8M",
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? ',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

let users  = {user1,user2};
console.log(users)
//searching and storing the value string after the link
let params = new URLSearchParams(window.location.search);
let getUser= params.get('user');
console.log(getUser);
console.log(window.location.search)
let selectedUser= users[getUser];
console.log(selectedUser);

var headerContainer = document.getElementById('header-container');
var userDisplayName = document.createElement('div');
userDisplayName.innerHTML = `<div id='back-arrow'>⬅</div>
<h3 id='header-name'class='displayName'>   ${selectedUser.displayName}✅</h3>
<p class='tweet-count'>13.6k Tweets</p>`;
console.log(userDisplayName);
headerContainer.appendChild(userDisplayName);

var imageContainer = document.getElementById('cover-photo');
imageContainer.innerHTML= `<img class='image-style' src ="${selectedUser.coverPhotoURL}">`

var profilePic = document.getElementById('profile-details');
profilePic.innerHTML = `<img class='profile-image' src ="${selectedUser.avatarURL}">
<button id='follow-btn'>Following</button>
<h3 class='displayName'> ${selectedUser.displayName} ✅</h3>
<p id='username'>${selectedUser.userName}</p>
<div id='joined'> 📅 Joined ${new Date(selectedUser.joinedDate).toLocaleDateString()}</div>
<div class='follower-section'>
<div id='following-count'><strong>${selectedUser.followingCount}</strong> Following</div>
<div><strong>${selectedUser.followerCount}</strong> Followers</div>
</div>
<div class='tab-section'>
<div class='active-tab' >Tweets</div>
<div>Tweets & replies</div>
<div>Media</div>
<div>Likes</div>

</div>
<hr>
`
var tweetContainer = document.getElementById('tweet-container');

for (tweet of selectedUser.tweets){
    console.log(tweet)
    let tweetBox = document.createElement('div');
    tweetBox.innerHTML = `<img class='tweet-image' src ="${selectedUser.avatarURL}">
    <button id="dot-button" style="float: right">...</button>
    <div class="tweet-position"><h4> ${selectedUser.displayName}✅ ${selectedUser.userName} - ${new Date(tweet.timestamp).getHours()}${'h'} : ${new Date(tweet.timestamp).getMinutes()}${'m'}</h4>
    
    <p class ='tweet-content'>${tweet.text}</p>
    <div class='tweet-activity'>
    <div>💬 5.2K</div>
    <div> 🔁 7.7K</div>
    <div> 🤍 65.2K</div>
    <div>📤</div>
    
    </div>
    </div>
    <hr>`
    tweetContainer.appendChild(tweetBox)
    
}



