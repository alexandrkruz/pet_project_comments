const saveBtn = document.getElementById('saveComments');
saveBtn.addEventListener('click', saveComment);

const commentList = document.getElementById('comment-list');

const searchInput = document.getElementById('search');
searchInput.addEventListener('keyup', filteredByText);

const sortDirectionSelect = document.getElementById("sort-direction");
sortDirectionSelect.addEventListener("change", sortedComments);


getUserComments();

function filteredByText(event) {
  let allComments = getToStorage('commentsList');

  const filteredComments = allComments.filter((item) => {
    return item.title.includes(event.target.value);
  });

  displayComments(filteredComments);
}


function saveComment() {
  const userName = document.getElementById('userName');
  const userComment = document.getElementById('userComment');
  const newComment = {
    title: userName.value,
    body: userComment.value,
    time: new Date().toLocaleDateString()
  }

  userName.value = '';
  userComment.value = '';

  let comments = getToStorage('commentsList');
  comments.push(newComment);

  saveToStorage('commentsList', comments);
  displayComments(comments);
}

function saveToStorage(name, data) {
  sessionStorage.setItem(name, JSON.stringify(data));
}

function getToStorage(name) {
  return JSON.parse(sessionStorage.getItem(name))

}

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
}

async function getUserComments() {
  let response = await fetch('https://run.mocky.io/v3/95fc487f-cc77-4965-824f-c13b582983c0');
  let comments = await response.json();
  saveToStorage('commentsList', comments);
  displayComments(comments);
};


function sortedComments() {
  const sortDirection = sortDirectionSelect.value;
  let allComments = getToStorage('commentsList');

  if (sortDirection === "decs") {
    allComments.sort((a, b) => new Date(b.time) - new Date(a.time));
  } else {
    allComments.sort((a, b) => new Date(a.time) - new Date(b.time));
  }

  displayComments(allComments);
};