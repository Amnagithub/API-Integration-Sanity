# Testing And Backend Refinement For TechIn

1. Responsiveness:

2.Log report for testing tool Thunder Client:
![Relationship Diagram](/public/thender1.png)

## General Functional Testing

1. Home Page Route:
Test Case: Verify that navigating to the /home route correctly loads the home page.
Expected Result: The home page displayed the expected content ( header,hero section, featured products,to picks,blogs,instagrame section and header navigation links).
2. Shop Page Route:
Test Case: Test that the /shop route loads the shop page with all products displayed from sanity database.
Expected Result: Products should be listed with their details, including price and image. Filters by letters,defaul and deamnding search options works well .
3. Cart Page Route
Test Case: Verify that the /cart route correctly displays the user's cart.
Expected Result: The cart should show all added items with their names, quantities, prices, and a total price.
4. Sign In and Sign Up
Test Case 1 (Sign In): Verify that the /signin route allows users to log in with valid credentials.
Test Case 2 (Sign Up): Verify that the /signup route allows users to register with valid details.
Expected Result: Successful login or registration works.
5. Add to Cart
Test Case: Verify that clicking on the "Add to Cart" button adds the product to the cart.
Expected Result: The cart should update with the added product, and the total price should reflect the new item.
6. Delete Item from Cart
Test Case: Verify that the user can delete an item from the cart.
Expected Result: After deleting, the item should be removed from the cart, and the total price should adjust accordingly.
7. Total Price Calculation
Test Case: Test if the total price in the cart correctly reflects the sum of all items, including quantities.
Expected Result: The total price should update dynamically when items are added or removed.
8. Product Detail Page
Test Case: Verify that navigating to a product detail page (e.g., /product/:id) displays the correct product information.
Expected Result: The page should show detailed product information such as name, price, description, and images.
9. Product Category Scroll
Test Case: Verify that the product categories are scrollable (if applicable) and allow users to filter products by category.
Expected Result: Categories should scroll horizontally or vertically, and selecting a category should filter products accordingly.
10. Single Product Details Page
Test Case: Test that clicking on a product from a list navigates to its individual product detail page.
11. Page Change
Test Case: Verify that navigating between pages (e.g., from home to shop or cart to checkout) works without errors.
Expected Result: The page transition should be smooth, and the URL should update accordingly without any issues.

## Error Handling

Error Handling in UI:
User Notifications: Shows messages such as “Invalid login data” or “Network error, loadding.”
Error Handling in APIs:
fallback:API and sanity database works with fallback to do not show product data when network is down.

## Postman API

![Relationship Diagram](/public/thender1.png)

## Performance optimaition

npm install -g lighthouse
lighthouse http//:localhotst:3000--view

LightHouse Performance:
[Download Word File](/files.docx)
