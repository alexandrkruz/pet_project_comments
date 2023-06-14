const saveBtn = document.getElementById('saveComments');
const commentList = document.getElementById('comment-list');

let allComments = JSON.parse(sessionStorage.getItem('comments')) || [];

const searchInput = document.getElementById('search');

const filteredByText = (event) => {
  const filteredComments = allComments.filter((item) => {
    return item.title.includes(event.target.value);
  });

  displayComments(filteredComments);
}

searchInput.addEventListener('keyup', filteredByText);

const saveComment = function() {
  const userName = document.getElementById('userName');
  const userComment = document.getElementById('userComment');
  const newComment = {
    title: userName.value,
    body: userComment.value,
    time: new Date().toLocaleDateString()
  }
  allComments.push(newComment);
  userName.value = '';
  userComment.value = '';
  saveCommentsToStorage();
}

function saveCommentsToStorage() {
  sessionStorage.setItem('comments', JSON.stringify(allComments));
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

saveBtn.addEventListener('click', saveComment);

async function getUserComments() {
  let response = await fetch('https://run.mocky.io/v3/95fc487f-cc77-4965-824f-c13b582983c0');
  let comments = await response.json();
  allComments = [...comments];
  saveCommentsToStorage();
  displayComments(comments);
};

getUserComments();

const sortDirectionSelect = document.getElementById("sort-direction");

sortDirectionSelect.addEventListener("change", sortedComments);

function sortedComments() {
  const sortDirection = sortDirectionSelect.value;

  if (sortDirection === "decs") {
    allComments.sort((a, b) => new Date(b.time) - new Date(a.time));
  } else {
    allComments.sort((a, b) => new Date(a.time) - new Date(b.time));
  }

  displayComments(allComments);
};