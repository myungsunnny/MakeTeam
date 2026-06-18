---
name: Kinetic Learning
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#434655'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed01b'
  on-secondary-container: '#6f5900'
  tertiary: '#8e3c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#b54e00'
  on-tertiary-container: '#ffece5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#ffe083'
  secondary-fixed-dim: '#eec200'
  on-secondary-fixed: '#231b00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#783200'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-xl:
    fontFamily: Quicksand
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Quicksand
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Quicksand
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
  headline-md:
    fontFamily: Quicksand
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Quicksand
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  button-text:
    fontFamily: Quicksand
    fontSize: 16px
    fontWeight: '700'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 40px
  xl: 64px
  touch-target: 48px
  container-margin: 20px
  gutter: 16px
---

## Brand & Style
The brand personality is energetic, supportive, and clarity-driven. The design system focuses on creating a safe yet stimulating environment for elementary education. It balances adult-facing professional utility for teachers with student-facing playfulness.

The design style utilizes **Modern Minimalist with Tactile Accents**. It features clean, generous whitespace to prevent cognitive overload, paired with high-contrast, rounded elements that feel "touchable." Subtle depth is used to make the interface feel like a physical classroom space, encouraging exploration and interaction.

## Colors
The palette is built on high-saturation "Elementary Primaries" that evoke traditional classroom materials but refined for digital legibility. 

- **Primary (Bright Blue):** Used for main actions, navigation, and core teacher utilities.
- **Secondary (Cheerful Yellow):** Used for rewards, highlights, and student achievement badges.
- **Tertiary (Energetic Orange):** Used for dynamic elements like timers, announcements, and active participation cues.
- **Neutrals:** Soft blue-greys are used for borders and secondary text to maintain a friendly, less "clinical" feel than pure greys.

## Typography
The system uses a dual-font approach. **Quicksand** provides a friendly, geometric, and rounded aesthetic for headings and interactive labels, mimicking the "friendly handwriting" often found in early education. **Be Vietnam Pro** is used for body text to ensure maximum legibility for longer teacher notes and instructional content, as it offers better readability at smaller sizes while maintaining a warm tone.

## Layout & Spacing
This design system uses a **Fluid Grid** with generous padding to accommodate both mouse clicks and student-led tablet interactions.

- **Mobile:** 4-column grid with 20px outside margins. All interactive elements must maintain the `touch-target` minimum of 48px.
- **Tablet/Desktop:** 12-column grid with 32px gutters.
- **Rhythm:** Spacing follows an 8px base unit. Use `lg` and `xl` spacing to separate major content blocks to keep the UI from feeling cluttered or overwhelming for younger users.

## Elevation & Depth
Depth is communicated through **Soft Tonal Layering**. Instead of heavy black shadows, this system uses low-opacity shadows tinted with the primary blue color to maintain a "light" feel.

- **Level 0 (Base):** The background color (`#F8FAFC`).
- **Level 1 (Cards):** Pure white surfaces with a 1px border (`#E2E8F0`) and a very soft, diffused shadow (Offset: 0, 4px; Blur: 12px; Color: Primary 10% Alpha).
- **Level 2 (Popovers/Modals):** High-diffusion shadows to indicate temporary interaction layers.
- **Level 3 (Interactive):** Elements like buttons use a subtle bottom-heavy "pressable" border (2px darker shade of the background color) to create a tactile, physical button feel.

## Shapes
The shape language is defined by significant roundedness to ensure no "sharp" corners, reinforcing the safety and friendliness of the app. 

- **Standard Buttons & Inputs:** Use `rounded-lg` (16px) to create a soft, inviting appearance.
- **Feature Cards:** Use `rounded-xl` (24px) to encapsulate student data and classroom activities.
- **Avatars & Chips:** Use fully circular (pill-shaped) borders to contrast against the structured card layouts.

## Components
- **Buttons:** Primary buttons should be large (min 48px height) with bold Quicksand text. Include a subtle "bounce" animation on hover/tap to provide positive feedback.
- **Cards:** Use cards as the primary container for student profiles or lesson plans. Each card should have a 1px soft border and a white background.
- **Progress Bars:** Use thick, rounded tracks (12px height) with the Primary Blue or Secondary Yellow to indicate completion of tasks or student points.
- **Chips:** Used for "tags" like subjects or student status. These should be semi-transparent versions of the primary/secondary colors with high-contrast text.
- **Input Fields:** Large, 16px rounded corners with a thick 2px border when focused, using the Primary Blue color.
- **Badges:** Small, circular icons with the Secondary Yellow background, used to celebrate student wins or "Star of the Week" status.
