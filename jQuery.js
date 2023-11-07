$(function () {
    const apiBaseUrl = "https://usman-fake-api.herokuapp.com/api/recipes";
    // Function to fetch and display data
    function fetchData() {
        $.get(apiBaseUrl, function (data) {
            $("#List").empty();
            data.forEach(function (item) {
                $("#List").append(`<li><h3>ID: ${item._id}</h3> <h3>Title: </h3>${item.title}  <h3>Description: </h3>${item.body}</li>`);
            });
        });
    }

    fetchData(); // Fetch data when the page loads

    // Create (POST)
    $("#create").on('click', function () {
        const title = $("#name").val();
        const body = $("#description").val();
        $.post(apiBaseUrl, { title, body }, function () {
            fetchData(); // Refresh the list
        });
    });

    // Update (PUT)
    $("#update").on('click', function () {
        const id = $("#updateId").val();
        const title = $("#newName").val();
        const body = $("#newDescription").val();
        $.ajax({
            url: `${apiBaseUrl}/${id}`,
            type: "PUT",
            data: { title, body },
            success: function () {
                fetchData(); // Refresh the list
            }
        });
    });

    // Delete (DELETE)
    $("#delete").on('click', function () {
        const id = $("#deleteId").val();
        $.ajax({
            url: `${apiBaseUrl}/${id}`,
            type: "DELETE",
            success: function () {
                fetchData(); // Refresh the list
            }
        });
    });
});