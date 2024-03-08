function toggleText() {
    var hiddenText = document.getElementById('hiddenText');
    var button = document.querySelector("button");
 
    button.addEventListener("click", function() {
        if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
            hiddenText.style.display = 'block';
        } else {
            hiddenText.style.display = 'none';
        }
    });
}
 
toggleText();