# ✨ react-diy-cursor

`react-diy-cursor` is a customizable React library that lets you create and apply unique, dynamic cursor designs to your web applications. Elevate your UI with interactive and visually appealing cursors!

## 🚀 Main Features

- [ ] 🎡 **Custom Cursor with Rotation and Scaling**
  - **Rotation:** Rotate the cursor based on its movement direction.
  - **Scaling:** Adjust cursor size depending on the speed of movement.
  - **Customization:** Enable or disable rotation and scaling through settings.
  
- [ ] 🚫 **Disabling Cursor on Window Exit**
  - Automatically hide the cursor (the mouse component) when it leaves the browser window.

- [ ] 📱 **Mobile Device Detection and Interaction Disabling**
  - **User Agent Detection:** Detect mobile devices and disable custom cursor features.
  - **Fallback:** Revert to default cursor behavior or a touch-friendly alternative on mobile devices.

- [ ] 🖱️ **Mouse Movement and Speed Tracking Hooks**
  - **Movement Direction:** Get hooks to track the direction of cursor movement.
  - **Speed Tracking:** Monitor and return the cursor's movement speed.
  - **Position Tracking:** Optionally track and return the cursor’s current position.

- [ ] ✨ **Custom Cursors with Hover Effects and more**
  - **Text Hover Effect:** Change the cursor or display additional effects (like text) when hovering over specific elements.
  - **Cursor Follow Effect:** Implement elements that follow the cursor with trailing effects or delays.

<br/>


---

## 📚 User Guide & Setup
 ### **Setup Instructions:
  - Step-by-step setup guide for installing and configuring `react-diy-cursor` in your React application.

  # React DIY Cursor Package

## Installation and Setup

  To use the React-DIY-Cursor package in your project, follow the steps below:

 1. Download the Source Code

    - First, clone or download the source code of the React-DIY-Cursor package to your local machine.

 2. Open the Project in a Code Editor

    - Open the downloaded React-DIY-Cursor package in your preferred code editor, such as VSCode.

 3. Build the Package

    - In your code editor, open the terminal and compile the package by running the build script. This will create the necessary files in the `dist` or `lib` folder, depending on the package setup.

      ```bash
      npm run build
      ```

---
<br/>

## 📚 User Guide:
- Detailed instructions on how to integrate and customize `react-diy-cursor` in your projects.


### Steps to Integrate `react-diy-cursor`

1. 📂 **Open Your Project**
   - Open the project where you want to use the DIY cursor in your code editor.

2. ➕ **Add Dependency**
   - In the `package.json` file of this project, add a dependency pointing to the local path of your DIY cursor package. For example:

   ```json
   "dependencies": {
     "react-diy-cursor": "file:../path/to/react-diy-cursor"
   }
   ```


    **Note**: The path should be relative to the location of your current project.

3. 🔄 **Update package-lock.json**
    - After editing the package.json file, open the terminal in your     code editor and run the following command to install the local   package and update the lock file:

    ```npm install ../react-diy-cursor```

    **Note**: The path should be relative to the location of your current project.

3. 📥 **Import the Package in Your Project**
    - In the React component or file where you want to use the DIY cursor, import the package at the top of the file:

    javascript
    ```import CustomCursor from 'react-diy-cursor';```

4. 🚀 **Compile Your Project**
    - Finally, compile and run your project to see the DIY cursor in action:

    ```npm start```

This guide should help you smoothly install and integrate the React-DIY-Cursor package into your project. Happy coding! 🎉