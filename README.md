# Building-a-Web-Video-Player
# 🎬 Custom HTML5 Video Player

A sleek, fully functional, and accessible video player built from scratch using **Vanilla HTML5, CSS, and JavaScript**. This project demonstrates how to implement a custom control overlay, keyboard shortcuts, and dynamic content loading without relying on external libraries like Video.js.

## ✨ Features

This player provides a comprehensive set of controls and accessibility features:

### 📺 Core Functionality

* **Custom Controls:** Replaces the browser's default video controls with a modern, custom-styled interface.
* **Play/Pause:** Toggle video playback status.
* **Time Display:** Shows the current playback time and total duration (`MM:SS / MM:SS`).
* **Progress Bar:** Interactive scrubbing bar with a **visual fill** to indicate current progress.
* **Volume Control:** Adjustable volume slider and a dedicated **Mute/Unmute** button.
* **Full Screen Toggle:** Allows the user to enter and exit true full-screen mode, keeping the custom controls visible.

### 💨 Enhanced User Experience

* **Quick Seek:** Dedicated **Rewind (-10s)** and **Skip (+10s)** buttons for easy navigation.
* **Auto-Hiding Controls:** Controls automatically fade out after 3 seconds of inactivity while the video is playing, reappearing on mouse movement or pause.
* **Dynamic Loading:** Supports loading external video files by pasting a URL and clicking "Load Video".

### ♿ Accessibility (Keyboard Shortcuts)

The player is fully navigable using the keyboard:

| Action | Key(s) |
| :--- | :--- |
| **Toggle Play/Pause** | **Spacebar** |
| **Toggle Mute** | **M** |
| **Rewind 5 Seconds** | **Left Arrow** ($\leftarrow$) |
| **Skip 5 Seconds** | **Right Arrow** ($\rightarrow$) |

---

## 🛠️ Technology Stack

* **HTML5** (`<video>` tag)
* **CSS3** (Custom styling and transitions)
* **Vanilla JavaScript** (Utilizing the HTMLMediaElement API and Fullscreen API)

---

## 🚀 Getting Started

Follow these steps to get a local copy of the project running.

### Prerequisites

You only need a modern web browser (Chrome, Firefox, Edge, Safari).

### Installation

1.  **Clone the repository** to your local machine:
    ```bash
    git clone [https://github.com/](https://github.com/)[YOUR_USERNAME]/custom-html5-video-player.git
    cd custom-html5-video-player
    ```
2.  **Add a video file** named `your-video-file.mp4` to the root directory (or update the `src` in `index.html` and the loading script).
3.  **Open `index.html`** in your web browser.

---

## 💡 Future Enhancements

* Add quality/resolution selector.
* Implement custom video speed (playback rate) control.
* Integrate HLS/DASH streaming support (requires an external library like `hls.js`).
* Add a captions/subtitles toggle.

---

## 🤝 Contribution

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/[YOUR_USERNAME]/custom-html5-video-player/issues).

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---
MIT License

Copyright (c) [YEAR] [YOUR NAME OR GITHUB USERNAME]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


