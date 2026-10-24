# ACPE 2026 NLP & LLM learning hub

Public resource page for the Track C educational session, 30 October 2026.

**Website:** https://acpe2026nlp.github.io/

## Update resources

1. Edit `resources.json`. Each resource has a title, category, description and URL. Categories are `prepare`, `labs`, `reading`, and `session`.
2. For a new release, replace its `null` URL with the attendee-facing HTTPS link (or a file path under `assets/`), remove `status`, and add an `action` label.
3. Run `python3 build.py` to regenerate `index.html`.
4. Commit and push to `main`. GitHub Pages deploys the root directory.

The featured Lab 1 and Lab 2 panels are in `index.template.html`. When Lab 1 launches, update its panel as well as its resource entry. Edit the template, then rebuild; avoid editing generated `index.html` directly. Update the “Resources checked” date after reviewing links.

## Preview

```sh
python3 build.py
python3 -m http.server 8766 --bind 127.0.0.1
```

Open http://127.0.0.1:8766. No package installation or application server is required. Search and filters are progressive enhancements; resource links remain available without JavaScript. Checklist selections stay in the visitor's browser and are not sent to a server. The interface uses a white clinical layout, system fonts, charcoal text, thin grey dividers and restrained blue accents, following the Mira workspace design.

## Content and release status

- The live student Colab notebook, student data and leaderboard are linked at their existing Google URLs. Notebook updates are visible through the same link.
- The setup PDF and Lab 1 glossary are copies of attendee materials supplied by the teaching team. The source handout credits Crystal Leung. They are retained unchanged.
- `prompting-guide.html` is adapted from the 24 October 2026 student notebook, with a standalone layout and print control. It does not modify the notebook.
- The Lab 1 notebook is scheduled for release on the day according to the setup handout; the course folder was not accessible during preparation. Lecture slides are pending a participant-facing link.
- Conference title and date are linked to the [official educational sessions page](https://www.asianpharmacoepi.org/educational-sessions/).
- The three pre-course reading URLs were supplied by the teaching team. Publisher access may be required for the journal article.

Only attendee resources belong here. Do not add instructor answer keys, controller state, survey data, private email threads, or account credentials. Check links with a participant account before releasing new resources. Rights in contributed teaching materials remain with their authors; no blanket reuse licence is granted by this repository.

## Visual direction

White surfaces and blue actions follow the Mira clinical workspace. Fine rules, directly labelled evidence and an aligned resource list follow [Tufte’s analytical design guidance](https://www.edwardtufte.com/notebook/analytical-design-and-human-factors/). Small red squares, blue circles and yellow triangles reference [Bauhaus colour and form studies](https://www.bauhaus.de/en/sammlung/highlights/204_unterricht/444); shapes sit beside written labels rather than carrying meaning by colour alone. No installed Tufte skill was available during this revision; these principles were applied directly.
