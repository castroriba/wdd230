const membersContainer = document.getElementById('members');
const gridButton = document.getElementById('gridView');
const listButton = document.getElementById('listView');

async function getMembers() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error('Failed to fetch member data.');
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error('Error loading member data:', error);
    membersContainer.innerHTML = '<p class="error">Unable to load member data.</p>';
  }
}

function displayMembers(members) {
  membersContainer.innerHTML = '';
  members.forEach(member => {
    const card = document.createElement('section');
    card.classList.add('member-card');

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p><strong>📍 Address:</strong> ${member.address}</p>
      <p><strong>📞 Phone:</strong> ${member.phone}</p>
      <p><strong>🏅 Membership:</strong> ${member.membership}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    membersContainer.appendChild(card);
  });
}

// View toggle logic
gridButton.addEventListener('click', () => {
  membersContainer.classList.add('grid-view');
  membersContainer.classList.remove('list-view');
});

listButton.addEventListener('click', () => {
  membersContainer.classList.add('list-view');
  membersContainer.classList.remove('grid-view');
});

// Load member data
getMembers();
