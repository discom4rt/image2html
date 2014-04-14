(function(window, document, undefined) {

  window.onload = function() {
    var imageLoader = document.getElementById('image-file'),
      container = document.getElementById('image-container'),
      imageChooser = document.getElementById('image-choose');

    imageLoader.addEventListener('change', handleImage, false);
    imageChooser.addEventListener('click', chooseFile, false);

    function handleImage(imageEvent) {
        var reader = new FileReader();

        reader.onload = function(readerEvent) {
            var img = new Image();

            img.onload = function() {
                container.innerHTML = '';
                window.Image2HTML.convert(img, container);
                imageChooser.style.display = 'none';
            };
            img.src = readerEvent.target.result;
        };
        reader.readAsDataURL(imageEvent.target.files[0]);
    }

    function chooseFile(event) {
      imageLoader.click();
    }
  };

}(window, document));
