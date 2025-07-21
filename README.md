# Calculator App

A modern, responsive calculator built with React and styled with Tailwind CSS. This calculator mimics the design and functionality of the iOS calculator app with a sleek interface and smooth animations.

![Calculator Preview](https://img.shields.io/badge/React-19.1.0-blue.svg) ![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1.11-38B2AC.svg) ![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF.svg)

## 🚀 Features

- **Modern iOS-inspired Design**: Clean, minimalist interface with rounded buttons and elegant styling
- **Full Calculator Functionality**: Supports all basic arithmetic operations
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Hover and click effects for enhanced user experience
- **Real-time Calculations**: Instant feedback and calculation results
- **Error Handling**: Proper handling of edge cases and invalid operations

### Calculator Functions

- ✅ **Basic Operations**: Addition (+), Subtraction (−), Multiplication (×), Division (÷)
- ✅ **Clear Function**: AC (All Clear) to reset the calculator
- ✅ **Sign Toggle**: +/− to toggle between positive and negative numbers
- ✅ **Percentage**: % for percentage calculations
- ✅ **Decimal Support**: Decimal point functionality
- ✅ **Chained Operations**: Perform multiple operations in sequence
- ✅ **Keyboard-friendly**: Intuitive button layout

## 🛠️ Technologies Used

- **React 19.1.0**: Modern React with hooks for state management
- **Tailwind CSS 4.1.11**: Utility-first CSS framework for styling
- **Vite 7.0.4**: Fast build tool and development server
- **ESLint**: Code linting and formatting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd calculator-app
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
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 🎨 Design Features

### Color Scheme
- **Background**: Beautiful gradient from blue to purple
- **Calculator Body**: Sleek black with rounded corners and shadow
- **Number Buttons**: Dark gray (#374151) with white text
- **Function Buttons**: Light gray (#9CA3AF) with black text
- **Operation Buttons**: Orange (#F59E0B) with white text

### Layout
- **Grid System**: 4-column grid layout for optimal button arrangement
- **Responsive Sizing**: Adapts to different screen sizes
- **Touch-Friendly**: Large buttons perfect for touch interaction

### Animations
- **Hover Effects**: Subtle scale transformation on hover
- **Click Feedback**: Scale-down effect for tactile feedback
- **Smooth Transitions**: 200ms transition duration for all interactions

## 📱 Usage

### Basic Operations
1. **Numbers**: Click any number button (0-9) to input numbers
2. **Operations**: Click +, −, ×, or ÷ to perform calculations
3. **Equals**: Click = to get the result
4. **Clear**: Click AC to clear all and start over

### Advanced Functions
- **Decimal**: Click . to add decimal points
- **Percentage**: Click % to convert to percentage (divides by 100)
- **Sign Toggle**: Click +/− to switch between positive and negative

### Example Calculations
```
7 + 3 = 10
15 × 4 = 60
100 ÷ 4 = 25
50 % = 0.5
```

## 🏗️ Project Structure

```
calculator-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css
│   ├── App.jsx          # Main calculator component
│   ├── index.css        # Tailwind CSS imports and global styles
│   └── main.jsx         # React app entry point
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js       # Vite configuration with Tailwind
```

## ⚙️ Configuration

### Tailwind CSS Setup
The project uses Tailwind CSS v4 with the Vite plugin for optimal performance:

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
})
```

### Scripts Available

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🧮 Calculator Logic

The calculator uses React hooks for state management:

- `display`: Current number/result shown on screen
- `previousValue`: Previously entered number for operations
- `operation`: Current operation (+, −, ×, ÷)
- `waitingForOperand`: Boolean to handle input flow

### Key Functions

- `inputNumber()`: Handles number input and display updates
- `inputOperation()`: Manages operation selection and chaining
- `calculate()`: Performs the actual mathematical operations
- `performCalculation()`: Executes calculation and updates display
- `clear()`: Resets all states to initial values

## 🎯 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🚀 Future Enhancements

- [ ] Keyboard input support
- [ ] History of calculations
- [ ] Scientific calculator mode
- [ ] Memory functions (M+, M-, MR, MC)
- [ ] Themes and customization options
- [ ] Sound effects
- [ ] Accessibility improvements

## 📞 Support

If you have any questions or run into issues, please:
1. Check the existing issues on GitHub
2. Create a new issue if needed
3. Provide detailed information about the problem

---

**Built with ❤️ using React and Tailwind CSS**
