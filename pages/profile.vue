<template>
    <div>
        
        <!-- CV container -->
        <article class="cv-cnt">
            <!-- Column flex container for the -->
            <div class="main-column-cnt">

                <!-- Left column -->
                <aside class="left-column-cnt sticky">

                    <!-- Profile picture -->
                    <header class="flex justify-center mb-6">
                        <img src="/assets/img/profile.png" alt="Francois Botha" class="profile-pic">
                    </header>

                    <!-- Contact information  -->
                    <section class="mb-4">
                        <h1 class="pb-2">Francois Botha</h1>
                        <h2 class="pb-2">Head of Business Information</h2>
                        <ul>
                            <li class="flex">
                                <IconsLocationIcon class="pr-1 [&>svg]:h-5 [&>svg]:w-5"/>
                                <a href="https://en.visitturku.fi/" target="blank">Turku, Finland</a>
                            </li>
                            <li class="flex">
                                <IconsEmailIcon class="pr-1 [&>svg]:h-5 [&>svg]:w-5"/>
                                <a href="mailto:f.botha@outlook.com">f.botha@outlook.com</a>
                            </li>
                            <li class="flex">
                                <IconsLinkedInIcon class="pr-1 [&>svg]:h-5 [&>svg]:w-5"/>
                                <a href="https://www.linkedin.com/in/francois-botha-4038b116b/" target="blank">LinkedIn</a></li>
                            <li class="flex">
                                <IconsWebsiteIcon class="pr-1 [&>svg]:h-5 [&>svg]:w-5"/>
                                <a href="https://franbotha1990.github.io/digital-cv/" target="blank">Digital CV</a></li>
                            <li class="flex">
                                <IconsGitHubIcon class="pr-1 [&>svg]:h-5 [&>svg]:w-5"/>
                                <a href="https://github.com/FranBotha1990" target="blank">GitHub</a>
                            </li>
                        </ul>
                    </section>
                    
                    <!-- Strengths section -->
                    <section class="mb-4">
                        <h2 class="flex mb-2 border-b-2"><IconsTrophyIcon  class="pr-1 [&>svg]:h-7 [&>svg]:w-6 text-custcol-indigodye"/>Strengths</h2>
                        <ul class="flex flex-wrap gap-0.5 justify-center">
                            <li v-for="strength in strengths" key="strength" class="strengthItems">{{ strength }}</li>
                        </ul>
                    </section>
                    
                    <!-- Major skills section -->
                    <section class="mb-4">
                        <h2 class="flex mb-2 border-b-2"><IconsGearIcon  class="pr-1 [&>svg]:h-7 [&>svg]:w-6 text-custcol-midnightgreen"/>Technical Skills</h2>
                        <ul class="flex flex-wrap gap-0.5 justify-center">
                            <li v-for="skill in majorSkills" key="skill" class="majorSkillItems">{{ skill }}</li>
                        </ul>
                    </section>

                    <!-- Minor skills section -->
                    <section class="mb-4">
                        <h2 class="flex mb-2 border-b-2"><IconsTerminalIcon  class="pr-1 [&>svg]:h-7 [&>svg]:w-6 text-custcol-skobeloff"/>Additional Skills</h2>
                        <ul class="flex flex-wrap gap-0.5 justify-center">
                            <li v-for="skill in minorSkills" key="skill" class="minorSkillItems">{{ skill }}</li>
                        </ul>
                    </section>
                
                </aside>

                <!-- Right column -->
                <section class="right-column-cnt">
                    
                    <!-- Insert summary component -->
                    <Summary></Summary>
                    
                    <!-- Work experience container -->
                    <div class="mb-4">
                        <h2 class="flex mb-4 text-2xl"><IconsJobIcon class="[&>svg]:h-8 [&>svg]:w-8 pr-1 text-custcol-indigodye"/>Experience</h2>
                        <section>
                            <Job
                                v-for="job in jobs" 
                                :key="job.title" 
                                :title="job.title" 
                                :company="job.company" 
                                :dateRange="job.dateRange" 
                                :location="job.location" 
                                :companyDescription="job.companyDescription" 
                                :responsibilities="job.responsibilities"
                            />
                        </section>
                    </div>
                    
                    <!-- Education section -->
                    <section class="mb-4"></section>
                    
                    <!-- Certificates section -->
                    <section class="mb-4"></section>

                </section>

            </div>

            <Footer></Footer>

        </article>
    </div>
    
</template>

<script setup>
    
    // Strengths list
    const strengths = ref([
        'Good Communicator', 'Strategic Leader', 'Analytical', 'Insightful', 'Resilient', 'Innovative', 'Self-Aware', 'Creative', 'Adaptable', 'Confident', 'Effective Listening'
    ])

    // Skills list
    const majorSkills = ref([
        'IT Infrastructure Management', 'System Administration', 'Network Administration', 'Server Administration', 'System Migration', 'Microsoft Exchange', 'Microsoft 365', 'Security Management', 'Project Management', 'Backup Administration', 'System Analysis & Design', 'Computerized Systems Validation', 'GDPR', 'Data Protection', 'GxP | GCP, GLP, GCLP', 'Business Management'
    ])

    // Additional skills list
    const minorSkills = ref([
        'GitHub', 'HTML', 'CSS', 'JavaScript', 'Python', 'C#', 'NuxtJS', 
    ])

    // Pass job data as props to render content in section
    const jobs = ref([
        {
            title: 'Head of Business Information',
            company: 'Synexa Life Sciences',
            dateRange: '04/2020 - Present',
            location: 'Turku, Finland',
            companyDescription: 'A global provider of biomarker and bioanalytical services, specialising in a wide range of complex and custom-designed assays to ultimately improve human health.',
            responsibilities: [
            'Strategic IT Leadership: Developed and executed IT strategies to align with company objectives, driving digital transformation and operational excellence. Led initiatives that enhanced technology capabilities and fostered innovation.',
            'Team Leadership and Development: Provided guidance and mentorship to a team of IT professionals, fostering a collaborative and high-performance work environment, upholding culture of continuous improvement, supporting 150 users across 5 global sites.',
            'Technology Modernization: Consolidated and modernized IT operations, ensuring optimal performance, security, and compliance. Successfully managed the transition to advanced technologies and cloud services.',
            'Cross-Functional Collaboration: Partnered with various departments to ensure IT infrastructure supported product development and business growth. Facilitated alignment across departments to drive strategic objectives.',
            'Performance Metrics: Set and monitored KPIs related to IT performance, achieving a 12-18% reduction in operational costs through process improvements.',
            'Budget Management: Planned and managed IT budgets and resource allocation, implementing cost-saving measures while maintaining high service standards.'
            ]
        },
        {
            title: 'System Administrator to IT Manager',
            company: 'Synexa Life Sciences',
            dateRange: '06/2018 - 04/2020',
            location: 'Cape Town, South Africa',
            companyDescription: 'A global provider of biomarker and bioanalytical services, specialising in a wide range of complex and custom-designed assays to ultimately improve human health.',
            responsibilities: [
            'Strategic IT Leadership: Spearheaded IT operations across three branches, aligning technology initiatives with business objectives and ensuring compliance with GCP and industry standards.',
            'Performance Optimization: Boosted network and server efficiency, reducing downtime through streamlined processes, proactive monitoring, and strategic enhancements.',
            'Team Development: Led and mentored IT professionals, fostering innovation and continuous improvement. Standardized hardware and provided comprehensive support for 65-75 users across all locations.',
            'Infrastructure Management: Administered LAN/WAN networks and Microsoft Server environments (2008-2016), ensuring seamless connectivity and adherence to organizational standards.',
            'Security & System Administration: Implemented robust security protocols and managed Active Directory, DHCP, DNS, and Group Policy to maintain a secure, stable IT ecosystem.',
            'Hardware Management: Oversaw hardware management, including installation, upgrades, replacements, and roll-outs, focusing on eliminating setbacks and improving productivity.',
            'Enterprise Systems Management & Integration: Managed critical databases supporting Sage and LIMS software, ensuring seamless integration with core business processes.'
            ]
        },
        {
            title: 'Junior to Senior Technical Engineer',
            company: 'Centeq Networking',
            dateRange: '07/2015 - 05/2018',
            location: 'Cape Town, South Africa',
            companyDescription: 'Provides clients with reliable, high-performance solutions for complex enterprise environments to meet their business objectives.',
            responsibilities: [
            'Client-Focused IT Solutions: Provided IT services and support to small and medium-sized enterprises, ensuring high levels of client satisfaction.',
            'System Integration and Migration: Managed installation, migration, and upgrading of IT systems, including virtual machine-based Microsoft Servers. Executed on-premise Exchange migrations to Office 365 and Google Business',
            'Network and Server Management: Maintained network and server environments, including Microsoft Servers (2003-2016), Microsoft Exchange, Office 365, VMware, and Hyper-V. Conducted network and server audits to identify improvements.',
            'Risk and Compliance: Implemented security protocols and conducted thorough audits, reducing risk exposure for clients. Managed hardware installations, upgrades, and user migrations.',
            'Innovation and Improvement: Introduced new technologies and optimized existing systems, improving client operations. Installed and configured biometric systems, access control mechanisms, and surveillance systems.',
            'Cross-Functional Collaboration: Worked with client stakeholders to align IT services with business needs, ensuring seamless operations and enhanced efficiency.'
            ]
        },
        {
            title: 'IT Support Technician & Team Coordinator',
            company: 'Acnode Group',
            dateRange: '06/2013 - 06/2015',
            location: 'Cape Town, South Africa',
            companyDescription: 'Acnode Group provides a comprehensive outsourced IT support solution for SMEs and businesses, including web development and sales.',
            responsibilities: [
            'Infrastructure Management: Oversaw the service and maintenance of IT infrastructures for a diverse client base across various industries, ensuring high standards of service delivery.',
            'Remote Support: Provided comprehensive remote support to numerous clients, enhancing service efficiency and client satisfaction.',
            'Onsite Migrations and Rollouts: Hands-on experience with onsite migrations and system rollouts, ensuring seamless transitions and minimal disruptions.',
            'System Management: Managed, supported, maintained, and installed Microsoft Servers, Microsoft Exchange, Office 365, Citrix Hypervisors, FreeBX phone systems, and client computers and hardware.',
            'Error Reporting and Fault Resolution: Conducted error reporting and fault finding on networks and servers, ensuring timely resolution to maintain optimal system performance.',
            'Team Management: Led a team of five onsite and call-out engineers, ensuring timely responses and resolutions for maintenance schedules, support calls, and installations.',
            'Contract Management: Maintained and serviced Service Level Agreements (SLA) and ADHOC client contracts, ensuring compliance and client satisfaction.'
            ]
        }
    ])

</script>

<style>

</style>