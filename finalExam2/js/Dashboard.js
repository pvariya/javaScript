import navbar from "../api/navbar.js";
document.getElementById("navbar").innerHTML = navbar();
document.addEventListener('DOMContentLoaded', function() {
    // Toggle course topics
    const toggleTopicsButtons = document.querySelectorAll('.toggle-topics-btn');
    toggleTopicsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const courseDetails = this.parentElement.nextElementSibling;
            courseDetails.style.display = courseDetails.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Toggle subtopics within a topic
    const toggleSubtopicsButtons = document.querySelectorAll('.toggle-subtopics-btn');
    toggleSubtopicsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const subtopics = this.parentElement.nextElementSibling;
            subtopics.style.display = subtopics.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Add a new topic
    const addTopicButtons = document.querySelectorAll('.add-topic-btn');
    addTopicButtons.forEach(button => {
        button.addEventListener('click', function() {
            const inputField = this.previousElementSibling;
            const topicName = inputField.value.trim();
            if (topicName) {
                const topicsContainer = this.closest('.topics');
                const newTopicItem = document.createElement('div');
                newTopicItem.classList.add('topic-item');
                newTopicItem.innerHTML = `
                    <div class="topic-header">
                        <span>${topicName}</span>
                        <button class="toggle-subtopics-btn">Toggle Subtopics</button>
                    </div>
                    <div class="subtopics">
                        <ul>
                            <!-- Subtopics will be added here -->
                            <li>
                                <input type="text" placeholder="Add a new subtopic">
                                <button class="add-subtopic-btn">+</button>
                            </li>
                        </ul>
                    </div>
                `;
                topicsContainer.insertBefore(newTopicItem, topicsContainer.querySelector('.add-topic'));
                inputField.value = '';

                // Reattach event listener for the new toggle subtopics button
                const newToggleSubtopicsButton = newTopicItem.querySelector('.toggle-subtopics-btn');
                newToggleSubtopicsButton.addEventListener('click', function() {
                    const subtopics = this.parentElement.nextElementSibling;
                    subtopics.style.display = subtopics.style.display === 'block' ? 'none' : 'block';
                });

                // Attach event listener for new subtopic button
                const newAddSubtopicButton = newTopicItem.querySelector('.add-subtopic-btn');
                newAddSubtopicButton.addEventListener('click', addSubtopic);
            }
        });
    });

    // Add a new subtopic
    const addSubtopicButtons = document.querySelectorAll('.add-subtopic-btn');
    addSubtopicButtons.forEach(button => {
        button.addEventListener('click', addSubtopic);
    });

    function addSubtopic() {
        const inputField = this.previousElementSibling;
        const subtopicName = inputField.value.trim();
        if (subtopicName) {
            const subtopicsContainer = this.closest('ul');
            const newSubtopicItem = document.createElement('li');
            newSubtopicItem.textContent = subtopicName;
            subtopicsContainer.insertBefore(newSubtopicItem, subtopicsContainer.querySelector('li:last-child'));
            inputField.value = '';
        }
    }
});
