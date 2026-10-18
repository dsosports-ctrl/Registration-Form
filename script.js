document.addEventListener('DOMContentLoaded', () => {
    const districts = ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"];
    
    const asanas = ["BAC-A", "BAC-B", "BAC-C", "BAC-D", "BAC-E", "BBF-A1", "BBF-A2", "BBF-A3", "BBF-A4", "BBF-A5", "BBF-B1", "BBF-B2", "BBF-B3", "BBF-B4", "BBF-B5", "BBF-C1", "BBF-C2", "BBF-C3", "BBF-C4", "BBF-C5", "BBF-D1", "BBF-D2", "BBF-D3", "BBF-D4", "BBF-D5", "BBF-E1", "BBF-E2", "BBF-E3", "BBF-E4", "BBF-E5", "BBS-A1", "BBS-A2", "BBS-A3", "BBS-A4", "BBS-A5", "BBS-B1", "BBS-B2", "BBS-B3", "BBS-B4", "BBS-B5", "BBS-C1", "BBS-C2", "BBS-C3", "BBS-C4", "BBS-C5", "BBS-D1", "BBS-D2", "BBS-D3", "BBS-D4", "BBS-D5", "BBS-E1", "BBS-E2", "BBS-E3", "BBS-E4", "BBS-E5", "FBF-A1", "FBF-A2", "FBF-A3", "FBF-A4", "FBF-A5", "FBF-B1", "FBF-B2", "FBF-B3", "FBF-B4", "FBF-B5", "FBF-C1", "FBF-C2", "FBF-C3", "FBF-C4", "FBF-C5", "FBF-D1", "FBF-D2", "FBF-D3", "FBF-D4", "FBF-D5", "FBF-E1", "FBF-E2", "FBF-E3", "FBF-E4", "FBF-E5", "FBS-A1", "FBS-A2", "FBS-A3", "FBS-A4", "FBS-A5", "FBS-B1", "FBS-B2", "FBS-B3", "FBS-B4", "FBS-B5", "FBS-C1", "FBS-C2", "FBS-C3", "FBS-C4", "FBS-C5", "FBS-D1", "FBS-D2", "FBS-D3", "FBS-D4", "FBS-D5", "FBS-E1", "FBS-E2", "FBS-E3", "FBS-E4", "FBS-E5", "HBB-A1", "HBB-A2", "HBB-A3", "HBB-A4", "HBB-A5", "HBB-B1", "HBB-B2", "HBB-B3", "HBB-B4", "HBB-B5", "HBB-C1", "HBB-C2", "HBB-C3", "HBB-C4", "HBB-C5", "HBB-D1", "HBB-D2", "HBB-D3", "HBB-D4", "HBB-D5", "HBB-E1", "HBB-E2", "HBB-E3", "HBB-E4", "HBB-E5", "HBF-A1", "HBF-A2", "HBF-A3", "HBF-A4", "HBF-A5", "HBF-B1", "HBF-B2", "HBF-B3", "HBF-B4", "HBF-B5", "HBF-C1", "HBF-C2", "HBF-C3", "HBF-C4", "HBF-C5", "HBF-D1", "HBF-D2", "HBF-D3", "HBF-D4", "HBF-D5", "HBF-E1", "HBF-E2", "HBF-E3", "HBF-E4", "HBF-E5", "LBB-A1", "LBB-A2", "LBB-A3", "LBB-A4", "LBB-A5", "LBB-B1", "LBB-B2", "LBB-B3", "LBB-B4", "LBB-B5", "LBB-C1", "LBB-C2", "LBB-C3", "LBB-C4", "LBB-C5", "LBB-D1", "LBB-D2", "LBB-D3", "LBB-D4", "LBB-D5", "LBB-E1", "LBB-E2", "LBB-E3", "LBB-E4", "LBB-E5", "LBF-A1", "LBF-A2", "LBF-A3", "LBF-A4", "LBF-A5", "LBF-B1", "LBF-B2", "LBF-B3", "LBF-B4", "LBF-B5", "LBF-C1", "LBF-C2", "LBF-C3", "LBF-C4", "LBF-C5", "LBF-D1", "LBF-D2", "LBF-D3", "LBF-D4", "LBF-D5", "LBF-E1", "LBF-E2", "LBF-E3", "LBF-E4", "LBF-E5", "TBB-A1", "TBB-A2", "TBB-A3", "TBB-A4", "TBB-A5", "TBB-B1", "TBB-B2", "TBB-B3", "TBB-B4", "TBB-B5", "TBB-C1", "TBB-C2", "TBB-C3", "TBB-C4", "TBB-C5", "TBB-D1", "TBB-D2", "TBB-D3", "TBB-D4", "TBB-D5", "TBB-E1", "TBB-E2", "TBB-E3", "TBB-E4", "TBB-E5", "TBF-A1", "TBF-A2", "TBF-A3", "TBF-A4", "TBF-A5", "TBF-B1", "TBF-B2", "TBF-B3", "TBF-B4", "TBF-B5", "TBF-C1", "TBF-C2", "TBF-C3", "TBF-C4", "TBF-C5", "TBF-D1", "TBF-D2", "TBF-D3", "TBF-D4", "TBF-D5", "TBF-E1", "TBF-E2", "TBF-E3", "TBF-E4", "TBF-E5"];

    const distSel = document.getElementById('district');
    const eventSel = document.getElementById('eventSelect');
    const tradSec = document.getElementById('traditionalSection');
    const artSec = document.getElementById('artisticSection');

    // Populate Districts
    districts.forEach(d => distSel.add(new Option(d, d)));

    // Populate Asana Dropdowns
    document.querySelectorAll('.asana-dropdown').forEach(sel => {
        sel.add(new Option("Select Asana Code", ""));
        asanas.forEach(code => sel.add(new Option(code, code)));
    });

    // Toggle Fields Function
    function toggleFields(container, show) {
        container.style.display = show ? 'flex' : 'none';
        container.querySelectorAll('select').forEach(s => {
            s.required = show;
            if (!show) s.value = "";
        });
    }

    // Event Listener for Conditional Selection
    eventSel.addEventListener('change', (e) => {
        const val = e.target.value;
        toggleFields(tradSec, val === 'Traditional');
        toggleFields(artSec, ['Artistic Single', 'Artistic Pair', 'Rhythmic Pair'].includes(val));
    });

    // Setup Preview Handler Helper Function
    function setupImagePreview(inputId, previewBoxId, previewImgId) {
        const inputEl = document.getElementById(inputId);
        const boxEl = document.getElementById(previewBoxId);
        const imgEl = document.getElementById(previewImgId);

        if (inputEl) {
            inputEl.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = (evt) => {
                        imgEl.src = evt.target.result;
                        boxEl.style.display = 'block';
                    };
                    reader.readAsDataURL(file);
                } else {
                    boxEl.style.display = 'none';
                }
            });
        }
    }

    // Initialize both upload previews independently
    setupImagePreview('photoFile', 'photoPreviewBox', 'photoPreview');
    setupImagePreview('receiptFile', 'receiptPreviewBox', 'receiptPreview');

    // Form Submit handling (Loader & Toast)
    document.getElementById('registrationForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.getElementById('submitBtn');
        const spinner = document.getElementById('btnSpinner');
        const txt = document.getElementById('btnText');
        const toast = document.getElementById('successToast');

        btn.disabled = true;
        spinner.style.display = 'inline-block';
        txt.textContent = 'Submitting...';
        toast.style.display = 'none';

        setTimeout(() => {
            btn.disabled = false;
            spinner.style.display = 'none';
            txt.textContent = 'Submit Registration';
            toast.style.display = 'block';
            
            // Reset Form fields
            e.target.reset();
            
            // Hide conditional sections and preview boxes
            document.getElementById('photoPreviewBox').style.display = 'none';
            document.getElementById('receiptPreviewBox').style.display = 'none';
            tradSec.style.display = 'none';
            artSec.style.display = 'none';
            
            toast.scrollIntoView({ behavior: 'smooth' });
        }, 2000);
    });
});
