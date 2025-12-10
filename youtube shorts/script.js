const reels = [
  {
    username: "tech_vision",
    likeCount: 1420,
    isLiked: false,
    commentCount: 112,
    caption: "Innovation never sleeps 🚀",
    video: "./reels/video1.mp4",
    userProfile: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    shareCount: 54,
    isFollowed: false
  },
  {
    username: "wanderlust_diaries",
    likeCount: 2890,
    isLiked: true,
    commentCount: 340,
    caption: "Lost in the mountains 🗻✨",
    video: "./reels/video2.mp4",
    userProfile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    shareCount: 210,
    isFollowed: true
  },
  {
    username: "foodie_journey",
    likeCount: 980,
    isLiked: false,
    commentCount: 89,
    caption: "Street food hits different 😋🔥",
    video: "./reels/video3.mp4",
    userProfile: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    shareCount: 37,
    isFollowed: false
  },
  {
    username: "dance_vibes",
    likeCount: 5600,
    isLiked: true,
    commentCount: 450,
    caption: "Feel the rhythm 💃⚡",
    video: "./reels/video4.mp4",
    userProfile: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    shareCount: 500,
    isFollowed: true
  },
  {
    username: "fit_and_fierce",
    likeCount: 3210,
    isLiked: false,
    commentCount: 190,
    caption: "No excuses. Just grind 💪",
    video: "./reels/video5.mp4",
    userProfile: "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    shareCount: 120,
    isFollowed: false
  },
  {
    username: "pet_tales",
    likeCount: 4500,
    isLiked: true,
    commentCount: 230,
    caption: "He learned a new trick today 🐶❤️",
    video: "./reels/video6.mp4",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    shareCount: 310,
    isFollowed: true
  },
  {
    username: "artistic_soul",
    likeCount: 2100,
    isLiked: false,
    commentCount: 156,
    caption: "Colors speak louder than words 🎨✨",
    video: "./reels/video7.mp4",
    userProfile: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    shareCount: 98,
    isFollowed: false
  },
  {
    username: "travel_captures",
    likeCount: 6300,
    isLiked: true,
    commentCount: 540,
    caption: "Sunset on the beach hits different 🌅",
    video: "./reels/video8.mp4",
    userProfile: "https://plus.unsplash.com/premium_photo-1681494639261-7908ef9d2257?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    shareCount: 450,
    isFollowed: true
  },
  {
    username: "daily_motivation",
    likeCount: 1700,
    isLiked: false,
    commentCount: 70,
    caption: "Small steps make big changes ✨",
    video: "./reels/video9.mp4",
    userProfile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    shareCount: 66,
    isFollowed: false
  },
  {
    username: "auto_world",
    likeCount: 7800,
    isLiked: true,
    commentCount: 620,
    caption: "This engine roar 🤤🔥",
    video: "./reels/video10.mp4",
    userProfile: "https://images.unsplash.com/photo-1522556189639-b150ed9c4330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    shareCount: 520,
    isFollowed: true
  }
];

var sum = ''
reels.forEach(val=>{
    sum += `   <div class="reel">
                    <video autoplay loop muted src="${val.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${val.userProfile}" alt="">
                            <h4>${val.username}</h4>
                            <button>${val.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${val.caption}</h3>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon icon">${val.isLiked?'<i class="ri-heart-3-fill"></i>':'<i class="ri-heart-3-line"></i>'}</i></h4>
                            <h6>${val.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></i></h4>
                            <h6>${val.commentCount}</h6>
                        </div>

                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-share-forward-line"></i></i></h4>
                            <h6>${val.shareCount}</h6>
                        </div> 

                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                        </div>

                    </div>
                </div>`
    
})
var allReels =document.querySelector('.all-reels')
allReels.innerHTML = sum
