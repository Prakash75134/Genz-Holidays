# Gen Z Holidays Website 🌿✈️

> Karnataka & Kerala's Best College Trip & IV Specialist

---

## 📁 Project Structure

```
gen-z-holidays/
├── index.html        ← Main homepage (open this)
├── css/
│   └── style.css     ← All styles, light/dark theme, design system
├── js/
│   └── main.js       ← All JS: slider, dark mode, forms, animations
├── images/           ← Add your real photos here
└── README.md         ← This guide
```

---

## 🚀 Run in VS Code (3 Steps)

### 1. Open folder
```
File → Open Folder → select gen-z-holidays
```

### 2. Install Live Server
```
Ctrl+Shift+X → search "Live Server" by Ritwick Dey → Install
```

### 3. Launch
```
Right-click index.html → Open with Live Server
```
Opens at `http://127.0.0.1:5500` — auto-refreshes on every save.

---

## 📱 View on Your Mobile (Same WiFi)

1. Open terminal in VS Code: `` Ctrl+` ``
2. Type: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
3. Find your IPv4 address e.g. `192.168.1.5`
4. On your phone browser type: `http://192.168.1.5:5500`

---

## 🌙 Dark / Light Mode

The toggle button is in the top-right of the navbar (☀️/🌙).
- Default: Light mode
- Remembers your choice across page loads (saved in browser)
- Also respects system preference on first visit

---

## 🖼️ Hero Slider

7 slides auto-play every 4.5 seconds. To change slides:
- Edit the `.slide` divs in `index.html`
- Change background gradient colour or add a real photo:

```html
<!-- Replace gradient with real photo -->
<div class="slide-bg" style="background-image: url('images/coorg.jpg'); background-size: cover;"></div>
```

To add or remove slides, also update the dots section and `slideData` array in `js/main.js`.

---

## 📲 Add Social Media Links (When Ready)

Open `index.html` and search for `id="socialIG"` — you'll find these 4 lines:

```html
<a class="social-btn" href="#" id="socialIG" title="Instagram">📸</a>
<a class="social-btn" href="#" id="socialFB" title="Facebook">📘</a>
<a class="social-btn" href="#" id="socialTW" title="Twitter / X">𝕏</a>
<a class="social-btn" href="https://wa.me/919791710719" id="socialWA" title="WhatsApp">💬</a>
```

Replace `href="#"` with your actual links:

| Platform | Link Format |
|---|---|
| Instagram | `https://instagram.com/YourHandle` |
| Facebook | `https://facebook.com/YourPageName` |
| Twitter / X | `https://twitter.com/YourHandle` |
| WhatsApp | `https://wa.me/91XXXXXXXXXX` |
| Email | `mailto:hello@genZholidays.in` |

The same social links appear in 3 places in `index.html`:
1. Contact section
2. Footer
3. (WhatsApp float button — already linked)

Search for `social-row` to find all three.

---

## 📧 Add Email When Ready

When you have a business email, find and replace `hello@ssholidays.in` or `#` email placeholders with:
```html
<a href="mailto:hello@genzholidays.in">hello@genzholidays.in</a>
```

Also add a contact item in the contact section:
```html
<div class="citem">
  <div class="cicon">📧</div>
  <div>
    <h4>Email</h4>
    <p>hello@genzholidays.in</p>
  </div>
</div>
```

---

## 🗺️ Add More Destinations

Find `<!-- ============ DESTINATIONS ============ -->` in `index.html`.
Copy any `.dest-card` block, paste it, and change:
- `onclick="openBooking('Place Name','State')"` — place and state name
- `.dest-name` — display name
- `.dest-state` — state label
- `.dest-tags` spans — activity tags
- gradient colours for the image background

---

## 💳 Activate Razorpay (When You're Ready)

1. Sign up free at [razorpay.com](https://razorpay.com)
2. Get your `key_id` from the dashboard
3. In `js/main.js`, find the `submitBooking()` function
4. Uncomment the Razorpay block and paste your key:
```js
key: 'rzp_live_YOUR_KEY_HERE',
```
5. In `index.html`, uncomment at the bottom:
```html
<script src="https://checkout.razorpay.com/v1/checkout.js"></script>
```

---

## 🌐 Go Live Free (Netlify — 30 seconds)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop your **`gen-z-holidays` folder**
3. Get a live link instantly — share it anywhere

---

## ✅ Before Going Live Checklist

- [ ] Phone numbers already set: +91 97917 10719, +91 78068 31268
- [ ] Add Instagram link when ready
- [ ] Add Facebook link when ready
- [ ] Add Twitter/X link when ready
- [ ] Add Email link when ready
- [ ] Replace emoji placeholders with real photos
- [ ] Activate Razorpay key
- [ ] Add GST number in footer if registered
- [ ] Deploy to Netlify / Vercel

---

## 🛠️ Recommended VS Code Extensions

- **Live Server** — auto reload
- **Prettier** — auto format code
- **Auto Rename Tag** — rename HTML tags together
- **CSS Peek** — click class → jump to CSS

---

