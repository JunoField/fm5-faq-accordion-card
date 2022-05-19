function processClick(qaNo) {
    if (document.getElementById("question-" + qaNo).classList.contains("question-open")) {
        document.getElementById("question-" + qaNo).classList.remove("question-open");
        document.getElementById("answer-" + qaNo).classList.remove("answer-open");
    } else {
        document.getElementById("question-" + qaNo).classList.add("question-open");
        document.getElementById("answer-" + qaNo).classList.add("answer-open");
    }
}

//# sourceMappingURL=index.1cc3346d.js.map
