# Dashboard Migration Analysis

## Overview

This document outlines all dashboard-related folders and specific files that need to be migrated to a separate repository. The dashboard is an admin panel for managing the Glowmi e-commerce platform.

## Folders to Migrate (Complete Folders)

### Main Dashboard Routes

- `src/app/[locale]/dashboard/` - Complete dashboard folder with all routes and components

### Dashboard Authentication

- `src/feature/dashboard-auth/` - Complete dashboard authentication system

### Dashboard Components

- `src/components/dashboard/` - Complete dashboard components folder

### API Integration

- `src/api/api-hooks/member.api-hook.ts` - Member API hooks (specific file)
- `src/api/query-list/member.query.ts` - Member API queries (specific file)

### State Management

- `src/store/auth.store.ts` - Authentication state management (specific file)

## Assets and Icons (Specific Files)

Dashboard-specific icons from `src/assets/icons/`:

- `blocks.svg` (Dashboard)
- `carbon_analytics.svg` (AI Analytics)
- `members.svg` (Members)
- `notes.svg` (Products)
- `ri_search-ai-line.svg` (Analyzers)
- `settings-light.svg` (Settings)
- `shop-bags.svg` (Orders)
- `tags.svg` (Category)
- `users.svg` (Customer)

Dashboard auth image:

- `src/assets/image/dashboard-auth-image.png`

## Configuration Updates Needed

- `src/utils/constants.ts` - Remove `DASHBOARD: '/dashboard'` route constant

## Migration Summary

### Complete Folders to Move:

1. `src/app/[locale]/dashboard/` - All dashboard routes and pages
2. `src/feature/dashboard-auth/` - Complete authentication system
3. `src/components/dashboard/` - All dashboard components

### Specific Files to Move:

1. `src/api/api-hooks/member.api-hook.ts` - Member API hooks
2. `src/api/query-list/member.query.ts` - Member API queries
3. `src/store/auth.store.ts` - Authentication state management
4. Dashboard-specific icons (9 files from `src/assets/icons/`)
5. `src/assets/image/dashboard-auth-image.png` - Auth layout image

### Files to Update (Remove Dashboard References):

1. `src/utils/constants.ts` - Remove dashboard route constant
