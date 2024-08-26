document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    var imageName = document.getElementById("imageName");

    document.querySelectorAll('.card img').forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
            imageName.innerHTML = this.closest('.card').getAttribute('data-name');
        }
    });

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = "none";
    }

    function filterSelection(category) {
        var cards = document.querySelectorAll('.card');
        if (category === 'all') category = '';

        cards.forEach(card => {
            card.style.display = 'none';
            if (card.dataset.name === category || category === '') {
                card.style.display = 'block';
            }
        });

        document.querySelectorAll('.filter_buttons button').forEach(button => {
            button.classList.remove('active');
        });

        event.target.classList.add('active');
    }

    document.querySelectorAll('.filter_buttons button').forEach(button => {
        button.addEventListener('click', function(event) {
            filterSelection(this.getAttribute('data-filter'));
        });
    });

    filterSelection('all');

    document.getElementById('exploreButton').addEventListener('click', function() {
        document.getElementById('welcomePage').style.display = 'none';
        document.getElementById('galleryPage').style.display = 'block';
    });
});
