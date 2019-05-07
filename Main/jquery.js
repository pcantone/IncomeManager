$(document).ready(function () {

    $("#formABC").submit(function (e) {

        //stop submitting the form to see the disabled button effect
        e.preventDefault();

        //disable the submit button
        $("#btnSubmit").attr("disabled", true);

        //disable a normal button
        $("#btnTest").attr("disabled", true);

        return true;

    });
});

$(document).ready(function () {

    $("#formQuestions").submit(function (e) {

        //stop submitting the form to see the disabled button effect
        e.preventDefault();

        //disable the submit button
        $("#buttonQuestionOne").attr("disabled", true);
        $("#buttonQuestionTwo").attr("disabled", true);
        $("#buttonQuestionThree").attr("disabled", true);
        return true;

    });
});
