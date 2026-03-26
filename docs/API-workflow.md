## Implementation Workflow

When adding a new API feature (e.g., "Orders"):

1. **Create Query List** (`src/api/query-list/orders.ts`)
   - Define TypeScript interfaces (Example: Order, OrderFilters, CreateOrderData)
   - Create API object with methods (getAll, getById, create, update, delete)

2. **Create API Hooks** (`src/api/api-hooks/useOrders.ts`)
   - Define query keys constant
   - Create query hooks for GET requests
   - Create mutation hooks for POST/PATCH/DELETE
   - Add error handling with toast
   - Implement cache invalidation

3. **Use in Components**
   - Import hooks from `@/api/api-hooks/useOrders`
   - Use query hooks for fetching data
   - Use mutation hooks for creating/updating/deleting

---
