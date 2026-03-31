document.getElementById('checkBtn').addEventListener('click', function() {
    // 1. inputs
    const n = parseInt(document.getElementById('divN').value);
    const m = parseInt(document.getElementById('divM').value);
    const x = parseInt(document.getElementById('resX').value);
    const y = parseInt(document.getElementById('resY').value);

    // validation
    if (isNaN(x) || isNaN(y)) {
        alert("Please enter residence coordinates!");
        return;
    }

    // 2. LOOOOOOOP LOGICC
    let result = "";
    if (x === n || y === m) {
        result = "divisa";
    } else if (x > n && y > m) {
        result = "NE";
    } else if (x < n && y > m) {
        result = "NO";
    } else if (x > n && y < m) {
        result = "SE";
    } else if (x < n && y < m) {
        result = "SO";
    }

    // 3. table row
    const tableBody = document.getElementById('tableBody');
    const newRow = document.createElement('tr'); 
    newRow.innerHTML = `
        <td>(${n}, ${m})</td>
        <td>(${x}, ${y})</td>
        <td><strong>${result}</strong></td>
    `;
    tableBody.appendChild(newRow);

    // 4. map dot
    const mapContainer = document.getElementById('map-container');
    const newDot = document.createElement('div');
    
    newDot.className = "residence-point";

    const center = 200; 
    const scale = 10;
    
    let plotX = center + ((x - n) * scale);
    let plotY = center - ((y - m) * scale);

    newDot.style.left = plotX + "px";
    newDot.style.top = plotY + "px";

    // add to map
    mapContainer.appendChild(newDot);
});