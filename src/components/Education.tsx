import EducationItem from "./EducationItem";

const educationData = [
    // Add your education data here in a similar format to the work experience data
    {
        year: "2023 - 2025",
        institution: "San Jose State University",
            degree: "Master of Science in Software Engineering",
        description: "GPA: 3.9/4.0"
    },
    {
        year: "2017 - 2021",
        institution: "Cummins College Of Engineering for Women, Pune ",
        degree: "Bachelor of Technology in Information Technology",
        description: "GPA: 8.8/10.0"
    },
    {
        year: "2015 - 2017",
        institution: "Deogiri College, Aurangabad",
        degree: "XII HSC (Science)",
        description: "Score: 92%"
    },
    {
        year: "2008 - 2015",
        institution: "St. Lawrence High School, Aurangabad",
        degree: "X SSC",
        description: "Score: 95%"
    }
    
];

const Education = () => {
    return (
        <div id='education' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">Education</h1>
            {educationData.map((item, idx) => (
                <EducationItem 
                    key={idx}
                    year={item.year.toString()}
                    institution={item.institution}
                    degree={item.degree}
                    description={item.description}
                />
            ))}
        </div>
    );
};

export default Education;
