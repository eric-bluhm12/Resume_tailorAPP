# 🚀 AI Resume Tailor

An intelligent resume generator powered by Anthropic Claude that creates ATS-optimized, tailored resumes from job descriptions.

## ✨ Features

- **Smart Extraction**: Automatically extracts company name and job title from job descriptions using AI
- **ATS Optimization**: Generates resumes scoring 95-100% on ATS systems
- **Profile Management**: Store multiple resume profiles with different work histories
- **One-Click Generation**: Simply select your profile and paste the job description
- **PDF Export**: Download professionally formatted PDF resumes
- **Cost-Efficient**: Uses Anthropic Claude Haiku 4.5 for fast and affordable resume generation
- **Smart Validation**: Automatically rejects jobs requiring:
  - Hybrid or onsite work (remote-only)
  - Entry-level positions (mid/senior only)
  - Security clearance (including Public Trust or higher)

## 🛠️ Setup

### Prerequisites

- Node.js 20.x
- Anthropic API key

### Installation

1. **Clone the repository**
   ```bash
   cd Resume-Tailor_v1.1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   ANTHROPIC_API_KEY=your_anthropic_api_key_here
   ANTHROPIC_MODEL=claude-3-5-haiku-20241022
   NODE_ENV=development
   ```

4. **Add your resume profiles**
   
   Create JSON files in the `resumes/` directory (see `resumes/_template.json` for format)

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:3000`

## 📝 How to Use

1. **Select Profile**: Choose your resume profile from the dropdown
2. **Paste Job Description**: Copy and paste the full job description from the posting
3. **Generate**: Click "Generate Tailored Resume" and wait 30-45 seconds
4. **Download**: Your ATS-optimized PDF will download automatically

The AI will:
- Extract the company name and job title from the job description
- Analyze required skills and keywords
- Generate a tailored summary, skills section, and experience bullets
- Optimize for ATS compatibility with 95-100% score

After generation, you'll see:
- **Token usage breakdown**: Input tokens, output tokens, total tokens
- **Model information**: Which Claude model was used for generation

## 🔧 Technology Stack

- **Frontend**: Next.js, React
- **AI**: Anthropic Claude 3.5 Haiku
- **PDF Generation**: Puppeteer
- **Template Engine**: Handlebars

## 💰 Cost Optimization

This application uses **Anthropic Claude 3.5 Haiku** for fast and cost-effective resume generation:

**Pricing (Claude 3.5 Haiku)**:
- Input: $0.25 per 1M tokens
- Output: $1.25 per 1M tokens

Claude 3.5 Haiku is optimized for speed and cost, making it ideal for high-volume resume generation tasks.

## 📄 License

Private project

## 🤝 Contributing

This is a personal project. Feel free to fork and modify for your own use.
