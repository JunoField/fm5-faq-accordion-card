function processClick() {
    if (document.getElementById("question-2").classList.contains("question-open")) {
        document.getElementById("question-2").classList.remove("question-open");
        document.getElementById("answer-2").classList.remove("answer-open");
    } else {
        document.getElementById("question-2").classList.add("question-open");
        document.getElementById("answer-2").classList.add("answer-open");
    }
}

//# sourceMappingURL=index.1cc3346d.js.map
