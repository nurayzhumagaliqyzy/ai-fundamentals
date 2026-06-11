const DATA_PATH = "data/materials.json";

const containers = {
  instructions: document.querySelector("#instructions-list"),
  lectures: document.querySelector("#lectures-list"),
  practicals: document.querySelector("#practicals-list"),
};

const pageType = Object.entries(containers).find(([, element]) => element)?.[0];

if (pageType) {
  loadMaterials(pageType, containers[pageType]);
}

async function loadMaterials(type, container) {
  container.innerHTML = '<div class="empty-state">Loading materials...</div>';

  try {
    const response = await fetch(DATA_PATH);
    if (!response.ok) {
      throw new Error(`Could not load ${DATA_PATH}`);
    }

    const data = await response.json();
    const items = Array.isArray(data[type]) ? data[type] : [];

    if (!items.length) {
      container.innerHTML = '<div class="empty-state">No materials added yet.</div>';
      return;
    }

    container.innerHTML = items.map((item) => renderCard(item, type)).join("");
  } catch (error) {
    container.innerHTML =
      '<div class="error-state">Materials could not be loaded. Check data/materials.json and try again.</div>';
  }
}

function renderCard(item, type) {
  const preview = renderPreview(item, type);
  const tags = [item.type, item.week, ...(item.tags || [])].filter(Boolean);
  const tagHtml = tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("");

  return `
    <article class="material-card">
      ${preview}
      <div class="material-body">
        <h2>${escapeHtml(item.title)}</h2>
        <p>${escapeHtml(item.description || "")}</p>
        <div class="tag-row">${tagHtml}</div>
        <div class="button-row">
          ${renderActions(item)}
        </div>
      </div>
    </article>
  `;
}

function renderPreview(item, type) {
  if (item.youtubeEmbedUrl) {
    return `
      <iframe
        class="preview-frame"
        src="${escapeAttribute(item.youtubeEmbedUrl)}"
        title="${escapeAttribute(item.title)}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    `;
  }

  if (item.previewUrl && item.type === "pdf") {
    return `
      <iframe
        class="preview-frame"
        src="${escapeAttribute(item.previewUrl)}"
        title="${escapeAttribute(item.title)} PDF preview">
      </iframe>
    `;
  }

  if (item.googleDrivePreviewUrl) {
    return `
      <iframe
        class="preview-frame"
        src="${escapeAttribute(item.googleDrivePreviewUrl)}"
        title="${escapeAttribute(item.title)} Google Drive preview"
        allow="autoplay">
      </iframe>
    `;
  }

  const label = type === "practicals" ? "Practical material" : "Course material";
  return `<div class="file-preview"><strong>${escapeHtml(label)}</strong></div>`;
}

function renderActions(item) {
  const actions = [];

  if (item.viewUrl) {
    actions.push(linkButton("View", item.viewUrl, "primary"));
  }

  if (item.githubUrl) {
    actions.push(linkButton("GitHub", item.githubUrl, "light"));
  }

  if (item.googleDriveUrl) {
    actions.push(linkButton("Google Drive", item.googleDriveUrl, "light"));
  }

  if (item.downloadUrl) {
    actions.push(linkButton("Download", item.downloadUrl, "light", true));
  }

  return actions.join("");
}

function linkButton(label, url, style, download = false) {
  const downloadAttribute = download ? " download" : "";
  return `<a class="action-button ${style}" href="${escapeAttribute(url)}" target="_blank" rel="noopener"${downloadAttribute}>${label}</a>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}
