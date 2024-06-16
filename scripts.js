document.querySelectorAll('.vote-button').forEach((button) => {
    button.addEventListener('click', () => {
        const voteId = button.getAttribute('data-vote-id');
        const voteCountElement = document.getElementById(voteId);
        voteCountElement.innerText = parseInt(voteCountElement.innerText) + 1;
    });
});
