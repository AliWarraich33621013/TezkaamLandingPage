export function buildManifestoHtml(): string {
  const text =
    "It isn't a tools problem. It's a {speed} problem. The work gets {scattered} across chats, spreadsheets and sticky notes — and momentum dies in the gaps. tezkaam pulls all of it into {one place}, and keeps it {moving}.";
  let html = "";
  const parts = text.split(/(\{[^}]+\})/);
  parts.forEach((p) => {
    if (!p) return;
    let hl = false;
    let word = p;
    if (p[0] === "{") {
      hl = true;
      word = p.slice(1, -1);
    }
    word.split(/(\s+)/).forEach((tok) => {
      if (tok.trim() === "") {
        html += tok;
        return;
      }
      html += `<w class="${hl ? "o" : ""}">${tok}</w>`;
    });
  });
  return html;
}
