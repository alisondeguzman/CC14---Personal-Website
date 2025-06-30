const images = {
  'projects-gallery': [
    'images/projects 2.jpg',
    'images/projects 3.jpg',
    'images/projects 4.jpg'
  ],
  'commissions-gallery': [
    'images/commissions 1.jpg',
    'images/commissions 2.jpg',
    'images/commissions 3.jpg'
  ],
  'animations-gallery': [
    'images/animations 1.GIF',
    'images/animations 2.GIF',
    'images/animations 3.GIF'
  ],
  'personal-gallery': [
    'images/personal creations 1.jpg',
    'images/personal creations 2.jpg',
    'images/personal creations 3.jpg'
  ]
};


const indices = {
  'projects-gallery': 0,
  'commissions-gallery': 0,
  'animations-gallery': 0,
  'personal-gallery': 0
};

function nextSlide(id) {
  indices[id] = (indices[id] + 1) % images[id].length;
  updateImage(id);
}

function previousSlide(id) {
  indices[id] = (indices[id] - 1 + images[id].length) % images[id].length;
  updateImage(id);
}

function updateImage(id) {
  const container = document.getElementById(id);
  const img = container.querySelector('img');
  img.src = images[id][indices[id]];
}