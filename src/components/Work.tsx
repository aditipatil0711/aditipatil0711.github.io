import WorkItem from "./WorkItem";
const data =[
    {
        year:"2021-2023",
        company:"Citicorp Services India Private Limited (Citi),",
        position:"Technology Analyst",
        duration:"2 years 1 month",
        description:" Contributed to developing new products and features for Equity Prime Swaps on the Client Reporting Platform. Assisted in transitioning from a monolithic swap reporting system to a microservices-based architecture. This transition improved report delivery speeds, meeting client requirements, and reduced reconciliation errors. Delivered technical assistance for premium clients, addressing business queries and providing timely report improvements.Redesigned two user interfaces for executing scheduler requests and processes related to Commercial Cards in Treasury and Trade Solutions, enhancing user experience and efficiency. Conducted a POC (Proof of Concept) and introduced automated testing for UI pages. Developed a Data Lineage Application for direct report generation from Talend Job metadata."

    },
    {
        year:"2020-2021",
        company:"Nife Labs Pte Ltd",
        position:"Student Intern and Volunteer",
        duration:"9 months",
        description:"Crafted Python codes for robotic machine learning applications on cognitive devices, enhancing performance with OpenVINO and facilitating decentralized workflows via Cyber Foraging.Collaborated with the company's founder on a research paper published in Data Management, Analytics, and Innovation Conference Proceedings and took on a leadership role as Lead Technical Intern to mentor and support new hires."

    },
    {
        year:2019,
        company:"Tata Communications Limited",
        position:"Project Trainee (Internship)",
        duration:"3 months",
        description:" Contributed as a Project Trainee to the Internet Leased Lines (ILL) Migration over MPLS, configuring VLANs for wide networks in Pune and ensuring seamless communication across Data-Link and Network Layers. Engaged in direct ILL customer interactions, offering real-time problem troubleshooting."

    }

];

const Work = () => {
    return (
        <div id='work' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1  className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>    
        {data.map((item,idx) => (
            <WorkItem 
                key={idx} 
                year={item.year.toString()}
                company={item.company}
                position={item.position}
                duration={item.duration}
                description={item.description}
            />
        )           
        )}
        </div>
    );
}
export default Work;