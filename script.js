const sabeBtn = document.getElementById('saveComments');
const commentList = document.getElementById('comment-list');
const allComments = [{name: 'Alex', comment: 'Some text'}, {name: 'Oleg', comment: 'Some text2'}];

const saveComment = function() {

    const userName = document.getElementById('userName');
    const userComment = document.getElementById('userComment');

    const newComment = {
        name: userName.value,
        comment: userComment.value,
        date: new Date()
    }

    allComments.push(newComment);

    userName.value = '';
    userComment.value = '';
}

// Кожний коментар записати як окремий блок <article>.....
// Коли отримав усі коментарі в тегах треба вівести їх на єкран
// Знайти блок куди віводити і вставии його

const renderComments = () => {
    let comment = '';

    for(let i = 0; i < allComments.length; i++) {
        comment += `<article>
            <h3 class='user-name'>${allComments[i].name}</h3>
            <div class='user-comment'>${allComments[i].comment}</div>
        </article>`;
    }

    commentList.innerHTML = comment;
};

renderComments();

// fetch('https://api.github.com/users/AlekseyYefanov')
//   .then(function (response) {
//     console.log('response')
//   })


sabeBtn.addEventListener('click', saveComment);

async function showAvatar() {

    let responce = await fetch(user.json);
    let user = await responce.json();
    let githubResponce = await fetch(`https://api.github.com/users/${user.name}`);
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promice-avatar-example";
    document.body.appened(img);

    return githubUser;
}

showAvatar();