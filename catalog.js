document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById('kitchen-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalImage = document.getElementById('modal-image');
  const modalDescription = document.getElementById('modal-description');
  const modalMaterials = document.getElementById('modal-materials');
  const modalPrice = document.getElementById('modal-price');
  const closeBtn = document.querySelector('.close-btn');

  const kitchenData = {
    "Milano Nero": {
      key: "milano",
      image: "images/kitchen1.jpg",
      description: "Современная кухня в чёрном матовом цвете с акцентами под латунь.",
      materials: "МДФ в матовой эмали, шпон дуба, фурнитура Blum",
      price: "от 720 000 ₽"
    },
    "Imperial Gold": {
      key: "imperial",
      image: "images/kitchen2.jpg",
      description: "Элегантный гарнитур с золотой фурнитурой и лаконичными фасадами.",
      materials: "Пластик с глянцем, металл, стекло",
      price: "от 890 000 ₽"
    },
    "Noir Élite": {
      key: "noir",
      image: "images/kitchen3.jpg",
      description: "Французский стиль в глубоких тонах с каменной столешницей.",
      materials: "Лак, камень, массив дуба",
      price: "от 960 000 ₽"
    },
    "Verona Luxe": {
      key: "verona",
      image: "images/kitchen4.jpg",
      description: "Классика и комфорт — светлая кухня с резными фасадами.",
      materials: "Массив ясеня, фрезеровка, патинирование",
      price: "от 830 000 ₽"
    },
    "Oslo Matte": {
      key: "oslo",
      image: "images/kitchen5.jpg",
      description: "Скандинавская кухня с матовыми фасадами и натуральным деревом.",
      materials: "ЛДСП Egger, шпон, матовая эмаль",
      price: "от 680 000 ₽"
    },
    "Berlin Steel": {
      key: "berlin",
      image: "images/kitchen6.jpg",
      description: "Индустриальный стиль с серыми фасадами и чёрной фурнитурой.",
      materials: "Ламинат под бетон, металл, HPL",
      price: "от 740 000 ₽"
    },
    "Roma Classico": {
      key: "roma",
      image: "images/kitchen7.jpg",
      description: "Итальянская классика в светлом исполнении с витражами и колоннами.",
      materials: "Массив берёзы, стекло, декоративная фурнитура",
      price: "от 910 000 ₽"
    },
    "Tokyo Line": {
      key: "tokyo",
      image: "images/kitchen8.jpg",
      description: "Минималистичная кухня в японском духе — строго, лаконично, элегантно.",
      materials: "Гладкий лак, встроенные ручки, стекло",
      price: "от 760 000 ₽"
    },
    "Paris Blanc": {
      key: "paris",
      image: "images/kitchen9.jpg",
      description: "Светлая кухня в стиле прованс с фрезеровкой и мягкими линиями.",
      materials: "МДФ с эмалью, декоративная патина, фасады с филёнками",
      price: "от 820 000 ₽"
    },
    "New York Loft": {
      key: "loft",
      image: "images/kitchen10.jpg",
      description: "Темные фасады, бетонная текстура и открытые полки в стиле лофт.",
      materials: "ЛДСП под бетон, металл, чёрная сталь",
      price: "от 700 000 ₽"
    },
    "Vienna Silk": {
      key: "vienna",
      image: "images/kitchen11.jpg",
      description: "Шелковистые фасады кремового цвета с встроенной подсветкой.",
      materials: "МДФ soft-touch, LED-подсветка, стеклянные витрины",
      price: "от 850 000 ₽"
    },
    "Dubai Black": {
      key: "dubai",
      image: "images/kitchen12.jpg",
      description: "Глянцевая черная кухня с позолоченными ручками и барной стойкой.",
      materials: "Глянец, стекло, металл с золотым напылением",
      price: "от 980 000 ₽"
    }
  };

  document.querySelectorAll('.catalog-item').forEach(item => {
    item.addEventListener('click', () => {
      const title = item.querySelector('h3').innerText;
      const data = kitchenData[title];

      modalTitle.innerText = title;
      modalImage.src = data.image;
      modalDescription.innerText = data.description;
      modalMaterials.innerText = data.materials;
      modalPrice.innerText = data.price;
      const reviewLink = document.getElementById('review-link');
      reviewLink.href = `reviews.html?model=${data.key}`;
      modal.style.display = 'flex';
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});

document.getElementById('style-filter').addEventListener('change', function () {
  const value = this.value;
  const items = document.querySelectorAll('.catalog-item');

  items.forEach(item => {
    if (value === 'all' || item.classList.contains(value)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const model = params.get('model');
  if (model) {
    const match = Object.entries(kitchenData).find(([name, obj]) => obj.key === model);
    if (match) {
      const [title, data] = match;
      modalTitle.innerText = title;
      modalImage.src = data.image;
      modalDescription.innerText = data.description;
      modalMaterials.innerText = data.materials;
      modalPrice.innerText = data.price;
      reviewLink.href = `reviews.html?model=${data.key}`;
      modal.style.display = 'flex';
    }
  }
});
