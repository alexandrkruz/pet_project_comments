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

    let responce = await fetch('./user.json');
    let user = await responce.json();
    let githubResponce = await fetch(`https://api.github.com/users/${user.name}`);
    let responceJs = await githubResponce.json();
    let img = document.createElement('img');
    img.src = responceJs.avatar_url;
    img.className = "promise-avatar-example";
    document.body.appened(img);
    
    return githubResponce;
}

showAvatar();

async function showAvatar() {

    let response = await fetch('./user.json');
    let user = await response.json();
    // запрашиваем информацию об этом пользователе из github
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();
    // отображаем аватар пользователя
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
  
    return githubUser;
  }
  showAvatar();

  const comments = [
    { text: "Комментарий 1", date: new Date("2022-05-01T12:30:00") },
    { text: "Комментарий 2", date: new Date("2022-04-30T10:30:00") },
    { text: "Комментарий 3", date: new Date("2022-04-29T18:00:00") },
  ];
  


  function displayComments(comments, sortDirection) {
    if (sortDirection === "desc") {
        comments.sort((a, b) => b.date - a.date);
    } else {
        comments.sort((a, b) => a.date - b.date);
    }
    
    const container = document.getElementById("comment-list");
    container.innerHTML = "";

    comments.forEach((comment) => {
    const div = document.createElement("div");
    div.textContent = comment.text;
    container.appendChild(div);
  });

  const sortDirectionSelect = document.getElementById("sort-direction");
    sortDirectionSelect.addEventListener("change", () => {
    const sortDirection = sortDirectionSelect.value;
    displayComments(comments, sortDirection);
    });
}




  