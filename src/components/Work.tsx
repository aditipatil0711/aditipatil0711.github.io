import WorkItem from "./WorkItem";
const data = [
    {
        year: "Aug 2022 - Aug 2023",
        company: "CITICORP SERVICES INDIA PVT LTD.",
        position: "Technology Analyst: Markets Technology",
        duration: "Since Aug 2022",
        description:["Developed new products and features for Swap Trades under Client Reporting Platform for Equity Prime Swaps.",
        "Worked on Cloud storage Technologies like S3, Kubernetes, and Microservices architecture.",
        "Ensured Data Quality and Accuracy on extensive Client Trade Data.",
        "Analyzing data using ElasticSearch and developing monitoring Dashboards using Kibana.", 
        "Managed Jenkins and uDeploy for efficient pipeline workflows and deployments."]
    },
    {
        year: "July 2021 – July 2022",
        company: "CITICORP SERVICES INDIA PVT LTD.",
        position: "Technology Analyst: Treasury and Trade Solutions",
        duration: "1 year",
        description: ["Worked on re-engineering projects for User Interface(UI) for Commercial Cards using Angular and PrimeNG.",
        "Performed POC and Implemented Automated Testing features to UI pages.",
        "Developed a Data Lineage Application for Automated report generation from the Metadata of Talend Jobs."]
    },
    {
        year: "June 2020 – April 2021",
        company: "NIFE LABS PTE LTD. ",
        position: "Student Intern and Student Volunteer",
        duration: "10 months",
        description: ["Developed codes in Python for Robotic Machine Learning applications.",
        "Worked with OpenVINO for AI acceleration. Hosted applications on Edge Servers using AWS.",
        "Developed Machine Learning applications with decentralized workflows.",
        "Wrote a research paper published in Data Management, Analytics and Innovation Conference Proceedings."]
    },
    {
        year: "April 2019 – June 2019",
        company: "TATA COMMUNICATIONS LTD.",
        position: "Project Trainee (Internship)",
        duration: "3 months",
        description: ["Worked as a Project Trainee in the 'Internet Leased Lines (ILL) Migration over MPLS'.",
        "Assigned and Configured VLANs for Wide Networks in Pune.",
        " Involved in ILL Customer Interaction and Real-Time Problem Troubleshooting."]
    }
];

// Rest of your Work component remains the same

const Work = () => {
    return (
        <div id='work' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">Experience</h1>    
            {data.map((item, idx) => (
                <WorkItem 
                    key={idx} 
                    year={item.year.toString()}
                    company={item.company}
                    position={item.position}
                    duration={item.duration}
                    description={item.description}
                />
            ))}           
        </div>
    );
};

export default Work;