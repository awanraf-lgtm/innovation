# CellCase Pro - E-commerce Website

A modern, mobile-first responsive e-commerce website for selling premium cellphone cases and accessories. Built with React, TypeScript, and Tailwind CSS.

🌐 **Live Website**: https://awanraf-lgtm.github.io/innovation/  
📂 **Repository**: https://github.com/awanraf-lgtm/innovation  
🚀 **Status**: Live and fully functional

## 🚀 Quick Start

### View Live Site
Visit **https://awanraf-lgtm.github.io/innovation/** to see the live website

### Local Development
```bash
git clone https://github.com/awanraf-lgtm/innovation.git
cd cellcase-pro
npm install
npm run dev
```

### Deploy Changes
```bash
npm run deploy
```

## 🚀 Features

### Mobile-First Design
- **Responsive Layout**: Optimized for mobile devices with progressive enhancement for larger screens
- **Touch-Friendly Interface**: Large touch targets and swipe gestures
- **Mobile Navigation**: Collapsible mobile menu and drawer-style cart
- **Fast Loading**: Optimized images and efficient component structure

### E-commerce Functionality
- **Product Catalog**: 5 featured phone cases with detailed information
- **Shopping Cart**: Side drawer cart with quantity controls and real-time updates
- **Local Storage**: Cart persistence across browser sessions  
- **Categories**: 5 product categories (Clear, Wallet, Rugged, MagSafe, Accessories)
- **Search Interface**: Mobile-optimized search with intuitive UX
- **Product Features**: Ratings, reviews, color variants, pricing with discounts

### User Experience
- **Modern UI/UX**: Clean design with consistent styling using Tailwind CSS
- **Interactive Elements**: Hover effects, loading states, and smooth transitions
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Performance**: Lazy loading and optimized rendering

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Build Tool**: Vite for fast development and building  
- **State Management**: React hooks and custom cart hook (useCart)
- **Icons**: Heroicons via inline SVG
- **Fonts**: Inter font family from Google Fonts
- **Deployment**: GitHub Pages with gh-pages package
- **Version Control**: Git with automated deployment workflow

## 📁 Project Structure

```
cellcase-pro/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── common/        # Header, Footer, etc.
│   │   ├── product/       # Product-related components
│   │   └── cart/          # Shopping cart components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   ├── App.tsx            # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd cellcase-pro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run build-pages` - Build for GitHub Pages deployment
- `npm run deploy` - Deploy to GitHub Pages (live site)
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📱 Mobile Optimization Features

### Responsive Breakpoints
- **xs**: 475px and up
- **sm**: 640px and up  
- **md**: 768px and up
- **lg**: 1024px and up
- **xl**: 1280px and up

### Mobile-Specific Features
- **Touch Gestures**: Optimized touch interactions
- **Safe Area Support**: Proper handling of device notches and home indicators
- **Mobile Menu**: Slide-out navigation for mobile devices
- **Cart Drawer**: Full-height cart overlay for mobile
- **Optimized Images**: Responsive images with proper aspect ratios

## 🎨 Design System

### Colors
- **Primary**: Blue (#3b82f6)
- **Accent**: Amber (#f59e0b)  
- **Gray Scale**: Various shades for text and backgrounds

### Typography
- **Font Family**: Inter (system fallback)
- **Font Weights**: 300-800 range
- **Responsive Text**: Scales appropriately across devices

### Components
- **Cards**: Consistent styling for product cards
- **Buttons**: Primary and secondary button styles
- **Inputs**: Styled form inputs with focus states

## 🔮 Future Backend Integration

The frontend is structured to easily integrate with a backend API:

### API Endpoints (Planned)
- `GET /api/products` - Fetch product catalog
- `POST /api/cart` - Add items to cart
- `PUT /api/cart/:id` - Update cart item quantity
- `DELETE /api/cart/:id` - Remove cart item
- `POST /api/checkout` - Process checkout

### Authentication
- User registration and login
- JWT token management
- Protected routes for user account

### Payment Processing
- Integration with Stripe/PayPal
- Secure payment forms
- Order confirmation and tracking

## 🚀 Live Deployment

### Current Deployment
**Live URL**: https://awanraf-lgtm.github.io/innovation/  
**Hosting**: GitHub Pages  
**Auto-Deploy**: Enabled via `npm run deploy`  

### GitHub Pages Setup
The website is automatically deployed to GitHub Pages using the `gh-pages` package:

1. **Repository Settings**: Configured to serve from `gh-pages` branch
2. **Build Process**: Uses Vite with relative path configuration
3. **Deployment**: Automated via `npm run deploy` command

### Deploy Updates
```bash
# Deploy to live site
npm run deploy
```

This command:
- Builds the project with correct base paths
- Pushes to gh-pages branch  
- Updates the live website automatically

### Alternative Deployments
The project can also be deployed to:
- **Netlify**: Drag and drop the dist folder
- **Vercel**: Connect your repository for automatic deployments  
- **Traditional Hosting**: Upload dist folder contents to web server

### Build for Production
```bash
npm run build          # Standard build
npm run build-pages    # Build with GitHub Pages paths
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email support@cellcasepro.com or create an issue in the repository.

---

**CellCase Pro** - Premium protection meets modern design 📱✨