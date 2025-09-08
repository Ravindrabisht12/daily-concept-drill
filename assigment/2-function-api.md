# JavaScript Functions & API Assignment

## Objective
Learn to work with APIs, create reusable functions, and dynamically generate HTML content using JavaScript.

## Prerequisites
- Complete reading: [Functions](../topics/4-functions.md)
- Complete reading: [Fetch API & AJAX](../topics/16-fetch-api-ajax.md)
- Complete reading: [DOM Manipulation](../topics/13-dom-manipulation.md)
- Basic HTML and CSS knowledge

## Project Overview
Build a dynamic course display application that fetches free Udemy courses from an API and displays them as cards on a webpage.

## API Information
**Endpoint**: `https://rapidapi.com/abdulzain6/api/udemy-paid-courses-for-free-api/playground/apiendpoint_15a03a0c-06bd-4019-bdbe-2e7ba37d0c03`

**Sample Response**:
```json
{
  "courses": [
    {
      "name": "100% OFF- Ultimate Python Game Development 2025 : From Zero To Gamer",
      "category": "IT & Software",
      "image": "https://img-c.udemycdn.com/course/480x270/6147203_b67f_3.jpg",
      "actual_price_usd": 19.99,
      "sale_price_usd": 0,
      "sale_end": "2025-09-09T09:30:00",
      "description": "Ultimate Python Game Development 2025 : From Zero To Gamer , Learn Python Game Development Step-by-Step | Real Python Game Development Projects | Complete ...",
      "url": "https://www.udemy.com/course/complete-python-game-development-course-from-zero-to-hero/?couponCode=30EF2551C391ECDB3E56",
      "clean_url": "https://www.udemy.com/course/complete-python-game-development-course-from-zero-to-hero/"
    },
    {
      "name": "100% OFF- Master in Data Science and Data Analytics",
      "category": "Data Science",
      "image": "https://img-c.udemycdn.com/course/480x270/5724310_36ec_2.jpg",
      "actual_price_usd": 399000,
      "sale_price_usd": 0,
      "sale_end": "2025-09-12T20:40:00",
      "description": "Master in Data Science and Data Analytics , Machine Learning model development using Python, R and statistics. For Data Scientists/Analysts, Artificial ...",
      "url": "https://www.udemy.com/course/a-complete-roadmap-to-become-a-successful-data-scientist/?couponCode=9DF0E1638F6A8F02412F",
      "clean_url": "https://www.udemy.com/course/a-complete-roadmap-to-become-a-successful-data-scientist/"
    }
  ],
  "total": 2
}
```

## Tasks

### Task 1: Create Project Structure
Create the following files:
```
udemy-courses/
├── index.html
├── style.css
├── script.js
└── README.md
```

### Task 2: HTML Structure (index.html)
Create a basic HTML page with:
- Header with title "Free Udemy Courses"
- Loading indicator (hidden by default)
- Error message container (hidden by default)
- Container for course cards (`id="courses-container"`)
- Button to fetch/refresh courses

### Task 3: CSS Styling (style.css)
Create responsive CSS with:
- Grid layout for course cards
- Card styling with hover effects
- Loading spinner animation
- Mobile-responsive design

### Task 4: JavaScript Functions (script.js)

#### Function 1: fetchUdemyCourses()
```javascript
async function fetchUdemyCourses() {
  // TODO: Implement API fetch
  // - Handle loading state
  // - Handle errors
  // - Return course data
}
```

**Requirements:**
- Use `fetch()` API
- Handle loading state (show/hide loading indicator)
- Handle errors gracefully
- Return the courses array

#### Function 2: createCard(course)
```javascript
function createCard(course) {
  // TODO: Create HTML card element
  // - Return HTML string or DOM element
}
```

**Requirements:**
- Create card with course image, title, category, price info
- Include "View Course" button with course URL
- Format price (show original price crossed out if sale)
- Truncate description to reasonable length

#### Function 3: displayCourses(courses)
```javascript
function displayCourses(courses) {
  // TODO: Generate and insert cards into DOM
}
```

**Requirements:**
- Clear existing content
- Generate cards for all courses
- Insert into courses container

#### Function 4: formatPrice(actualPrice, salePrice)
```javascript
function formatPrice(actualPrice, salePrice) {
  // TODO: Format price display
  // - Show "FREE" if sale price is 0
  // - Show crossed out original price
}
```

### Task 5: Advanced Features (Bonus)

#### Bonus 1: Search Functionality
- Add search input
- Filter courses by name or category
- Real-time search as user types

#### Bonus 2: Category Filter
- Extract unique categories
- Create filter buttons
- Show/hide courses based on selected category

#### Bonus 3: Sort Options
- Sort by price (high to low, low to high)
- Sort by name (A-Z, Z-A)
- Sort by sale end date

#### Bonus 4: Local Storage
- Cache API responses for 1 hour
- Show cached data if API fails
- Add refresh functionality

## Starter Code Templates

### HTML Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Free Udemy Courses</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>Free Udemy Courses</h1>
        <button id="refresh-btn">Refresh Courses</button>
    </header>
    
    <main>
        <div id="loading" class="hidden">Loading courses...</div>
        <div id="error" class="hidden"></div>
        <div id="courses-container"></div>
    </main>
    
    <script src="script.js"></script>
</body>
</html>
```

### CSS Starter
```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

.hidden {
    display: none;
}

#courses-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
}

.course-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transition: transform 0.2s;
}

.course-card:hover {
    transform: translateY(-5px);
}
```

## Deliverables

Submit a working project with:

1. **Complete file structure** as specified
2. **Working functions** that meet all requirements
3. **Responsive design** that works on mobile and desktop
4. **Error handling** for API failures
5. **Clean, commented code**
6. **README.md** with setup instructions

## Evaluation Criteria

- [ ] HTML structure is semantic and accessible
- [ ] CSS is responsive and visually appealing
- [ ] `fetchUdemyCourses()` successfully fetches and handles API data
- [ ] `createCard()` generates proper HTML for course cards
- [ ] `displayCourses()` correctly renders all courses
- [ ] Error handling for network failures
- [ ] Code is clean, readable, and well-commented
- [ ] Project works without console errors

## Bonus Points
- [ ] Search functionality works correctly
- [ ] Category filtering implemented
- [ ] Sort options functional
- [ ] Local storage caching implemented
- [ ] Loading states and animations
- [ ] Accessibility features (ARIA labels, keyboard navigation)

## Resources
- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [MDN DOM Manipulation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

## Time Estimate
- Basic requirements: 3-4 hours
- With bonus features: 6-8 hours

## Submission Format
Create a GitHub repository named `udemy-courses-display` and provide the repository URL.