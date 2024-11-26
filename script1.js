var carousel;


carousel = ['https://assets.onecompiler.app/42yuum4ef/42yzwp4wj/v&a.jpg', 'https://assets.onecompiler.app/42yuum4ef/42yzwp4wj/kirsten.jpg', 'https://assets.onecompiler.app/42yuum4ef/42yzwp4wj/tablemountain2.png', '	https://assets.onecompiler.app/42yuum4ef/42yzwp4wj/robben.jpg', 'https://assets.onecompiler.app/42yuum4ef/42yzwp4wj/table.jpg'];
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
