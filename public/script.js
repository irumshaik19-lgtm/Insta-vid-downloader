function downloadVideo() {
    const url = document.getElementById("url").value;
    if (!url) {
        alert("Enter a URL!");
        return;
    }
    window.location.href = `/api/download?url=${encodeURIComponent(url)}`;
}

