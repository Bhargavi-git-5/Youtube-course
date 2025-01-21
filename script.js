
document.querySelectorAll('.completed-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        
        if (this.checked) {
            this.parentElement.classList.add('completed');
        } else {
            this.parentElement.classList.remove('completed');
        }
        updateProgress();
    });
});

document.getElementById('save-notes').addEventListener('click', function() {
    const notes = document.getElementById('custom-notes').value;
   
    if (notes) {
        localStorage.setItem('videoNotes', notes);  
        alert('Notes saved successfully!');
    } else {
        alert('Please enter some notes before saving.');
    }
});

const progressBar = document.querySelector('.progress-bar');
const totalVideos = document.querySelectorAll('.video-item').length;

function updateProgress() {
    let videosCompleted = 0;

    document.querySelectorAll('.completed-checkbox').forEach(checkbox => {
        if (checkbox.checked) {
            videosCompleted++;
        }
    });
    
    const progressPercentage = (videosCompleted / totalVideos) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    const progressText = document.querySelector('.progress-tracker p');
    progressText.textContent = `${Math.round(progressPercentage)}% Completed`;
}


document.getElementById('submit-rating').addEventListener('click', function() {
    const rating = document.getElementById('course-rating').value;
    if (rating >= 1 && rating <= 5) {
        alert(`Thank you for rating the course: ${rating}/5`);
    } else {
        alert('Please provide a valid rating between 1 and 5.');
    }
});
function generateAISummary(videoId) {
    
    const summary = "This video covers the basics of web development, including HTML, CSS, and JavaScript.";

   
    document.querySelector('.ai-summary').textContent = `AI-generated Summary: ${summary}`;
}
generateAISummary('video-1'); 
let currentVideoIndex = 0; 
const videoItems = document.querySelectorAll('.video-item');
function goToNextVideo() {
    if (currentVideoIndex < videoItems.length - 1) {
        currentVideoIndex++;
        highlightCurrentVideo();
    }
}
function goToPreviousVideo() {
    if (currentVideoIndex > 0) {
        currentVideoIndex--;
        highlightCurrentVideo();
    }
}
function highlightCurrentVideo() {
    videoItems.forEach((videoItem, index) => {
        videoItem.classList.remove('current-video'); 
        if (index === currentVideoIndex) {
            videoItem.classList.add('current-video'); 
        }
    });
}
document.querySelector('.next-video-btn').addEventListener('click', goToNextVideo);
document.querySelector('.previous-video-btn').addEventListener('click', goToPreviousVideo);

highlightCurrentVideo();

setInterval(() => {
    const notes = document.getElementById('custom-notes').value;
    if (notes) {
        localStorage.setItem('videoNotes', notes); 
    }
}, 10000);

