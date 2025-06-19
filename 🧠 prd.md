🧠 Product Requirements Document (PRD)
🌐 Project Name: Feedbackoooo
💡 Purpose:
"Feedbackoooo" is a full-featured student feedback system web application where students and faculty interact through a modern, responsive, and immersive web interface. It enables real-time course feedback submission, faculty analytics, and course creation with a futuristic floating transition experience and attractive UI/UX.

🔑 Core Features Overview:
1. Authentication Module (Start Page)
🌟 Visually animated split-screen or flip-style login/signup page

Options:

🔑 Student Login

🎓 Faculty Login

📝 Sign Up (Student / Faculty)

2. Student Flow
👤 Secure Login

🎯 Dashboard with animated card interface

🔍 Select Faculty and Course (Dropdown / Smart Suggest Search with type float)

✍️ Feedback Module:

Multiple choice questions with slider and emojis

Optional comment section

Beautiful confirmation modal on submission

🚪 Logout with floating transition

3. Faculty Flow
👤 Secure Login

🎯 Dashboard with glowing metric cards

🔍 Search Student by Register Number

View basic profile + feedback received

🧾 Create Course:

Add course code, name, semester

Assign to self

Limit: 2 courses max

🚪 Logout with floating transition

🎨 UI/UX & Design Requirements
🔷 General Design Principles:
Gradient-rich dark theme (e.g., Deep Purple → Indigo → Neon Blue)

Floating UI cards with soft shadows and hover-glow effects

Futuristic transitions:

Page transitions with smooth zoom/fade

Element entrance animations (Framer Motion / CSS animation)

Custom fonts (e.g., Inter, Poppins, or futuristic font like Orbitron)

Large headings, soft rounded buttons, clear CTA (Call To Action)

🧩 Layout Guidelines:
Responsive grid system (2-column/3-column depending on view)

Side navigation with icons for dashboards

Minimalist white accent borders on dark backgrounds

Modal and popup transitions (SlideUp/FadeIn)

📱 Device Compatibility:
Fully Responsive for:

Desktop

Tablet

Mobile (collapsible menu, bottom nav options)

🛠️ Technical Requirements
Frontend:
HTML5 + CSS3 + Vanilla JavaScript

Animated CSS Transitions (with keyframes or GSAP/Framer for Cursor)

Floating Cards, Smooth Scroll, Shadow Play, Blur Layers

Backend/Logic (Cursor compatible or simulated):
LocalStorage / IndexedDB or dummy JS arrays for user/session/course data

Modular Codebase (Separate login, dashboard, feedback modules)

📋 Pages Breakdown:
Page	Description
🌐 Landing Page	Floating glowing CTA for login/signup. Light animation & intro to app
🔐 Login/Signup Page	Animated forms, password toggle, role-based login
🧑‍🎓 Student Dashboard	Select faculty, give feedback, submit confirmation
🧑‍🏫 Faculty Dashboard	Search student, create course, view feedback summary
✅ Feedback Form Page	Sliders, ratings, comment box, floating submit button
🔍 Search Result Page	Card showing student info, feedback list
🚪 Logout Animation	Clean ending transition for both roles

✅ Non-Functional Requirements
🕒 Fast load (under 2.5s)

⚡ Responsive & accessible

🚀 Transitions must not hinder usability

🔒 Form validation (login/signup/feedback)

💫 WOW Factors
Glassmorphism overlays on login

Animated SVG blobs in background

Cursor tracking glow on mouse hover

"Slide to Rate" in feedback

Floating labels in all input forms

🧪 Testing Requirements
✅ Form Validation (Login, Signup, Feedback)

✅ Button click, hover interactions

✅ Responsive tests on various screen sizes

✅ Dark/light theme toggle (optional bonus)