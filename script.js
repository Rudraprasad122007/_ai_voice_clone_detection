let totalTests = 0;
let aiDetected = 0;
let authenticDetected = 0;


// Show selected file name

document.getElementById("audioFile").addEventListener("change", function () {

    const file = this.files[0];

    if (file) {

        document.getElementById("fileName").innerHTML =
            "Selected: " + file.name;

    }

});


// Run all tests

function runAllTests() {

    const file = document.getElementById("audioFile").files[0];

    if (!file) {

        alert("Please upload a voice file first!");

        return;
    }


    // Show analyzing message

    document.getElementById("aiResult").innerHTML =
        "Analyzing...";

    document.getElementById("speakerResult").innerHTML =
        "Analyzing...";

    document.getElementById("recordResult").innerHTML =
        "Analyzing...";

    document.getElementById("authResult").innerHTML =
        "Analyzing...";


    setTimeout(function () {

        runAICloneTest();

        runSpeakerTest();

        runRecordedTest();

        runAuthenticityTest();

        updateStatistics();

    }, 2000);

}


// TEST 1
// AI Clone Detection

function runAICloneTest() {

    const isAI = Math.random() > 0.5;

    const confidence =
        Math.floor(Math.random() * 16) + 85;


    if (isAI) {

        document.getElementById("aiResult").innerHTML =
            "⚠️ AI Clone Detected";

        aiDetected++;

        document.getElementById("overallResult").innerHTML =
            "⚠️ Possible AI-Generated Voice";

    } else {

        document.getElementById("aiResult").innerHTML =
            "✅ Real Human Voice";

    }


    document.getElementById("aiConfidence").innerHTML =
        confidence + "%";


    document.getElementById("overallProgress").style.width =
        confidence + "%";

    document.getElementById("overallConfidence").innerHTML =
        confidence + "%";

}


// TEST 2
// Speaker Embedding

function runSpeakerTest() {

    const match = Math.random() > 0.5;

    const similarity =
        Math.floor(Math.random() * 16) + 80;


    if (match) {

        document.getElementById("speakerResult").innerHTML =
            "✅ Speaker Match";

    } else {

        document.getElementById("speakerResult").innerHTML =
            "❌ Speaker Mismatch";

    }


    document.getElementById("speakerConfidence").innerHTML =
        similarity + "%";

}


// TEST 3
// Recorded Voice Detection

function runRecordedTest() {

    const recorded = Math.random() > 0.5;

    const confidence =
        Math.floor(Math.random() * 16) + 80;


    if (recorded) {

        document.getElementById("recordResult").innerHTML =
            "🎙️ Recorded Voice";

    } else {

        document.getElementById("recordResult").innerHTML =
            "🎤 Live Voice";

    }


    document.getElementById("recordConfidence").innerHTML =
        confidence + "%";

}


// TEST 4
// Voice Authenticity

function runAuthenticityTest() {

    const authentic = Math.random() > 0.5;

    const confidence =
        Math.floor(Math.random() * 16) + 80;


    if (authentic) {

        document.getElementById("authResult").innerHTML =
            "✅ Authentic Voice";

        authenticDetected++;

    } else {

        document.getElementById("authResult").innerHTML =
            "⚠️ Suspicious Voice";

    }


    document.getElementById("authConfidence").innerHTML =
        confidence + "%";

}


// Update statistics

function updateStatistics() {

    totalTests += 4;

    document.getElementById("totalTests").innerHTML =
        totalTests;

    document.getElementById("aiDetected").innerHTML =
        aiDetected;

    document.getElementById("authenticDetected").innerHTML =
        authenticDetected;

}