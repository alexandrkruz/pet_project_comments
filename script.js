const sabeBtn = document.getElementById('saveComments');
const commentList = document.getElementById('comment-list');
let allComments = sessionStorage.getItem('commentsList');


// console.log(allComments)

// TODO: add filter by text 
// 1. Навесить обработчик собития (какой подумать) +
// 2. Получить данные с инпута +  
// 3. Сравнить данные с поля с заголовками комментариев array.filter()  

const searchInput = document.getElementById('search');

const filteredByText = (event) => {

    console.log('filteredByText--> ', event.target.value);

    const filteredCommentsReturn = [
      {
          "userId": 1,
          "id": 1,
          "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          "time": "11.02.2022"
      },
      {
          "userId": 1,
          "id": 2,
          "title": "qui est esse",
          "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
          "time": "01.02.2022"
      },
      {
          "userId": 1,
          "id": 3,
          "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
          "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
          "time": "01.01.2023"
      },
      {
          "userId": 1,
          "id": 4,
          "title": "eum et est occaecati",
          "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
          "time": "04.02.2023"
      },
      {
          "userId": 1,
          "id": 5,
          "title": "nesciunt quas odio",
          "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
          "time": "01.01.2022"
      },
      {
          "userId": 1,
          "id": 6,
          "title": "dolorem eum magni eos aperiam quia",
          "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
          "time": "08.12.2022"
      },
      {
          "userId": 1,
          "id": 7,
          "title": "magnam facilis autem",
          "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
          "time": "09.08.2022"
      },
      {
          "userId": 1,
          "id": 8,
          "title": "dolorem dolore est ipsam",
          "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
          "time": "14.02.2022"
      },
      {
          "userId": 1,
          "id": 9,
          "title": "nesciunt iure omnis dolorem tempora et accusantium",
          "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
          "time": "17.02.2022"
      },
      {
          "userId": 1,
          "id": 10,
          "title": "optio molestias id quia eum",
          "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
          "time": "01.02.2022"
      }
  ].filter(function(item) {

      if(item.title === event.target.value) {
        return true
      }
      return false
    });

displayComments(filteredCommentsReturn);
  displayComments(filteredComments)//отфильтрованые коментарии по совпадению;
}

searchInput.addEventListener('keyup', filteredByText);



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

function getUserComments() {

    let responce = sessionStorage.setItem('commentsList', 'https://run.mocky.io/v3/95fc487f-cc77-4965-824f-c13b582983c0');
    console.log('allComments--> ', allComments)

    displayComments('allComments');
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



