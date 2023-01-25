export function renderJournalEntires(entry) {
    const div = document.createElement('div');
    const p = document.createElement('p');

    div.classList.add('journal-card');
    p.textContent = entry.journal_entry;
    div.append(p);
    return div;
}
