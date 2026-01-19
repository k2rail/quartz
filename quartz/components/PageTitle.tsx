import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentProps, QuartzComponentConstructor } from "./types"
import { classNames } from "../util/lang"

const PageTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)
  
  return (
    <div class={classNames(displayClass, "page-title")}>
      
      {/* SEZIONE PROFILO */}
      <a href={baseDir} class="profile-header">
        {/* MODIFICA CRUCIALE: Percorso relativo dinamico */}
        <img src={`${baseDir}/profile.png`} alt="Ivo Ponso" class="profile-img" />
        <h2 class="profile-name">Ivo Ponso</h2>
      </a>
      
      {/* SEZIONE LINK (Piccoli e tecnici) */}
      <div class="profile-links">
        <a href="https://github.com/pozivo">GitHub</a>
        <span class="sep">/</span>
        <a href="https://www.linkedin.com/in/ivoponso/">LinkedIn</a>
        <span class="sep">/</span>
        <a href="https://medium.com/@ivo.ponso">Medium</a>
        <span class="sep">/</span>
        <a href="https://app.hackthebox.com/users/160481">HTB</a>
      </div>

    </div>
  )
}

PageTitle.css = `
.page-title {
  margin: 1rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* --- FOTO --- */
.profile-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none !important;
  margin-bottom: 0.5rem;
  border: none !important; /* Rimuove eventuali bordi ereditati */
}

.profile-img {
  width: 140px !important;
  height: 140px !important;
  border-radius: 50% !important;
  object-fit: cover !important;
  border: none !important;
  display: block !important;
  background-color: var(--lightgray);
}

/* --- NOME --- */
.profile-name {
  margin: 12px 0 4px 0 !important;
  font-family: var(--headerFont) !important;
  font-size: 1.5rem !important;
  color: var(--secondary) !important;
  font-weight: 700 !important;
  line-height: 1.2 !important;
}

/* --- LINK SOCIAL (Forzatura Stile) --- */
.profile-links {
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap !important;
  align-items: center !important;
  gap: 8px !important;
  margin-top: 5px !important;
}

/* Selettore molto specifico per sovrascrivere tutto */
.page-title .profile-links a {
  font-family: 'JetBrains Mono', monospace !important; /* Font tecnico */
  font-size: 0.75rem !important; /* 12px - Molto piccolo */
  color: var(--gray) !important;
  text-decoration: none !important;
  background: transparent !important;
  padding: 0 !important;
  letter-spacing: 0.5px;
  text-transform: none !important; /* Evita maiuscole forzate */
}

.page-title .profile-links a:hover {
  color: var(--secondary) !important;
  text-decoration: underline !important;
}

.profile-links .sep {
  color: var(--darkgray);
  opacity: 0.4;
  font-size: 0.7rem;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor