findVideo = function () {
  var videos = document.querySelectorAll('.video-open');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}

var modalVideo = document.querySelector('#modal-video').content.querySelector('.modal').cloneNode(true);
setupVideo = function (video) {
  var link = video;
  var id = generateId(link);

  link.addEventListener('click', () => {
    setupIframe(id);
    document.body.appendChild(modalVideo);
    document.addEventListener('keydown', onModalEscPress);
  });

  link.removeAttribute('href');
  link.removeAttribute('target');
}

setupIframe = function (id) {
  var iframe = modalVideo.querySelector('.modal-video');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateUrl(id));
}

generateUrl = function (id) {
  var linkSettings = '?rel=0&showinfo=0&autoplay=1';
  return 'https://www.youtube.com/embed/' + id + linkSettings;
}

generateId = function (link) {
  let url = link.href;
  return url.split('=')[1];
}

findVideo();


// CLOSE MODAL

var ESC_KEYCODE = 27;
var onModalEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeModal();
  }
};

var closeModal = function () {
  modalVideo.remove();
  document.removeEventListener('keydown', onModalEscPress);
};


var modalCloseBtn = modalVideo.querySelector('.modal__close');
modalCloseBtn.addEventListener('click', function () {
  closeModal();
});

modalVideo.addEventListener('click', function (evt) {
  if (evt.target === modalVideo) {
    closeModal();
  }
});
