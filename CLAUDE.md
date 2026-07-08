# Installed Agent Skills

This file contains instructions for all the skills installed in this project.

## Skill: astro

---
name: astro
description: Skill for building with the Astro web framework. Helps create Astro components and pages, configure SSR adapters, set up content collections, deploy static sites, and manage project structure and CLI commands. Use when the user needs to work with Astro, mentions .astro files, asks about static site generation (SSG), islands architecture, content collections, or deploying an Astro project.
license: MIT
metadata: 
  authors: "Astro Team"
  version: "0.0.1"
---

# Astro Usage Guide

**Always consult [docs.astro.build](https://docs.astro.build) for code examples and latest API.**

Astro is the web framework for content-driven websites.

---

## Quick Reference

### File Location
CLI looks for `astro.config.js`, `astro.config.mjs`, `astro.config.cjs`, and `astro.config.ts` in: `./`. Use `--config` for custom path.

### CLI Commands

- `npx astro dev` - Start the development server.
- `npx astro build` - Build your project and write it to disk.
- `npx astro check` - Check your project for errors.
- `npx astro add` - Add an integration.
- `npx astro sync` - Generate TypeScript types for all Astro modules.

**Re-run after adding/changing plugins.**

### Project Structure

Reference [project structure docs](https://docs.astro.build/en/basics/project-structure).

- `src/*` - Project source code (components, pages, styles, images, etc.)
- `src/pages` - **Required.** Defines all pages and routes.
- `src/components` - Components (convention, not required).
- `src/layouts` - Layout components (convention, not required).
- `src/styles` - CSS/Sass files (convention, not required).
- `public/*` - Non-code, unprocessed assets (fonts, icons, etc.); copied as-is to build output.
- `package.json` - Project manifest.
- `astro.config.{js,mjs,cjs,ts}` - Astro configuration file. (recommended)
- `tsconfig.json` - TypeScript configuration file. (recommended)

---

## Core Config Options

| Option | Notes |
|--------|-------|
| `site` | Your final, deployed URL. Used to generate sitemaps and canonical URLs. |

### Example `astro.config.ts`

```ts
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com',
});
```

---

## Common Workflows

### Creating a Basic Page

Add a file to `src/pages/` — the filename becomes the route:

```astro
---
// src/pages/index.astro
const title = 'Hello, Astro!';
---
<html>
  <head><title>{title}</title></head>
  <body>
    <h1>{title}</h1>
  </body>
</html>
```

### Creating a Component

```astro
---
// src/components/Card.astro
const { title, body } = Astro.props;
---
<div class="card">
  <h2>{title}</h2>
  <p>{body}</p>
</div>
```

### Deploying with an Adapter

1. Add the adapter: `npx astro add vercel --yes` (or `node`, `cloudflare`, `netlify`)
2. Run `npx astro check` to catch type and configuration errors before building.
3. Run `npx astro build` to produce the deployment artifact.
4. Verify the build output directory (e.g. `dist/`) exists and is non-empty before proceeding.
5. Deploy the output per the adapter's documentation.

---

## Adapters

Deploy to your favorite server, serverless, or edge host with build adapters. Use an adapter to enable on-demand rendering in your Astro project.

**Add [Node.js](https://docs.astro.build/en/guides/integrations-guide/node) adapter using astro add:**
```
npx astro add node --yes
```

**Add [Cloudflare](https://docs.astro.build/en/guides/integrations-guide/cloudflare) adapter using astro add:**
```
npx astro add cloudflare --yes
```

**Add [Netlify](https://docs.astro.build/en/guides/integrations-guide/netlify) adapter using astro add:**
```
npx astro add netlify --yes
```

**Add [Vercel](https://docs.astro.build/en/guides/integrations-guide/vercel) adapter using astro add:**
```
npx astro add vercel --yes
```

[Other Community adapters](https://astro.build/integrations/2/?search=&categories%5B%5D=adapters)

## Resources

- [Docs](https://docs.astro.build)
- [Config Reference](https://docs.astro.build/en/reference/configuration-reference/)
- [llms.txt](https://docs.astro.build/llms.txt)
- [GitHub](https://github.com/withastro/astro)


---

## Skill: find-skills

---
name: find-skills
description: Helps users discover and install agent skills when they ask questions like "how do I do X", "find a skill for X", "is there a skill that can...", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.
---

# Find Skills

This skill helps you discover and install skills from the open agent skills ecosystem.

## When to Use This Skill

Use this skill when the user:

- Asks "how do I do X" where X might be a common task with an existing skill
- Says "find a skill for X" or "is there a skill for X"
- Asks "can you do X" where X is a specialized capability
- Expresses interest in extending agent capabilities
- Wants to search for tools, templates, or workflows
- Mentions they wish they had help with a specific domain (design, testing, deployment, etc.)

## What is the Skills CLI?

The Skills CLI (`npx skills`) is the package manager for the open agent skills ecosystem. Skills are modular packages that extend agent capabilities with specialized knowledge, workflows, and tools.

**Key commands:**

- `npx skills find [query] [--owner <owner>]` - Search for skills interactively or by keyword, optionally scoped to a GitHub owner
- `npx skills add <package>` - Install a skill from GitHub or other sources
- `npx skills check` - Check for skill updates
- `npx skills update` - Update all installed skills

**Browse skills at:** https://skills.sh/

## How to Help Users Find Skills

### Step 1: Understand What They Need

When a user asks for help with something, identify:

1. The domain (e.g., React, testing, design, deployment)
2. The specific task (e.g., writing tests, creating animations, reviewing PRs)
3. Whether this is a common enough task that a skill likely exists

### Step 2: Check the Leaderboard First

Before running a CLI search, check the [skills.sh leaderboard](https://skills.sh/) to see if a well-known skill already exists for the domain. The leaderboard ranks skills by total installs, surfacing the most popular and battle-tested options.

For example, top skills for web development include:
- `vercel-labs/agent-skills` — React, Next.js, web design (100K+ installs each)
- `anthropics/skills` — Frontend design, document processing (100K+ installs)

### Step 3: Search for Skills

If the leaderboard doesn't cover the user's need, run the find command:

```bash
npx skills find [query] [--owner <owner>]
```

For example:

- User asks "how do I make my React app faster?" → `npx skills find react performance`
- User asks "can you help me with PR reviews?" → `npx skills find pr review`
- User asks "I need to create a changelog" → `npx skills find changelog`

### Step 4: Verify Quality Before Recommending

**Do not recommend a skill based solely on search results.** Always verify:

1. **Install count** — Prefer skills with 1K+ installs. Be cautious with anything under 100.
2. **Source reputation** — Official sources (`vercel-labs`, `anthropics`, `microsoft`) are more trustworthy than unknown authors.
3. **GitHub stars** — Check the source repository. A skill from a repo with <100 stars should be treated with skepticism.

### Step 5: Present Options to the User

When you find relevant skills, present them to the user with:

1. The skill name and what it does
2. The install count and source
3. The install command they can run
4. A link to learn more at skills.sh

Example response:

```
I found a skill that might help! The "react-best-practices" skill provides
React and Next.js performance optimization guidelines from Vercel Engineering.
(185K installs)

To install it:
npx skills add vercel-labs/agent-skills@react-best-practices

Learn more: https://skills.sh/vercel-labs/agent-skills/react-best-practices
```

### Step 6: Offer to Install

If the user wants to proceed, you can install the skill for them:

```bash
npx skills add <owner/repo@skill> -g -y
```

The `-g` flag installs globally (user-level) and `-y` skips confirmation prompts.

## Common Skill Categories

When searching, consider these common categories:

| Category        | Example Queries                          |
| --------------- | ---------------------------------------- |
| Web Development | react, nextjs, typescript, css, tailwind |
| Testing         | testing, jest, playwright, e2e           |
| DevOps          | deploy, docker, kubernetes, ci-cd        |
| Documentation   | docs, readme, changelog, api-docs        |
| Code Quality    | review, lint, refactor, best-practices   |
| Design          | ui, ux, design-system, accessibility     |
| Productivity    | workflow, automation, git                |

## Tips for Effective Searches

1. **Use specific keywords**: "react testing" is better than just "testing"
2. **Try alternative terms**: If "deploy" doesn't work, try "deployment" or "ci-cd"
3. **Check popular sources**: Many skills come from `vercel-labs/agent-skills` or `ComposioHQ/awesome-claude-skills`

## When No Skills Are Found

If no relevant skills exist:

1. Acknowledge that no existing skill was found
2. Offer to help with the task directly using your general capabilities
3. Suggest the user could create their own skill with `npx skills init`

Example:

```
I searched for skills related to "xyz" but didn't find any matches.
I can still help you with this task directly! Would you like me to proceed?

If this is something you do often, you could create your own skill:
npx skills init my-xyz-skill
```


---

## Skill: tailwind-4-docs

---
name: tailwind-4-docs
description: Comprehensive Tailwind CSS v4 documentation snapshot and workflow guidance. Use when answering Tailwind v4 questions, selecting utilities/variants, configuring Tailwind v4, or migrating projects from v3 to v4 with official docs and gotcha checks.
compatibility: Requires git, Python 3, and internet access to initialize the Tailwind docs snapshot from tailwindcss.com.
---

# Tailwind 4 Docs

## Overview

Use this skill to navigate a locally synced Tailwind CSS v4 documentation snapshot and answer development, configuration, migration, implementation, refactor, and review questions with official guidance.

The docs snapshot is not bundled with this skill because the upstream repository is source-available but not open-source. Users must initialize the snapshot themselves and are responsible for complying with the upstream license.

## Quick start

1. Check whether the docs snapshot is initialized (`references/docs/` and `references/docs-index.tsx` exist).
2. If the snapshot is missing or older than one week, stop and ask to run the initialization step in "Initialization" before continuing. Do not answer the user's question until the snapshot is initialized.
3. Identify the topic (utility, variant, config, migration, compatibility, implementation, refactor, review).
4. Find the matching doc in `references/docs-index.tsx`.
5. Load only the relevant file from `references/docs/`.
6. For implementation, refactor, or review tasks, also load `references/engineering-playbook.md`.
7. Apply guidance and call out any breaking changes or constraints.

## Initialization (required once per install)

Run the sync script to download the Tailwind docs locally. This requires network access, git, and Python 3:

```
python skills/tailwind-4-docs/scripts/sync_tailwind_docs.py --accept-docs-license
```

This pulls content from `tailwindlabs/tailwindcss.com`. That repo is source-available and explicitly not open-source, so the user must accept its license before downloading and keep the snapshot local.

If you cannot run tools or have no internet access, ask the user to run the exact command above in a terminal, then continue once `references/docs/` and `references/docs-index.tsx` exist.

If the snapshot is missing or older than one week, you must ask for permission to run the command or ask the user to run it. Do not proceed with Tailwind guidance until the snapshot is initialized or refreshed.

If initialization is blocked (no internet or no write access), use `references/gotchas.md` as a limited fallback and ask the user to consult the official docs. For implementation, refactor, or review tasks, `references/engineering-playbook.md` can also serve as a limited fallback.

## References map

- `references/docs/` is generated locally and contains the Tailwind v4 MDX docs snapshot.
- `references/docs-index.tsx` is generated locally and contains the category and slug map used by the docs sidebar.
- `references/docs-source.txt` captures the upstream repo, commit, and snapshot date (or reports that initialization is pending).
- `references/engineering-playbook.md` is the agent-oriented implementation, refactor, and review guide.
- `references/gotchas.md` provides a quick scan of common v4 migration pitfalls.

## MDX handling

- Treat `export const title` and `export const description` as metadata.
- Read JSX callouts like `<TipInfo>` or `<TipBad>` as guidance text.

## Common entry points

- Migration: `references/docs/upgrade-guide.mdx`, `references/docs/compatibility.mdx`.
- Implementation/refactor/review: `references/engineering-playbook.md`.
- Gotchas overview: `references/gotchas.md`.
- Configuration and directives: `references/docs/functions-and-directives.mdx`, `references/docs/adding-custom-styles.mdx`, `references/docs/theme.mdx`.
- Variants and responsive patterns: `references/docs/hover-focus-and-other-states.mdx`, `references/docs/responsive-design.mdx`.
- Core behavior: `references/docs/preflight.mdx`, `references/docs/detecting-classes-in-source-files.mdx`.

## Migration checklist

When upgrading from v3 to v4, always confirm the following in the docs:

- Browser support and compatibility expectations.
- Tooling changes: `@tailwindcss/postcss`, `@tailwindcss/cli`, `@tailwindcss/vite`.
- Import syntax: `@import "tailwindcss"` replaces `@tailwind` directives.
- Utility renames/removals, prefix format, and important modifier placement.
- Changes to variants, transforms, and arbitrary value syntax.

## Update workflow

Run `scripts/sync_tailwind_docs.py` to refresh the snapshot. Use `--local-repo` if you already have a local clone of `tailwindlabs/tailwindcss.com` to speed up syncs. Always pass `--accept-docs-license`.

---


---

## Skill: web-design-guidelines

---
name: web-design-guidelines
description: Review UI code for Web Interface Guidelines compliance. Use when asked to "review my UI", "check accessibility", "audit design", "review UX", or "check my site against best practices".
metadata:
  author: vercel
  version: "1.0.0"
  argument-hint: <file-or-pattern>
---

# Web Interface Guidelines

Review files for compliance with Web Interface Guidelines.

## How It Works

1. Fetch the latest guidelines from the source URL below
2. Read the specified files (or prompt user for files/pattern)
3. Check against all rules in the fetched guidelines
4. Output findings in the terse `file:line` format

## Guidelines Source

Fetch fresh guidelines before each review:

```
https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md
```

Use WebFetch to retrieve the latest rules. The fetched content contains all the rules and output format instructions.

## Usage

When a user provides a file or pattern argument:
1. Fetch guidelines from the source URL above
2. Read the specified files
3. Apply all rules from the fetched guidelines
4. Output findings using the format specified in the guidelines

If no files specified, ask the user which files to review.


---

