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
Summer collections
Winter collections
Eid collections
New arrivals
Premium collections
Limited editions
🛒 Shopping Cart
Add/remove products
Update quantities
Real-time global state synchronization
❤️ Wishlist
Save favorite products
Real-time wishlist synchronization
⚡ Flash Sale Engine
Time-aware promotional pricing
Automatic activation and expiration
Automatic price reversion after the sale
⭐ Review System
Customers can review purchased products
Reviews are gated by delivery status
📦 Checkout
Cash on Delivery
Bangladesh-focused address management
Division and district selection
🔔 Notifications
In-app notification system
Navbar notification bell
Polling-based notification updates
📧 Automated Emails
Order confirmation emails
Abandoned cart reminders
📱 Product Sharing
Native mobile sharing using the Web Share API
Desktop fallback sharing
WhatsApp
Messenger
Facebook
🔐 Authentication
Secure session-based authentication
Supabase SSR authentication
Protected customer routes
👤 Customer Dashboard

Customers get a dedicated dashboard to manage their account and shopping activity.

Dashboard Features
📦 Order history
📍 Address book
🇧🇩 Bangladesh division & district support
⭐ Product reviews
🔔 Notifications
🔐 Security settings
👤 Profile management
📊 Admin Dashboard

ARISTO includes a full-featured administration panel for managing the entire store.

📈 Analytics
Sales and store analytics
Period-based growth calculations
Interactive charts
Recharts-powered data visualization
📋 Order Management
View all orders
Expandable order rows
Inline order status updates
Monitor order progress
👥 Customer Management
View customer profiles
Customer order history
Profile/order history drawer
Active/inactive customer status
🎟️ Coupon Management
Create and manage coupons
Usage limits
Per-user validation
Promotional discount management
🖼️ Banner Management
Create promotional banners
Update/delete banners
Cloudinary-powered media management
🔒 Role-Based Access
Protected admin routes
Middleware-based route protection
Role-based authorization
🛠️ Tech Stack
Layer	Technology
Framework	Next.js (App Router)
Language	TypeScript
Database	Supabase / PostgreSQL
Authentication	Supabase SSR Auth
Styling	Tailwind CSS
Media Storage	Cloudinary
Email	Resend
Charts	Recharts
Deployment	Vercel
🏗️ Architecture

The application follows a modern full-stack architecture built around the Next.js App Router.

                    ┌─────────────────────┐
                    │      ARISTO          │
                    │  E-Commerce Platform │
                    └──────────┬──────────┘
                               │
              ┌────────────────┴────────────────┐
              │                                 │
      ┌───────▼────────┐               ┌────────▼───────┐
      │    Customer     │               │     Admin       │
      │    Experience   │               │    Dashboard    │
      └───────┬────────┘               └────────┬────────┘
              │                                 │
              └────────────────┬────────────────┘
                               │
                    ┌──────────▼──────────┐
                    │     Next.js App     │
                    │     Router / SSR     │
                    └──────────┬──────────┘
                               │
          ┌────────────────────┼────────────────────┐
          │                    │                    │
   ┌──────▼──────┐      ┌──────▼──────┐     ┌──────▼──────┐
   │  Supabase   │      │ Cloudinary  │     │   Resend    │
   │ PostgreSQL  │      │    Media    │     │    Email    │
   │     Auth    │      │   Storage   │     │   Service   │
   └─────────────┘      └─────────────┘     └─────────────┘
