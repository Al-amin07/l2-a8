# Bike Servicing Management API

A backend API for a Bike Servicing Management System that allows a bike servicing center to manage customers, bikes, and service records. The API supports CRUD operations for bikes, customers, and services, and includes special endpoints for assigning and completing servicing jobs.

## Live Backend Link

https://l2-a8-lime.vercel.app/

## Tech Stack

- Node.js
- Express.js
- TypeScript
- Prisma ORM
- PostgreSQL

## Features

- Customer Management (Create, Read, Update, Delete)
- Bike Management (Create, Read, Update, Delete)
- Service Record Management (Create, Read, Update, Complete)
- Overdue Service Detection
- Standardized Error Handling

## Database Schema

### Customer Table
| Field | Type | Description |
|-------|------|-------------|
| customerId | UUID | Unique identifier for the customer |
| name | String | Full name of the customer |
| email | String | Unique email |
| phone | String | Contact number |
| createdAt | DateTime | Auto timestamp when created |

### Bike Table
| Field | Type | Description |
|-------|------|-------------|
| bikeId | UUID | Unique identifier for each bike |
| brand | String | Brand of the bike (e.g., Honda, Yamaha) |
| model | String | Model name |
| year | Int | Manufacturing year |
| customerId | UUID | Foreign key referencing Customer |

### ServiceRecord Table
| Field | Type | Description |
|-------|------|-------------|
| serviceId | UUID | Unique identifier for the service record |
| bikeId | UUID | FK to Bike |
| serviceDate | DateTime | Date the service started |
| completionDate | DateTime | Nullable. Date the service completed |
| description | String | Details of service (e.g., oil change) |
| status | String | Status: "pending", "in-progress", "done" |

## Setup Guide

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Al-amin07/l2-a8
   cd bike-servicing-api
   
2. Install Dependencies
   ```bash
   npm install
   
3. Setup .env file
   
4. run on local mechine
   ```bash
   npm run dev
