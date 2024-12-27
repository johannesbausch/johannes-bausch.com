import type { Project } from "$lib/types/project";

export const companyProjects: Project[] = [
  {
    slug: 'iseries-monitoring-bot',
    title: 'iSeries Monitoring Bot',
    description: `<strong>Description:</strong><br>
            The software at my company consists of various subsystems running on the IBM System i. These subsystems handle tasks such as batch and interactive jobs, which can have different statuses. For example, a batch job might block others due to errors, leading to delays and reducing work efficiency.

            Additionally, system overloads—such as reaching memory capacity or uncontrolled data growth—often go unnoticed because there are no automated warnings. This can result in data loss or system shutdowns, disrupting operations. Hardware failures are another risk, as they might remain undetected without manual checks, potentially causing interruptions.

            Currently, employees or service providers must manually identify these issues via command line. To address these challenges, I developed a standalone monitoring bot for systematic tracking of system parameters. The bot helps detect and resolve potential problems early, ensuring smoother and more efficient workflows. I also authored a comprehensive documentation for customers, enabling them to easily configure the bot via a simple configuration file.

            <br><br>
            
            <strong>Challenges faced:</strong><br>
            Using an unfamiliar environment and database (IBM Session, DB2) was a significant challenge. Translating the IBM data and mapping it into Java code was particularly difficult due to the niche nature of the system and the lack of readily available information or resources.

            <br><br>
            
            <strong>What I learned:</strong><br>
            - Gained familiarity with the IBM iSeries environment.<br>
            - Developed skills in working with limited information and resources.<br>
            - Improved my ability to communicate and collaborate with experienced niche developers.<br>
        `
  },
  {
    slug: 'dynamic-report-evaluation-microservice',
    title: 'Dynamic Report Evaluation Microservice',
    description: `<strong>Description:</strong><br>
            I developed a microservice using Quarkus to evaluate dynamic reports and generate them as Excel (.xlsx) files. These evaluations are based on tuples from the database, where each tuple can contain a different number of columns (some of which might be null). The microservice dynamically adapts to this variability, generating customized reports that meet diverse business requirements. By building a reusable and scalable solution, the service streamlines the report generation process and ensures consistency across outputs.

            <br><br>
            
            <strong>Challenges faced:</strong><br>
            The primary challenge was handling the variability in tuples, where each data entry could have a different structure or number of columns. Designing a generic and reusable evaluator capable of accommodating this variability was complex. Ensuring the service could dynamically create or skip columns as needed, while maintaining efficiency and reliability, required innovative problem-solving and meticulous implementation.

            <br><br>
            
            <strong>What I learned:</strong><br>
            - Gained experience with dynamic data evaluation and manipulation.<br>
            - Improved my expertise with Apache POI for Excel file handling.<br>
            - Enhanced skills in designing generic services and methods to process diverse data structures.<br>
        `
  }
];

export const openSourceProjects: Project[] = [
  {
    slug: 'dotfiles',
    title: 'dotfiles',
    description: `<strong>Description:</strong><br>
            A customized development environment built with NeoVim, WezTerm, and Fish. 
            It streamlines coding productivity with a keyboard-driven workflow tailored for Linux and WSL2 setups.

            <br><br>
            
            <strong>Challenges faced:</strong><br>
            I faced several challenges, including navigating WSL2 for the first time, learning Lua for configuring NeoVim, and adjusting to a fully keyboard-based environment.

            <br><br>
            
            <strong>What I learned:</strong><br>
            - Improved Linux proficiency.<br>
            - Familiarity with WezTerm and Fish shell.<br>
            - Confidence in Lua scripting and terminal-based workflows.
        `
  }
];

export const privateProjects: Project[] = [
  {
    slug:'steam-profile-automation-service',
    title: 'Steam Profile Automation Service',
    description: `<strong>Description:</strong><br> 
            I am working on a SaaS project with a friend that allows Steam users to automate their profiles and much more. The service aims to streamline profile management, giving users the ability to automate tasks and enhance their Steam experience. Since the project is still under construction, we are putting significant effort into developing the website, backend logic, and ensuring security. Once launched, I will update my portfolio to showcase the finished product.

            <br><br>
            
            <strong>Challenges faced:</strong><br>
            A major challenge is that we are only two people working on the entire project. This involves creating the website, programming the underlying logic, and addressing the security concerns to prevent various types of attacks. Balancing the workload between multiple areas of development has made the process more complex.

            <br><br>
            
            <strong>What I learned:</strong><br>
            - Gained experience in launching a project from scratch.<br>
            - Learned about software architecture and its importance, especially when features have been implemented by others and are taken for granted.<br>
            - Developed skills in full-stack development, security measures, and understanding the complexities of managing a project with limited resources.
        `
  }
];

