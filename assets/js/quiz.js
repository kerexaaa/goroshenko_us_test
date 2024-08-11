let count = 0;
let answer = [];

let user_answers = [];

const quizMain = document.getElementById("quiz");
const quizStart = document.getElementById("quiz__start");
const startBtn = document.getElementById("quiz__start-btn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const resultPage = document.getElementById("result");
const header = document.getElementById("header");

// overflows
const overflowFactAim = document.getElementById("overflow__fact-aim");
const overflowFactSleep = document.getElementById("overflow__fact-sleep");
const overflowFactSmth = document.getElementById("overflow__fact-smth");
const overflowResult = document.getElementById("overflow__result");
const overflowNext = document.querySelector(".overflowNext");

$(document).ready(function () {
    startBtn.addEventListener("click", () => {
        quizStart.classList.remove("active");
        let hideQuizStart = setTimeout(() => {
            quizStart.remove();
        }, 500);
        let appendQuiz = setTimeout(() => {
            quizMain.style.opacity = 1;
            quizMain.style.visibility = "visible";
        }, 500);
        button_manager();
        updateWidthProgressBar();
        selected_Answer();
    });

    function button_manager() {
        if (count > 0) {
            nextBtn.setAttribute("disabled", true);
            prevBtn.classList.remove("hidden");
            if (count == 8) {
            } else {
                $("#nextBtn").show();
            }
        } else {
            $("#prevBtn").addClass("hidden");
        }
    }

    function adding_Question(data, i) {
        $("#question").text(data[i].Quiz);
        $("#options1").text(data[i].option1);
        $("#options2").text(data[i].option2);
        $("#options3").text(data[i].option3);
        $("#options4").text(data[i].option4);
        $("#number").text(Number(i + 1));
        let roundDiv = document.createElement("div");
        roundDiv.classList.add("round");
        $("#options").children("button").append(roundDiv);
    }

    function selected_Answer() {
        for (let i = 0; i < 4; i++) {
            let a = document.getElementById("options").children;
            if (a[i].innerHTML == answer[count]) {
                $("#options").children("button")[i].classList.add("active");
            } else {
                $("#options").children("button")[i].classList.remove("active");
            }
        }
    }

    fetch("questions.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            $("#quiz__start-btn").click(function () {
                adding_Question(data.Questions, count);
            });

            $(".option").click(function () {
                $(this).addClass("active");
                $(this).siblings().removeClass("active");
                answer[count] = $(this).html;
                for (let i = 0; i < $("#options").children().length; i++) {
                    if (
                        $("#options").children()[i].classList.contains("active")
                    ) {
                        $("#nextBtn").removeAttr("disabled");
                    }
                }
            });

            $("#nextBtn").click(function () {
                if (count > answer.length - 1) {
                    nextBtn.setAttribute("disabled", true);
                } else if (count === 0) {
                    let showOverflowFactAim = setTimeout(() => {
                        $(".overflowNext").removeClass("pi");
                        header.style.opacity = 0;
                        header.style.visibility = "hidden";
                        header.style.display = "none";
                        overflowFactAim.style.opacity = 1;
                        overflowFactAim.style.visibility = "visible";
                        overflowFactAim.classList.add("active");
                        $(".progressbar").addClass("overflow");
                        $(".progressbar-wrapper").addClass("overflow");
                        $(".progressbar-done").addClass("overflow");
                        $(".pagination-questions").addClass("overflow");
                        $("#number").addClass("overflow");
                    }, 100);
                    $(".overflowNext").click(function () {
                        let closeOverflowFactAim = setTimeout(() => {
                            $(".overflowNext").addClass("pi");
                            header.style.opacity = 1;
                            header.style.visibility = "visible";
                            header.style.display = "block";
                            overflowFactAim.style.opacity = 0;
                            overflowFactAim.style.visibility = "hidden";
                            $(".progressbar").removeClass("overflow");
                            $(".progressbar-wrapper").removeClass("overflow");
                            $(".progressbar-done").removeClass("overflow");
                            $(".pagination-questions").removeClass("overflow");
                            $("#number").removeClass("overflow");
                        }, 0);

                        // next question

                        for (
                            let i = 0;
                            i < $("#options").children().length;
                            i++
                        ) {
                            if ($(".option")[i].classList.contains("active")) {
                                user_answers.push(
                                    data.Questions[count].Quiz +
                                        " " +
                                        $(".option")[i].innerText
                                );
                            }
                        }
                        count = 1;
                        $(".option")[2].style.display = "flex";
                        $(".option")[3].style.display = "flex";
                        nextBtn.style.marginTop = "50px";
                        $(".stats-after").removeClass("active");
                        adding_Question(data.Questions, count);
                        prevBtn.classList.remove("hidden");
                        $("#nextBtn").removeAttr("disabled");
                        $(".option").removeClass("active");
                        button_manager();
                        selected_Answer();
                        updateWidthProgressBar();
                        nextBtn.setAttribute("disabled", true);
                    });
                } else if (count === 4) {
                    let showOverflowFactSleep = setTimeout(() => {
                        $(".overflowNext").removeClass("pi");
                        header.style.opacity = 0;
                        header.style.visibility = "hidden";
                        header.style.display = "none";
                        overflowFactSleep.style.opacity = 1;
                        overflowFactSleep.style.visibility = "visible";
                        overflowFactSleep.classList.add("active");
                        $(".progressbar").addClass("overflow");
                        $(".progressbar-wrapper").addClass("overflow");
                        $(".progressbar-done").addClass("overflow");
                        $(".pagination-questions").addClass("overflow");
                        $("#number").addClass("overflow");
                    }, 100);
                    $(".overflowNext").click(function () {
                        let closeOverflowFactSleep = setTimeout(() => {
                            $(".overflowNext").addClass("pi");
                            header.style.opacity = 1;
                            header.style.visibility = "visible";
                            header.style.display = "block";
                            overflowFactSleep.style.opacity = 0;
                            overflowFactSleep.style.visibility = "hidden";
                            $(".progressbar").removeClass("overflow");
                            $(".progressbar-wrapper").removeClass("overflow");
                            $(".progressbar-done").removeClass("overflow");
                            $(".pagination-questions").removeClass("overflow");
                            $("#number").removeClass("overflow");
                        }, 0);

                        // next question

                        for (
                            let i = 0;
                            i < $("#options").children().length;
                            i++
                        ) {
                            if ($(".option")[i].classList.contains("active")) {
                                user_answers.push(
                                    data.Questions[count].Quiz +
                                        " " +
                                        $(".option")[i].innerText
                                );
                            }
                        }
                        count = 5;
                        $(".option")[2].style.display = "flex";
                        $(".option")[3].style.display = "flex";
                        nextBtn.style.marginTop = "50px";
                        $(".stats-after").removeClass("active");
                        adding_Question(data.Questions, count);
                        prevBtn.classList.remove("hidden");
                        $("#nextBtn").removeAttr("disabled");
                        $(".option").removeClass("active");
                        button_manager();
                        selected_Answer();
                        updateWidthProgressBar();
                        nextBtn.setAttribute("disabled", true);
                    });
                } else if (count === 6) {
                    let showOverflowFactSmth = setTimeout(() => {
                        $(".overflowNext").removeClass("pi");
                        header.style.opacity = 0;
                        header.style.visibility = "hidden";
                        header.style.display = "none";
                        overflowFactSmth.style.opacity = 1;
                        overflowFactSmth.style.visibility = "visible";
                        overflowFactSmth.classList.add("active");
                        $(".progressbar").addClass("overflow");
                        $(".progressbar-wrapper").addClass("overflow");
                        $(".progressbar-done").addClass("overflow");
                        $(".pagination-questions").addClass("overflow");
                        $("#number").addClass("overflow");
                    }, 100);
                    $(".overflowNext").click(function () {
                        let closeOverflowFactSmth = setTimeout(() => {
                            $(".overflowNext").addClass("pi");
                            header.style.opacity = 1;
                            header.style.visibility = "visible";
                            header.style.display = "block";
                            overflowFactSmth.style.opacity = 0;
                            overflowFactSmth.style.visibility = "hidden";
                            $(".progressbar").removeClass("overflow");
                            $(".progressbar-wrapper").removeClass("overflow");
                            $(".progressbar-done").removeClass("overflow");
                            $(".pagination-questions").removeClass("overflow");
                            $("#number").removeClass("overflow");
                        }, 0);

                        // next question

                        for (
                            let i = 0;
                            i < $("#options").children().length;
                            i++
                        ) {
                            if ($(".option")[i].classList.contains("active")) {
                                user_answers.push(
                                    data.Questions[count].Quiz +
                                        " " +
                                        $(".option")[i].innerText
                                );
                            }
                        }
                        count = 7;

                        $(".option")[2].style.display = "none";
                        $(".option")[3].style.display = "none";
                        nextBtn.style.marginTop = "20px";
                        $(".stats-after").addClass("active");
                        adding_Question(data.Questions, count);
                        prevBtn.classList.remove("hidden");
                        $("#nextBtn").removeAttr("disabled");
                        $(".option").removeClass("active");
                        button_manager();
                        selected_Answer();
                        updateWidthProgressBar();
                        nextBtn.setAttribute("disabled", true);
                    });
                } else if (count === 8) {
                    $(".option")[2].style.display = "flex";
                    $(".option")[3].style.display = "flex";
                    nextBtn.style.marginTop = "50px";
                    $(".stats-after").removeClass("active");
                    for (let i = 0; i < $("#options").children().length; i++) {
                        if ($(".option")[i].classList.contains("active")) {
                            user_answers.push(
                                data.Questions[count].Quiz +
                                    " " +
                                    $(".option")[i].innerText
                            );
                        }
                    }
                    console.log(user_answers);
                    quizMain.classList.remove("active");
                    let hideQuiz = setTimeout(() => {
                        header.style.opacity = 0;
                        header.style.visibility = "hidden";
                        header.style.display = "none";
                        quizMain.style.opacity = 0;
                        quizMain.style.visibility = "hidden";
                    }, 100);
                    let overflow_analytics = setTimeout(() => {
                        overflowResult.style.opacity = 1;
                        overflowResult.classList.add("active");
                    }, 300);
                    let overflow_analytics_bar = setTimeout(() => {
                        $(".progress-done-analytics").addClass("active");
                    }, 801);
                    overflowResult.classList.remove("active");
                    let closeOverflow_analytics = setTimeout(() => {
                        header.style.opacity = 1;
                        header.style.visibility = "visible";
                        header.style.display = "block";
                        overflowResult.style.opacity = 0;
                        overflowResult.style.visibility = "hidden";
                    }, 3300);
                    let appendResult = setTimeout(() => {
                        overflowResult.remove();
                        quizMain.remove();
                        resultPage.style.opacity = 1;
                        resultPage.style.visibility = "visible";
                    }, 4301);
                } else {
                    for (let i = 0; i < $("#options").children().length; i++) {
                        if ($(".option")[i].classList.contains("active")) {
                            user_answers.push(
                                data.Questions[count].Quiz +
                                    " " +
                                    $(".option")[i].innerText
                            );
                        }
                    }
                    $(".option")[2].style.display = "flex";
                    $(".option")[3].style.display = "flex";
                    nextBtn.style.marginTop = "50px";
                    $(".stats-after").removeClass("active");
                    count++;
                    adding_Question(data.Questions, count);
                    prevBtn.classList.remove("hidden");
                    $("#nextBtn").removeAttr("disabled");
                    $(".option").removeClass("active");
                    button_manager();
                    selected_Answer();
                    updateWidthProgressBar();
                    nextBtn.setAttribute("disabled", true);
                }
            });

            $("#prevBtn").click(function () {
                if (count === 8) {
                    $(".option")[2].style.display = "none";
                    $(".option")[3].style.display = "none";
                    nextBtn.style.marginTop = "20px";
                    $(".stats-after").addClass("active");
                    user_answers.pop();
                    nextBtn.setAttribute("disabled", false);
                    count--;
                    adding_Question(data.Questions, count);
                    button_manager();
                    selected_Answer();
                    updateWidthProgressBar();
                } else {
                    user_answers.pop();
                    $(".option")[2].style.display = "flex";
                    $(".option")[3].style.display = "flex";
                    nextBtn.style.marginTop = "50px";
                    $(".stats-after").removeClass("active");
                    nextBtn.setAttribute("disabled", false);
                    count--;
                    adding_Question(data.Questions, count);
                    button_manager();
                    selected_Answer();
                    updateWidthProgressBar();
                }
            });
        });

    function updateWidthProgressBar() {
        const numberQuestion = document.getElementById("number");
        const progressbarDone = document.querySelector(".progressbar-done");
        widthCalc = 0.1111 + (numberQuestion.textContent / 9) * 100 + "%";
        progressbarDone.style.width = widthCalc;
    }
});
