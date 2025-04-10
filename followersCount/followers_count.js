let count = 0;
//function to increase the count by 1
function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}

//checking the count of followers
function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulatioins!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

//function to display the count
function displayCount() {
    document.getElementById('countDisplay').textContent = count;
}


