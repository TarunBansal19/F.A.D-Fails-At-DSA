# F.A.D. (Fails At DSA)

**"Because sometimes, the red text just isn't enough emotional damage."**

`F.A.D.` is a lightweight Chrome Extension for the struggling LeetCoder. It monitors your submissions and plays a soul-crushing **"Fahhh"** sound effect the exact moment you fail a problem, while keeping a permanent tally of your despair.

## Why?
LeetCode is hard. Why suffer in silence? Now, every time you forget an edge case or write an $O(n!)$ solution, your browser will give you the vocal disappointment you deserve and track your total "Shame Count."

## Features
* **Failure Detection:** Triggers on `Wrong Answer`, `Time Limit Exceeded`, `Runtime Error`, and `Compile Error`.
* **The Shame Counter:** Automatically tracks every "Fahh" using `chrome.storage`. Even if you close your browser, your failures are remembered.
* **Live Popup:** Click the extension icon to see your total "Shame Meter" in real-time.
* **Smart Listening:** Uses a `MutationObserver` to catch errors the millisecond they appear without slowing down your browser.
* **Spam Prevention:** Only plays once per click of the 'Submit' button. No infinite loops of "Fahhh."

## Installation (The "Developer Mode" Way)

Since we are saving our money for coffee instead of the Google Chrome Web Store fee, here is how you install it:

1. **Clone/Download** this repository to your computer.
2. Open Chrome and navigate to `chrome://extensions/`.
3. In the top-right corner, toggle **Developer mode** to **ON**.
4. Click the **Load unpacked** button.
5. Select the folder containing the extension files.
6. Head over to [LeetCode](https://leetcode.com), fail a problem, and enjoy the sound of defeat.

## How it Works
The extension uses a `MutationObserver` to watch the LeetCode DOM. When a failure is detected, it triggers the audio and updates the `chrome.storage.local` database. The popup UI then fetches this data to display your total count.

## Project Structure
* `manifest.json`: The extension configuration (Manifest V3).
* `content.js`: The "brain" that watches for your failures on the page.
* `popup.html` & `popup.js`: The UI and logic for the Shame Meter.
* `fahhh.mp3`: The main attraction.

## Future Roadmap
- [ ] **Midnight Reset:** Automatically reset the daily shame count at 12:00 AM.
- [ ] **The "Redemption" Sound:** An angelic choir for when you finally get an `Accepted` result.
- [ ] **Threshold Alerts:** A popup warning you to take a walk after $K$ failures.

## License
MIT. Feel free to fork, edit, and fail in your own way.