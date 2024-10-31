
# NotionAI

# NotionAI - AI-Powered Notion Clone

This project is a Notion-inspired productivity and note-taking application built with **Next.js 14**. It features **real-time collaboration**, **user authentication**, **document handling with Firebase**, and **AI-powered insights**. The app is designed for dynamic, collaborative environments, and integrates a variety of modern tools and frameworks.

## Key Features

- **AI Assistance**: Utilizes OpenAI's language models to provide intelligent suggestions, answer queries based on document content, and enhance the user experience.
- **Real-Time Collaboration**: Allows multiple users to edit documents simultaneously with updates visible in real-time.
- **User Authentication**: Secured with Clerk, enabling easy user management and session handling.
- **Scalable Backend**: Deployed with Cloudflare Workers and Firebase for robust data handling and optimized performance.

## Tech Stack

- **Next.js 14**: Framework for building the front end.
- **Tailwind CSS & ShadUI**: For responsive and customizable styling.
- **Liveblocks**: Supports real-time collaboration.
- **Firebase**: Manages data and document storage.
- **Cloudflare Workers & Hono**: Handles serverless functions and AI integration.
- **Clerk**: Provides user authentication and account management.
- **OpenAI API**: Powers AI features for document interactions.
- **Cloudflare's AI with Hono**: Implements additional AI services to translate, summarize, and analyze content.

## Getting Started

### Prerequisites

- **Node.js** and **npm**
- **Firebase Account** for backend data handling
- **OpenAI API Key** for AI services
- **Clerk API Key** for user authentication
- **Cloudflare Account** for deploying serverless functions

### Installation
**Clone the repository**:

   - git clone https://github.com/willyhuang18/NotionAI.git
   - cd NotionAI/notionai.

**Install dependencies**:
  - npm install

**Configure environment variables**:

Create a .env.local file in the root directory and add your keys:

- NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
- NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_api_key
- OPEN_AI_KEY=your_openai_api_key
- Add your Firebase and Cloudflare credentials as well.

**Run the development server**:
- npm run dev
- Open http://localhost:3000 to view it in your browser.

### Deployment:
This project is configured to deploy on Cloudflare Workers. Ensure you have wrangler installed and authenticated.

**Build and deploy**:
- npm run build
- npm run deploy


### Usage 
**Creating and Editing Documents**: Start a new document or select an existing one. The editor allows formatting, AI assistance, and real-time collaboration.

**Using AI Features**：
- **Chat with Document**: Submit questions related to the document content.
- **Translate Document**: Translate document summaries into different languages.
- **Manage Users**: Clerk handles authentication and allows easy user management.

### Example Usage:
- **Real-Time Collaboration**: Open a document with multiple users to see updates in real-time.
- **AI Query**: Ask the AI about document-specific information or request a summary.
- **Translation**: Translate the document’s summary to a target language.
  ![3e08c123aa0d7abf80c3849be1a98bd](https://github.com/user-attachments/assets/76049db4-02f5-4b35-b621-6bad6dcc815f)
  ![487fc89188efea15f4828bd1adec928](https://github.com/user-attachments/assets/9dc513d0-3a53-45c9-bfdb-930a70dec5ac)
