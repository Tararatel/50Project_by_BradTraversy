'use strict';

const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
    {
        name: 'Name 1',
        position: 'Pos 1',
        photo: 'https://randomuser.me/api/portraits/women/46.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugiat corrupti quaerat? Fugit adipisci aspernatur doloremque et minima, deserunt nisi animi maiores fuga quo, consequuntur magnam harum eius hic expedita omnis vel iusto! Harum tenetur voluptate, aspernatur magni officia nesciunt possimus adipisci iusto. Officia laudantium ut asperiores modi eum labore!",
    },
    {
        name: 'Name 2',
        position: 'Pos 2',
        photo: 'https://randomuser.me/api/portraits/women/47.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugiat corrupti quaerat? Fugit adipisci aspernatur doloremque et minima, deserunt nisi animi maiores fuga quo, consequuntur magnam harum eius hic expedita omnis vel iusto! Harum tenetur voluptate, aspernatur magni officia nesciunt possimus adipisci iusto. Officia laudantium ut asperiores modi eum labore!",
    },
    {
        name: 'Name 3',
        position: 'Pos 3',
        photo: 'https://randomuser.me/api/portraits/women/48.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugiat corrupti quaerat? Fugit adipisci aspernatur doloremque et minima, deserunt nisi animi maiores fuga quo, consequuntur magnam harum eius hic expedita omnis vel iusto! Harum tenetur voluptate, aspernatur magni officia nesciunt possimus adipisci iusto. Officia laudantium ut asperiores modi eum labore!",
    },
    {
        name: 'Name 4',
        position: 'Pos 4',
        photo: 'https://randomuser.me/api/portraits/women/49.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugiat corrupti quaerat? Fugit adipisci aspernatur doloremque et minima, deserunt nisi animi maiores fuga quo, consequuntur magnam harum eius hic expedita omnis vel iusto! Harum tenetur voluptate, aspernatur magni officia nesciunt possimus adipisci iusto. Officia laudantium ut asperiores modi eum labore!",
    },
    {
        name: 'Name 5',
        position: 'Pos 5',
        photo: 'https://randomuser.me/api/portraits/women/50.jpg',
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fugiat corrupti quaerat? Fugit adipisci aspernatur doloremque et minima, deserunt nisi animi maiores fuga quo, consequuntur magnam harum eius hic expedita omnis vel iusto! Harum tenetur voluptate, aspernatur magni officia nesciunt possimus adipisci iusto. Officia laudantium ut asperiores modi eum labore!",
    },
];

let idx = 1;

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx];

    testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;

    idx++;

    if(idx > testimonials.length - 1) {
        idx = 0;
    }
}

setInterval(updateTestimonial, 10000);