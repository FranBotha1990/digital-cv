<template>
    <!-- Screen container, page-level -->
    <main class="screen-cnt">
        <!-- Content container -->
        <div class="content-cnt">
            <!-- CV container -->
            <article class="cv-cnt">
                <!-- Column flex container for the -->
                <div class="main-column-cnt">

                    <!-- Left column -->
                    <aside class="left-column-cnt">

                        <!-- Profile picture -->
                        <header class="flex justify-center mb-6">
                            <img src="/assets/img/profile.png" alt="Francois Botha" class="profile-pic">
                        </header>

                        <!-- Contact information  -->
                        <section class="mb-4">
                            <h1>Francois Botha</h1>
                            <h2>Head of Business Information</h2>
                            <h3>Contact Information</h3>
                            <ul>
                                <li><a href="">Turku, Finland</a></li>
                                <li><a href="">f.botha@outlook.com</a></li>
                                <li><a href="">LinkedIn</a></li>
                                <li><a href="">Digital CV</a></li>
                                <li><a href="">GitHub</a></li>
                            </ul>
                        </section>
                        
                        <!-- Strengths section -->
                        <section class="mb-4">
                            <h3>Strengths</h3>
                            <ul class="flex flex-wrap gap-1 justify-center">
                                <li v-for="(item, index) in strengths" key="index" class="strengthItems">{{ item }}</li>
                            </ul>
                        </section>
                        
                        <!-- Skills section -->
                        <section class="mb-4">
                            <h3>Skills</h3>
                            <ul class="flex flex-wrap gap-1 justify-center">
                                <li v-for="(item, index) in skills" key="index" class="skillItems">{{ item }}</li>
                            </ul>
                        </section>
                    
                    </aside>

                    <!-- Right column -->
                    <section class="right-column-cnt">

                        <Summary></Summary>
                        
                        <!-- Work experience container -->
                        <div class="mb-4">

                            <!-- Job history section 1 -->
                            <h2 class="mb-2">Experience</h2>
                            
                            <section class="mb-2">
                                <h2>Head of Business Information</h2>
                                <div class="flex justify-between">
                                    <p>Synexa Life Sciences</p>
                                    <p>04/2020 - Present</p>
                                    <p>Turku, Finland</p>
                                </div>
                                <p>A global provider of biomarker and bioanalytical services, specialising in a wide range of complex and custom-designed assays to ultimately improve human health.</p>
                                <ul>
                                    <li>Strategic IT Leadership: Developed and executed IT strategies to align with company objectives, driving digital transformation and operational excellence. Led initiatives that enhanced technology capabilities and fostered innovation.</li>
                                    <li>Team Leadership and Development: Provided guidance and mentorship to a team of IT professionals, fostering a collaborative and high-performance work environment, upholding culture of continuous improvement, supporting 150 users accross 5 global sites.</li>
                                    <li>Technology Modernization: Consolidated and modernized IT operations, ensuring optimal performance, security, and compliance. Successfully managed the transition to advanced technologies and cloud services.</li>
                                    <li>Cross-Functional Collaboration: Partnered with Product Management and Sales to ensure IT infrastructure supported product development and business growth. Facilitated alignment across departments to drive strategic objectives.</li>
                                    <li>Performance Metrics: Set and monitored KPIs related to IT performance, achieving a 12-18% reduction in operational costs through process improvements.</li>
                                    <li>Budget Management: Planned and managed IT budgets and resource allocation, implementing cost-saving measures while maintaining high service standards.</li>
                                </ul>
                            </section>
                            
                            <!-- Job history section 2 -->
                            <section class="mb-2">
                                <h2>System Administrator to IT Manager</h2>
                                <div>
                                    <p>Synexa Life Sciences</p>
                                    <p>06/2018 - 04/2020</p>
                                    <p>Cape Town, South Africa</p>
                                </div>
                                <ul>
                                    <li>Strategic IT Leadership: Spearheaded IT operations across three branches, aligning technology initiatives with business objectives and ensuring compliance with GCP and industry standards.</li>
                                    <li>Performance Optimization: Boosted network and server efficiency, reducing downtime through streamlined processes, proactive monitoring, and strategic enhancements.</li>
                                    <li>Team Development: Led and mentored IT professionals, fostering innovation and continuous improvement. Standardized hardware and provided comprehensive support for 65-75 users across all locations.</li>
                                    <li>Infrastructure Management: Administered LAN/WAN networks and Microsoft Server environments (2008-2016), ensuring seamless connectivity and adherence to organizational standards.</li>
                                    <li>Security & System Administration: Implemented robust security protocols and managed Active Directory, DHCP, DNS, and Group Policy to maintain a secure, stable IT ecosystem.</li>
                                    <li>Hardware Management: Oversaw hardware management, including installation, upgrades, replacements, and roll-outs, focusing on eliminating setbacks and improving productivity.</li>
                                    <li>Enterprise Systems Management & Integration: Managed critical databases supporting Sage and LIMS software, ensuring seamless integration with core business processes.</li>
                                </ul>
                            </section>
                            
                            <!-- Job history section 3 -->
                            <section class="mb-2">
                                <h2>Junior to Senior Technical Engineer</h2>
                                <div>
                                    <p>Centeq Networking</p>
                                    <p>07/2015 - 05/2018</p>
                                    <p>Cape Town, South Africa</p>
                                </div>
                                <p>Provides clients with reliable, high-performance solutions for complex enterprise environments to meet their business objectives.</p>
                                <ul>
                                    <li>Client-Focused IT Solutions: Provided IT services and support to small and medium-sized enterprises, ensuring high levels of client satisfaction.</li>
                                    <li>System Integration and Migration: Managed installation, migration, and upgrading of IT systems, including virtual machine-based Microsoft Servers. Executed on-premise Exchange migrations to Office 365 and Google Business</li>
                                    <li>Network and Server Management: Maintained network and server environments, including Microsoft Servers (2003-2016), Microsoft Exchange, Office 365, VMware, and Hyper-V. Conducted network and server audits to identify improvements.</li>
                                    <li>Risk and Compliance: Implemented security protocols and conducted thorough audits, reducing risk exposure for clients. Managed hardware installations, upgrades, and user migrations.</li>
                                    <li>Innovation and Improvement: Introduced new technologies and optimized existing systems, improving client operations. Installed and configured biometric systems, access control mechanisms, and surveillance systems.</li>
                                    <li>Cross-Functional Collaboration: Worked with client stakeholders to align IT services with business needs, ensuring seamless operations and enhanced efficiency.</li>
                                </ul>
                            </section>
                            
                            <!-- Job history section 4 -->
                            <section class="mb-2">
                                <h2>IT Support Technician & Team Coordinator</h2>
                                <div>
                                    <p>Acnode Group</p>
                                    <p>06/2013 - 06/2015</p>
                                    <p>Cape Town, South Africa</p>
                                </div>
                                <p>Acnode Group provides a comprehensive outsourced IT support solution for SME's and businesses, including web development and sales.</p>
                                <ul>
                                    <li>Infrastructure Management: Oversaw the service and maintenance of IT infrastructures for a diverse client base across various industries, ensuring high standards of service delivery.</li>
                                    <li>Remote Support: Provided comprehensive remote support to numerous clients, enhancing service efficiency and client satisfaction.</li>
                                    <li>Onsite Migrations and Rollouts: Hands-on experience with onsite migrations and system rollouts, ensuring seamless transitions and minimal disruptions.</li>
                                    <li>System Management: Managed, supported, maintained, and installed Microsoft Servers, Microsoft Exchange, Office 365, Citrix Hypervisors, FreeBX phone systems, and client computers and hardware.</li>
                                    <li>Error Reporting and Fault Resolution: Conducted error reporting and fault finding on networks and servers, ensuring timely resolution to maintain optimal system performance.</li>
                                    <li>Team Management: Led a team of five onsite and call-out engineers, ensuring timely responses and resolutions for maintenance schedules, support calls, and installations.</li>
                                    <li>Contract Management: Maintained and serviced Service Level Agreements (SLA) and ADHOC client contracts, ensuring compliance and client satisfaction.</li>
                                </ul>
                            </section>
                        
                        </div>
                        
                        <!-- Education section -->
                        <section class="mb-4"></section>
                        
                        <!-- Certificates section -->
                        <section class="mb-4"></section>

                    </section>

                </div>

                <!-- Footer information -->
                <footer>
                    <div>
                        <p class="text-center">&copy; Francois Botha {{ currentYear }} </p>
                    </div>
                </footer>

            </article>
        </div>
    </main>
</template>

<script setup>

    // Get current year
    const currentYear = ref(new Date().getFullYear())

    // Skills list
    const skills = ref([
        'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'
    ])

    // Strengths list
    const strengths = ref([
        'Good Communicator', 'Strategic Leader', 'Analytical', 'Insightful', 'Resilient', 'Innovative', 'Self-Aware', 'Creative', 'Adaptable', 'Confident'
    ])

</script>

<style scoped>

</style>