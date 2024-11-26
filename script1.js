var carousel;


carousel = ['https://icons.iconarchive.com/icons/graphics-vibe/classic-3d-social/128/facebook-icon.png', 'https://icons.iconarchive.com/icons/sicons/basic-round-social/128/instagram-icon.png', 'https://icons.iconarchive.com/icons/graphics-vibe/simple-rounded-social/128/twitter-icon.png', 'https://icons.iconarchive.com/icons/limav/flat-gradient-social/128/Whatsapp-icon.png', 'https://icons.iconarchive.com/icons/dakirby309/simply-styled/128/YouTube-icon.png'];
let element_pictures = document.getElementById('pictures');
element_pictures.setAttribute("src", carousel[0]);


document.getElementById('previous').addEventListener('click', (event) => {
  let element_pictures2 = document.getElementById('pictures');
  carousel.unshift(carousel.pop());
  element_pictures2.setAttribute("src", carousel.pop());

});

document.getElementById('next').addEventListener('click', (event) => {
  let element_pictures3 = document.getElementById('pictures');
  carousel.unshift(carousel.pop());
  element_pictures3.setAttribute("src", carousel[0]);

});
