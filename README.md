# react-diy-cursor
react-diy-cursor is a customizable React library that allows you to create and apply unique cursor designs for your web applications.

## Main Features
1.Custom Cursor with Rotation and Scaling
       Rotation: Based on the direction of cursor movement, allow the cursor to rotate.
       Scaling: Adjust the size of the cursor based on the speed of the cursor movement.
       Customization Options: Provide settings for users to enable or disable rotation and scaling.
       
2.Disabling cursor: disable cursor (opacity 0) when leaving the window.

3. Mobile Device Detection and Interaction Disabling
User Agent Detection: Check the user agent string to detect if the user is on a mobile device (e.g., contains Mobile or Android).
Disable Cursor: Disable the custom cursor and potentially fallback to the default cursor behavior or a more touch-friendly alternative on mobile devices.

4. Mouse Movement and Speed Tracking Hooks
Movement Direction: Provide hooks to get the direction of cursor movement.
Speed Tracking: Track and return the speed of the cursor movement.
Position Tracking: Optionally provide hooks to get the current position of the cursor.

5. Interactive Demonstrations
Cursor Follow Effect: Create an interaction where elements follow the cursor, potentially with trailing effects or delays.

6. Custom Cursors with Hover Effects
Text Hover Effect: Allow the cursor to change or display additional effects (like text) when hovering over certain elements.
Trail Effects: Implement trail effects that follow the cursor, possibly fading out gradually.

