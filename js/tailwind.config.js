// =============================================
// Kinetic Learning - Tailwind Config (공통)
// 모든 페이지에서 이 파일을 로드하세요:
// <script src="../js/tailwind.config.js"></script>
// =============================================

tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary":                    "#004ac6",
        "on-primary":                 "#ffffff",
        "primary-container":          "#2563eb",
        "on-primary-container":       "#eeefff",
        "primary-fixed":              "#dbe1ff",
        "primary-fixed-dim":          "#b4c5ff",
        "on-primary-fixed":           "#00174b",
        "on-primary-fixed-variant":   "#003ea8",
        "inverse-primary":            "#b4c5ff",
        "surface-tint":               "#0053db",

        "secondary":                  "#735c00",
        "on-secondary":               "#ffffff",
        "secondary-container":        "#fed01b",
        "on-secondary-container":     "#6f5900",
        "secondary-fixed":            "#ffe083",
        "secondary-fixed-dim":        "#eec200",
        "on-secondary-fixed":         "#231b00",
        "on-secondary-fixed-variant": "#574500",

        "tertiary":                   "#8e3c00",
        "on-tertiary":                "#ffffff",
        "tertiary-container":         "#b54e00",
        "on-tertiary-container":      "#ffece5",
        "tertiary-fixed":             "#ffdbca",
        "tertiary-fixed-dim":         "#ffb690",
        "on-tertiary-fixed":          "#341100",
        "on-tertiary-fixed-variant":  "#783200",

        "error":                      "#ba1a1a",
        "on-error":                   "#ffffff",
        "error-container":            "#ffdad6",
        "on-error-container":         "#93000a",

        "background":                 "#f8f9ff",
        "on-background":              "#0b1c30",
        "surface":                    "#f8f9ff",
        "surface-dim":                "#cbdbf5",
        "surface-bright":             "#f8f9ff",
        "surface-variant":            "#d3e4fe",
        "on-surface":                 "#0b1c30",
        "on-surface-variant":         "#434655",
        "surface-container-lowest":   "#ffffff",
        "surface-container-low":      "#eff4ff",
        "surface-container":          "#e5eeff",
        "surface-container-high":     "#dce9ff",
        "surface-container-highest":  "#d3e4fe",
        "inverse-surface":            "#213145",
        "inverse-on-surface":         "#eaf1ff",

        "outline":                    "#737686",
        "outline-variant":            "#c3c6d7",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg:      "0.5rem",
        xl:      "0.75rem",
        full:    "9999px",
      },
      spacing: {
        "xs":               "4px",
        "sm":               "12px",
        "md":               "24px",
        "lg":               "40px",
        "xl":               "64px",
        "base":             "8px",
        "gutter":           "16px",
        "touch-target":     "48px",
        "container-margin": "20px",
      },
      fontFamily: {
        "headline-xl":       ["Quicksand"],
        "headline-lg":       ["Quicksand"],
        "headline-lg-mobile":["Quicksand"],
        "headline-md":       ["Quicksand"],
        "label-md":          ["Quicksand"],
        "button-text":       ["Quicksand"],
        "body-lg":           ["Be Vietnam Pro"],
        "body-md":           ["Be Vietnam Pro"],
      },
      fontSize: {
        "headline-xl":        ["40px", { lineHeight:"48px", letterSpacing:"-0.02em", fontWeight:"700" }],
        "headline-lg":        ["32px", { lineHeight:"40px", fontWeight:"700" }],
        "headline-lg-mobile": ["28px", { lineHeight:"36px", fontWeight:"700" }],
        "headline-md":        ["24px", { lineHeight:"32px", fontWeight:"600" }],
        "body-lg":            ["18px", { lineHeight:"28px", fontWeight:"400" }],
        "body-md":            ["16px", { lineHeight:"24px", fontWeight:"400" }],
        "label-md":           ["14px", { lineHeight:"20px", fontWeight:"600" }],
        "button-text":        ["16px", { lineHeight:"24px", fontWeight:"700" }],
      },
    },
  },
};
