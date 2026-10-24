"""Build the static resource library. No packages required."""
from pathlib import Path
import html
import json
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent
resources = json.loads((ROOT / "resources.json").read_text())
cards = []
seen = set()
for item in resources:
    if item["id"] in seen:
        raise ValueError(f"Duplicate resource: {item['id']}")
    seen.add(item["id"])
    e = lambda key: html.escape(item.get(key, ""), quote=True)
    url = item.get("url")
    if url:
        parsed = urlparse(url)
        if parsed.scheme and parsed.scheme != "https":
            raise ValueError(f"Use HTTPS: {url}")
        if not parsed.scheme and not (ROOT / parsed.path).is_file():
            raise ValueError(f"Missing resource: {url}")
        attrs = ' download' if item.get("download") else ''
        action = f'<a class="resource-link" href="{e("url")}"{attrs}>{e("action")} <span aria-hidden="true">↗</span></a>'
    else:
        action = f'<p class="pending"><span aria-hidden="true">◷</span> {e("status")}</p>'
    cards.append(f'''<article class="resource-card" data-category="{e('category')}">
      <p class="eyebrow">{e('type')}</p><h3>{e('title')}</h3>
      <p class="resource-description">{e('description')}</p>{action}</article>''')
template = (ROOT / "index.template.html").read_text()
(ROOT / "index.html").write_text(template.replace("<!-- RESOURCE_CARDS -->", "\n".join(cards)))
print(f"Built index.html with {len(cards)} resources.")
