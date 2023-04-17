$(document).ready(function () {
    $("#ComplaintsForm").submit(function () {
        let name = $("#Name").val(),
            date = $("#Date").val(),
            complaint = $("#Complaint").val();

        localStorage.setItem("Name", name);
        localStorage.setItem("Date", date);
        localStorage.setItem("Complaint", complaint);
        console.log(localStorage.getItem("Name"));
     })
})
    function writeComplaint() {
        if (localStorage.getItem("Name") != null && localStorage.getItem("Complaint") != null) {
            $(".ComplainerName").html(localStorage.getItem("Name"));
            $(".ComplaintDate").html(localStorage.getItem("Date"));
            $(".Complaint").html(localStorage.getItem("Complaint"));
        }
    }