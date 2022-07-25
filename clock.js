const clockLoop = () => {
    let date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
    });
    document.getElementById("date").innerHTML = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });
}