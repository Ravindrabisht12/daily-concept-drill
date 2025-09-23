# E-commerce Store with Fake Store API Assignment

## Objective
Build a functional e-commerce store application using the Fake Store API to practice API integration, DOM manipulation, and modern JavaScript features.

## Prerequisites
- Complete reading: [Functions](../topics/4-functions.md)
- Complete reading: [Fetch API & AJAX](../topics/16-fetch-api-ajax.md)
- Complete reading: [DOM Manipulation](../topics/13-dom-manipulation.md)
- Complete reading: [Event Handling](../topics/14-event-handling.md)
- Complete reading: [ES6+ Features](../topics/17-es6-features.md)
- Basic HTML, CSS, and JavaScript knowledge

## Project Overview
Create a modern e-commerce store that allows users to browse products, view details, add items to cart, and manage their shopping experience using the Fake Store API.

## API Information
**Base URL**: `https://fakestoreapi.com`

### Key Endpoints:
- **Get all products**: `GET /products`
- **Get single product**: `GET /products/{id}`
- **Get categories**: `GET /products/categories`
- **Get products by category**: `GET /products/category/{categoryName}`
- **Add to cart**: `POST /carts`
- **Update cart**: `PUT /carts/{id}`

### Sample Product Response:
```json
{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest...",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
```

## Tasks

### Task 1: Project Setup
1. **Create Project Structure**
   ```
   ecommerce-store/
   ├── index.html
   ├── css/
   │   └── styles.css
   ├── js/
   │   ├── main.js
   │   ├── api.js
   │   ├── cart.js
   │   └── utils.js
   └── README.md
   ```

2. **Initialize HTML Structure**
   - Create responsive layout with header, main content, and footer
   - Include navigation with category filters
   - Add product grid container
   - Include cart sidebar/modal
   - Add search functionality

### Task 2: API Integration Module
Create `js/api.js` with the following functions:

```javascript
// API base configuration
const API_BASE_URL = 'https://fakestoreapi.com';

// Function to fetch all products
async function fetchAllProducts() {
  // Implementation here
}

// Function to fetch single product by ID
async function fetchProductById(id) {
  // Implementation here
}

// Function to fetch all categories
async function fetchCategories() {
  // Implementation here
}

// Function to fetch products by category
async function fetchProductsByCategory(category) {
  // Implementation here
}

// Function to simulate adding to cart (POST request)
async function addToCart(userId, products) {
  // Implementation here
}
```

### Task 3: Product Display
1. **Product Card Component**
   - Display product image, title, price, and rating
   - Add "Add to Cart" button
   - Include "View Details" functionality
   - Implement responsive grid layout

2. **Product Grid**
   - Create function to render multiple products
   - Implement loading states
   - Add error handling for failed API calls

3. **Product Detail Modal/Page**
   - Show full product information
   - Include larger image gallery
   - Add quantity selector
   - Implement "Add to Cart" functionality

### Task 4: Search and Filter Functionality
1. **Search Implementation**
   - Create search input field
   - Filter products by title and description
   - Implement debounced search for performance

2. **Category Filter**
   - Fetch and display category buttons
   - Filter products by selected category
   - Add "All Products" option

3. **Price Range Filter**
   - Add price range slider
   - Filter products within selected price range

### Task 5: Shopping Cart
Create `js/cart.js` with the following features:

1. **Cart Management**
   ```javascript
   class ShoppingCart {
     constructor() {
       this.items = [];
       this.total = 0;
     }

     addItem(product, quantity = 1) {
       // Implementation here
     }

     removeItem(productId) {
       // Implementation here
     }

     updateQuantity(productId, quantity) {
       // Implementation here
     }

     calculateTotal() {
       // Implementation here
     }

     clearCart() {
       // Implementation here
     }
   }
   ```

2. **Cart UI**
   - Display cart items with product details
   - Show quantity controls (+ and - buttons)
   - Display running total
   - Add remove item functionality
   - Implement cart persistence using localStorage

### Task 6: Advanced Features
1. **Loading States**
   - Add skeleton loaders for products
   - Implement loading spinners
   - Show loading states during API calls

2. **Error Handling**
   - Display user-friendly error messages
   - Implement retry functionality
   - Handle network errors gracefully

3. **Responsive Design**
   - Mobile-first approach
   - Responsive product grid
   - Mobile-friendly cart interface

4. **Performance Optimization**
   - Implement lazy loading for images
   - Add debounced search
   - Optimize API calls

### Task 7: Enhanced User Experience
1. **Sorting Functionality**
   - Sort by price (low to high, high to low)
   - Sort by rating
   - Sort by popularity (rating count)

2. **Wishlist Feature**
   - Add products to wishlist
   - Store wishlist in localStorage
   - Display wishlist page

3. **Product Reviews Display**
   - Show rating stars
   - Display rating count
   - Format rating display nicely

## Technical Requirements

### JavaScript Features to Use:
- **ES6+ Features**: Arrow functions, destructuring, template literals, const/let
- **Async/Await**: For API calls
- **Array Methods**: map(), filter(), reduce(), find()
- **Event Handling**: Event delegation, custom events
- **Local Storage**: For cart and wishlist persistence
- **Error Handling**: try/catch blocks, proper error messages

### CSS Requirements:
- **Flexbox/Grid**: For responsive layouts
- **CSS Variables**: For consistent theming
- **Media Queries**: For responsive design
- **Transitions**: For smooth user interactions
- **Modern CSS**: Use modern CSS features

### Functionality Requirements:
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Performance**: Fast loading and smooth interactions
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Cross-browser**: Works in modern browsers

## Submission Guidelines

### Code Quality:
1. **Clean Code**
   - Use meaningful variable and function names
   - Add comments for complex logic
   - Follow consistent code formatting
   - Separate concerns into different files

2. **Error Handling**
   - Implement proper try/catch blocks
   - Display user-friendly error messages
   - Handle edge cases (empty responses, network errors)

3. **Performance**
   - Optimize images and API calls
   - Implement loading states
   - Use efficient DOM manipulation

### Documentation:
Create a comprehensive `README.md` with:
- Project description and features
- Setup and installation instructions
- API endpoints used
- Technologies used
- Screenshots of the application
- Future enhancements planned

### Bonus Features (Optional):
1. **User Authentication Simulation**
   - Mock login/logout functionality
   - User profile management

2. **Order History**
   - Save completed orders to localStorage
   - Display order history page

3. **Product Comparison**
   - Compare multiple products side by side
   - Highlight differences

4. **Dark/Light Theme**
   - Toggle between themes
   - Save preference in localStorage

5. **PWA Features**
   - Service worker for offline functionality
   - Add to home screen capability

## Evaluation Criteria

### Core Functionality (70%)
- ✅ API integration works correctly
- ✅ Products display properly
- ✅ Search and filter functionality
- ✅ Cart management works
- ✅ Responsive design

### Code Quality (20%)
- ✅ Clean, readable code
- ✅ Proper error handling
- ✅ Good project structure
- ✅ Meaningful comments

### User Experience (10%)
- ✅ Intuitive interface
- ✅ Smooth interactions
- ✅ Loading states
- ✅ Professional appearance

## Timeline
**Estimated Completion Time**: 3-5 days
- Day 1: Project setup and API integration
- Day 2: Product display and basic functionality
- Day 3: Cart functionality and search/filter
- Day 4-5: Styling, responsive design, and enhancements

## Resources
- [Fake Store API Documentation](https://fakestoreapi.com/)
- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JavaScript Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## Example Implementation Structure

```javascript
// Example of main.js structure
document.addEventListener('DOMContentLoaded', async () => {
  // Initialize application
  await initializeApp();
});

async function initializeApp() {
  try {
    // Load initial data
    const products = await fetchAllProducts();
    const categories = await fetchCategories();
    
    // Setup UI
    renderProducts(products);
    renderCategories(categories);
    setupEventListeners();
    
    // Initialize cart
    cart.init();
  } catch (error) {
    displayError('Failed to load store data. Please try again.');
  }
}
```

## Learning Outcomes
After completing this assignment, you will have learned:
- ✅ Real-world API integration techniques
- ✅ Modern JavaScript development patterns
- ✅ DOM manipulation and event handling
- ✅ Responsive web design principles
- ✅ State management in vanilla JavaScript
- ✅ Error handling and user experience design
- ✅ Performance optimization techniques

---

**Happy Coding! 🛒✨**