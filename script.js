const sabeBtn = document.getElementById('saveComments');

const saveComment = function() {
    console.log('Name:', userName.value);
    console.log('Comment:', userComment.value);
    document.getElementById('userName').value = '';
    document.getElementById('userComment').value = '';
}

sabeBtn.addEventListener('click', saveComment);


