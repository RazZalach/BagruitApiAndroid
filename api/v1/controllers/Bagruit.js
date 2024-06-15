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
    {
         "NameSubject": "English",
        "PdfUrl": "https://files.geva.co.il/geva_website/uploads/2024/06/שאלון-16481.pdf",
        "Year": 2024,
        "IsQuetions": true
    },
    {
         "NameSubject": "English",
        "PdfUrl": "https://files.geva.co.il/geva_website/uploads/2024/06/פתרון-16481.pdf",
        "Year": 2024,
        "IsQuetions": false
    },
    {
         "NameSubject": "English",
        "PdfUrl": "https://files.geva.co.il/geva_website/uploads/2023/05/שאלון-16481-קיץ-23.pdf",
        "Year": 2023,
        "IsQuetions": true
    },
    {
         "NameSubject": "Hebrew",
        "PdfUrl": "https://files.geva.co.il/geva_website/uploads/2024/05/שאלון-11281.pdf",
        "Year": 2024,
        "IsQuetions": true
    },
    {
         "NameSubject": "Hebrew",
        "PdfUrl": "https://files.geva.co.il/geva_website/uploads/2024/05/פתרון-11281.pdf",
        "Year": 2024,
        "IsQuetions": false
    },
    {
         "NameSubject": "Hebrew",
        "PdfUrl": "https://files.geva.co.il/geva_website/uploads/2023/05/שאלון-11281-קיץ-23.pdf",
        "Year": 2023,
        "IsQuetions": true
    },
    {
         "NameSubject": "Hebrew",
        "PdfUrl": "https://files.geva.co.il/geva_website/uploads/2023/05/פתרון-11281-קיץ-23-1.pdf",
        "Year": 2023,
        "IsQuetions": false
    },
    {
         "NameSubject": "History",
        "PdfUrl": "https://files.geva.co.il/geva_website/uploads/2024/06/22261-שאלון.pdf",
        "Year": 2024,
        "IsQuetions": true
    },
    {
         "NameSubject": "History",
        "PdfUrl": "https://files.geva.co.il/geva_website/uploads/2024/06/פתרון-22261-קיץ-24.pdf",
        "Year": 2024,
        "IsQuetions": false
    },
    {
         "NameSubject": "History",
        "PdfUrl": "https://files.geva.co.il/geva_website/uploads/2023/06/שאלון-22381-קיץ-2023.pdf",
        "Year": 2023,
        "IsQuetions": true
    },
    {
         "NameSubject": "History",
        "PdfUrl": "https://files.geva.co.il/geva_website/uploads/2023/06/פתרון-22381-קיץ-23.pdf",
        "Year": 2023,
        "IsQuetions": false
    },
    {
         "NameSubject": "literature",
        "PdfUrl": "https://files.geva.co.il/geva_website/uploads/2024/05/שאלון-8381.pdf",
        "Year": 2024,
        "IsQuetions": true
    },
    {
         "NameSubject": "literature",
        "PdfUrl": "https://files.geva.co.il/geva_website/uploads/2024/05/פתרון-8381.pdf",
        "Year": 2024,
        "IsQuetions": false
    },
    {
         "NameSubject": "literature",
        "PdfUrl": "https://files.geva.co.il/geva_website/uploads/2023/05/שאלון-8282-קיץ-23.pdf",
        "Year": 2023,
        "IsQuetions": true
    },
    {
         "NameSubject": "literature",
        "PdfUrl": "https://files.geva.co.il/geva_website/uploads/2023/05/פתרון-לשאלון-8281.pdf",
        "Year": 2023,
        "IsQuetions": false
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