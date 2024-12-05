import Image from "next/image";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { RxCross2 } from "react-icons/rx";

const countryVisas = [
    { flag: '/images/country-flags/malaysia.png', name: 'Malaysia E-Visa', 
        requirements: [
            '1 photograph scanned, size 50 x 35 mm (white Background, without glasses/cap) in JPEG Format',
            '6 Month Valid Passport (First page Scanned in PDF Format)',
            'Scanned Valid CNIC (Front & Back Side)',
            'Updated online 6 months Bank Statement with min PKR 200,000 Closing Balance (InPDF Format)',
            'After submission 5-6 working days required for processing.'
        ]
    },
    { flag: '/images/country-flags/malaysia.png', name: 'Malaysia Sticker Visa', 
        requirements: [
            '6 months valid Original Passport with Signature page duly signed by the passport holder',
            'CNIC Copy',
            '4 photographs, size 34 x 45 mm (white Background, without glasses/cap)'
        ] 
    },
    { flag: '/images/country-flags/singapore.png', name: 'Singapore E-Visa', 
        requirements: [
            'Scan 6 months valid Passport & Signature Page duly signed by the passport holder',
            '1 Scan Picture in White Background (size 34 x 45 mm)',
            'Scan CNIC front & back',
            'Bank Statement',
            'Client Personal Email Address & Contact number Employment Letter/ Business Card',
            'After submission 3-4 Weeks required for processing time'
        ] 
    },
    { flag: '/images/country-flags/cambodia.png', name: 'Cambodia E-Visa', 
        requirements: [
            'Scan 6 months valid Passport & Signature Page duly signed by the passport holder',
            'Scan Copy of CNIC front & back',
            '1 photograph, size 34 x 45 mm (white Background, without glasses/ cap)',
            'E-Bank Statement',
            '10-15 Working Days Required'
        ] 
    },
    { flag: '/images/country-flags/sri-lanka.png', name: 'Sri Lanka E-Visa', requirements: ['6 month visa'] },
    { flag: '/images/country-flags/saudia-arabia.png', name: 'Saudia Umrah Visa', requirements: ['6 month visa'] },
    { flag: '/images/country-flags/thailand.png', name: 'Thailand Sticker Visa', 
        requirements: [
            '6 months valid Original Passport with Signature page signed •▷ CNIC Copy',
            '4 photographs, size 34 x 45 mm (white Background, without glasses/ cap)',
            'Updated 1year/ 6 Months Bank statement duly stamped & signed from respective bank with Min PKR 300,000 Closing Balance',
            'Account maintenance Certificate from the respective Bank',
            'Employment Letter/ Business Letterhead',
            'NTN Copy (Compulsory)',
            'Issued Return Air Ticket (Compulsory)',
            'Family Registration Certificate (for family travelling), Marriage Registration Certificate (Spouse Traveling)',
            'After submission, 10 Working Days required for processing'
        ] 
    },
    { flag: '/images/country-flags/uzbekistan.png', name: 'Uzbekistan Visa', 
        requirements: [
            'Original Passport',
            '2 Passport Photos',
            'CNIC Photocopy',
            'Bank Statement',
            'Source of Income (Job Letter or Business Letter)'
        ] 
    },
    { flag: '/images/country-flags/vietnam.png', name: 'Vietnam E-Visa', 
        requirements: [
            'Scan 6 months valid Passport & Signature',
            'Page duly signed by the passport holder Scan Copy of CNIC front & back',
            '1 photograph, size 34 x 45 mm (white Background, without glasses/ cap)',
            'Travel dates & Port of Entry and Exit',
            '10 Working Days Required'
        ] 
    },
    { flag: '/images/country-flags/saudia-arabia.png', name: 'Saudia Multiple E-Visa', requirements: ['6 month visa'] },
    { flag: '/images/country-flags/indonesia.png', name: 'Indonesia Sticker Visa', 
        requirements: [
            'Scan 6 months valid Passport & Signature Page duly signed by the passport holder',
            'Scan Copy of CNIC front & back',
            '1 photograph, size 34 x 45 mm (white Background, without glasses/ cap)',
            'E-Bank Statement',
            '10-15 Working Days Required'
        ] 
    },
    { flag: '/images/country-flags/tajkistan.png', name: 'Tajkistan Visa', requirements: ['6 month visa'] },
    { flag: '/images/country-flags/kenya.png', name: 'Kenya E-Visa', 
        requirements: [
            'Scan 6 months valid Passport & Signature Page duly signed by the passport holder',
            'Scan Picture (34 x 45 mm Size, Blue background) Scan CNIC Front & Back',
            'Updated 6 months Bank statement duly stamped & signed from respective bank with Min PKR 300,000 Closing Balance',
            "Mother's Name",
            "5 to 7 working days Processing time (Up to Immigration's Discretion)"
        ] 
    },
    { flag: '/images/country-flags/tanzania.png', name: 'Tnzania E-Visa', requirements: ['6 month visa'] },
    { flag: '/images/country-flags/azerbaijan.png', name: 'Azerbaijan E-Visa', 
        requirements: [
            'Scan Passport First Page Valid Passport & Signature Page duly signed by the passport holder',
            'Scan CNIC front & back',
            'After submission 03-04 Working Days are required for processing'
        ] 
    },
    { flag: '/images/country-flags/nigeria.png', name: 'Nigeria E-Visa', requirements: ['6 month visa'] },
    { flag: '/images/country-flags/ethiopia.png', name: 'Ethiopia E-Visa', requirements: ['6 month visa'] },
    { flag: '/images/country-flags/mauritius.png', name: 'Mauritius Sticker Visa', requirements: ['6 month visa'] },
    { flag: '/images/country-flags/turkey.png', name: 'Turkey E-Visa', requirements: ['6 month visa'] },
    { flag: '/images/country-flags/egypt.png', name: 'Egypt Visit Visa', requirements: ['6 month visa'] },
]

export default function Visas() {
    return (
        <div id="visa">
            <section id="hero">
                <div className="visa absolute z-[1] min-h-screen w-full flex justify-center items-center flex-col">
                <h1 className="text-3xl md:text-4xl font-semibold mx-auto md:w-1/2 text-center leading-10 mt-36 md:mt-12">Get Your Visa</h1>
                <p className="text-base mx-auto md:w-1/2 text-center mb-6 mt-2">Avail The Opportunity to Make Your Travel History</p>
                </div>
                <div className="bg-custom-gradient min-h-screen relative w-full"></div>
            </section>
            <section id="visas" className="pt-20 pb-10 px-5 md:px-10">
                <p className="text-primary text-xl font-semibold text-center mb-8">VISAS</p>
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-4 w-full md:w-1/2 mx-auto">
                    {countryVisas.map((country, index) => {
                        const rowNumber = Math.floor(index / 2);
                        const isEvenRow = rowNumber % 2 === 0;
                        return (
                            <AlertDialog key={index}>
                                <AlertDialogTrigger>
                                    <div 
                                        className={`p-2 border border-blue-300 rounded-md flex items-center gap-2 ${
                                            isEvenRow ? 'bg-white' : 'bg-blue-300'
                                        }`}
                                    >
                                        <Image 
                                            src={country.flag}
                                            alt={country.name}
                                            width={50}
                                            height={50}     
                                        />
                                        <p>{country.name}</p>
                                    </div>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <div className="flex justify-between items-center">
                                            <AlertDialogTitle className="text-2xl flex items-center gap-3">
                                                <Image 
                                                    src={country.flag}
                                                    alt={country.name}
                                                    width={30}
                                                    height={30}     
                                                />
                                                {country.name}
                                            </AlertDialogTitle>
                                            <AlertDialogCancel className="rounded-full h-full p-3">
                                                <RxCross2 className="text-2xl" />
                                            </AlertDialogCancel>
                                        </div>
                                        <AlertDialogDescription>
                                            <h3 className="text-red-500 font-semibold text-lg mb-2">Requirements:</h3>
                                            <ul className="p-0 list-disc pl-3">
                                                {country.requirements.map((requirement, index) => (
                                                    <li className="my-2 text-black" key={index}>{requirement}</li>
                                                ))}
                                            </ul>
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                </AlertDialogContent>
                            </AlertDialog>
                        );
                    })}
                </div>
            </section>
        </div>
    )
}