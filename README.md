# ⚡ FluxHire — AI Creator Marketplace & Intelligent Pipeline

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Frontend: Vanilla JS](https://img.shields.io/badge/Frontend-Vanilla%20JS%20%2B%20HTML5-yellow.svg)](index.html)
[![Styling: Tailwind Design System](https://img.shields.io/badge/Design-Tailwind%20%2B%20Stitch%20Tokens-indigo.svg)](DESIGN.md)
[![Backend: Python 3 REST](https://img.shields.io/badge/Backend-Python%203%20(Zero--Dep)-green.svg)](server.py)
[![Hackathon: Production Ready](https://img.shields.io/badge/Status-Hackathon%20MVP%20Ready-brightgreen.svg)]()

> **The first AI-native talent platform connecting enterprise brands and creative agencies with verified generative AI filmmakers, commercial animators, and prompt directors.**

---

## 📌 Executive Summary

Traditional freelance platforms (Upwork, Fiverr) were built for legacy toolchains and struggle to evaluate generative AI workflows. Meanwhile, brands looking to produce commercial AI campaigns face critical bottlenecks:
- **Unverified Tool Proficiencies**: Distinguishing between casual prompters and production-grade technical directors with custom ComfyUI nodes, LoRA checkpoints, or temporal video workflows.
- **Copyright & IP Uncertainty**: Ensuring clean model lineages, commercial release rights, and high-resolution upscaling pipelines.
- **Vague Scoping**: Converting high-level creative briefs into structured parameters (frame rates, seed consistency, aspect ratios, model pipelines).

**FluxHire** solves this by combining:
1. **Natural Language AI Brief Decomposition**: Transforming creative prompts into executable technical specifications.
2. **Multi-Model Pipeline Verification**: Auditing creator proficiencies across Runway Gen-3, Kling 1.5, Midjourney v6, ComfyUI, FLUX, and Adobe Firefly.
3. **Real-Time Match Telemetry**: Explaining algorithmic recommendation scores across aesthetic alignment, tooling pipelines, and commercial track records.

---

## 🚀 Quick Start (Run Locally in Seconds)

FluxHire is engineered with **zero external dependencies**. No `npm install`, no virtual environments, and no complex configuration required.

### Option 1: Standalone Python Server (Recommended)
```bash
# Clone or navigate to the repository
cd fluxhire-ai-marketplace

# Start the unified backend and frontend server
python server.py 3000
Open http://localhost:3000 in your browser.

Option 2: Any Static Web Server
bash
# Using Node / NPX
npx serve -l 3000 .
Option 3: Direct File Execution
Double-click index.html to run directly in Google Chrome, Microsoft Edge, or Mozilla Firefox.

🎬 8-Step Hackathon Demo Walkthrough (For Judges)
The application provides a seamless, interconnected user journey that runs entirely client-side without page refreshes:

mermaid
graph LR
    A[Discover Marketplace] --> B[AI Brief Builder]
    B --> C[Generate Structured Brief]
    C --> D[View AI Matches & Telemetry]
    D --> E[Inspect Creator Profile]
    E --> F[Shortlist Talent]
    F --> G[Send Proposal Invitation]
    G --> H[Track in My Briefs Dashboard]
