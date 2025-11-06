# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a frontend web application called "Soul Match" or "Feel" - a social matching platform with soul-matching capabilities. The application features a multi-step user onboarding process, authentication system, and user profile management.

## Codebase Structure

```
前端页面/
├── index.html          # Home page
├── login.html          # Login and registration page
├── soul-match.html     # Main application page with 6-step soul matching process
├── welcome.html        # Welcome page
├── navbar.html         # Navigation bar component
├── navbar.css          # Navigation bar styles
├── test.html           # Functionality test page
├── README.md           # Project documentation
└── image/              # Image resources directory
```

## Key Features

### 1. Authentication System (login.html)
- User login and registration functionality
- JWT token management with localStorage
- Form validation for login and registration
- API integration with backend endpoints:
  - Login: `POST /user/login`
  - Register: `POST /user/register`

### 2. Main Application (soul-match.html)
- 6-step soul matching process:
  1. Interest tags selection
  2. Personality assessment
  3. Voice/text self-introduction
  4. Constellation selection
  5. Life philosophy selection
  6. Social preference selection
- User profile management with modal popup
- Avatar upload and preview functionality
- Automatic modal popup for new users (based on count=1)

### 3. Navigation Component (navbar.html + navbar.css)
- Reusable navigation bar component
- Dynamic loading capability
- Responsive design with mobile support

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Libraries**: GSAP (animations), Lenis (smooth scrolling)
- **UI/UX**: Modern responsive design with gradient backgrounds and animations
- **Storage**: localStorage for token and user data persistence
- **Development**: Live Server for local development

## Development Commands

### Running the Application
```bash
# Use Live Server or similar tool to start local server
# Default port configured in .vscode/settings.json: 5501
```

### Testing
- Open `test.html` for functionality testing
- Check browser console for detailed debugging information

## Architecture Notes

### Modular Design
- Navigation bar as independent component for reusability
- Function modules for easier debugging and extension
- CSS styles separated for theme customization

### API Integration
- Backend endpoints for user information:
  - Get user info: `GET /information/{userId}`
  - Update user info: `POST /upload`
- Authorization token validation required for protected endpoints

### Data Flow
1. User authenticates via login.html
2. Token and user ID stored in localStorage
3. Navigate to soul-match.html for main application
4. User completes 6-step matching process
5. Profile information managed through modal interface

## Important Considerations

1. **CORS Configuration**: Backend must configure CORS to support frontend requests
2. **File Paths**: Ensure all file paths are correct for proper component loading
3. **Browser Compatibility**: Designed for modern browsers
4. **Network Requests**: Backend services must be running for full functionality