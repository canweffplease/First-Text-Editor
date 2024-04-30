document.addEventListener('DOMContentLoaded', () => {
    var editor = document.getElementById('text-editor');
    editor.innerText = "Start typing here..."; // initial text :)

    // function that will remove the placeholder text after person clicks
    editor.addEventListener('focus', () => {
        if (editor.innerText === "Start typing here...") {
            editor.innerText = '';
        }
    });

    editor.addEventListener('blur', () => {
        if (editor.innerText === '') {
            editor.innerText = "Start typing here...";
        }
    });

    document.getElementById('file-input').addEventListener('change', (event) => {
        const file = event.target.files[0]; // reads in the first selected file

        if(!file) { // runs if no file selected
            alert('No file selected!');
            return;
        }

        const reader = new FileReader(); // initialize file reader
        reader.onload = (loadEvent) => { // on load of the reader
            const content = loadEvent.target.result; // variable to store content of loaded file
            const lines = content.replace(/\r\n?/g, '\n').split('\n');
            const formattedLines = lines.map((line) => {
                const htmlLine = line.replace(/ {4}/g, '<span class="tab"></span>');
                return htmlLine;
            });
            const editor = document.getElementById('text-editor'); // selects editor
            editor.innerHTML = formattedLines.join('<br>'); // changes text to content of loaded file
            console.log(editor.innerHTML);
        };

        reader.readAsText(file);
    });
});