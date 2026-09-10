# SkillSetu (कौशल सेतु)
### AI-Powered Competency Assessment & Personalized Learning Recommendation Platform for Indian Civil Services

Inspired by and designed for deep integration with the **iGOT Karmayogi** ecosystem (**National Programme for Civil Services Capacity Building - NPCSCB**, Department of Personnel & Training, Government of India).

---

## 🏛️ Executive Overview

SkillSetu bridges the gap between civil service roles and operational competencies across four strategic domains:
1. **Statistical Competency** (Official sample survey designs, NIF SDG benchmarks, CPI/WPI deflation, econometric modeling)
2. **Technical Competency** (MeghRaj cloud security, CERT-In compliance, PM GatiShakti GIS data pipelines, API Setu integrations, monitoring war rooms)
3. **Digital Governance** (Direct Benefit Transfer - DBT, NIC e-Office v7 paperless workflows, GeM 4.0 procurement, DPDP Act 2023 compliance)
4. **Behavioral & Managerial** (Citizen-centric service delivery, CPGRAMS grievance resolution, inter-ministerial collaboration, public service ethics, GFR 2017 budgeting)

Transitioning governance from **'Rule-based'** to **'Role-based'** civil service excellence.

---

## 🚀 Tech Stack

- **Frontend**: React 19, TypeScript, TanStack Router, Tailwind CSS, Lucide Icons, Recharts, Canvas-Confetti
- **Backend & Database**: Supabase (Postgres with UUID & Row Level Security, Supabase Auth, Deno Edge Functions)
- **AI Intelligence**: Google Gemini API (`gemini-2.5-flash`) via official `@google/genai` SDK
- **API Security**: All Gemini calls run server-side / in Edge Functions; API keys are never exposed client-side

---

## 🎯 Defensible Hybrid Scoring Engine (Method #5)

A major challenge in capacity building is that pure self-reported skill ratings are inaccurate and easily challenged by evaluators. SkillSetu employs the **defensible hybrid formula**:

$$\text{current\_level} = 0.5 \times \text{diagnostic\_quiz\_score} + 0.3 \times \text{profile\_inference\_score} + 0.2 \times \text{course\_completion\_history}$$

$$\text{gap\_score} = \max(0, \text{target\_level} - \text{current\_level})$$

- **0.5 × Diagnostic Micro-Quiz**: Measured baseline from 5 calibrated operational questions testing decision-making under civil service rules.
- **0.3 × Profile Inference Prior**: Derived from department (e.g. MoSPI, MeitY), designation seniority, and past institutional training history.
- **0.2 × Course Completion History**: Dynamic updates — every completed iGOT course or verified quiz immediately boosts the domain score and recalibrates the Radar Chart!

---

## 📦 Key Platform Features

1. **Onboarding & Competency Profiling**:
   - 3-step onboarding: Officer Profile & Past Training Multi-entry → Diagnostic Micro-Quiz → AI Competency Baseline & Radar Chart.
2. **Skill-Gap Analysis Engine**:
   - Predefined 16-competency framework with 5-level rubrics.
   - Interactive Recharts Multi-Axial Radar Chart comparing Current vs Target proficiency.
   - Priority ranking (`High`, `Medium`, `Low`, `Mastered`) with Gemini rationale.
3. **Personalized Learning Path Recommendations**:
   - 12 curated mock iGOT courses from LBSNAA, ISTM, NIC, IIPA, MoSPI, NITI Aayog.
   - Gemini semantic matching curates the top 5 courses addressing the official's highest deficits.
   - Interactive Enrollment Tracker (`Not Started` → `In Progress` → `Completed`) with dynamic competency boosting.
4. **AI Assessment Engine (MCQ Generator)**:
   - Admins/Trainers upload or paste official circulars (e.g., DPDP Act 2023, GFR 149 GeM rules, National Indicator Framework).
   - Gemini generates 5–10 calibrated MCQs with options, correct answer keys, and authoritative explanations.
   - Civil servants take quizzes inline with instant feedback and score history.
5. **Employee Dashboard**:
   - Recharts Radar Chart, Top Skill Gaps list, Courses Progress Tracker, Quiz History, and Annual 50-Hour Mandate Logger.
6. **Admin & CBC Oversight Dashboard**:
   - Org-wide Competency Heatmap across Central Ministries (MoSPI, MeitY, DoPT, Finance, Health, Rural Dev).
   - Aggregate skill-gap severity distribution bar charts.
   - Training effectiveness and average quiz scores over time.
   - Civil Servants Directory with full profile drill-down modal.
7. **AI Virtual Assistant (Karmayogi Sahayak)**:
   - Floating chat widget in bottom-right corner powered by Gemini 2.5 Flash.
   - Grounded with the active officer's designation, department, competency scores, and top gaps.

---

## 🛠️ Quick Start & Local Development

### 1. Clone or Open Project
```bash
cd skillsetu
npm install
```

### 2. Configure Environment (.env)
Copy `.env.example` to `.env`:
```env
# Optional: Get free key from https://aistudio.google.com/
GEMINI_API_KEY=your_gemini_api_key_here

# Supabase Local or Cloud URL
VITE_SUPABASE_URL=http://localhost:54321
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy_anon_key

PORT=3001
```
*(Note: If `GEMINI_API_KEY` is not provided, SkillSetu automatically activates its intelligent civil-services fallback engine, allowing 100% testable out-of-the-box evaluation!)*

### 3. Run Development Server
```bash
npm run dev
```
This runs both:
- **Client**: Vite on `http://localhost:5173`
- **Backend Edge Functions Emulator**: Node server on `http://localhost:3001` with automatic Vite proxying for `/functions/v1/...`

### 4. Deploying to Supabase Cloud (Production)
```bash
# Push database migrations and seed data
supabase db push

# Deploy all 4 Edge Functions
supabase functions deploy analyze-competency --no-verify-jwt
supabase functions deploy recommend-courses --no-verify-jwt
supabase functions deploy generate-quiz --no-verify-jwt
supabase functions deploy chat-assistant --no-verify-jwt

# Set Supabase Secret for Gemini
supabase secrets set GEMINI_API_KEY=your_key_here
```

---

## 👥 Demo Civil Service Accounts
Switch instantly using the top banner dropdown:
- **Officer Rajesh Sharma**: Director (Data Systems), Ministry of Statistics & PI (MoSPI), Indian Statistical Service (ISS)
- **Priya Verma**: Joint Director (Capacity Building), DoPT / Capacity Building Commission (CBC) — *Admin*
- **Dr. Amit Meena**: Deputy Secretary, Ministry of Electronics & IT (MeitY), IAS
- **Sunita Rao**: Under Secretary, Ministry of Health & Family Welfare, CSS
