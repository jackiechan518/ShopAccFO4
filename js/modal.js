(function ($) {
    document.getElementById('openModalBtn').addEventListener('click', function () {
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
      });      
})(jQuery);
