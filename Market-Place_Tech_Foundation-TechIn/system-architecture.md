# Architecture

*FrontEnd: Build with next.js, TailwindCss,ShedCn,ReadyMdui for responsive and dynamic user interface.
*Authentication: Integrate with Auth0 for user authentication and authorization.
*API Integration: Integrate with the backend API to fetch and update data.Use API endpoints to perform CRUD operations.And for thirt party payment services like shipengine.

Architecture Diagrame:

## WorkFlow

1. User signup and authentication.
2. User selects the desired product.
3. product details fetched from database(sanity).
4. User add to cart a product.
5. User proceed to checkout.
6. User select shipping method.
7. User select payment method.
8. User confirm order.
9. Order details saved in database(sanity).
10.Order details sent to third party payment service(ShipEngine) for payment processing.
