const sabeBtn = document.getElementById('saveComments');
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

    for(let i = 0; i < allComments.length; i++) {

        console.log(allComments[i]);
    }

};

renderComments();

sabeBtn.addEventListener('click', saveComment);


