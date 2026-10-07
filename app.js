/**
 * FluxHire - Interactive Creator Marketplace Engine
 * Supports full Hackathon demo flow:
 * Discover -> Create AI Brief -> Generate AI Brief -> View AI Matches ->
 * View Creator Profile -> Shortlist Creator -> Invite Creator -> My Briefs / Shortlist
 */

// --- 1. DEMO CREATORS DATASET ---
const CREATORS_DATA = [
  {
    id: "aanya-rao",
    name: "Aanya Rao",
    title: "AI Filmmaker",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9Mkoh5rqq2pdNbUUeI5cr63Xox0jvso1TkWbaAkXHQPwznOtQ8MRg7ccQOGb0kax8ypCGm65CRJli262UgeOe4qmHs7ZQaZVvxPpMWoCBNwXNstEL8Jvaa_tirKaAkymRJA9x5plysi8dJZbw1wVFMdLNdUtMHfTmWji3wXZAAjrtnLvJY9q_mQT68NtXSmSQFD-ccBEWFyv-aw55itiolBSnRqSU4ZDualKaVsY",
    headerMedia: "https://lh3.googleusercontent.com/aida-public/AB6AXuBR9AkH5s1WTM78Vq4EeHQu4TbfVhx93ML9UwbM5wZijsxT4ffaYld6eleajo6cbzet-TQ4SmMfuvNy0PArHLm_n9K-GedOm7yMR5MWGldpSVf51hrqu0wE1FazOqOXJeogFOODMVYd5YWkeyJnqe8fy0DNFG3sEAbjC_VXgUF9wS6P3y4r3D7Hsj3rVVWa0oxTckC9MV9Ct9eLD8_6KvepDrzG7LeccJ6PsarVz0o",
    mediaLabel: "Commercial Reel (0:45s)",
    mediaType: "video",
    rating: 4.9,
    jobsCount: 38,
    ratePerHour: 120,
    startingPrice: 600,
    location: "Mumbai / Remote",
    verified: true,
    verificationDetails: {
      portfolioOwnership: "Confirmed (Original generation seeds & keyframe timelines verified)",
      toolUsage: "Verified (Runway Gen-3 and Kling 1.5 multi-model benchmark passed)",
      commercialLicensing: "Documented (Full commercial IP transfer and release clearance guarantee)"
    },
    specialization: "AI Filmmaking",
    tools: ["Runway Gen-3", "Kling", "Midjourney", "ElevenLabs"],
    formats: ["Video", "Social Ads", "Animation"],
    skills: ["AI Filmmaking", "Cinematic Lighting", "Product Advertising", "Image-to-Video", "Color Grading"],
    bio: "Visionary AI commercial director with 6+ years in traditional post-production now directing photorealistic generative video for top luxury, beauty, and automotive brands.",
    availability: "Available for Q4 Campaigns",
    matchScore: 98,
    matchReason: "Strong match because this creator specializes in AI filmmaking, has proven Runway Gen-3 and Kling production pipelines, and has completed 14 verified commercial skincare brand campaigns.",
    telemetry: {
      aestheticMatch: 99,
      pipelineFit: 100,
      commercialAudit: 96
    },
    portfolio: [
      {
        title: "Velvet Aura Skincare Campaign",
        type: "AI Video (9:16)",
        tools: "Runway Gen-3 • Kling",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9otfPt5E1uZ2Ms-DXa0c9MQFENol_QOmKpMefrz0Wlh3bDjqMfTa9Og1160o9nLYPx96W4CX9s2vUgo67kuCAuE-EDSwCUD3IctxzqV8R2bTqxTV99A-nlejB_GdvVdKurR0bc97eW9ThJmElk9UTlQ70oFmmycANXkgWy32sdWuB5SquEArdxvvdncB5q5hKI77dGG_I6UQcRcXVSED8lRKaLXsnMsK_yNAqJlA",
        description: "Macro vertical frames of dewy botanical skincare bottles with soft golden hour refractions."
      },
      {
        title: "Pearlescent Serum Micro-Fluidics",
        type: "AI Video (9:16)",
        tools: "Runway Gen-3 • Midjourney",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSI_btQ1S4P4hBlP6AgLPeOFYkuoEI7ysP4d4IY6RKfoy1UBKqbCF1DgSkcKqJqQrbTPMvQNmaYhmrvvTLKvPQPOu-W2O9xdCqd1PvdEAqpi-DXcanAbe4j6SkT-_Cy6givHKQtAz9lWM7GWA7iV8JMhgjNeUg9GKy7h3l-BkR4hZPG_yAhzvJdOYJ6venXba_uDJgibAGpIyA4GgpDUyej6nGIRigJtddLojlWbg",
        description: "Slow-motion AI fluid simulation of pearlescent cosmetic cream swirling against optical glass."
      },
      {
        title: "Luminescent High-Fashion Profile",
        type: "Commercial Video",
        tools: "Midjourney • Kling",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQEcq-neGVRS2yANR4JOQSTaVyl7dUipuU2Ablx6WC4gmyiflBZFd4oRJATwP6TMYh9uKhLW82-OQ1CeqKNc0cyNz1GHNsyW2_4uVDxFelMZSaJPj4EymETnCSoPt13Ict8RNCyqShzMY6rmsp4EGi1LODSS4Oebb56u5nH0-L73AZy44zjTvCLZWulTdiFJ8evbjCEP0apoqaA8dVTL0TI9YWTiw6XXFgsCiMf6c",
        description: "High fashion cosmetics model profile with natural skin texture and cyan edge-lit rim highlights."
      }
    ]
  },
  {
    id: "vikram-shah",
    name: "Vikram Shah",
    title: "Generative Designer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&h=256&q=80",
    headerMedia: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    mediaLabel: "Packaging Design (Brand Identity)",
    mediaType: "image",
    rating: 4.9,
    jobsCount: 45,
    ratePerHour: 95,
    startingPrice: 450,
    location: "Bangalore / Remote",
    verified: true,
    verificationDetails: {
      portfolioOwnership: "Confirmed (Vector and prompt lineage verified)",
      toolUsage: "Verified (Midjourney v6 & Adobe Firefly commercial licensing audit passed)",
      commercialLicensing: "Documented (Full IP rights transfer with indemnification)"
    },
    specialization: "Generative Design",
    tools: ["Midjourney", "Adobe Firefly", "FLUX"],
    formats: ["Image", "Social Ads", "3D"],
    skills: ["Generative Design", "Brand Identity", "Packaging Design", "Custom LoRA", "Vectorization"],
    bio: "Pioneering brand identity and generative tactile packaging. Blends Midjourney v6 with custom FLUX LoRAs for enterprise physical and digital products.",
    availability: "Available Immediately",
    matchScore: 88,
    matchReason: "High aesthetic synergy for still imagery and print/packaging components, with certified commercial IP indemnity.",
    telemetry: {
      aestheticMatch: 94,
      pipelineFit: 84,
      commercialAudit: 96
    },
    portfolio: [
      {
        title: "NeoBotanica Foil Packaging",
        type: "Packaging Visuals",
        tools: "Midjourney • Adobe Firefly",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
        description: "Organic generative foil typography and tactile packaging mockups for luxury wellness brand."
      },
      {
        title: "Prismatic Geometric Visuals",
        type: "Key Visuals",
        tools: "FLUX • Adobe Firefly",
        image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=600&q=80",
        description: "Complex mathematical caustics and glass refraction studies for tech conference visual system."
      }
    ]
  },
  {
    id: "maya-chen",
    name: "Maya Chen",
    title: "AI Animator",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256&q=80",
    headerMedia: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=800&q=80",
    mediaLabel: "Character Reel (0:30s)",
    mediaType: "video",
    rating: 5.0,
    jobsCount: 29,
    ratePerHour: 135,
    startingPrice: 750,
    location: "Singapore / Remote",
    verified: true,
    verificationDetails: {
      portfolioOwnership: "Confirmed (ComfyUI workflow nodes and custom seed checkpoints checked)",
      toolUsage: "Verified (Runway Gen-3 and ComfyUI AnimateDiff pipelines benchmarked)",
      commercialLicensing: "Documented (Enterprise commercial terms verified)"
    },
    specialization: "AI Animation",
    tools: ["Runway Gen-3", "Stable Diffusion", "ComfyUI"],
    formats: ["Animation", "Video"],
    skills: ["AI Animation", "ComfyUI Nodes", "Motion Control", "Character Consistency", "Post-Processing"],
    bio: "Ex-Pixar technical artist specializing in high-consistency AI animation, node-based ComfyUI rigs, and cinematic temporal smoothing.",
    availability: "Booking for November",
    matchScore: 91,
    matchReason: "Exceptional motion fluidity and camera movement accuracy, ideal for complex animated camera movements and fluid simulations.",
    telemetry: {
      aestheticMatch: 92,
      pipelineFit: 95,
      commercialAudit: 90
    },
    portfolio: [
      {
        title: "Temporal Floral Transformation",
        type: "AI Animation (16:9)",
        tools: "ComfyUI • Runway Gen-3",
        image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=600&q=80",
        description: "Continuous morph animation of bioluminescent petals unfolding in ultra-high resolution."
      },
      {
        title: "Cyber-Surreal Character Loop",
        type: "Character Animation",
        tools: "Runway Gen-3 • Stable Diffusion",
        image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80",
        description: "Stylized anime-realism character turning in volumetric haze with locked clothing consistency."
      }
    ]
  },
  {
    id: "arjun-menon",
    name: "Arjun Menon",
    title: "Product Ads Creator",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&h=256&q=80",
    headerMedia: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    mediaLabel: "Product Spot (0:20s 9:16)",
    mediaType: "video",
    rating: 4.8,
    jobsCount: 52,
    ratePerHour: 110,
    startingPrice: 500,
    location: "New Delhi / Remote",
    verified: true,
    verificationDetails: {
      portfolioOwnership: "Confirmed (Live project files & ad metrics verified)",
      toolUsage: "Verified (Kling and Midjourney enterprise ad pipelines passed)",
      commercialLicensing: "Documented (Full advertising rights buyout included)"
    },
    specialization: "Product Advertising",
    tools: ["Kling", "Midjourney", "Adobe Firefly", "Runway Gen-3"],
    formats: ["Social Ads", "Video", "Image"],
    skills: ["Product Advertising", "9:16 Social Ads", "Hook Rate Optimization", "Lighting Match", "CTA Motion"],
    bio: "DTC ad specialist with over 50 completed commercial campaigns. Translates product 3D CAD/photos into viral high-converting vertical video ads.",
    availability: "Available This Week",
    matchScore: 95,
    matchReason: "Strong match with 95% compatibility due to deep product advertising focus, 9:16 vertical video mastery, and Kling ad workflows.",
    telemetry: {
      aestheticMatch: 95,
      pipelineFit: 94,
      commercialAudit: 98
    },
    portfolio: [
      {
        title: "Hydration Drop Hero Spot",
        type: "Social Ad (9:16)",
        tools: "Kling • Midjourney",
        image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
        description: "High-energy 15-second cosmetic splash video designed for Meta and TikTok ad conversions."
      },
      {
        title: "Acoustic Hardware Unveiling",
        type: "Product Ad",
        tools: "Runway Gen-3 • Adobe Firefly",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80",
        description: "Exploded product disassembly and sleek acoustic chamber illumination in 4K resolution."
      }
    ]
  },
  {
    id: "zoya-khan",
    name: "Zoya Khan",
    title: "AI Art Director",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&h=256&q=80",
    headerMedia: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    mediaLabel: "Architectural Vision (Moodboard)",
    mediaType: "image",
    rating: 4.7,
    jobsCount: 19,
    ratePerHour: 105,
    startingPrice: 550,
    location: "Dubai / Remote",
    verified: false,
    verificationDetails: {
      toolUsage: "Tool usage self-declared (Independent portfolio verification pending)"
    },
    specialization: "AI Art Direction",
    tools: ["Midjourney", "ComfyUI", "FLUX"],
    formats: ["Image", "Generative Design", "3D"],
    skills: ["AI Art Direction", "Editorial Direction", "Speculative Architecture", "Latent Control", "Moodboards"],
    bio: "Experimental art director crafting speculative architecture, surreal fashion moodboards, and multi-model latent explorations.",
    availability: "Available Part-time",
    matchScore: 84,
    matchReason: "Bold artistic direction and luxury moodboard expertise; self-declared tool proficiency pending platform audit.",
    telemetry: {
      aestheticMatch: 92,
      pipelineFit: 80,
      commercialAudit: 78
    },
    portfolio: [
      {
        title: "Solarium Translucent Pavilions",
        type: "Spatial Art Direction",
        tools: "FLUX • ComfyUI",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
        description: "Biophilic architectural renders exploring organic daylight and translucent composite surfaces."
      }
    ]
  },
  {
    id: "rohan-iyer",
    name: "Rohan Iyer",
    title: "AI Video Specialist",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&h=256&q=80",
    headerMedia: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=800&q=80",
    mediaLabel: "Cinematic Cut (0:30s)",
    mediaType: "video",
    rating: 4.9,
    jobsCount: 31,
    ratePerHour: 125,
    startingPrice: 650,
    location: "Bengaluru / Remote",
    verified: true,
    verificationDetails: {
      portfolioOwnership: "Confirmed (Original seed generation and timeline stems verified)",
      toolUsage: "Verified (Runway Gen-3 and Kling video synthesis workflows benchmarked)",
      commercialLicensing: "Documented (Full commercial release clearance provided)"
    },
    specialization: "AI Filmmaking",
    tools: ["Runway Gen-3", "Kling", "Stable Diffusion"],
    formats: ["Video", "Social Ads", "Animation"],
    skills: ["AI Filmmaking", "Camera Motion", "Video Inpainting", "Sound Design", "Frame Interpolation"],
    bio: "Commercial director combining camera tracking, generative video models, and cinematic audio mastering for broadcast and streaming.",
    availability: "Available Next Week",
    matchScore: 92,
    matchReason: "High 92% match with verified Runway Gen-3 and Kling workflows, specializing in cinematic camera motion and commercial polish.",
    telemetry: {
      aestheticMatch: 94,
      pipelineFit: 95,
      commercialAudit: 90
    },
    portfolio: [
      {
        title: "Horizon Electric Hypercar",
        type: "Commercial Video",
        tools: "Runway Gen-3 • Kling",
        image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=600&q=80",
        description: "Golden hour mountain pass acceleration sequence with motion blur and drone track simulation."
      }
    ]
  },
  {
    id: "marcus-chen",
    name: "Marcus Chen",
    title: "3D Generative Artist",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuATjDcgJi13gmk9zzf2ZfwaJxSnX0NcXCB1gQOhgePgAq5MFXwwCpLKse4ckMfMwwcIzZjwemCkkF8498uH8G99w_Fw-q7ePsqxDR0XzsduigARRHcZGdJ8nYpfNOAkMEeAUQSPWBeohLVJHMNjBm6_FKpHcHI-sK2Rw927v4xQUNdHBN2o4653vF7097r9tG_ne5gsqLRJEW_jl79CAhPyqksEM1MWXf36J-utHEg",
    headerMedia: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    mediaLabel: "Volumetric 3D Asset (Turnaround)",
    mediaType: "3d",
    rating: 4.9,
    jobsCount: 24,
    ratePerHour: 140,
    startingPrice: 850,
    location: "Vancouver / Remote",
    verified: true,
    verificationDetails: {
      portfolioOwnership: "Confirmed (Blender scenes & ComfyUI mesh pipelines verified)",
      toolUsage: "Verified (ComfyUI and FLUX 3D procedural workflows passed)",
      commercialLicensing: "Documented (Full geometry and texture IP transfer included)"
    },
    specialization: "Generative Design",
    tools: ["ComfyUI", "Stable Diffusion", "FLUX"],
    formats: ["3D", "Image", "Animation"],
    skills: ["3D Meshes", "Procedural Shaders", "Volumetric Renders", "ComfyUI", "Fintech Branding"],
    bio: "3D procedural artist generating volumetric models, CGI environments, and currently engaged on our active Fintech App 3D Visual Assets project.",
    availability: "Contracted (Milestone 2 In Review)",
    matchScore: 86,
    matchReason: "Specialized in 3D generative assets and refractive glass models; currently delivering Milestone 2 on active Fintech project.",
    telemetry: {
      aestheticMatch: 88,
      pipelineFit: 94,
      commercialAudit: 89
    },
    portfolio: [
      {
        title: "Holographic Fintech Crystal",
        type: "3D Asset (Render)",
        tools: "ComfyUI • FLUX",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
        description: "Interactive refractive crystalline token for neo-banking mobile application UI."
      }
    ]
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    title: "Social Ads Specialist",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&h=256&q=80",
    headerMedia: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    mediaLabel: "Viral Lookbook (9:16 Social Ads)",
    mediaType: "video",
    rating: 4.8,
    jobsCount: 41,
    ratePerHour: 90,
    startingPrice: 400,
    location: "London / Remote",
    verified: false,
    verificationDetails: {
      toolUsage: "Tool usage self-declared (Independent portfolio verification pending)"
    },
    specialization: "Product Advertising",
    tools: ["FLUX", "Midjourney", "Kling"],
    formats: ["Social Ads", "Video", "Image"],
    skills: ["Product Advertising", "TikTok Ads", "Hook Rate Optimization", "Fast Revisions", "Viral Pacing"],
    bio: "Rapid-fire visual storyteller producing dynamic 9:16 social ads for Instagram Reels and TikTok e-commerce brands.",
    availability: "Available for Quick Turnarounds",
    matchScore: 89,
    matchReason: "Proven track record in high-converting 9:16 social video with rapid turnaround, self-declared tool expertise.",
    telemetry: {
      aestheticMatch: 90,
      pipelineFit: 86,
      commercialAudit: 92
    },
    portfolio: [
      {
        title: "Streetwear Lookbook Blitz",
        type: "Social Ad Reel",
        tools: "FLUX • Kling",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
        description: "Fast-cut vertical editorial campaign for London streetwear drop with neon city reflections."
      }
    ]
  }
];

// --- 2. DEMO BRIEFS DATASET ---
const INITIAL_BRIEFS = [
  {
    id: "brief-skincare-1",
    name: "Luxury Skincare Campaign",
    status: "Finding Creators",
    statusCategory: "Finding Creators",
    contentType: "AI Video • 20s",
    platform: "Instagram (9:16)",
    format: "9:16",
    style: "Luxury / Cinematic / Minimal",
    deadline: "Oct 20",
    budget: "$500 – $1,000",
    matchingCreatorsCount: 18,
    createdAt: "2026-10-02",
    promptText: "I need a 20-second premium skincare advertisement for Instagram with cinematic visuals, soft morning lighting and a luxury feel.",
    requiredSkills: ["AI Filmmaking", "Product Advertising", "Image-to-Video", "Motion Design"],
    suggestedTools: ["Runway Gen-3", "Kling", "Midjourney"],
    commercialUse: "Paid social + website (full commercial rights buyout)",
    invitedCreatorIds: []
  },
  {
    id: "brief-fintech-2",
    name: "Fintech App 3D Visual Assets",
    status: "In Progress",
    statusCategory: "In Progress",
    contentType: "3D Render & Turnarounds",
    platform: "Web & Mobile App",
    format: "1:1 / 16:9",
    style: "Prismatic / High-Tech / Glassmorphism",
    deadline: "Nov 02",
    budget: "$850 Agreed",
    matchingCreatorsCount: 12,
    createdAt: "2026-09-28",
    promptText: "3D generative assets for our neo-banking onboarding screen featuring refractive holographic crystal tokens.",
    requiredSkills: ["3D Meshes", "Procedural Shaders", "ComfyUI"],
    suggestedTools: ["ComfyUI", "FLUX", "Blender"],
    commercialUse: "App store & marketing website",
    hiredCreator: {
      id: "marcus-chen",
      name: "Marcus Chen",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuATjDcgJi13gmk9zzf2ZfwaJxSnX0NcXCB1gQOhgePgAq5MFXwwCpLKse4ckMfMwwcIzZjwemCkkF8498uH8G99w_Fw-q7ePsqxDR0XzsduigARRHcZGdJ8nYpfNOAkMEeAUQSPWBeohLVJHMNjBm6_FKpHcHI-sK2Rw927v4xQUNdHBN2o4653vF7097r9tG_ne5gsqLRJEW_jl79CAhPyqksEM1MWXf36J-utHEg",
      milestone: "Milestone 2 of 3 (In Review)",
      progressPercent: 66
    },
    invitedCreatorIds: ["marcus-chen"]
  },
  {
    id: "brief-cyber-3",
    name: "Cyberpunk Streetwear Lookbook",
    status: "Creators Invited",
    statusCategory: "Creators Invited",
    contentType: "AI Lookbook & Reel",
    platform: "TikTok & Instagram",
    format: "9:16",
    style: "Cyber-Surreal / Neon / Gritty",
    deadline: "Nov 05",
    budget: "$1,200",
    matchingCreatorsCount: 14,
    createdAt: "2026-10-04",
    promptText: "Need high energy 9:16 lookbook reel for winter streetwear drop featuring neon rainy urban backdrops.",
    requiredSkills: ["Social Ads", "Character Consistency", "Fast Pacing"],
    suggestedTools: ["FLUX", "Midjourney", "Kling"],
    commercialUse: "Paid Social & Lookbook Print",
    invitedCreatorIds: ["elena-rostova"]
  }
];

// --- 3. APPLICATION STATE ---
const state = {
  activeView: "discover",
  searchQuery: "",
  selectedSpecialization: "All",
  selectedTool: "All",
  selectedFormat: "All",
  shortlist: JSON.parse(localStorage.getItem("fluxhire_shortlist") || '["aanya-rao"]'),
  invitations: JSON.parse(localStorage.getItem("fluxhire_invitations") || "{}"),
  briefs: JSON.parse(localStorage.getItem("fluxhire_briefs") || JSON.stringify(INITIAL_BRIEFS)),
  currentBrief: null,
  activeBriefTab: "All",
  notifications: [
    { id: 1, title: "18 Matching Creators Found", desc: "AI match engine ranked candidates for Luxury Skincare Campaign.", time: "10m ago", unread: true },
    { id: 2, title: "Milestone 2 Submitted", desc: "Marcus Chen submitted 3D token turnarounds for review.", time: "1h ago", unread: true },
    { id: 3, title: "Tooling Benchmark Verified", desc: "Aanya Rao passed Runway Gen-3 v6 commercial audit.", time: "3h ago", unread: false }
  ]
};

// Set initial current brief
state.currentBrief = state.briefs[0];

// Save state helpers
function saveShortlist() {
  localStorage.setItem("fluxhire_shortlist", JSON.stringify(state.shortlist));
  updateShortlistBadges();
}

function saveInvitations() {
  localStorage.setItem("fluxhire_invitations", JSON.stringify(state.invitations));
}

function saveBriefs() {
  localStorage.setItem("fluxhire_briefs", JSON.stringify(state.briefs));
}

// --- 4. VIEW ROUTING & NAVIGATION ---
function navigateTo(viewName, params = {}) {
  state.activeView = viewName;
  
  // Hide all view sections
  document.querySelectorAll(".view-section").forEach(sec => {
    sec.classList.remove("active");
  });

  // Show target view section
  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) {
    targetView.classList.add("active");
  }

  // Update Top Navigation active state
  document.querySelectorAll(".desktop-nav-link").forEach(link => {
    if (link.getAttribute("data-view") === viewName) {
      link.classList.add("text-primary", "font-bold");
      link.classList.remove("text-on-surface-variant");
    } else {
      link.classList.remove("text-primary", "font-bold");
      link.classList.add("text-on-surface-variant");
    }
  });

  // Update Mobile Bottom Navigation active state
  document.querySelectorAll(".mobile-nav-link").forEach(link => {
    if (link.getAttribute("data-view") === viewName) {
      link.classList.add("text-primary", "scale-105");
      link.classList.remove("text-on-surface-variant");
    } else {
      link.classList.remove("text-primary", "scale-105");
      link.classList.add("text-on-surface-variant");
    }
  });

  // View specific updates
  if (viewName === "discover") {
    renderCreators();
  } else if (viewName === "matches") {
    renderMatchesScreen();
  } else if (viewName === "shortlist") {
    renderShortlistScreen();
  } else if (viewName === "my-briefs") {
    renderBriefsDashboard();
  } else if (viewName === "brief-builder") {
    if (params.briefId) {
      const b = state.briefs.find(x => x.id === params.briefId);
      if (b) {
        document.getElementById("prompt-input").value = b.promptText || "";
        renderStructuredBrief(b);
      }
    }
  }

  // Smooth scroll to top of window
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Update Shortlist Badge Counters
function updateShortlistBadges() {
  const count = state.shortlist.length;
  const desktopBadge = document.getElementById("nav-shortlist-count");
  const mobileBadge = document.getElementById("mobile-shortlist-count");
  
  if (desktopBadge) {
    desktopBadge.textContent = count;
    desktopBadge.style.display = count > 0 ? "inline-flex" : "none";
  }
  if (mobileBadge) {
    mobileBadge.textContent = count;
    mobileBadge.style.display = count > 0 ? "inline-flex" : "none";
  }
}

// --- 5. DISCOVER & FILTERING ENGINE ---
function getFilteredCreators() {
  return CREATORS_DATA.filter(creator => {
    // Search query check (name, specialization, tools, skills, formats)
    if (state.searchQuery.trim() !== "") {
      const query = state.searchQuery.toLowerCase().trim();
      const inName = creator.name.toLowerCase().includes(query);
      const inSpec = creator.specialization.toLowerCase().includes(query);
      const inTools = creator.tools.some(t => t.toLowerCase().includes(query));
      const inSkills = creator.skills.some(s => s.toLowerCase().includes(query));
      const inFormats = creator.formats.some(f => f.toLowerCase().includes(query));
      if (!inName && !inSpec && !inTools && !inSkills && !inFormats) {
        return false;
      }
    }

    // Specialization filter
    if (state.selectedSpecialization !== "All" && creator.specialization !== state.selectedSpecialization) {
      return false;
    }

    // AI Tools filter
    if (state.selectedTool !== "All" && !creator.tools.includes(state.selectedTool)) {
      return false;
    }

    // Content format filter
    if (state.selectedFormat !== "All" && !creator.formats.includes(state.selectedFormat)) {
      return false;
    }

    return true;
  });
}

function renderCreators() {
  const container = document.getElementById("creators-grid");
  const countLabel = document.getElementById("creators-count-label");
  const activeFiltersBar = document.getElementById("active-filters-bar");
  
  if (!container) return;

  const filtered = getFilteredCreators();
  if (countLabel) {
    countLabel.textContent = `${filtered.length} Creator${filtered.length === 1 ? '' : 's'} Found`;
  }

  // Render active filter chips
  if (activeFiltersBar) {
    let chipsHtml = "";
    if (state.selectedSpecialization !== "All") {
      chipsHtml += `
        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-primary/10 border border-primary/25 text-primary text-label-sm font-semibold">
          <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
          ${state.selectedSpecialization}
          <button onclick="setSpecializationFilter('All')" class="material-symbols-outlined text-[14px] hover:text-error">close</button>
        </span>
      `;
    }
    if (state.selectedTool !== "All") {
      chipsHtml += `
        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-secondary/10 border border-secondary/25 text-secondary text-label-sm font-semibold">
          <span class="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          ${state.selectedTool}
          <button onclick="setToolFilter('All')" class="material-symbols-outlined text-[14px] hover:text-error">close</button>
        </span>
      `;
    }
    if (state.selectedFormat !== "All") {
      chipsHtml += `
        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-tertiary/10 border border-tertiary/25 text-tertiary text-label-sm font-semibold">
          <span class="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
          ${state.selectedFormat}
          <button onclick="setFormatFilter('All')" class="material-symbols-outlined text-[14px] hover:text-error">close</button>
        </span>
      `;
    }
    if (state.searchQuery.trim() !== "") {
      chipsHtml += `
        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-surface-container text-on-surface text-label-sm font-medium border border-outline-variant/30">
          Query: "${state.searchQuery}"
          <button onclick="clearSearchQuery()" class="material-symbols-outlined text-[14px] hover:text-error">close</button>
        </span>
      `;
    }
    if (chipsHtml !== "") {
      chipsHtml += `
        <button onclick="resetFilters()" class="text-label-sm font-semibold text-primary hover:underline ml-1">
          Reset Filters
        </button>
      `;
      activeFiltersBar.innerHTML = chipsHtml;
      activeFiltersBar.classList.remove("hidden");
    } else {
      activeFiltersBar.innerHTML = "";
      activeFiltersBar.classList.add("hidden");
    }
  }

  // Empty state
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 px-4 text-center bg-surface-container-lowest rounded-2xl border border-outline-variant/30">
        <span class="material-symbols-outlined text-4xl text-outline mb-2">person_search</span>
        <h3 class="text-headline-sm font-bold text-on-surface">No Creators Found</h3>
        <p class="text-body-sm text-on-surface-variant max-w-sm mx-auto mt-1">
          No creators match the current filter criteria. Try adjusting your search term or clearing filters.
        </p>
        <button onclick="resetFilters()" class="mt-4 px-4 py-2 bg-primary text-on-primary rounded-xl text-body-sm font-semibold shadow-sm hover:opacity-90 active:scale-95 transition-all">
          Clear All Filters
        </button>
      </div>
    `;
    return;
  }

  // Render cards
  container.innerHTML = filtered.map(creator => createCreatorCardHTML(creator)).join("");
}

function createCreatorCardHTML(creator) {
  const isShortlisted = state.shortlist.includes(creator.id);
  const isInvited = Boolean(state.invitations[creator.id]);

  const toolChips = creator.tools.slice(0, 3).map(tool => `
    <span class="px-2.5 py-1 rounded-md bg-surface-container text-on-surface text-label-sm font-medium border border-outline-variant/30 flex items-center gap-1">
      <span class="w-1.5 h-1.5 rounded-full bg-primary"></span> ${tool}
    </span>
  `).join("");

  const verifiedBadge = creator.verified
    ? `<span class="inline-flex items-center gap-1 bg-primary/10 text-primary border border-primary/20 text-label-sm font-semibold px-2 py-0.5 rounded-full"><span class="material-symbols-outlined text-[13px]">verified</span>Verified</span>`
    : `<span class="inline-flex items-center gap-1 bg-surface-container text-on-surface-variant border border-outline-variant/30 text-label-sm font-medium px-2 py-0.5 rounded-full">Self-Declared</span>`;

  return `
    <div onclick="openCreatorProfile('${creator.id}')" class="creator-card bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-4 shadow-sm space-y-3 relative overflow-hidden cursor-pointer">
      <!-- Media Header -->
      <div class="relative w-full h-40 rounded-xl overflow-hidden bg-surface-container">
        <img class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" src="${creator.headerMedia}" alt="${creator.name} showcase" loading="lazy" />
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        <!-- Top Floating Match Badge -->
        <div class="absolute top-2.5 right-2.5 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md border border-emerald-400/40 shadow-sm text-tertiary">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping-slow"></span>
          <span class="text-label-sm font-bold text-tertiary">${creator.matchScore}% Match</span>
        </div>

        <!-- Duration / Media Pill -->
        <div class="absolute bottom-2.5 left-2.5 text-white flex items-center gap-1.5 text-label-sm font-medium bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-sm">
          <span class="material-symbols-outlined text-[16px] text-white">play_circle</span>
          <span>${creator.mediaLabel}</span>
        </div>
      </div>

      <!-- Creator Profile & Metadata -->
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-3">
          <div class="relative w-12 h-12 rounded-full ring-2 ring-primary/30 overflow-hidden flex-shrink-0 bg-surface-container">
            <img class="w-full h-full object-cover" src="${creator.avatar}" alt="${creator.name}" />
            ${creator.verified ? `
              <div class="absolute bottom-0 right-0 bg-primary text-white rounded-full p-0.5 shadow-xs">
                <span class="material-symbols-outlined text-[12px] block">verified</span>
              </div>
            ` : ''}
          </div>
          <div>
            <div class="flex items-center gap-1.5 flex-wrap">
              <h3 class="text-headline-sm font-bold text-on-surface leading-tight">${creator.name}</h3>
              ${verifiedBadge}
            </div>
            <p class="text-label-sm text-on-surface-variant font-semibold mt-0.5">${creator.specialization}</p>
            <div class="flex items-center gap-2 mt-0.5 text-body-sm">
              <span class="text-amber-600 font-semibold flex items-center">
                <span class="material-symbols-outlined text-[16px] text-amber-500 mr-0.5" style="font-variation-settings: 'FILL' 1;">star</span> ${creator.rating}
              </span>
              <span class="text-outline-variant">•</span>
              <span class="font-bold text-on-surface">$${creator.ratePerHour}/hr</span>
              <span class="text-outline-variant">•</span>
              <span class="text-label-sm text-on-surface-variant">From $${creator.startingPrice}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- AI Model Chips -->
      <div class="flex items-center gap-1.5 flex-wrap pt-1">
        ${toolChips}
      </div>

      <!-- Actions -->
      <div class="grid grid-cols-2 gap-2 pt-1 border-t border-outline-variant/20">
        <button onclick="event.stopPropagation(); toggleShortlist('${creator.id}', event)" class="w-full py-2 px-2.5 rounded-lg border ${isShortlisted ? 'bg-primary/10 border-primary text-primary font-bold' : 'border-outline-variant/50 text-on-surface hover:bg-surface-container'} text-body-sm font-semibold transition-all text-center flex items-center justify-center gap-1 active:scale-95">
          <span class="material-symbols-outlined text-[16px]">${isShortlisted ? 'bookmark_added' : 'bookmark_add'}</span>
          <span>${isShortlisted ? '✓ Shortlisted' : '＋ Shortlist'}</span>
        </button>

        <button onclick="event.stopPropagation(); openInviteModal('${creator.id}')" class="w-full py-2 px-2.5 rounded-lg ${isInvited ? 'bg-tertiary text-on-tertiary' : 'bg-primary text-on-primary hover:bg-primary/95'} text-body-sm font-semibold transition-all shadow-sm text-center flex items-center justify-center gap-1 active:scale-95">
          <span class="material-symbols-outlined text-[16px]">${isInvited ? 'check_circle' : 'send'}</span>
          <span>${isInvited ? 'Invitation Sent' : 'Invite'}</span>
        </button>
      </div>
    </div>
  `;
}

// Filter setters
function setSpecializationFilter(spec) {
  state.selectedSpecialization = spec;
  const selectEl = document.getElementById("filter-specialization");
  if (selectEl) selectEl.value = spec;
  renderCreators();
}

function setToolFilter(tool) {
  state.selectedTool = tool;
  const selectEl = document.getElementById("filter-tools");
  if (selectEl) selectEl.value = tool;
  renderCreators();
}

function setFormatFilter(format) {
  state.selectedFormat = format;
  const selectEl = document.getElementById("filter-formats");
  if (selectEl) selectEl.value = format;
  renderCreators();
}

function clearSearchQuery() {
  state.searchQuery = "";
  const input = document.getElementById("search-input");
  if (input) input.value = "";
  renderCreators();
}

function resetFilters() {
  state.searchQuery = "";
  state.selectedSpecialization = "All";
  state.selectedTool = "All";
  state.selectedFormat = "All";
  
  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  const specEl = document.getElementById("filter-specialization");
  if (specEl) specEl.value = "All";
  const toolEl = document.getElementById("filter-tools");
  if (toolEl) toolEl.value = "All";
  const formatEl = document.getElementById("filter-formats");
  if (formatEl) formatEl.value = "All";

  renderCreators();
  showToast("Filters reset to default", "info");
}

// Shortlist toggle
function toggleShortlist(creatorId, event) {
  if (event) event.stopPropagation();
  
  const index = state.shortlist.indexOf(creatorId);
  const creator = CREATORS_DATA.find(c => c.id === creatorId);
  const creatorName = creator ? creator.name : "Creator";

  if (index > -1) {
    state.shortlist.splice(index, 1);
    showToast(`Removed ${creatorName} from Shortlist`, "info");
  } else {
    state.shortlist.push(creatorId);
    showToast(`Added ${creatorName} to Shortlist!`, "success");
  }

  saveShortlist();
  
  // Re-render current view cards
  if (state.activeView === "discover") {
    renderCreators();
  } else if (state.activeView === "matches") {
    renderMatchesScreen();
  } else if (state.activeView === "shortlist") {
    renderShortlistScreen();
  }

  // Update profile modal button if currently open
  updateProfileModalShortlistButton(creatorId);
}

function updateProfileModalShortlistButton(creatorId) {
  const profileShortlistBtn = document.getElementById("profile-modal-shortlist-btn");
  if (profileShortlistBtn && profileShortlistBtn.getAttribute("data-id") === creatorId) {
    const isShortlisted = state.shortlist.includes(creatorId);
    profileShortlistBtn.innerHTML = `
      <span class="material-symbols-outlined text-[18px]">${isShortlisted ? 'bookmark_added' : 'bookmark_add'}</span>
      <span>${isShortlisted ? '✓ Shortlisted' : '＋ Shortlist Creator'}</span>
    `;
    if (isShortlisted) {
      profileShortlistBtn.classList.add("bg-primary/10", "border-primary", "text-primary");
    } else {
      profileShortlistBtn.classList.remove("bg-primary/10", "border-primary", "text-primary");
    }
  }
}

// --- 6. AI BRIEF BUILDER ENGINE ---
const PROMPT_TEMPLATES = {
  skincare: "I need a 20-second premium skincare advertisement for Instagram with cinematic visuals, soft morning lighting and a luxury feel.",
  fintech: "Looking for high-fidelity 3D generative assets and refractive crystal tokens for a neo-banking app onboarding flow.",
  streetwear: "Fast-paced 9:16 vertical lookbook video for a London streetwear capsule drop with gritty neon rain aesthetics and high hook rate."
};

function fillPromptTemplate(key) {
  const input = document.getElementById("prompt-input");
  if (input && PROMPT_TEMPLATES[key]) {
    input.value = PROMPT_TEMPLATES[key];
    showToast("Loaded sample project prompt", "info");
  }
}

function generateAIBrief() {
  const input = document.getElementById("prompt-input");
  const prompt = input ? input.value.trim() : "";

  if (!prompt) {
    showToast("Please enter a natural language prompt first", "warning");
    return;
  }

  const btn = document.getElementById("generate-brief-btn");
  const outputContainer = document.getElementById("brief-output-container");
  
  // Micro-loading state
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `
      <span class="material-symbols-outlined animate-spin text-[18px]">progress_activity</span>
      <span>Synthesizing Project Requirements...</span>
    `;
  }

  setTimeout(() => {
    // Intelligent heuristic parsing based on keywords
    let campaignName = "Custom Generative AI Campaign";
    let contentType = "AI Video • 20s";
    let platform = "Instagram (9:16)";
    let format = "9:16";
    let style = "Cinematic / Commercial / High-Fidelity";
    let budget = "$500 – $1,000";
    let deadline = "14 days";
    let requiredSkills = ["AI Filmmaking", "Product Advertising", "Motion Design"];
    let suggestedTools = ["Runway Gen-3", "Kling", "Midjourney"];
    let commercialUse = "Paid social + website (full commercial rights transfer)";

    const lower = prompt.toLowerCase();
    if (lower.includes("skincare") || lower.includes("cosmetics") || lower.includes("luxury")) {
      campaignName = "Velvet Aura — Premium Skincare Campaign";
      contentType = "AI Video • 20s";
      platform = "Instagram (9:16)";
      format = "9:16";
      style = "Luxury / Cinematic / Minimal";
      budget = "$500 – $1,000";
      requiredSkills = ["AI Filmmaking", "Product Advertising", "Image-to-Video", "Motion Design"];
      suggestedTools = ["Runway Gen-3", "Kling", "Midjourney"];
    } else if (lower.includes("3d") || lower.includes("fintech") || lower.includes("crystal") || lower.includes("banking")) {
      campaignName = "NeoVanguard — Fintech 3D Asset System";
      contentType = "3D Asset Renders & Turnaround";
      platform = "Web & Mobile App";
      format = "1:1 / 16:9";
      style = "Prismatic / High-Tech / Glassmorphism";
      budget = "$850 – $1,500";
      requiredSkills = ["3D Meshes", "Procedural Shaders", "Volumetric Modeling"];
      suggestedTools = ["ComfyUI", "FLUX", "Blender"];
    } else if (lower.includes("streetwear") || lower.includes("tiktok") || lower.includes("lookbook")) {
      campaignName = "HyperStreet — Urban Capsule Lookbook";
      contentType = "Social Ad Reel • 15s";
      platform = "TikTok & Reels (9:16)";
      format = "9:16";
      style = "Cyber-Surreal / Neon / Gritty";
      budget = "$600 – $1,200";
      requiredSkills = ["Social Ads", "Character Consistency", "Fast Pacing"];
      suggestedTools = ["FLUX", "Midjourney", "Kling"];
    }

    // Build brief object
    const newBrief = {
      id: `brief-${Date.now()}`,
      name: campaignName,
      status: "Finding Creators",
      statusCategory: "Finding Creators",
      contentType,
      platform,
      format,
      style,
      deadline,
      budget,
      matchingCreatorsCount: 18,
      createdAt: new Date().toISOString().split("T")[0],
      promptText: prompt,
      requiredSkills,
      suggestedTools,
      commercialUse,
      invitedCreatorIds: []
    };

    // Update state and active brief
    state.currentBrief = newBrief;
    
    // Add to briefs list if not already present
    const existingIndex = state.briefs.findIndex(b => b.name === newBrief.name);
    if (existingIndex > -1) {
      state.briefs[existingIndex] = newBrief;
    } else {
      state.briefs.unshift(newBrief);
    }
    saveBriefs();

    // Reset button
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `
        <span class="material-symbols-outlined text-[18px]">auto_awesome</span>
        <span>Re-Generate AI Brief</span>
      `;
    }

    // Render structured output
    renderStructuredBrief(newBrief);
    showToast("Structured AI Brief generated successfully!", "success");
    
    // Scroll output into view
    if (outputContainer) {
      outputContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  }, 450);
}

function renderStructuredBrief(brief) {
  const container = document.getElementById("brief-output-container");
  if (!container) return;

  const toolsHtml = brief.suggestedTools.map(t => `
    <span class="px-2.5 py-1 rounded-md bg-surface-container text-on-surface text-label-sm font-semibold border border-outline-variant/30 flex items-center gap-1">
      <span class="w-1.5 h-1.5 rounded-full bg-primary"></span> ${t}
    </span>
  `).join("");

  const skillsHtml = brief.requiredSkills.map(s => `
    <span class="px-2.5 py-1 rounded-md bg-primary/10 text-primary text-label-sm font-semibold border border-primary/20">
      ${s}
    </span>
  `).join("");

  container.innerHTML = `
    <div class="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-5 shadow-sm space-y-4">
      <!-- Header & Score -->
      <div class="flex items-start justify-between flex-wrap gap-2 pb-3 border-b border-outline-variant/20">
        <div>
          <span class="text-label-sm font-bold text-primary uppercase tracking-wider flex items-center gap-1">
            <span class="material-symbols-outlined text-[16px]">verified</span> AI-Generated Project Brief
          </span>
          <h3 class="text-headline-sm font-bold text-on-surface mt-0.5">${brief.name}</h3>
        </div>
        <div class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping-slow"></span>
          <span class="text-label-sm font-bold text-emerald-700">99.4% Match Engine Precision</span>
        </div>
      </div>

      <!-- Core Specs Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 bg-surface-container-low p-3.5 rounded-xl border border-outline-variant/20">
        <div>
          <span class="text-label-sm text-on-surface-variant block">Content Type</span>
          <span class="text-body-sm font-bold text-on-surface">${brief.contentType}</span>
        </div>
        <div>
          <span class="text-label-sm text-on-surface-variant block">Platform / Aspect</span>
          <span class="text-body-sm font-bold text-on-surface">${brief.platform}</span>
        </div>
        <div>
          <span class="text-label-sm text-on-surface-variant block">Est. Budget</span>
          <span class="text-body-sm font-bold text-primary">${brief.budget}</span>
        </div>
        <div>
          <span class="text-label-sm text-on-surface-variant block">Turnaround</span>
          <span class="text-body-sm font-bold text-on-surface">${brief.deadline}</span>
        </div>
      </div>

      <!-- Style & Commercial Specs -->
      <div class="space-y-2 text-body-sm">
        <div class="flex items-start gap-2">
          <span class="material-symbols-outlined text-primary text-[18px] mt-0.5">palette</span>
          <div>
            <span class="font-semibold text-on-surface">Visual Aesthetic:</span>
            <span class="text-on-surface-variant ml-1">${brief.style}</span>
          </div>
        </div>
        <div class="flex items-start gap-2">
          <span class="material-symbols-outlined text-secondary text-[18px] mt-0.5">policy</span>
          <div>
            <span class="font-semibold text-on-surface">Commercial Terms:</span>
            <span class="text-on-surface-variant ml-1">${brief.commercialUse}</span>
          </div>
        </div>
      </div>

      <!-- Required Skills & Suggested Tools -->
      <div class="space-y-3 pt-2">
        <div>
          <span class="text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold block mb-1.5">
            Suggested AI Tooling Pipelines
          </span>
          <div class="flex items-center gap-1.5 flex-wrap">
            ${toolsHtml}
          </div>
        </div>
        <div>
          <span class="text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold block mb-1.5">
            Required Core Proficiencies
          </span>
          <div class="flex items-center gap-1.5 flex-wrap">
            ${skillsHtml}
          </div>
        </div>
      </div>

      <!-- Direct Action CTA -->
      <div class="pt-2">
        <button onclick="navigateTo('matches')" class="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-body-md flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95">
          <span>Find Matching Creators (18 Available)</span>
          <span class="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </div>
  `;
  container.classList.remove("hidden");
}

// --- 7. AI CREATOR MATCHING SCREEN ---
function renderMatchesScreen() {
  const brief = state.currentBrief || state.briefs[0];
  const bannerName = document.getElementById("matches-brief-name");
  const bannerSub = document.getElementById("matches-brief-sub");
  const container = document.getElementById("matches-list-container");

  if (bannerName) {
    bannerName.textContent = brief.name;
  }
  if (bannerSub) {
    bannerSub.textContent = `${brief.contentType} • ${brief.platform} • Budget: ${brief.budget}`;
  }

  if (!container) return;

  // Rank creators dynamically based on match score
  const ranked = [...CREATORS_DATA].sort((a, b) => b.matchScore - a.matchScore);

  container.innerHTML = ranked.map((creator, index) => {
    const isShortlisted = state.shortlist.includes(creator.id);
    const isInvited = Boolean(state.invitations[creator.id]);

    return `
      <div class="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-5 shadow-sm space-y-4">
        <!-- Top Rank Bar -->
        <div class="flex items-center justify-between flex-wrap gap-2">
          <div class="flex items-center gap-3">
            <span class="w-7 h-7 rounded-full bg-primary text-white text-body-sm font-bold flex items-center justify-center shadow-xs">
              #${index + 1}
            </span>
            <div class="flex items-center gap-3">
              <div class="relative w-12 h-12 rounded-full ring-2 ring-primary/30 overflow-hidden flex-shrink-0 cursor-pointer" onclick="openCreatorProfile('${creator.id}')">
                <img class="w-full h-full object-cover" src="${creator.avatar}" alt="${creator.name}" />
              </div>
              <div>
                <div class="flex items-center gap-1.5 flex-wrap">
                  <h4 class="text-headline-sm font-bold text-on-surface hover:text-primary cursor-pointer" onclick="openCreatorProfile('${creator.id}')">${creator.name}</h4>
                  ${creator.verified 
                    ? `<span class="inline-flex items-center gap-1 bg-primary/10 text-primary border border-primary/20 text-label-sm font-semibold px-2 py-0.5 rounded-full"><span class="material-symbols-outlined text-[13px]">verified</span>Verified</span>`
                    : `<span class="inline-flex items-center gap-1 bg-surface-container text-on-surface-variant border border-outline-variant/30 text-label-sm font-medium px-2 py-0.5 rounded-full">Self-Declared</span>`
                  }
                </div>
                <p class="text-label-sm text-tertiary font-semibold">${creator.specialization} • $${creator.ratePerHour}/hr</p>
              </div>
            </div>
          </div>

          <!-- Match Dial Pill -->
          <div class="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200">
            <span class="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
            <span class="text-label-md font-bold text-emerald-700">${creator.matchScore}% Match</span>
          </div>
        </div>

        <!-- Why this creator matches telemetry box -->
        <div class="p-3.5 rounded-xl bg-surface-container-low border border-outline-variant/20 space-y-2.5">
          <div class="flex items-center justify-between">
            <p class="text-label-sm font-bold text-on-surface flex items-center gap-1">
              <span class="material-symbols-outlined text-[16px] text-primary">insights</span>
              Why this creator matches your brief:
            </p>
            <span class="text-label-sm text-on-surface-variant font-medium">Real-Time Telemetry</span>
          </div>

          <p class="text-body-sm text-on-surface bg-surface-container-lowest p-2.5 rounded-lg border border-outline-variant/20">
            ${creator.matchReason}
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 text-body-sm">
            <div>
              <div class="flex justify-between text-label-sm text-on-surface-variant mb-1">
                <span>Aesthetic Alignment</span>
                <span class="font-bold text-on-surface">${creator.telemetry.aestheticMatch}%</span>
              </div>
              <div class="w-full bg-outline-variant/30 rounded-full h-1.5">
                <div class="bg-primary h-1.5 rounded-full" style="width: ${creator.telemetry.aestheticMatch}%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-label-sm text-on-surface-variant mb-1">
                <span>Pipeline Tools</span>
                <span class="font-bold text-on-surface">${creator.telemetry.pipelineFit}%</span>
              </div>
              <div class="w-full bg-outline-variant/30 rounded-full h-1.5">
                <div class="bg-secondary h-1.5 rounded-full" style="width: ${creator.telemetry.pipelineFit}%"></div>
              </div>
            </div>
            <div>
              <div class="flex justify-between text-label-sm text-on-surface-variant mb-1">
                <span>Commercial Audit</span>
                <span class="font-bold text-on-surface">${creator.telemetry.commercialAudit}%</span>
              </div>
              <div class="w-full bg-outline-variant/30 rounded-full h-1.5">
                <div class="bg-tertiary h-1.5 rounded-full" style="width: ${creator.telemetry.commercialAudit}%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Matched Shot Previews Strip -->
        <div>
          <span class="text-label-sm text-on-surface-variant uppercase font-semibold block mb-1.5">
            Matched Portfolio Samples
          </span>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
            ${creator.portfolio.map(p => `
              <div class="rounded-xl overflow-hidden bg-surface-container relative aspect-video border border-outline-variant/20 cursor-pointer group" onclick="openCreatorProfile('${creator.id}')">
                <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" src="${p.image}" alt="${p.title}" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-2 text-white">
                  <span class="text-label-sm font-semibold truncate">${p.title}</span>
                  <span class="text-[10px] text-white/80">${p.tools}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Direct Action CTAs -->
        <div class="flex items-center gap-2 pt-2 border-t border-outline-variant/20 flex-wrap sm:flex-nowrap">
          <button onclick="openCreatorProfile('${creator.id}')" class="w-full py-2.5 px-3 rounded-xl border border-outline-variant/40 text-body-sm font-semibold text-on-surface hover:bg-surface-container transition-all text-center active:scale-95">
            View Full Profile
          </button>
          
          <button onclick="toggleShortlist('${creator.id}', event)" class="w-full py-2.5 px-3 rounded-xl border ${isShortlisted ? 'bg-primary/10 border-primary text-primary font-bold' : 'border-outline-variant/40 text-on-surface hover:bg-surface-container'} text-body-sm font-semibold transition-all text-center flex items-center justify-center gap-1 active:scale-95">
            <span class="material-symbols-outlined text-[16px]">${isShortlisted ? 'bookmark_added' : 'bookmark_add'}</span>
            <span>${isShortlisted ? '✓ Shortlisted' : '＋ Shortlist'}</span>
          </button>

          <button onclick="openInviteModal('${creator.id}')" class="w-full py-2.5 px-4 rounded-xl ${isInvited ? 'bg-tertiary text-on-tertiary' : 'bg-primary text-on-primary hover:bg-primary/95'} text-body-sm font-semibold transition-all shadow-sm text-center flex items-center justify-center gap-1 active:scale-95">
            <span class="material-symbols-outlined text-[16px]">${isInvited ? 'check_circle' : 'send'}</span>
            <span>${isInvited ? 'Invitation Sent' : 'Invite to Brief'}</span>
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// --- 8. CREATOR PROFILE MODAL ---
function openCreatorProfile(creatorId) {
  const creator = CREATORS_DATA.find(c => c.id === creatorId);
  if (!creator) return;

  const modal = document.getElementById("creator-profile-modal");
  const content = document.getElementById("profile-modal-content");
  if (!modal || !content) return;

  const isShortlisted = state.shortlist.includes(creator.id);
  const isInvited = Boolean(state.invitations[creator.id]);

  const toolBadges = creator.tools.map(tool => `
    <span class="px-2.5 py-1.5 rounded-lg bg-surface-bright border border-outline-variant/30 text-label-md text-on-surface font-semibold flex items-center gap-1.5 shadow-xs">
      <span class="w-2 h-2 rounded-full bg-primary"></span> ${tool}
    </span>
  `).join("");

  const formatBadges = creator.formats.map(f => `
    <span class="px-2.5 py-1 rounded-md bg-surface-container text-on-surface text-label-sm font-medium border border-outline-variant/30">
      ${f}
    </span>
  `).join("");

  const verificationHTML = creator.verified
    ? `
      <div class="space-y-2">
        <div class="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
          <div class="flex items-center gap-2.5">
            <span class="material-symbols-outlined text-tertiary text-[20px]">verified_user</span>
            <div>
              <p class="text-body-sm font-semibold text-on-surface">Portfolio Ownership Confirmed</p>
              <p class="text-label-sm text-on-surface-variant">${creator.verificationDetails.portfolioOwnership}</p>
            </div>
          </div>
          <span class="material-symbols-outlined text-tertiary text-[18px]">check</span>
        </div>
        <div class="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
          <div class="flex items-center gap-2.5">
            <span class="material-symbols-outlined text-secondary text-[20px]">hardware</span>
            <div>
              <p class="text-body-sm font-semibold text-on-surface">Tool Usage Verified</p>
              <p class="text-label-sm text-on-surface-variant">${creator.verificationDetails.toolUsage}</p>
            </div>
          </div>
          <span class="material-symbols-outlined text-tertiary text-[18px]">check</span>
        </div>
        <div class="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low border border-outline-variant/20">
          <div class="flex items-center gap-2.5">
            <span class="material-symbols-outlined text-primary text-[20px]">contract</span>
            <div>
              <p class="text-body-sm font-semibold text-on-surface">Commercial Rights Guarantee</p>
              <p class="text-label-sm text-on-surface-variant">${creator.verificationDetails.commercialLicensing}</p>
            </div>
          </div>
          <span class="material-symbols-outlined text-tertiary text-[18px]">check</span>
        </div>
      </div>
    `
    : `
      <div class="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 space-y-1">
        <div class="flex items-center gap-2 font-semibold text-body-sm">
          <span class="material-symbols-outlined text-amber-600">info</span>
          <span>Tool usage self-declared</span>
        </div>
        <p class="text-label-sm text-on-surface-variant">
          This creator's portfolio and software benchmarks are self-declared. Independent platform verification and IP audit are currently in progress.
        </p>
      </div>
    `;

  content.innerHTML = `
    <!-- Modal Header Media Banner -->
    <div class="relative w-full h-48 sm:h-56 bg-surface-container overflow-hidden">
      <img class="w-full h-full object-cover" src="${creator.headerMedia}" alt="${creator.name}" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      
      <!-- Close button -->
      <button onclick="closeCreatorProfile()" class="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-all backdrop-blur-md">
        <span class="material-symbols-outlined text-[20px]">close</span>
      </button>

      <!-- Match Score Badge -->
      <div class="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-emerald-400/40 shadow-sm text-tertiary">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping-slow"></span>
        <span class="text-label-md font-bold text-tertiary">${creator.matchScore}% Match Score</span>
      </div>

      <!-- Avatar & Quick Header Info -->
      <div class="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white flex-wrap gap-2">
        <div class="flex items-center gap-3">
          <div class="relative w-16 h-16 rounded-full ring-4 ring-white/90 overflow-hidden bg-surface-container flex-shrink-0">
            <img class="w-full h-full object-cover" src="${creator.avatar}" alt="${creator.name}" />
          </div>
          <div>
            <div class="flex items-center gap-2 flex-wrap">
              <h2 class="text-headline-md font-bold text-white drop-shadow-sm">${creator.name}</h2>
              ${creator.verified 
                ? `<span class="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md text-white text-label-sm font-semibold px-2 py-0.5 rounded-full"><span class="material-symbols-outlined text-[13px]">verified</span>Verified</span>`
                : `<span class="inline-flex items-center gap-1 bg-black/40 backdrop-blur-md text-white/90 text-label-sm font-medium px-2 py-0.5 rounded-full">Self-Declared</span>`
              }
            </div>
            <p class="text-label-md text-white/90">${creator.specialization} • ${creator.location}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Body Content -->
    <div class="p-5 sm:p-6 space-y-6 max-h-[70vh] overflow-y-auto custom-scroll">
      
      <!-- Key Telemetry Stat Bar -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        <div class="bg-surface-container-low p-3 rounded-xl border border-outline-variant/30">
          <span class="text-label-sm text-on-surface-variant font-medium block">Rating</span>
          <span class="text-headline-sm font-bold text-amber-600 flex items-center gap-1 mt-0.5">
            <span class="material-symbols-outlined text-[18px] text-amber-500" style="font-variation-settings: 'FILL' 1;">star</span> ${creator.rating}
          </span>
          <span class="text-[11px] text-on-surface-variant">${creator.jobsCount} jobs completed</span>
        </div>
        <div class="bg-surface-container-low p-3 rounded-xl border border-outline-variant/30">
          <span class="text-label-sm text-on-surface-variant font-medium block">Starting Price</span>
          <span class="text-headline-sm font-bold text-on-surface mt-0.5">From $${creator.startingPrice}</span>
          <span class="text-[11px] text-on-surface-variant">$${creator.ratePerHour}/hr rate</span>
        </div>
        <div class="bg-surface-container-low p-3 rounded-xl border border-outline-variant/30">
          <span class="text-label-sm text-on-surface-variant font-medium block">Availability</span>
          <span class="text-body-sm font-bold text-tertiary flex items-center gap-1 mt-1">
            <span class="w-2 h-2 rounded-full bg-tertiary"></span> Ready to start
          </span>
          <span class="text-[11px] text-on-surface-variant">Turnaround ≤ 14d</span>
        </div>
        <div class="bg-surface-container-low p-3 rounded-xl border border-outline-variant/30">
          <span class="text-label-sm text-on-surface-variant font-medium block">Match Score</span>
          <span class="text-headline-sm font-bold text-primary mt-0.5">${creator.matchScore}%</span>
          <span class="text-[11px] text-tertiary font-semibold">Ranked Top Match</span>
        </div>
      </div>

      <!-- Match Explanation Banner -->
      <div class="p-3.5 rounded-xl bg-primary/5 border border-primary/20 space-y-1.5">
        <span class="text-label-sm font-bold text-primary uppercase flex items-center gap-1">
          <span class="material-symbols-outlined text-[16px]">psychology</span> AI Match Rationale
        </span>
        <p class="text-body-sm text-on-surface font-medium leading-relaxed">
          ${creator.matchReason}
        </p>
      </div>

      <!-- About Section -->
      <div class="space-y-2">
        <h4 class="text-title-md font-bold text-on-surface">About Creator</h4>
        <p class="text-body-md text-on-surface-variant leading-relaxed">
          ${creator.bio}
        </p>
      </div>

      <!-- AI Toolkit -->
      <div class="space-y-2">
        <h4 class="text-title-md font-bold text-on-surface">AI Toolkit & Multi-Model Workflows</h4>
        <div class="flex flex-wrap gap-2">
          ${toolBadges}
        </div>
      </div>

      <!-- Content Formats -->
      <div class="space-y-2">
        <h4 class="text-title-md font-bold text-on-surface">Content Formats</h4>
        <div class="flex flex-wrap gap-2">
          ${formatBadges}
        </div>
      </div>

      <!-- Portfolio Section -->
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <h4 class="text-title-md font-bold text-on-surface">Featured Commercial Portfolio</h4>
          <span class="text-label-sm text-on-surface-variant">${creator.portfolio.length} Projects Shown</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          ${creator.portfolio.map(item => `
            <div class="bg-surface-container-low rounded-xl border border-outline-variant/30 overflow-hidden flex flex-col">
              <div class="relative w-full h-36 bg-surface-container">
                <img class="w-full h-full object-cover" src="${item.image}" alt="${item.title}" />
                <span class="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 text-white text-[11px] font-medium backdrop-blur-sm">${item.type}</span>
              </div>
              <div class="p-3 space-y-1 flex-1">
                <h5 class="text-body-sm font-bold text-on-surface">${item.title}</h5>
                <p class="text-label-sm text-primary font-medium">${item.tools}</p>
                <p class="text-[12px] text-on-surface-variant">${item.description}</p>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- 6-Stage Production Pipeline Diagram -->
      <div class="space-y-2">
        <h4 class="text-title-md font-bold text-on-surface">Standard 6-Stage Production Workflow</h4>
        <div class="grid grid-cols-3 sm:grid-cols-6 gap-2">
          <div class="p-2 rounded-lg bg-surface-container border border-outline-variant/20 text-center">
            <span class="text-label-sm font-bold text-primary block">01. Brief</span>
            <span class="text-[10px] text-on-surface-variant">Scope & Specs</span>
          </div>
          <div class="p-2 rounded-lg bg-surface-container border border-outline-variant/20 text-center">
            <span class="text-label-sm font-bold text-primary block">02. Concept</span>
            <span class="text-[10px] text-on-surface-variant">Moodboard</span>
          </div>
          <div class="p-2 rounded-lg bg-surface-container border border-outline-variant/20 text-center">
            <span class="text-label-sm font-bold text-primary block">03. Gen-I</span>
            <span class="text-[10px] text-on-surface-variant">Image Seeds</span>
          </div>
          <div class="p-2 rounded-lg bg-surface-container border border-outline-variant/20 text-center">
            <span class="text-label-sm font-bold text-primary block">04. Video Gen</span>
            <span class="text-[10px] text-on-surface-variant">Runway / Kling</span>
          </div>
          <div class="p-2 rounded-lg bg-surface-container border border-outline-variant/20 text-center">
            <span class="text-label-sm font-bold text-primary block">05. Audio</span>
            <span class="text-[10px] text-on-surface-variant">SFX & Edit</span>
          </div>
          <div class="p-2 rounded-lg bg-surface-container-high border border-primary/30 text-center">
            <span class="text-label-sm font-bold text-tertiary block">06. Delivery</span>
            <span class="text-[10px] text-tertiary">4K ProRes</span>
          </div>
        </div>
      </div>

      <!-- Verification Signals -->
      <div class="space-y-2">
        <h4 class="text-title-md font-bold text-on-surface">Verification & Trust Credentials</h4>
        ${verificationHTML}
      </div>

    </div>

    <!-- Modal Footer Actions -->
    <div class="p-4 sm:p-5 bg-surface-container-low border-t border-outline-variant/30 flex items-center justify-end gap-3 flex-wrap">
      <button onclick="closeCreatorProfile()" class="px-4 py-2.5 rounded-xl border border-outline-variant/40 text-body-sm font-semibold text-on-surface hover:bg-surface-container transition-all">
        Close
      </button>

      <button id="profile-modal-shortlist-btn" data-id="${creator.id}" onclick="toggleShortlist('${creator.id}', event)" class="px-4 py-2.5 rounded-xl border ${isShortlisted ? 'bg-primary/10 border-primary text-primary font-bold' : 'border-outline-variant/50 text-on-surface hover:bg-surface-container'} text-body-sm font-semibold transition-all flex items-center gap-1.5">
        <span class="material-symbols-outlined text-[18px]">${isShortlisted ? 'bookmark_added' : 'bookmark_add'}</span>
        <span>${isShortlisted ? '✓ Shortlisted' : '＋ Shortlist Creator'}</span>
      </button>

      <button onclick="closeCreatorProfile(); openInviteModal('${creator.id}')" class="px-5 py-2.5 rounded-xl ${isInvited ? 'bg-tertiary text-on-tertiary' : 'bg-primary text-on-primary hover:bg-primary/95'} text-body-sm font-semibold transition-all shadow-sm flex items-center gap-1.5">
        <span class="material-symbols-outlined text-[18px]">${isInvited ? 'check_circle' : 'send'}</span>
        <span>${isInvited ? 'Invitation Sent' : 'Invite to Brief'}</span>
      </button>
    </div>
  `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeCreatorProfile() {
  const modal = document.getElementById("creator-profile-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

// --- 9. INVITE CREATOR WORKFLOW ---
let pendingInviteCreatorId = null;

function openInviteModal(creatorId, briefId = null) {
  const creator = CREATORS_DATA.find(c => c.id === creatorId);
  if (!creator) return;

  pendingInviteCreatorId = creatorId;

  const modal = document.getElementById("invite-modal");
  const creatorNameEl = document.getElementById("invite-creator-name");
  const creatorAvatarEl = document.getElementById("invite-creator-avatar");
  const briefSelectEl = document.getElementById("invite-brief-select");
  const messageInputEl = document.getElementById("invite-message-input");

  if (!modal) return;

  if (creatorNameEl) creatorNameEl.textContent = creator.name;
  if (creatorAvatarEl) creatorAvatarEl.src = creator.avatar;

  // Populate brief dropdown
  if (briefSelectEl) {
    briefSelectEl.innerHTML = state.briefs.map(b => `
      <option value="${b.id}" ${briefId === b.id || (!briefId && b.id === state.currentBrief?.id) ? 'selected' : ''}>
        ${b.name} (${b.budget})
      </option>
    `).join("");
  }

  // Pre-fill message
  if (messageInputEl) {
    messageInputEl.value = `Hi ${creator.name},\n\nWe would like to invite you to submit a proposal for our upcoming campaign. Your multi-model workflow and portfolio aesthetic are a great fit for our requirements.`;
  }

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeInviteModal() {
  const modal = document.getElementById("invite-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
  pendingInviteCreatorId = null;
}

function sendInvitation() {
  if (!pendingInviteCreatorId) return;

  const creator = CREATORS_DATA.find(c => c.id === pendingInviteCreatorId);
  const briefSelect = document.getElementById("invite-brief-select");
  const selectedBriefId = briefSelect ? briefSelect.value : state.currentBrief?.id;
  const brief = state.briefs.find(b => b.id === selectedBriefId) || state.currentBrief;
  const messageInput = document.getElementById("invite-message-input");
  const message = messageInput ? messageInput.value : "";

  // Record invitation in state
  state.invitations[pendingInviteCreatorId] = {
    creatorId: pendingInviteCreatorId,
    briefId: selectedBriefId,
    briefName: brief ? brief.name : "Campaign",
    message,
    sentAt: new Date().toISOString()
  };

  // Update brief's invited list
  if (brief && !brief.invitedCreatorIds.includes(pendingInviteCreatorId)) {
    brief.invitedCreatorIds.push(pendingInviteCreatorId);
    if (brief.statusCategory === "Finding Creators") {
      brief.statusCategory = "Creators Invited";
      brief.status = "Creators Invited";
    }
  }

  // Add notification
  state.notifications.unshift({
    id: Date.now(),
    title: `Invitation Sent to ${creator.name}`,
    desc: `Proposal invitation submitted for ${brief ? brief.name : 'project'}.`,
    time: "Just now",
    unread: true
  });

  saveInvitations();
  saveBriefs();
  closeInviteModal();

  showToast(`Invitation sent successfully to ${creator.name}!`, "success");

  // Re-render relevant view
  if (state.activeView === "discover") {
    renderCreators();
  } else if (state.activeView === "matches") {
    renderMatchesScreen();
  } else if (state.activeView === "shortlist") {
    renderShortlistScreen();
  } else if (state.activeView === "my-briefs") {
    renderBriefsDashboard();
  }
}

// --- 10. SHORTLIST SCREEN ---
function renderShortlistScreen() {
  const container = document.getElementById("shortlist-grid");
  const countHeader = document.getElementById("shortlist-header-count");
  if (!container) return;

  const shortlistedCreators = CREATORS_DATA.filter(c => state.shortlist.includes(c.id));

  if (countHeader) {
    countHeader.textContent = `Shortlisted Creators (${shortlistedCreators.length})`;
  }

  if (shortlistedCreators.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 px-4 text-center bg-surface-container-lowest rounded-2xl border border-outline-variant/30 space-y-3">
        <span class="material-symbols-outlined text-5xl text-outline">bookmark_border</span>
        <h3 class="text-headline-sm font-bold text-on-surface">No Shortlisted Creators Yet</h3>
        <p class="text-body-sm text-on-surface-variant max-w-sm mx-auto">
          Browse the creator marketplace or view AI match recommendations and click "Shortlist" to curate your candidate roster.
        </p>
        <button onclick="navigateTo('discover')" class="mt-2 px-5 py-2.5 bg-primary text-on-primary rounded-xl text-body-sm font-semibold shadow-sm hover:opacity-90 active:scale-95 transition-all">
          Explore Creators
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = shortlistedCreators.map(creator => createCreatorCardHTML(creator)).join("");
}

// --- 11. MY BRIEFS DASHBOARD ---
function setBriefFilterTab(tabName) {
  state.activeBriefTab = tabName;
  document.querySelectorAll(".brief-tab-btn").forEach(btn => {
    if (btn.getAttribute("data-tab") === tabName) {
      btn.classList.add("bg-primary", "text-on-primary");
      btn.classList.remove("bg-surface-container-lowest", "text-on-surface-variant");
    } else {
      btn.classList.remove("bg-primary", "text-on-primary");
      btn.classList.add("bg-surface-container-lowest", "text-on-surface-variant");
    }
  });
  renderBriefsDashboard();
}

function renderBriefsDashboard() {
  const container = document.getElementById("briefs-list-container");
  if (!container) return;

  let filteredBriefs = state.briefs;
  if (state.activeBriefTab !== "All") {
    filteredBriefs = state.briefs.filter(b => b.statusCategory === state.activeBriefTab);
  }

  if (filteredBriefs.length === 0) {
    container.innerHTML = `
      <div class="py-12 px-4 text-center bg-surface-container-lowest rounded-2xl border border-outline-variant/30">
        <span class="material-symbols-outlined text-4xl text-outline mb-2">assignment_late</span>
        <h4 class="text-title-md font-bold text-on-surface">No Briefs in this Category</h4>
        <p class="text-body-sm text-on-surface-variant mt-1">
          No projects currently match the "${state.activeBriefTab}" filter.
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = filteredBriefs.map(brief => {
    const isFinding = brief.statusCategory === "Finding Creators";
    const isInProgress = brief.statusCategory === "In Progress";
    const isInvited = brief.statusCategory === "Creators Invited";

    let statusPill = "";
    if (isFinding) {
      statusPill = `
        <span class="inline-flex items-center gap-1.5 text-label-sm font-bold text-primary uppercase">
          <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Finding Creators
        </span>
      `;
    } else if (isInProgress) {
      statusPill = `
        <span class="inline-flex items-center gap-1.5 text-label-sm font-bold text-tertiary uppercase">
          <span class="w-2 h-2 rounded-full bg-tertiary"></span>
          In Progress
        </span>
      `;
    } else if (isInvited) {
      statusPill = `
        <span class="inline-flex items-center gap-1.5 text-label-sm font-bold text-secondary uppercase">
          <span class="w-2 h-2 rounded-full bg-secondary"></span>
          Creators Invited (${brief.invitedCreatorIds.length})
        </span>
      `;
    } else {
      statusPill = `<span class="text-label-sm font-bold text-on-surface-variant uppercase">${brief.status}</span>`;
    }

    // In-progress specific card content
    let progressContent = "";
    if (brief.hiredCreator) {
      progressContent = `
        <div class="p-3 rounded-xl bg-surface-container-low flex items-center justify-between border border-outline-variant/20">
          <div class="flex items-center gap-2.5">
            <div class="w-9 h-9 rounded-full overflow-hidden bg-surface-container flex-shrink-0">
              <img class="w-full h-full object-cover" src="${brief.hiredCreator.avatar}" alt="${brief.hiredCreator.name}" />
            </div>
            <div>
              <p class="text-label-sm text-on-surface-variant">Hired Creator</p>
              <p class="text-body-sm font-bold text-on-surface">${brief.hiredCreator.name}</p>
            </div>
          </div>
          <div class="text-right">
            <span class="text-label-sm font-bold text-primary">${brief.hiredCreator.milestone}</span>
            <div class="w-28 bg-outline-variant/30 rounded-full h-1.5 mt-1.5">
              <div class="bg-primary h-1.5 rounded-full" style="width: ${brief.hiredCreator.progressPercent}%"></div>
            </div>
          </div>
        </div>
      `;
    }

    return `
      <div class="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-5 shadow-sm space-y-3.5">
        <div class="flex items-start justify-between flex-wrap gap-2">
          <div>
            ${statusPill}
            <h3 class="text-headline-sm font-bold text-on-surface mt-1">${brief.name}</h3>
            <p class="text-body-sm text-on-surface-variant">${brief.contentType} • ${brief.platform}</p>
          </div>
          <span class="text-body-sm font-bold text-on-surface bg-surface-container px-3 py-1.5 rounded-xl border border-outline-variant/20">
            ${brief.budget}
          </span>
        </div>

        <div class="flex items-center justify-between text-body-sm text-on-surface-variant pt-1 border-t border-outline-variant/20 flex-wrap gap-2">
          <span class="flex items-center gap-1">
            <span class="material-symbols-outlined text-[16px] text-outline">event</span>
            Deadline: ${brief.deadline}
          </span>
          <span class="text-tertiary font-semibold flex items-center gap-1">
            <span class="material-symbols-outlined text-[16px]">groups</span>
            ${brief.matchingCreatorsCount} matching creators
          </span>
        </div>

        ${progressContent}

        <!-- Actions -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
          <button onclick="viewMatchesForBrief('${brief.id}')" class="py-2.5 px-3 rounded-xl bg-surface-container hover:bg-surface-container-high text-primary font-semibold text-body-sm transition-all flex items-center justify-center gap-1.5 active:scale-95">
            <span>View Matches</span>
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>

          <button onclick="editBrief('${brief.id}')" class="py-2.5 px-3 rounded-xl border border-outline-variant/40 hover:bg-surface-container text-on-surface font-semibold text-body-sm transition-all flex items-center justify-center gap-1.5 active:scale-95">
            <span class="material-symbols-outlined text-[18px]">edit</span>
            <span>Edit Brief</span>
          </button>

          <button onclick="deleteBrief('${brief.id}')" class="py-2.5 px-3 rounded-xl border border-outline-variant/40 hover:border-error hover:text-error text-on-surface-variant font-semibold text-body-sm transition-all flex items-center justify-center gap-1.5 active:scale-95">
            <span class="material-symbols-outlined text-[18px]">delete</span>
            <span>Delete Draft</span>
          </button>
        </div>
      </div>
    `;
  }).join("");
}

function viewMatchesForBrief(briefId) {
  const brief = state.briefs.find(b => b.id === briefId);
  if (brief) {
    state.currentBrief = brief;
    navigateTo("matches");
  }
}

function editBrief(briefId) {
  navigateTo("brief-builder", { briefId });
}

function deleteBrief(briefId) {
  const index = state.briefs.findIndex(b => b.id === briefId);
  if (index > -1) {
    const deletedName = state.briefs[index].name;
    state.briefs.splice(index, 1);
    saveBriefs();
    renderBriefsDashboard();
    showToast(`Deleted brief "${deletedName}"`, "info");
  }
}

// --- 12. TOAST NOTIFICATIONS SYSTEM ---
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast-item px-4 py-3 rounded-xl shadow-lg border text-body-sm font-semibold flex items-center gap-2.5 backdrop-blur-md";

  if (type === "success") {
    toast.classList.add("bg-surface-container-lowest", "text-on-surface", "border-emerald-400/50");
    toast.innerHTML = `<span class="material-symbols-outlined text-emerald-600 text-[20px]">check_circle</span> <span>${message}</span>`;
  } else if (type === "info") {
    toast.classList.add("bg-surface-container-lowest", "text-on-surface", "border-primary/40");
    toast.innerHTML = `<span class="material-symbols-outlined text-primary text-[20px]">info</span> <span>${message}</span>`;
  } else if (type === "warning") {
    toast.classList.add("bg-surface-container-lowest", "text-on-surface", "border-amber-400/50");
    toast.innerHTML = `<span class="material-symbols-outlined text-amber-600 text-[20px]">warning</span> <span>${message}</span>`;
  }

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => {
      toast.remove();
    }, 250);
  }, 3200);
}

// --- 13. NOTIFICATIONS POPOVER ---
function toggleNotificationsPopover() {
  const popover = document.getElementById("notifications-popover");
  if (!popover) return;

  const isHidden = popover.classList.contains("hidden");
  if (isHidden) {
    renderNotificationsList();
    popover.classList.remove("hidden");
  } else {
    popover.classList.add("hidden");
  }
}

function renderNotificationsList() {
  const container = document.getElementById("notifications-list");
  if (!container) return;

  container.innerHTML = state.notifications.map(n => `
    <div class="p-3 rounded-xl ${n.unread ? 'bg-primary/5 border border-primary/20' : 'bg-surface-container-low'} space-y-1">
      <div class="flex items-center justify-between">
        <span class="text-body-sm font-bold text-on-surface">${n.title}</span>
        <span class="text-[11px] text-on-surface-variant">${n.time}</span>
      </div>
      <p class="text-label-sm text-on-surface-variant">${n.desc}</p>
    </div>
  `).join("");

  // Clear unread badge
  const badge = document.getElementById("notifications-badge");
  if (badge) badge.style.display = "none";
}

// --- 14. INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  // Setup search input listener
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderCreators();
    });
  }

  // Filter selects
  const specSelect = document.getElementById("filter-specialization");
  if (specSelect) {
    specSelect.addEventListener("change", (e) => {
      state.selectedSpecialization = e.target.value;
      renderCreators();
    });
  }

  const toolSelect = document.getElementById("filter-tools");
  if (toolSelect) {
    toolSelect.addEventListener("change", (e) => {
      state.selectedTool = e.target.value;
      renderCreators();
    });
  }

  const formatSelect = document.getElementById("filter-formats");
  if (formatSelect) {
    formatSelect.addEventListener("change", (e) => {
      state.selectedFormat = e.target.value;
      renderCreators();
    });
  }

  // Escape key closes modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeCreatorProfile();
      closeInviteModal();
      const popover = document.getElementById("notifications-popover");
      if (popover) popover.classList.add("hidden");
    }
  });

  // Initial renders
  updateShortlistBadges();
  renderCreators();
  if (state.currentBrief) {
    renderStructuredBrief(state.currentBrief);
  }
});
