# AI-Powered Resume Builder
This is a full-stack MERN application that allows users to create, manage, and share professional resumes with ease. It leverages AI to assist with content generation and offers multiple modern templates to choose from.

## Features

- **User Authentication**: Secure user registration and login using JWT.
- **AI-Powered Content**:
    - Enhance professional summaries and job descriptions with AI suggestions.
    - Upload an existing PDF resume to automatically parse and populate the fields.
- **Dynamic Resume Building**:
    - Real-time preview of the resume as you edit.
    - Intuitive forms for personal info, summary, experience, education, projects, and skills.
- **Customizable Templates**:
    - Choose from multiple professional templates: Classic, Modern, Minimal, and Minimal with Image.
    - Select a custom accent color to personalize your resume's design.
- **Image Upload**:
    - Add a profile picture to your resume.
    - Option to automatically remove the background from the uploaded image via ImageKit.io integration.
- **Resume Management**:
    - Create new resumes from scratch or by uploading an existing one.
    - View, edit, and delete your saved resumes from a central dashboard.
- **Sharing & Downloading**:
    - Generate a shareable public URL for your resume.
    - Download your final resume as a print-ready PDF.

## Tech Stack

| Category      | Technology                                                                                                    |
|---------------|---------------------------------------------------------------------------------------------------------------|
| **Frontend**  | React, Vite, Redux Toolkit, Tailwind CSS, Axios, React Router, Lucide React                                   |
| **Backend**   | Node.js, Express.js, MongoDB, Mongoose                                                                        |
| **AI**        | OpenAI/Gemini API for content generation and PDF parsing.                                                     |
| **Image**     | [ImageKit.io](https://imagekit.io/) for image storage, optimization, and background removal.                    |
| **Infra**     | Multer for file uploads, JWT for authentication, bcrypt for password hashing.                                   |

## Project Structure

The repository is organized into a monorepo structure with two main directories: `client` and `server`.

```
.
├── client/         # Contains the React frontend application
│   ├── public/
│   └── src/
│       ├── app/    # Redux store and slices
│       ├── assets/ # Resume templates and dummy data
│       ├── componenets/ # Reusable React components
│       ├── configs/ # API configuration
│       └── pages/  # Main page components
└── server/         # Contains the Node.js/Express backend
    ├── configs/    # Database, AI, and ImageKit connections
    ├── controllers/ # Request handling logic
    ├── middlewares/ # Authentication middleware
    ├── models/     # Mongoose schemas
    └── routes/     # API route definitions
```

## Getting Started

### Prerequisites

- Node.js (v20.19.0 or later)
- npm or yarn
- A MongoDB instance (local or cloud-based)
- API keys for an AI provider (e.g., Gemini) and ImageKit.io

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rexparmar/resume.git
    cd resume
    ```

2.  **Setup Backend:**
    - Navigate to the server directory: `cd server`
    - Install dependencies: `npm install`
    - Create a `.env` file and add the following variables:
      ```env
      PORT=3000
      MONGODB_URI=<your_mongodb_connection_string>
      JWT_SECRET=<your_jwt_secret>

      # AI Provider (e.g., Gemini)
      GEMINI_API_KEY=<your_api_key>
      GEMINI_BASE_URL=<your_provider_base_url>
      OPEN_AI_MODEL=<model_name_e.g_gemini-1.5-flash>
      
      # ImageKit.io
      IMAGEKIT_PRIVATE_KEY=<your_imagekit_private_key>
      ```
    - Start the backend server:
      ```bash
      npm run server
      ```

3.  **Setup Frontend:**
    - In a new terminal, navigate to the client directory: `cd client`
    - Install dependencies: `npm install`
    - Create a `.env` file and add your backend URL:
      ```env
      VITE_BASE_URL=http://localhost:3000
      ```
    - Start the frontend development server:
      ```bash
      npm run dev
      ```

The application should now be running, with the frontend accessible at `http://localhost:5173` (or another port specified by Vite) and the backend at `http://localhost:3000`.

## API Endpoints

The server exposes the following RESTful API endpoints:

### User Routes (`/api/users`)
- `POST /register`: Register a new user.
- `POST /login`: Log in an existing user.
- `GET /data`: Get authenticated user's data.
- `GET /resumes`: Get all resumes for the authenticated user.

### Resume Routes (`/api/resumes`)
- `POST /create`: Create a new blank resume.
- `DELETE /delete/:resumeId`: Delete a specific resume.
- `GET /get/:resumeId`: Get a specific resume (protected).
- `GET /public/:resumeId`: Get a resume if it is marked as public.
- `PUT /update`: Update a resume's data and/or profile image.

### AI Routes (`/api/ai`)
- `POST /enhance-pro-sum`: Enhance a professional summary with AI.
- `POST /enhance-job-desc`: Enhance a job description with AI.
- `POST /upload-resume`: Upload a PDF resume to be parsed and saved by AI.
