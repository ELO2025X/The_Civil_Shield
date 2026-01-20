document.getElementById('radarForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const terminal = document.getElementById('terminalOutput');
    const overlay = document.getElementById('resultOverlay');
    const zip = document.getElementById('zipCode').value;
    const agency = document.getElementById('agency').value;

    // Reset
    terminal.innerHTML = '<div class="log-line">System Ready...</div>';
    overlay.style.display = 'none';

    const logs = [
        `Initiating secure handshake...`,
        `Target Zone: ${zip} [Confirmed]`,
        `Analyzing Agency: ${agency.toUpperCase()}...`,
        `Connecting to DOJ Grant Database (doj.gov)...`,
        `<span class="log-warn">WARNING: High Traffic Anomaly detected in Sector ${zip}.</span>`,
        `Querying Governor's Public Safety Office (OLS)...`,
        `Downloading FY2025 Ledger...`,
        `Parsing 14,200 records...`,
        `Cross-referencing Charge Code against Grant Metrics...`,
        `<span class="log-danger">MATCH FOUND: Grant ID #4862402</span>`,
        `Retrieving Grant Scope: "High Visibility Interdiction"...`,
        `Correlating Arrest Timestamp with Shift Differential...`,
        `Calculating Quota Probability...`,
        `Scan Complete.`
    ];

    let delay = 0;

    logs.forEach((log, index) => {
        setTimeout(() => {
            const div = document.createElement('div');
            div.className = 'log-line';
            div.innerHTML = `> ${log}`;
            terminal.appendChild(div);
            terminal.scrollTop = terminal.scrollHeight;
        }, delay);
        delay += Math.random() * 800 + 400; // Random delay between 400-1200ms
    });

    // Show result after all logs
    setTimeout(() => {
        overlay.style.display = 'flex';
    }, delay + 500);
});
