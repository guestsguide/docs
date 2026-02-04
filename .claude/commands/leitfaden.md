# Neuen Leitfaden erstellen (DE/EN)

Erstelle einen neuen Leitfaden (Guideline-Seite) fuer die Guests Guide Dokumentation. Die Seite folgt einem festen Aufbau und wird als `.mdx`-Datei angelegt.

## Eingabe

Der Benutzer gibt den **Branchentyp** an (z.B. "Campingplaetze", "Freizeitparks", "Museen" etc.) und optional die **Sprache** (`de` oder `en`). Optional: Dateiname.

**Format:** `$ARGUMENTS` = `[Branchentyp] [Sprache]`
Beispiele:
- `Campingplaetze` → Deutsch (Standard)
- `Campingplaetze de` → Deutsch
- `Campingplaetze en` → Englisch
- `Camping Sites en` → Englisch

Falls kein Dateiname angegeben wird, leite einen sinnvollen englischen Slug ab (z.B. "Campingplaetze" → `camping.mdx`).
Falls keine Sprache angegeben wird, frage den Benutzer ob Deutsch oder Englisch.
Frage den Benutzer nach dem Branchentyp, falls $ARGUMENTS leer ist.

## Sprachsteuerung

### Verzeichnisse und Pfade

| Einstellung     | Deutsch (`de`)                             | Englisch (`en`)                         |
| --------------- | ------------------------------------------ | --------------------------------------- |
| Zielverzeichnis | `src/content/docs/de/guidelines/`          | `src/content/docs/guidelines/`          |
| Index-Datei     | `src/content/docs/de/guidelines/index.mdx` | `src/content/docs/guidelines/index.mdx` |
| Interne Links   | `/de/guide/pages`, `/de/guide/news` etc.   | `/guide/pages`, `/guide/news` etc.      |

### Sprachregeln

**Deutsch:**
- Professioneller aber zugaenglicher Ton. Siezen. Keine Emojis.
- Umlaute normal verwenden (ae, oe, ue, ss nur in dieser Skill-Anleitung escaped).

**Englisch:**
- Professional but approachable tone. Formal "you". No emojis.
- British English spelling.

## Variablen

Bestimme aus dem Branchentyp folgende Variablen in der jeweiligen Sprache und verwende sie konsistent im gesamten Dokument:

- **BRANCHE**: z.B. DE "Hotels" / EN "Hotels"
- **BRANCHE_SINGULAR**: z.B. DE "Hotel" / EN "Hotel"
- **PRODUKT_BEZEICHNUNG**: z.B. DE "digitale Gaestemappe" / EN "digital guest guide"
- **ZIELGRUPPE**: z.B. DE "Gaeste" / EN "guests"
- **PERSONAL**: z.B. DE "Rezeption" / EN "reception"
- **PAPIER_ALTERNATIVE**: z.B. DE "Hotelzimmermappe" / EN "printed room directory"
- **QR_STANDORTE**: z.B. DE "im Zimmer, an der Rezeption" / EN "in the room, at reception"
- **SIDEBAR_ORDER**: naechste freie Nummer (pruefe vorhandene Dateien im Zielverzeichnis)

## Seitenstruktur (exakt einhalten)

Erstelle die Seite mit **genau** diesen Abschnitten in dieser Reihenfolge. Alle Ueberschriften, Texte, Admonition-Labels und Card-Titles muessen in der gewaehlten Sprache verfasst sein.

### 1. Frontmatter

```yaml
---
title: [PRODUKT_BEZEICHNUNG] fuer/for [BRANCHE]
description: [SEO-optimierte Beschreibung in der Zielsprache, 1-2 Saetze mit Kernbegriff und Nutzenversprechen]
sidebar:
  order: [SIDEBAR_ORDER]
  label: [BRANCHE]
---
```

### 2. Import

```mdx
import { LinkCard, Card, CardGrid, Aside, Badge } from '@astrojs/starlight/components';
```

### 3. Einleitungsparagraph

Ein Fliesstext-Absatz, der:
- Die Herausforderung der Branche beschreibt (Informationsvermittlung an ZIELGRUPPE)
- Das Smartphone als idealen Kanal benennt
- Mit einem **fett** formatierten Satz endet, der Guests Guide vorstellt

**Deutsch:** "**Guests Guide nutzt genau das – [PRODUKT_BEZEICHNUNG] direkt auf dem Smartphone Ihrer [ZIELGRUPPE], ganz ohne Papier, App-Download oder Registrierung.**"

**Englisch:** "**Guests Guide leverages exactly this – a [PRODUKT_BEZEICHNUNG] delivered straight to your [ZIELGRUPPE]' smartphones, with no paper, app download, or registration required.**"

### 4. Tip-Admonition

**Deutsch:**
```
:::tip[Wussten Sie schon?]
[Branchenspezifische Aussage ueber Smartphone-Nutzung der ZIELGRUPPE]
:::
```

**Englisch:**
```
:::tip[Did you know?]
[Industry-specific statement about smartphone usage by ZIELGRUPPE]
:::
```

### 5. H2: Warum / Why

**DE:** "Warum [eine/ein] [PRODUKT_BEZEICHNUNG] fuer Ihr [BRANCHE_SINGULAR]?"
**EN:** "Why a [PRODUKT_BEZEICHNUNG] for your [BRANCHE_SINGULAR]?"

Fliesstext der:
- Den Digitalisierungstrend in der Branche beschreibt
- Probleme der PAPIER_ALTERNATIVE benennt (veraltet, aufwaendig, wird nicht beachtet)
- QR-Code-Loesung von Guests Guide vorstellt
- **DE Kernsatz:** "Einfach QR-Code scannen [...] ohne App-Download, ohne Registrierung."
- **EN Kernsatz:** "Simply scan the QR code [...] no app download, no registration required."

### 6. H2: Welche Informationen / What information

**DE:** "Welche Informationen gehoeren in Ihren/Ihre [PRODUKT_BEZEICHNUNG]?"
**EN:** "What information belongs in your [PRODUKT_BEZEICHNUNG]?"

**3-5 Unterkategorien als H3**, jeweils mit Fliesstext. Typische Kategorien:
- Allgemeine Informationen (Oeffnungszeiten, Kontakt, Grundregeln)
- 2-3 branchenspezifische Kategorien
- Gastronomie (falls relevant)

Optional nach einer sicherheitsrelevanten Kategorie:

**Deutsch:**
```
:::caution[Wichtig fuer die Sicherheit/Hygiene]
[Hinweis zur Sicherheit mit Bezug auf gut informierte ZIELGRUPPE]
:::
```

**Englisch:**
```
:::caution[Important for safety/hygiene]
[Safety note referencing well-informed ZIELGRUPPE]
:::
```

### 7. H2: Aktuelle Informationen / Up-to-date information

**DE:** "Aktuelle Informationen fuer maximalen Komfort"
**EN:** "Up-to-date information for maximum comfort"

H3 darunter:
**DE:** "Tagesaktuelle Hinweise"
**EN:** "Daily updates"

Beschreibt CMS-basierte Updates mit branchenspezifischen Beispielen.

### 8. H2: Integration & Zusatzfunktionen / Integration & additional features

**DE:** "Integration & Zusatzfunktionen"
**EN:** "Integration & additional features"

Zwei H3-Unterabschnitte:

**H3: Feedback-System / Feedback system**
**DE:** "Feedback-System nutzen" – Beschreibt das **Smiley-Modul** (fett)
**EN:** "Using the feedback system" – Describes the **smiley module** (bold)
- 4 branchenspezifische Feedback-Beispiele

**H3: Mehrsprachigkeit / Multilingual support**
**DE:** "Mehrsprachigkeit fuer internationale [ZIELGRUPPE]"
**EN:** "Multilingual support for international [ZIELGRUPPE]"
- Kurzer Absatz ueber Mehrsprachigkeit

### 9. Demo-Card

**Deutsch:**
```mdx
<Card title="Jetzt Demo ansehen" icon="rocket">
  Ueberzeugen Sie sich selbst von den Moeglichkeiten des Guests Guide. [Demo starten](https://demo.guestsguide.com)
</Card>
```

**Englisch:**
```mdx
<Card title="View demo now" icon="rocket">
  See for yourself what Guests Guide can do. [Start demo](https://demo.guestsguide.com)
</Card>
```

### 10. Horizontale Linie + H2: Vorteile / Benefits

**DE:** "Vorteile fuer Ihr [BRANCHE_SINGULAR] auf einen Blick"
**EN:** "Benefits for your [BRANCHE_SINGULAR] at a glance"

```mdx
---

## [Ueberschrift in Zielsprache]

<CardGrid>
  <Card title="[DE: PERSONAL entlasten / EN: Relieve PERSONAL]" icon="comment-alt">
    [Branchenspezifischer Nutzen]. [DE: Mehr erfahren / EN: Learn more](/[de/]guide/pages)
  </Card>
  <Card title="[DE: Zufriedenere ZIELGRUPPE / EN: Happier ZIELGRUPPE]" icon="heart">
    [Branchenspezifischer Nutzen]. [DE: Mehr erfahren / EN: Learn more](/[de/]guide/appearance)
  </Card>
  <Card title="[DE: Nachhaltigkeit / EN: Sustainability]" icon="approve-check-circle">
    [PAPIER_ALTERNATIVE wird ueberfluessig]. [DE: Mehr erfahren / EN: Learn more](/[de/]guide)
  </Card>
  <Card title="[DE: Flexibilitaet / EN: Flexibility]" icon="pencil">
    [Branchenspezifische Aenderungsbeispiele]. [DE: Mehr erfahren / EN: Learn more](/[de/]guide/news)
  </Card>
</CardGrid>
```

### 11. H2: Best Practices

**DE:** "Best Practices: So nutzen andere [BRANCHE] Guests Guide"
**EN:** "Best practices: How other [BRANCHE] use Guests Guide"

**Genau 2 Fallbeispiele** als H3:

**Deutsch:**
```
### Fallbeispiel: [Konkreter Name/Typ]
[Beschreibung, 3-4 Saetze]
**Ergebnis:** [Positives Ergebnis]
```

**Englisch:**
```
### Case study: [Specific name/type]
[Description, 3-4 sentences]
**Result:** [Positive outcome]
```

### 12. Horizontale Linie + H2: FAQ

**DE:** "Haeufig gestellte Fragen (FAQ)"
**EN:** "Frequently asked questions (FAQ)"

**6-8 FAQ-Eintraege** als `<details>` Bloecke. Immer dabei:

1. Zugang/QR-Code-Frage
2. Funktioniert ohne WLAN? / Does it work without Wi-Fi?
3. Wie aktualisiere ich Inhalte? / How do I update content?
4. Geeignet fuer kleinere [BRANCHE]? / Suitable for smaller [BRANCHE]?
5. 2-3 branchenspezifische Fragen
6. Was kostet Guests Guide? / What does Guests Guide cost?

Format pro Eintrag:
```html
<details>
<summary><strong>[Frage in Zielsprache]</strong></summary>

[Antwort als Fliesstext in Zielsprache]
</details>
```

### 13. Horizontale Linie + H2: Jetzt starten / Get started

**DE:** "Starten Sie jetzt mit Ihrem/Ihrer [PRODUKT_BEZEICHNUNG]"
**EN:** "Get started with your [PRODUKT_BEZEICHNUNG] today"

Fliesstext + Tip-Admonition:

**Deutsch:**
```
:::tip[Kostenlose Demo]
Ueberzeugen Sie sich selbst! Besuchen Sie unsere [Live-Demo](https://demo.guestsguide.com) oder kontaktieren Sie uns fuer eine persoenliche Praesentation.
:::
```

**Englisch:**
```
:::tip[Free demo]
See for yourself! Visit our [live demo](https://demo.guestsguide.com) or contact us for a personal presentation.
:::
```

### 14. CTA-CardGrid

**Deutsch:**
```mdx
<CardGrid>
  <Card title="Demo ansehen" icon="laptop">
    Erleben Sie Guests Guide in Aktion. [Demo starten](https://demo.guestsguide.com)
  </Card>
  <Card title="Kontakt aufnehmen" icon="email">
    Lassen Sie sich individuell beraten. [Kontakt](https://guestsguide.com/contact)
  </Card>
</CardGrid>
```

**Englisch:**
```mdx
<CardGrid>
  <Card title="View demo" icon="laptop">
    Experience Guests Guide in action. [Start demo](https://demo.guestsguide.com)
  </Card>
  <Card title="Get in touch" icon="email">
    Get personalised advice. [Contact](https://guestsguide.com/contact)
  </Card>
</CardGrid>
```

### 15. Horizontale Linie + H2: Weiterfuehrende Ressourcen / Further resources

**DE:** "Weiterfuehrende Ressourcen"
**EN:** "Further resources"

Fliesstext mit Links (Pfade je nach Sprache):

**Deutsch:**
- [Seiten erstellen und gestalten](/de/guide/pages)
- [News-Modul](/de/guide/news)
- [Erscheinungsbild](/de/guide/appearance)
- [Feedback-Modul](/de/guide/smiley)

**Englisch:**
- [Creating and designing pages](/guide/pages)
- [News module](/guide/news)
- [Appearance](/guide/appearance)
- [Feedback module](/guide/smiley)

## Wichtige Regeln

1. **Sprache**: Alle Inhalte muessen vollstaendig in der gewaehlten Sprache sein. Keine Sprachmischung.
2. **Keine verbotenen Features**: KEINE Live-Aktivitaeten/Echtzeit-Sensordaten, KEINE iframes, KEINE Push-Notifications, KEINE Buchungen im Guide. Stattdessen: DE "regelmaessig manuell aktualisiert" / EN "regularly updated manually" und DE "Verlinkung zum externen Buchungssystem" / EN "link to external booking system".
3. **Umlaute** (nur DE): Im eigentlichen MDX-Inhalt Umlaute normal verwenden. Nur in dieser Skill-Anleitung sind Umlaute escaped.
4. **Konsistenz**: Die Kernsaetze zu QR-Code, kein App-Download, keine Registrierung muessen in der jeweiligen Sprache vorkommen.
5. **Dateiformat**: `.mdx` (nicht `.md`), da Starlight-Components importiert werden.
6. **Index aktualisieren**: Nach dem Erstellen der Seite auch die jeweilige Index-Datei aktualisieren:
   - DE: `src/content/docs/de/guidelines/index.mdx` – neuen `<LinkCard>` Eintrag hinzufuegen
   - EN: `src/content/docs/guidelines/index.mdx` – falls die Index-Datei `.md` ist, auf `.mdx` upgraden und `<LinkCard>` Eintraege verwenden. Falls bereits `.mdx`, einfach neuen `<LinkCard>` Eintrag hinzufuegen.

## Nach dem Erstellen

- Zeige dem Benutzer die erstellte Datei
- Aktualisiere die Index-Seite im entsprechenden Sprachverzeichnis
- Informiere ueber den naechsten Schritt: `npm run dev` zum lokalen Testen
