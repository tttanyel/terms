document.addEventListener("DOMContentLoaded", function() {
    const terminologies = [
        { term: "Backend", definition: "The part of a website or application that processes data and performs tasks not seen by the user." },
        { term: "Binary", definition: "A system of numerical notation that uses a base of 2. Used in computing to represent data." },
        { term: "Cache", definition: "A storage layer that temporarily holds data to speed up future access." },
        { term: "Cloud", definition: "Remote servers accessed via the internet to store, manage, and process data." },
        { term: "Controller", definition: "Part of an MVC architecture that handles user input and interactions." },
        { term: "Load Balancer", definition: "A device that distributes network or application traffic across multiple servers." },
        { term: "Namespace", definition: "A container that holds a set of identifiers, ensuring that they are unique within it." },
        { term: "Node.js", definition: "A JavaScript runtime built on Chrome's V8 engine, used for server-side development." },
        { term: "Server", definition: "A system that provides data, services, or resources to other computers over a network." },
        { term: "Session", definition: "A period during which a user interacts with an application, often managed by server-side variables." }
    ];

    const list = document.getElementById("terminologies-list");

    terminologies.sort((a, b) => a.term.localeCompare(b.term));

    terminologies.forEach(function(item, index) {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<span class="term">${item.term}</span>: <span class="definition">${item.definition}</span>`;
        listItem.style.animationDelay = `${index * 0.1}s`; // Staggered animation delay
        list.appendChild(listItem);
    });
});
