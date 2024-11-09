$(document).ready(function() {
    var table = $('#example').DataTable({
        paging: true,
        pageLength: 5, // Set the number of entries per page
        language: {
            lengthMenu: '_MENU_ entries'
        }
    });

    $('#prev-page').on('click', function() {
        table.page('previous').draw('page');
    });

    $('#next-page').on('click', function() {
        table.page('next').draw('page');
    });
});