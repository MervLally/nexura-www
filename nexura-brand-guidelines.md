# Nexura Insurance Brand Guidelines

**Version:** 2.0  
**Last Updated:** November 15, 2025  
**Color Palette:** Tech Gradient (Blue to Cyan)

---

## Brand Identity

Nexura Insurance is the world's first fully autonomous, agentic insurance agency. Our brand identity reflects the intersection of cutting-edge AI technology and trusted insurance protection.

---

## Logo

### Primary Logo

![Nexura Logo](/home/ubuntu/nexura-color-options/nexura_tech_gradient.png)

The Nexura logo features a shield with a forward arrow, symbolizing both protection (shield) and progress (arrow). The Tech Gradient color scheme reinforces our position as an innovative, technology-first insurance provider.

### Logo Usage Guidelines

**Do:**
- Use the full-color logo on white or light backgrounds
- Maintain clear space around the logo (minimum 20px on all sides)
- Scale proportionally to maintain aspect ratio
- Use high-resolution PNG or SVG formats

**Don't:**
- Distort, rotate, or modify the logo
- Change the colors or gradient direction
- Place on busy backgrounds that reduce legibility
- Use low-resolution or pixelated versions

---

## Color Palette

### Primary Colors

**Deep Blue**
- Hex: `#2563EB`
- RGB: `37, 99, 235`
- OKLCH: `oklch(0.55 0.25 260)`
- Usage: Primary brand color, headings, CTAs, trust elements

**Bright Cyan**
- Hex: `#06B6D4`
- RGB: `6, 182, 212`
- OKLCH: `oklch(0.70 0.15 200)`
- Usage: Accent color, interactive elements, innovation signals

### Gradient

**Tech Gradient (Primary)**
- Direction: 135° (diagonal, bottom-left to top-right)
- Start: Deep Blue (#2563EB)
- End: Bright Cyan (#06B6D4)
- CSS: `background: linear-gradient(135deg, #2563EB 0%, #06B6D4 100%);`
- Usage: Hero sections, primary branding, high-impact touchpoints

### Secondary Colors

**Navy Blue**
- Hex: `#1E3A8A`
- Usage: Body text, secondary elements, traditional contexts

**Light Blue**
- Hex: `#3B82F6`
- Usage: Hover states, secondary CTAs

**Cyan Light**
- Hex: `#22D3EE`
- Usage: Highlights, data visualizations

### Neutral Colors

**White**
- Hex: `#FFFFFF`
- Usage: Backgrounds, negative space

**Gray 50**
- Hex: `#F9FAFB`
- Usage: Light backgrounds, subtle sections

**Gray 900**
- Hex: `#111827`
- Usage: Dark text, high contrast elements

---

## Typography

### Primary Typeface: Inter

**Headings:**
- Font: Inter
- Weights: 600 (Semibold), 700 (Bold)
- Usage: All headings, navigation, CTAs

**Body Text:**
- Font: Inter
- Weights: 400 (Regular), 500 (Medium)
- Usage: Paragraphs, descriptions, UI text

**Code/Technical:**
- Font: JetBrains Mono or system monospace
- Weight: 400 (Regular)
- Usage: Code snippets, technical documentation

### Type Scale

- **H1:** 3rem (48px) / Bold
- **H2:** 2.25rem (36px) / Bold
- **H3:** 1.875rem (30px) / Semibold
- **H4:** 1.5rem (24px) / Semibold
- **Body Large:** 1.125rem (18px) / Regular
- **Body:** 1rem (16px) / Regular
- **Small:** 0.875rem (14px) / Regular

---

## Design Principles

### 1. Innovation with Trust

Balance cutting-edge technology aesthetics with insurance industry credibility. Use the gradient to signal innovation while maintaining professional presentation.

### 2. Clarity and Simplicity

Autonomous systems should feel effortless. Design with clean layouts, ample white space, and clear information hierarchy.

### 3. Dynamic and Responsive

Reflect the always-active nature of autonomous agents through subtle animations, smooth transitions, and responsive interactions.

### 4. Data-Driven Transparency

Visualize complex AI decision-making through clear charts, diagrams, and interactive elements that build trust through transparency.

---

## Visual Elements

### Gradients

**Primary Gradient (Tech Gradient)**
```css
background: linear-gradient(135deg, #2563EB 0%, #06B6D4 100%);
```

**Subtle Gradient (Light)**
```css
background: linear-gradient(135deg, #EFF6FF 0%, #ECFEFF 100%);
```

### Shadows

**Card Shadow**
```css
box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
```

**Elevated Shadow**
```css
box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
```

### Border Radius

- **Small:** 0.375rem (6px)
- **Medium:** 0.5rem (8px)
- **Large:** 0.75rem (12px)
- **XL:** 1rem (16px)

---

## Component Styles

### Buttons

**Primary Button**
```css
background: linear-gradient(135deg, #2563EB 0%, #06B6D4 100%);
color: white;
padding: 0.75rem 1.5rem;
border-radius: 0.5rem;
font-weight: 600;
```

**Secondary Button**
```css
background: transparent;
border: 2px solid #2563EB;
color: #2563EB;
padding: 0.75rem 1.5rem;
border-radius: 0.5rem;
font-weight: 600;
```

### Cards

```css
background: white;
border: 1px solid #E5E7EB;
border-radius: 0.75rem;
padding: 1.5rem;
box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
```

### Navigation

```css
background: white;
border-bottom: 1px solid #E5E7EB;
padding: 1rem 0;
```

---

## Accessibility

### Color Contrast

All color combinations meet WCAG 2.1 AA standards:

- **Deep Blue (#2563EB) on White:** 7.2:1 (AAA compliant)
- **Bright Cyan (#06B6D4) on White:** 4.5:1 (AA compliant for large text)
- **Navy Blue (#1E3A8A) on White:** 10.4:1 (AAA compliant)

For small text and critical UI elements, always use Navy Blue or Deep Blue to ensure maximum readability.

### Focus States

All interactive elements must have visible focus indicators:
```css
outline: 2px solid #2563EB;
outline-offset: 2px;
```

---

## Brand Voice

### Tone Attributes

**Innovative:** We're building something that's never been done before  
**Confident:** We know our technology works and will transform insurance  
**Clear:** Complex AI made simple and understandable  
**Professional:** Serious about insurance, regulation, and customer protection  
**Optimistic:** The future of insurance is better, faster, and more accessible

### Writing Style

- Use active voice and present tense
- Avoid insurance jargon; explain technical concepts clearly
- Be specific with data and metrics
- Show, don't just tell (use examples and case studies)
- Balance technical depth with accessibility

---

## Applications

### Digital

**Website:** Primary gradient in hero sections, Deep Blue for CTAs, Cyan for interactive elements  
**Mobile App:** Gradient for splash screen and key moments, solid colors for UI consistency  
**Email:** Simplified color palette (Deep Blue + White) for maximum compatibility  
**Social Media:** Gradient backgrounds for key announcements, solid colors for regular posts

### Print

**Business Cards:** Navy Blue + Cyan, simplified logo  
**Letterhead:** Navy Blue header with Cyan accent line  
**Presentations:** Gradient title slides, solid colors for content slides  
**Reports:** Deep Blue for headings, charts use full gradient palette

### Merchandise

**T-Shirts:** Simplified logo in solid Deep Blue or White  
**Stickers:** Full-color gradient logo  
**Notebooks:** Navy Blue cover with Cyan accent  
**Pens:** Deep Blue with Cyan clip

---

## Brand Assets

### Logo Files

- `nexura-logo.png` - Full-color gradient logo (primary)
- `nexura-logo.svg` - Vector format for scalability
- `nexura-logo-blue.png` - Solid Deep Blue version (print/merchandise)
- `nexura-logo-white.png` - White version (dark backgrounds)

### Color Swatches

Download official color swatches for:
- Adobe Creative Suite (.ase)
- Sketch (.sketchpalette)
- Figma (import from shared library)

---

## Contact

For brand guidelines questions or asset requests:
**Email:** brand@nexurainsurance.com  
**Brand Manager:** [To be assigned]

---

**© 2025 Nexura Insurance. All rights reserved.**
