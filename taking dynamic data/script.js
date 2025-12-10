var users = [
  {
    fullName: "Ava Thompson",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Product Designer",
    description: "Focused on crafting user-centered product experiences with clean, minimal interfaces.",
    tags: ["Design", "UI/UX", "Creativity"]
  },
  {
    fullName: "Liam Carter",
    image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsZXxlbnwwfHwwfHx8MA%3D%3D",
    profession: "Full-Stack Developer",
    description: "Writes robust backend systems and dynamic user interfaces across modern web stacks.",
    tags: ["JavaScript", "Web Dev", "APIs"]
  },
  {
    fullName: "Sofia Hernandez",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Marketing Strategist",
    description: "Specializes in brand growth, social media strategy, and audience engagement.",
    tags: ["Marketing", "Branding", "Content"]
  },
  {
    fullName: "Noah Williams",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
    profession: "Data Scientist",
    description: "Transforms complex data into meaningful insights using statistical and ML techniques.",
    tags: ["Data", "Machine Learning", "Analytics"]
  },
  {
    fullName: "Emma Patel",
    image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe",
    profession: "Quality Assurance Engineer",
    description: "Ensures high-quality software delivery through manual and automated testing.",
    tags: ["QA", "Testing", "Automation"]
  }
];

var sum = '';
users.forEach(function(user) {
    sum = sum + ` <div class="card">
            <img src="${user.image}" alt="">
            <h3>${user.fullName}</h3>
            <h4>${user.profession}</h4>
            <p>${user.description}</p>
        </div>`
})


var main = document.querySelector('main');
main.innerHTML = sum;


