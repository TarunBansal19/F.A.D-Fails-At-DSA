# F.A.D. (Fails At DSA)

**"Because sometimes, the red text just isn't enough emotional damage."**

`F.A.D.` is a lightweight Chrome Extension for the struggling LeetCoder. It monitors your submissions and plays a soul-crushing **"Fahhh"** sound effect the exact moment you fail a problem.

## Why?
LeetCode is hard. Why suffer in silence? Now, every time you forget an edge case or write an $O(n!)$ solution, your browser will give you the vocal disappointment you deserve.

## Features
* **Failure Detection:** Triggers on `Wrong Answer`, `Time Limit Exceeded`, `Runtime Error`, and `Compile Error`.
* **Smart Listening:** Uses a `MutationObserver` to catch errors the millisecond they appear without slowing down your browser.
* **Spam Prevention:** Only plays once per click of the 'Submit' button. No infinite loops of "Fahhh."
* **Zero Cost:** No subscription, no tracking, just pure failure.

## Installation (The "Developer Mode" Way)

Since we are saving our money for coffee instead of the Google Chrome Web Store fee, here is how you install it:

1. **Clone/Download** this repository to your computer.
2. Open Chrome and navigate to `chrome://extensions/`.
3. In the top-right corner, toggle **Developer mode** to **ON**.
4. Click the **Load unpacked** button.
5. Select the folder containing the extension files.
6. Head over to [LeetCode](https://leetcode.com), fail a problem, and enjoy the sound of defeat.

## How it Works
The extension uses a `MutationObserver` to watch the LeetCode DOM for specific status strings. It is "armed" when you click the **Submit** button and "disarms" itself once the sound plays to ensure a clean user experience.

## Project Structure
* `manifest.json`: The extension's DNA.
* `content.js`: The "brain" that watches for your failures.
* `fahhh.mp3`: The main attraction.

## Future Roadmap
- [ ] **The "Redemption" Sound:** An angelic choir for when you finally get an `Accepted` result.
- [ ] **The "Shame" Counter:** A popup tracking how many times you've heard the "Fahhh" today.
- [ ] **Randomized Pain:** A library of different sighing/disappointed sounds.

## License
MIT. Feel free to fork, edit, and fail in your own way.