/**
 * Q3 3rd Graded Exercise: LocalStorage Implementation
 * This script manages the collection of student sign-up data from the form
 * and persists it in the browser's localStorage as a JSON string.
 */

// We attach an event listener to the form to intercept the 'submit' event
document.getElementById('dForm').addEventListener('submit', function(event) {
    
    // 1. Prevent Default Action
    // By default, a form tries to refresh the page or navigate to a URL. 
    // We stop this so our script can handle the data saving first.
    event.preventDefault();

    // 2. User Confirmation
    // As per the instructions, we prompt the user to confirm their submission.
    const isConfirmed = confirm("Are you sure you want to submit this sign-up?");
    
    if (isConfirmed) {
        // 3. Data Extraction
        // We pull the values from the form inputs using the IDs we set in the HTML.
        const studentId = document.getElementById('studentId').value;
        const fullName = document.getElementById('fullName').value;
        const bDay = document.getElementById('bDay').value;
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mp').value;
        const grade = document.getElementById('gradeLevel').value;
        
        // For the club, we grab the text of the selected option
        const clubDropdown = document.getElementById('clubOrg');
        const selectedClub = clubDropdown.options[clubDropdown.selectedIndex].text;

        // Check which radio button (Intern/Extern) is checked
        // The ?.value handles cases where nothing is selected (though 'required' prevents this)
        const studentType = document.querySelector('input[name="studentType"]:checked')?.value;

        // 4. Object Construction
        // We bundle the data into a single object to represent one student.
        const signupEntry = {
            id: studentId,
            fullname: fullName,
            birthday: bDay,
            email: email,
            mobile: mobile,
            grade: grade,
            club: selectedClub,
            type: studentType
        };

        // 5. LocalStorage Management
        // LocalStorage can only store strings, so we must follow these steps:
        
        // A. Check if there is already a list saved under 'studentSignups'
        let existingData = localStorage.getItem('studentSignups');
        
        // B. Initialize an array. If data exists, parse the string into an array. 
        // If no data exists, start with an empty array [].
        let signupList = existingData ? JSON.parse(existingData) : [];

        // C. Push the new signup object into the list
        signupList.push(signupEntry);

        // D. Convert the entire array back into a JSON string and save it
        localStorage.setItem('studentSignups', JSON.stringify(signupList));

        // 6. Finalize
        alert("Sign-up successfully saved to the user's computer!");
        
        // Reset the form so the sign-up page stays visible for the next user
        this.reset();
    }
});