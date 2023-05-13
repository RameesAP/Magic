import { MdHomeWork } from "react-icons/md"
import { RiFileList3Line } from 'react-icons/ri'
import { AiOutlineAreaChart } from 'react-icons/ai'
import { BsFillCalculatorFill } from 'react-icons/bs'

export const PropertyData = [
    {
        img: "https://images.pexels.com/photos/15236126/pexels-photo-15236126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        count: "465",
        item: "Owener Properties"
    },
    {
        img: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        count: "159",
        item: "Project"
    },
    {
        img: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        count: "1234",
        item: "Ready to move"
    },
    {
        img: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        count: "6554",
        item: "Budget Home"
    },
]

export const carosildata = [
    {
        imageSrc: 'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: '1',
        description: 'First slide'
    },
    {
        imageSrc: 'https://images.pexels.com/photos/2510067/pexels-photo-2510067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        title: '2',
        description: ''
    },
    {
        imageSrc: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        captionTitle: '3',
        description: ''
    },

]

export const PServiceData = [
    {
        img: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Packers and Move",
        sub: "Home shift and Vehicle"

    },
    {
        img: "https://images.pexels.com/photos/2360673/pexels-photo-2360673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Cashback on Home Loans",
        sub: "Get assured cashback upto"

    },
    {
        img: "https://images.pexels.com/photos/259593/pexels-photo-259593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Pay Rent",
        sub: "Pay your rent using Credit card"

    },
    {
        img: "https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Legal Services",
        sub: "Get expert legal help"

    },
]

export const Explorecarosil = [
    {
        imgSrc: "https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg?auto=compress&cs=tinysrgb&w=400",
        title: "Dwarka",
        price: "900",
        count: "120",
        pro: "5784"
    },
    {
        imgSrc: "https://images.pexels.com/photos/259593/pexels-photo-259593.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Uttam Nagar",
        price: "11000",
        count: "180",
        pro: "2071"
    },
    {
        imgSrc: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Rohni",
        price: "4000",
        count: "20",
        pro: "4266"
    },
    {
        imgSrc: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title: "Bangalore",
        price: "7000",
        count: "80",
        pro: "202"
    },


]

export const Advicedata = [
    {

        icon: <MdHomeWork style={{ width: "50px", height: "50px" }} />,
        title: "Property Valuation",
        description: "Know the right valuation for your property before you Buy or sell"

    },
    {
        icon: <RiFileList3Line style={{ width: "50px", height: "50px" }} />,
        title: "Legal Title Check",
        description: "Get property checked for clean title and no legal claim/bank attachment"
    },
    {
        icon: <AiOutlineAreaChart style={{ width: "50px", height: "50px" }} />,
        title: "Rate & Trend",
        description: "Know all about property Rates & Trends in your city"
    },
    {
        icon: <BsFillCalculatorFill style={{ width: "50px", height: "50px" }} />,
        title: "EMI Calculator",
        description: "Know the right valuation for your propertKnow how much you'll have to pay every month on your loan"
    },
]


export const options = [
    {
        title: 'Buy', cat: "Popular Residential Searches",
        items: ['Property for Sale in New Delhi', 'Flats in New Delhi', 'Apartments in New Delhi', "Studio Apartments in New Delhi", "Resale House in New Delhi", "Flats in Delhi NCR", "Property in Delhi NCR"]
    },
    { title: 'Rent', cat: "Popular BHK Searches", items: ['Property for Sale in New Delhi', 'Flats in New Delhi', 'Apartments in New Delhi', "Studio Apartments in New Delhi", "Resale House in New Delhi", "Flats in Delhi NCR", "Property in Delhi NCR"] },
    { cat: "Popular Flat Searches", items: ['Property for Sale in New Delhi', 'Flats in New Delhi', 'Apartments in New Delhi', "Studio Apartments in New Delhi", "Resale House in New Delhi", "Flats in Delhi NCR", "Property in Delhi NCR"] },
    { cat: "Popular House Searches", items: ['Property for Sale in New Delhi', 'Flats in New Delhi', 'Apartments in New Delhi', "Studio Apartments in New Delhi", "Resale House in New Delhi", "Flats in Delhi NCR", "Property in Delhi NCR"] },
    // Add more options as needed
];


export const NewData = [
    { title: 'West Enclave', cat: ["Vidya Vihar","Triveni Apartment",,"Vikas Apartment"] },
    { title: 'Indraprastha Extension', cat: "Popular Residential Searches" },
    { title: 'Rajendra Nagar',  cat: "Popular Residential Searches" },
    { title: 'Vikaspuri', cat: "Popular Residential Searches" },
    { title: 'Dwarka Sector 12', cat: "Popular Residential Searches" },
    { title: 'Dwarka Sector 22', cat: "Popular Residential Searches" },

];


{/* <Tabs
id="controlled-tab-example"
activeKey={key}
onSelect={(k) => setKey(k)}
className="mb-3"
>

{NewData.map((option, index) => (
    <Tab key={index} className='NewTab' eventKey={option.title} title={option.title}>
        <div className="Newborder">
            <div className="NewGroup">
                {NewData.map((option, index) => (
                   
                        <div className="NewOp" key={index}>
                            <div className="Odata"> {option.items}</div>

                        </div>
                    
                ))}
            </div>
        </div>
    </Tab>
))}


</Tabs> */}