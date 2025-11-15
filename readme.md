# Matha Paribahan - Bus Ticketing System 🚌

A modern, responsive bus ticketing website built with HTML, Tailwind CSS, and JavaScript. This platform allows users to browse bus routes, select seats, apply coupons, and book tickets seamlessly.

![Matha Paribahan](https://img.shields.io/badge/Matha-Paribahan-green) ![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen) ![License](https://img.shields.io/badge/License-MIT-blue)

## 🌟 Live Demo

[View Live Site](https://developermohib.github.io/smart-ticketing-A5/)

## ✨ Features

### 🎯 Core Functionality

- **Seat Selection System** - Interactive seat map with real-time availability
- **Smart Pricing** - Dynamic price calculation with discount coupons
- **Responsive Design** - Mobile-first approach works on all devices
- **Booking Management** - Complete booking flow with passenger details

### 🎨 User Experience

- **Modern UI/UX** - Clean, intuitive interface with smooth animations
- **Real-time Updates** - Instant price calculation and seat status
- **Coupon System** - Support for promotional discounts (NEW15, COUPLE20)
- **Form Validation** - Comprehensive client-side validation

### 📱 Sections Overview

1. **Hero Section** - Compelling banner with call-to-action
2. **Statistics** - Company achievements and trust indicators
3. **Special Offers** - Promotional coupons and discounts
4. **Popular Destinations** - Featured routes across Bangladesh
5. **Why Choose Us** - Key differentiators and benefits
6. **Testimonials** - Customer reviews and ratings
7. **Ticket Booking** - Complete booking interface
8. **Footer** - Company information and links

## 🛠️ Technology Stack

- **Frontend**: HTML5, Tailwind CSS, DaisyUI
- **JavaScript**: Vanilla ES6+
- **Icons**: Emoji-based (no external dependencies)
- **Font**: Raleway (Google Fonts)
- **Responsive**: Mobile-first CSS Grid and Flexbox

## 📁 Project Structure

```
matha-paribahan/
├── index.html              # Main HTML file
├── style.css               # Custom styles and animations
├── script.js               # JavaScript functionality
├── images/                 # Asset directory
│   ├── banner.png
│   ├── bus-icon.png
│   └── ...
├── README.md              # Project documentation
└── screenshots/           # Project screenshots
```

## 🚀 Quick Start

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local server for development (optional)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/developerMohib/smart-ticketing-A5.git
   cd matha-paribahan
   ```

2. **Open in browser**

   ```bash
   simply open index.html in your browser
   ```

3. **Start developing**
   - Modify `index.html` for structure changes
   - Update `style.css` for styling
   - Enhance `script.js` for functionality

## 💻 Usage Guide

### For Users

1. **Browse Destinations** - View popular routes and pricing
2. **Select Seats** - Choose from available seats on the interactive map
3. **Apply Coupons** - Use discount codes for savings
4. **Fill Details** - Enter passenger information
5. **Confirm Booking** - Complete the reservation process

### For Developers

- The project uses Tailwind CSS utility classes
- Custom CSS extends Tailwind in `style.css`
- JavaScript handles all interactive functionality
- Emoji icons are used for better performance

## 🎨 Customization

### Adding New Routes

Edit the Popular Destinations section in `index.html`:

## 🔧 Configuration

### Tailwind Config

The project includes a custom Tailwind configuration:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        // Custom color palette
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
};
```

### JavaScript Configuration

Key configuration variables in `script.js`:

```javascript
const maxSeats = 4; // Maximum seats per booking
const seatPrice = 550; // Base price per seat
const couponCodes = {
  // Available discount coupons
  NEW15: 0.15, // 15% discount
  COUPLE20: 0.2, // 20% discount
};
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚧 Development

### File Structure Details

#### HTML (`index.html`)

- Semantic HTML5 structure
- Accessible markup with proper ARIA labels
- SEO-optimized meta tags
- Responsive design patterns

#### CSS (`style.css`)

- Custom utility classes
- Animation keyframes
- Responsive breakpoints
- Print styles

#### JavaScript (`script.js`)

- Modular function organization
- Event delegation
- Form validation
- Local state management

### Adding New Features

1. **New Section Template**

```html
<section class="py-12 bg-white">
  <div class="container">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-secondary">
        Section Title
      </h2>
    </div>
    <!-- Section content -->
  </div>
</section>
```

2. **New JavaScript Function**

```javascript
function newFeature() {
  // Implementation here
}

// Initialize in DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  newFeature();
});
```

## 📈 Performance

- **Load Time**: Optimized with minimal external dependencies
- **SEO**: Semantic HTML and proper meta tags
- **Accessibility**: WCAG 2.1 compliant
- **Progressive Enhancement**: Core functionality works without JavaScript

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style
- Test on multiple devices and browsers
- Update documentation for new features
- Ensure responsive design principles

## 🐛 Troubleshooting

### Common Issues

1. **Seat selection not working**

   - Check JavaScript console for errors
   - Verify `bus-seat` class is applied to buttons

2. **Styles not loading**

   - Ensure Tailwind CSS CDN is accessible
   - Check custom CSS file path

3. **Coupons not applying**
   - Verify coupon codes are uppercase
   - Check minimum seat requirement (2 seats)

### Debug Mode

Enable console logging by adding:

```javascript
const DEBUG = true;
```

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [DaisyUI](https://daisyui.com/) for component library
- [Google Fonts](https://fonts.google.com/) for Raleway font

## 📞 Support

For support and questions:

- 📧 Email: support@mathaparibahan.com
- 🐛 [Issue Tracker](https://github.com/developerMohib/smart-ticketing-A5/issues)
- 💬 [Discussions](https://github.com/developerMohib/smart-ticketing-A5/discussions)

## 🔄 Changelog

### v1.0.0 (Current)

- Initial release
- Complete booking system
- Responsive design
- Coupon functionality

### Planned Features

- [ ] User authentication
- [ ] Payment integration
- [ ] Admin dashboard
- [ ] Mobile app
- [ ] Real-time tracking

---

**Built with ❤️ for Bangladesh's transportation needs**

_Matha Paribahan - Your Journey, Our Responsibility_
