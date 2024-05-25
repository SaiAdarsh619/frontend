// Content.js
import React from 'react';

const Content = () => {
    return (
        <div>
            <h2>Content Page</h2>
            {/* Add your course names, descriptors, and links here */}
            <div class="card" >
  <div class="card-body">
    <h5 class="card-title">Neet</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Description: Crash Course for neet</h6>
       <a href="https://www.youtube.com/watch?v=zY38SV2BW7k&list=PLJyab0VQDBGWVYHPLjAHjw9y1YB9Gf4bf">Link to Course </a>
  </div>
</div>
<div class="card" >
  <div class="card-body" >
    <h5 class="card-title">Mathematics</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">Description: math serires</h6>
       <a href="https://www.youtube.com/watch?v=cOVMwNdrnuM&list=PLF_7kfnwLFCE9j-sCe6f1zvG8QDbGgQUT&pp=iAQB">Link to Course </a>
  </div>
</div>
            {/* Add more courses as needed */}
        </div>
    );
};

export default Content;
