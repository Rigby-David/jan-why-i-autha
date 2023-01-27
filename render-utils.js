export function renderJournalEntires(entry) {
    const div = document.createElement('div');
    const p = document.createElement('p');

    div.classList.add('journal-card');
    p.textContent = entry.journal_entry;
    div.append(p);
    return div;
}

export function renderPost(post) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const h3 = document.createElement('h3');
    const p1 = document.createElement('p');

    div.classList.add('post');
    h3.textContent = post.title;
    p.textContent = post.description;
    p1.textContent = post.contact;

    div.append(h3, p, p1);
    return div;
}
