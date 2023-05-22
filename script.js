const sabeBtn = document.getElementById('saveComments');
const commentList = document.getElementById('comment-list');
let allComments = [];

// TODO: add filter by text 
// 1. Навесить обработчик собития (какой подумать) +
// 2. Получить данные с инпута +
// 3. Сравнить данные с поля с заголовками комментариев array.filter()

const searchInput = document.getElementById('search');

const filteredByText = (event) => {
//   console.log('filteredByText--> ', event.target.value);
  let filteredComments = [];
  displayComments(filteredComments)//отфильтрованые коментарии по совпадению;
}

searchInput.addEventListener('keyup', filteredByText);

const filteredCommentsReturn = array.filter(function(comments) {
    return comments = filteredByText;
});

displayComments(filteredCommentsReturn);

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

 function displayComments(comments) {
    let comment = '';

    for(let i = 0; i < comments.length; i++) {
        comment += `<article class='block'>
            <h3 class='user-name'>${comments[i].title}</h3>
            <span class='comment-time'>${comments[i].time}</span>
            <div class='user-comment'>${comments[i].body}</div>
        </article>`;
    }

    commentList.innerHTML = comment;
};


sabeBtn.addEventListener('click', saveComment);

async function getUserComments() {

    let responce = await fetch('https://run.mocky.io/v3/95fc487f-cc77-4965-824f-c13b582983c0');
    let user = await responce.json();
    allComments = [...user]
    displayComments(user);
}

getUserComments();


const sortDirectionSelect = document.getElementById("sort-direction");
   
sortDirectionSelect.addEventListener("change", sortedComments);


function sortedComments() {

  const sortDirection = sortDirectionSelect.value;

  if (sortDirection === "desc") {
    comments.sort((a, b) => b.date - a.date);
  } else {
      comments.sort((a, b) => a.date - b.date);
  }

  displayComments(comments);
};





  