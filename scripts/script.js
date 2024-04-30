document.addEventListener('DOMContentLoaded', () => {
    var editor = document.getElementById('text-editor');
    editor.innerText = "Start typing here..."; // initial text :)

    // function that will remove the placeholder text after person clicks
    editor.addEventListener('focus', () => {
        if (editor.innerText === "Start typing here...") {
            console.log('test');
            editor.innerText = '';
        }
    });

    editor.addEventListener('blur', () => {
        if (editor.innerText === '') {
            editor.innerText = "Start typing here...";
        }
    });
});