
document.getElementById('dForm').addEventListener('submit', function(e) {
    e.preventDefault();

    if (confirm("Do you want to submit and save this sign-up data?")) {
        
        const studentId = document.getElementById('studentId').value;
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const mp = document.getElementById('mp').value;
        const gradeLevel = document.getElementById('gradeLevel').value;
        
        const clubOrgSelect = document.getElementById('clubOrg');
        const clubName = clubOrgSelect.options[clubOrgSelect.selectedIndex].text;

        const studentType = document.querySelector('input[name="studentType"]:checked').value;

        const newRecord = {
            id: studentId,
            fullname: fullName,
            grade: gradeLevel,
            email: email,
            mobile: mp,
            club: clubName,
            type: studentType
        };

        // 1. Check if 'studentSignups' already exists in localStorage
        let storedData = localStorage.getItem('studentSignups');
        
        // 2. If it exists, parse the string into an array; if not, create a new empty array
        let signupList = storedData ? JSON.parse(storedData) : [];

        // 3. Add the new record to our list
        signupList.push(newRecord);

        // 4. Save the updated list back to localStorage as a string
        localStorage.setItem('studentSignups', JSON.stringify(signupList));

        // Success message
        alert("Data successfully saved to LocalStorage!");
        
        this.reset();
    }
});