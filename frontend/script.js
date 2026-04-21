async function sendToBackend() {
    const text = document.getElementById("userInput").value;

    const response = await fetch("http://localhost:3000/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
    });

    const data = await response.json();
    document.getElementById("output").textContent = JSON.stringify(data, null, 2);
}
