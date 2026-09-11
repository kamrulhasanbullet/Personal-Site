🛍️ ARISTO — Premium Men's Fashion E-Commerce Platform

A full-stack e-commerce platform built for the Bangladeshi men's fashion market, featuring a complete customer shopping experience and a powerful admin dashboard for store management.

🌐 Live Demo: aristo.com.bd

📖 About The Project

ARISTO is a production-oriented full-stack e-commerce platform designed specifically for the Bangladeshi men's fashion market.

The platform provides a complete shopping experience for customers, from product discovery and wishlist management to checkout, order tracking, reviews, notifications, and customer account management.

It also includes a comprehensive admin dashboard for managing products, orders, customers, coupons, banners, analytics, and store operations.

The project focuses on building a realistic e-commerce system with modern architecture, secure authentication, automated workflows, and a responsive user experience.

✨ Features
🛍️ Customer Experience
🛒 Product Browsing
Browse products by categories
Summer Collections
Winter Collections
Eid Collections
New Arrivals
Premium Collections
Limited Editions
🛒 Shopping Cart
Add and remove products
Update product quantities
Real-time global state synchronization
❤️ Wishlist
Save favorite products
Real-time wishlist synchronization
⚡ Flash Sale Engine
Time-aware promotional pricing
Automatic sale activation
Automatic sale expiration
Automatic price reversion after the sale
⭐ Review System
Customers can review purchased products
Reviews are gated by delivery status
Prevents unauthorized product reviews
📦 Checkout
Cash on Delivery
Bangladesh-focused address management
Division and district selection
Customer address management
🔔 Notifications
In-app notification system
Navbar notification bell
Polling-based notification updates
📧 Automated Emails
Automated order confirmation emails
Abandoned cart reminders
Transactional email workflows using Resend
📱 Product Sharing
Native mobile sharing using the Web Share API
Desktop sharing fallback
WhatsApp sharing
Messenger sharing
Facebook sharing
🔐 Authentication
Secure session-based authentication
Supabase SSR Authentication
Protected customer routes
Server-side session handling
👤 Customer Dashboard

Customers get a dedicated dashboard to manage their account and shopping activity.

Dashboard Features
📦 Order History
📍 Address Book
🇧🇩 Bangladesh Division & District Support
⭐ Product Reviews
🔔 Notifications
🔐 Security Settings
👤 Profile Management
📊 Admin Dashboard

ARISTO includes a full-featured administration panel for managing the entire store.

📈 Analytics
Sales and store analytics
Period-based growth calculations
Interactive performance charts
Recharts-powered data visualization
📋 Order Management
View all orders
Expandable order rows
Inline order status updates
Monitor order progress
👥 Customer Management
View customer profiles
Customer order history
Profile and order history drawer
Active/inactive customer management
🎟️ Coupon Management
Create and manage coupons
Usage limits
Per-user validation
Promotional discount management
🖼️ Banner Management
Create promotional banners
Update existing banners
Delete banners
Cloudinary-powered media management
🔒 Role-Based Access Control
Protected admin routes
Middleware-based route protection
Role-based authorization
Restricted administrative operations
🛠️ Tech Stack
Layer	Technology
Framework	Next.js — App Router
Language	TypeScript
Database	Supabase / PostgreSQL
Authentication	Supabase SSR Auth
Styling	Tailwind CSS
Media Storage	Cloudinary
Email Service	Resend
Charts & Analytics	Recharts
Deployment	Vercel
🏗️ Architecture

The application follows a modern full-stack architecture built around the Next.js App Router, with Supabase handling database and authentication, Cloudinary handling media storage, and Resend handling transactional emails.

                         ┌─────────────────────────┐
                         │         ARISTO          │
                         │   E-Commerce Platform   │
                         └────────────┬────────────┘
                                      │
                    ┌─────────────────┴─────────────────┐
                    │                                   │
          ┌─────────▼─────────┐               ┌─────────▼─────────┐
          │     CUSTOMER      │               │       ADMIN       │
          │    EXPERIENCE     │               │     DASHBOARD     │
          └─────────┬─────────┘               └─────────┬─────────┘
                    │                                   │
                    └─────────────────┬─────────────────┘
                                      │
                           ┌──────────▼──────────┐
                           │      NEXT.JS        │
                           │    APP ROUTER       │
                           │     + SSR           │
                           └──────────┬──────────┘
                                      │
              ┌───────────────────────┼───────────────────────┐
              │                       │                       │
       ┌──────▼──────┐         ┌──────▼──────┐        ┌──────▼──────┐
       │   SUPABASE  │         │  CLOUDINARY │        │    RESEND   │
       │             │         │             │        │             │
       │ PostgreSQL  │         │    Media    │        │    Email    │
       │    Auth     │         │   Storage   │        │   Service   │
       └─────────────┘         └─────────────┘        └─────────────┘
🔄 Core Application Flow
Customer
   │
   ▼
Browse Products
   │
   ▼
Product Details
   │
   ├──────► Wishlist
   │
   └──────► Add to Cart
                 │
                 ▼
              Checkout
                 │
                 ▼
          Cash on Delivery
                 │
                 ▼
           Order Created
                 │
        ┌────────┴────────┐
        ▼                 ▼
 Order Confirmation   Admin Dashboard
        │                 │
        ▼                 ▼
     Resend          Order Management
                          │
                          ▼
                    Order Delivered
                          │
                          ▼
                    Customer Review
🔐 Security

Security and authorization are handled across both customer and administrative workflows.

🔒 Supabase SSR authentication
🛡️ Middleware-based route protection
👥 Role-based authorization
🔑 Environment variables for sensitive credentials
🚫 Server-side handling of secret keys
⭐ Delivery-status-based review authorization
🎟️ Per-user coupon validation
🔐 Protected administrative operations
📱 Responsive Design

ARISTO follows a mobile-first responsive design approach and provides a consistent shopping experience across:

📱 Mobile
📲 Tablet
💻 Laptop
🖥️ Desktop

The interface is optimized for modern e-commerce browsing, product discovery, cart management, and checkout.

⚙️ Key Engineering Highlights
⚡ Time-Aware Pricing Engine

The flash sale system dynamically evaluates promotional periods and automatically applies or reverts promotional pricing based on the configured sale duration.

🔄 Global State Synchronization

Cart and wishlist states are synchronized globally to maintain a consistent shopping experience throughout the application.

📊 Period-Based Analytics

The admin dashboard calculates growth based on selected time periods, providing meaningful performance comparisons instead of static metrics.

⭐ Delivery-Gated Reviews

Customers can only submit reviews for eligible purchased products after the required delivery status has been reached.

📧 Automated Business Workflows

Transactional and behavioral email workflows handle order confirmations and abandoned cart reminders automatically.

🔒 Middleware Authorization

Administrative routes are protected through middleware-based authentication and role-based authorization.

🇧🇩 Bangladesh-Focused Commerce

The platform is designed around local customer requirements, including:

Cash on Delivery
Division and district-based addresses
Bangladesh-specific delivery workflows
Local customer account management
