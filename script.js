const sabeBtn = document.getElementById('saveComments');

sabeBtn.addEventListener('click', saveComment);

const saveComment = function() {
    console.log('Name:', userName.value);
    console.log('Comment:', userComment.value);
    document.getElementById('userName');
    document.getElementById('userComment');
}


