// Content.js
import React from 'react';



const Content = () => {
    return (
        <div>
            <h2>Content Page</h2>
            {/* Add your course names, descriptors, and links here */}
            <p>NEET</p>
            <p>Description: Crash Course for need </p>
            <a href="https://www.youtube.com/watch?v=zY38SV2BW7k&list=PLJyab0VQDBGWVYHPLjAHjw9y1YB9Gf4bf">Link to Course 1</a>
            
            <p>Mathematics</p>
            <p>Description: Math Series</p>
            <a href="https://www.youtube.com/watch?v=cOVMwNdrnuM&list=PLF_7kfnwLFCE9j-sCe6f1zvG8QDbGgQUT&pp=iAQB">Link to Course 2</a>
            
            {/* Add more courses as needed */}
        </div>
    );
};

export default Content;
