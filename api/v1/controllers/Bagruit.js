const Bagruit = [
    {
        "NameSubject": "Math",
        "PdfUrl": "https://files.geva.co.il/geva_website/uploads/2024/05/35582-פתרונות-סופיים-1.pdf",
        "Year": 2024,
        "IsQuetions": true
    },
    {
        "NameSubject": "Math",
        "PdfUrl": "https://files.geva.co.il/geva_website/uploads/2024/05/שאלון-35582.pdf",
        "Year": 2024,
        "IsQuetions": false
    },
    {
        "NameSubject": "Math",
        "PdfUrl": "https://files.geva.co.il/geva_website/uploads/2023/05/שאלון-35582-5-יחל-1.pdf",
        "Year": 2023,
        "IsQuetions": true
    },
];


module.exports = {

    getAllBagruit: (req, res) => {
        res.status(200).json(Bagruit);
    },
    getBagrutByYear: (req, res) => {
        const year = parseInt(req.body.year);
        const bagruitsByYear = Bagruit.filter(bagrut => bagrut.Year === year);
        if (bagruitsByYear.length > 0) {
            res.status(200).json(bagruitsByYear);
        } else {
            res.status(404).json({ message: `No Bagruit found for year ${year}` });
        }
    },
    getBagrutBySubject: (req, res) => {
        const subject = req.body.subject;
        const bagruitsBySubject = Bagruit.filter(bagrut => bagrut.NameSubject.toLowerCase() === subject.toLowerCase());
        if (bagruitsBySubject.length > 0) {
            res.status(200).json(bagruitsBySubject);
        } else {
            res.status(404).json({ message: `No Bagruit found for subject ${subject}` });
        }
    }

};