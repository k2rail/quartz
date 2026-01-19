import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration - Ryuki Style Theme
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "IVO.NINJA",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "it-IT",
    baseUrl: "ivo.ninja",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",      // Font pulito e professionale come nell'immagine
        body: "Inter",
        code: "JetBrains Mono", // Il font "Hacker" per eccellenza
      },
      colors: {
        // TRUCCO: Ho copiato i colori Dark anche qui dentro.
        // In questo modo il sito è SEMPRE scuro.
        lightMode: {
          light: "#1e1e2e",      // Sfondo scuro
          lightgray: "#313244",  // Bordi
          gray: "#a6adc8",       // Testo secondario
          darkgray: "#cdd6f4",   // Testo principale
          dark: "#fab387",       // Titoli Arancioni
          secondary: "#fab387",  // Link/Folder Arancioni
          tertiary: "#45475a",   // Hover Grigio
          highlight: "rgba(143, 159, 169, 0.15)",
        },
        darkMode: {
          light: "#1e1e2e",      // 🌑 Sfondo Blu Notte (Base Catppuccin)
          lightgray: "#313244",  // Bordi scuri ma visibili
          gray: "#a6adc8",       // Testo secondario (date, info)
          darkgray: "#cdd6f4",   // Testo principale (Bianco morbido)
          dark: "#fab387",       // 🧡 Titoli color "Peach/Arancio" (come "Ryuki's Blog")
          secondary: "#fab387",  // Arancione (Peach) -> Rende le cartelle e i link coerenti col titolo
          tertiary: "#45475a",   // Grigio Scuro (Surface) -> L'hover diventa sottile e professionale, non rosa
          highlight: "rgba(250, 179, 135, 0.15)", // (Opzionale) Evidenziazione arancione tenue
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "dracula",
          dark: "dracula", // Tema codice scuro
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config