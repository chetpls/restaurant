import './style.css';
import img1 from './images/c1.png';
import img2 from './images/c2.png';
import img3 from './images/c3.png';
import img4 from './images/c4.png';
import img5 from './images/c5.png';
import img6 from './images/p1.png';
import img7 from './images/p2.png';
import img8 from './images/p3.png';
import img9 from './images/p4.png';
import img10 from './images/p5.png';

export default function createMenuPage() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('blackboard');

    const menuHeader = document.createElement('div');
    menuHeader.classList.add('menu-header');
    menuHeader.textContent = 'Menu';

    const container = document.createElement('div');
    container.classList.add('container');

    const items = [
        { src: img1, alt: 'c1', name: 'Espresso' },
        { src: img2, alt: 'c2', name: 'Espresso Cream' },
        { src: img3, alt: 'c3', name: 'Latte' },
        { src: img4, alt: 'c4', name: 'Latte Cream' },
        { src: img5, alt: 'c5', name: 'Caramel Cream' },
        { src: img6, alt: 'p1', name: 'Chocolate Muffin' },
        { src: img7, alt: 'p2', name: 'Croissant' },
        { src: img8, alt: 'p3', name: 'Blueberry Muffin' },
        { src: img9, alt: 'p4', name: 'Matcha Cake' },
        { src: img10, alt: 'p5', name: 'Jelly Filled' }
    ];

    items.forEach(item => {
        const itemCard = document.createElement('div');
        itemCard.classList.add('item-card');

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt;

        const nameDiv = document.createElement('div');
        nameDiv.classList.add('name');
        nameDiv.textContent = item.name;

        itemCard.appendChild(img);
        itemCard.appendChild(nameDiv);
        container.appendChild(itemCard);
    });

    menuDiv.appendChild(menuHeader);
    menuDiv.appendChild(container);

    return menuDiv;
}
