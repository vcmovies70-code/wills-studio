# Cineframe Design Direction

## Three Initial Directions

### Theme Name: Sunlit Documentary
Very warm, tactile, and human: sun-bleached neutrals, serif-led typography, and scrapbook-like pacing for a studio that feels close to real stories.

**Probability:** 0.07

### Theme Name: Midnight Cut
A cinematic editorial world built around deep ink, oxidized copper, and typographic tension. It feels like a film title card translated into a modern studio site: intimate, premium, and a little mysterious.

**Probability:** 0.04

### Theme Name: Electric Rehearsal
A high-energy visual language with hard white space, cobalt accents, and quick graphic cuts for a production house that wants to feel experimental and culture-forward.

**Probability:** 0.02

## Chosen Direction: Midnight Cut

### Design Movement
Contemporary editorial noir with references to independent film title cards, 1970s contact sheets, and modern art-direction studios. The site should feel like a sequence of frames rather than a conventional marketing page.

### Core Principles
1. Treat every section as a cinematic beat: establish, reveal, linger, release.
2. Use restraint as a luxury signal: ink-black fields, warm paper panels, and one ownable copper accent.
3. Create tension through asymmetry: offset columns, oversized chapter numbers, and image crops that feel deliberately framed.
4. Make motion feel like editing: quick cuts for navigation feedback, slow pans for hero content, and hover states that behave like a reel being scrubbed.

### Color Philosophy
The base is near-black ink (#11110F), not pure black, so the interface feels photographic rather than digital. Warm bone (#F1EBDD) carries long-form reading and editorial contrast. Oxidized copper (#C9764A) is the signature signal: it acts like the glow of a projector lamp and is reserved for active states, key markers, and calls to action. Muted olive-grey (#77796D) supports metadata without competing with the footage.

### Layout Paradigm
Use a left-anchored, chapter-based page with wide negative space and occasional full-bleed image interruptions. Major sections should alternate between a narrow editorial rail and expansive content, avoiding a repeated centered card grid. The hero uses a quiet top nav, a large left-aligned statement, and a vertical scroll cue at the right edge.

### Signature Elements
- Copper chapter markers that resemble a timeline playhead.
- Thin filmstrip rules with perforation-like dots at major section transitions.
- Small uppercase production metadata paired with oversized italic serif statements.

### Interaction Philosophy
Interactions should feel like handling a physical edit: direct, tactile, and purposeful. Buttons should shift a few pixels and sharpen contrast on hover; work tiles should reveal a copper timecode and gently zoom the still; navigation should scroll to anchored chapters instead of opening heavy overlays.

### Animation
Use a 180–260ms cubic-bezier ease-out for links, buttons, and work-tile reveals. The hero video remains calm with a subtle 1.02x scale drift. Sections can enter with opacity plus a small vertical translation, staggered by 50ms. Avoid bouncing, elastic easing, or glowing loops. Every non-essential motion must respect prefers-reduced-motion.

### Typography System
Use **DM Serif Display Italic** for cinematic statements and section titles, paired with **Manrope** for navigation, metadata, and body copy. Headlines use high contrast and occasional italic emphasis; body copy stays compact with generous line-height. Metadata is 10–11px uppercase with 0.18em tracking.

### Brand Essence
Cineframe is a small, exacting film studio for brands, artists, and people with something worth remembering; it is different because every project is cut with editorial restraint, not content churn.

**Personality:** observant, tactile, assured.

### Brand Voice
Headlines sound like notes from a director: concise, sensory, and confident. CTAs are invitations into the work, not aggressive sales prompts. Microcopy uses specific nouns and production language instead of generic marketing filler.

Example lines:
- “Stories with a pulse.”
- “Bring us the feeling. We’ll find the frame.”

### Wordmark & Logo
The wordmark is set as a custom lockup: “CINE” in compact uppercase sans, “FRAME” in italic serif with a copper underline that breaks like a splice. The standalone mark is a simplified square frame interrupted by a diagonal copper cut, designed to read as both a viewfinder and an edit point.

### Signature Brand Color
**Oxidized Copper — #C9764A.** It is warm enough to feel human, restrained enough to remain premium, and visually linked to the glow of a projector and the physicality of film.

### Style Decisions
- Keep the visual system cinematic and editorial rather than neon, glossy, or startup-like.
- Use generated imagery only for the hero atmosphere and key portfolio stills; use texture, typography, and spacing to carry the rest.
- Keep CTAs low-pressure and specific: “View the reel”, “Start a project”, “See the cut”.
