import React, { useState } from 'react';

const RightClickMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  // Function to handle the right-click event
  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the default context menu
    setShowMenu(true);
    setMenuPosition({ x: e.clientX, y: e.clientY }); // Set menu position based on mouse click
  };

  // Function to handle hiding the menu
  const hideMenu = () => {
    setShowMenu(false);
  };

  // Function to handle item click
  const handleItemClick = (content) => {
    // Get the textarea element
    const textarea = document.getElementById('myTextarea');
    // Insert the clicked content into the textarea
    textarea.value += content + '\n'; // You may adjust the insertion logic as needed
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <textarea 
        id="myTextarea"
        onContextMenu={handleContextMenu} 
        style={{ width: '300px', height: '200px', padding: '10px' }} 
        placeholder="Right-click here..."
      />
      {showMenu && (
        <div style={{ position: 'absolute', top: menuPosition.y, left: menuPosition.x, backgroundColor: 'white', padding: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.5)' }}>
          <ul>
            <li onClick={() => handleItemClick('Copy')}>Copy</li>
            <li onClick={() => handleItemClick('Paste')}>Paste</li>
            <li onClick={() => handleItemClick('Cut')}>Cut</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RightClickMenu;
