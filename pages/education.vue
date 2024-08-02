<template>
	<div>
		<!-- Certificate and education container -->
		<div class="certificates text-center">
			
			<!-- Education heading -->
			<h1>
				<IconsEducationIcon class="pr-1 pl-2 [&>svg]:h-10 [&>svg]:w-10 text-custcol-teal" />Education
			</h1>

			<!-- Education section, repeated below -->
			<div class="education-cnt">
				<h2 class="pb-2 text-custcol-indigodye">North-West University</h2>
				<p class="pb-1 text-sm italic">Bachelor of Science in Information Technology</p>
				<p class="flex pb-2 text-sm text-custcol-indigodye"><IconsDateIcon class="[&>svg]:h-4 [&>svg]:w-4 pr-1"/>2021 - 2024 (In Progress, Final Semester)</p>
				<section class="mb-4">
					<h2 class="flex mb-2 border-b-2"><IconsTrophyIcon  class="pr-1 [&>svg]:h-7 [&>svg]:w-6 text-custcol-indigodye"/>Skills</h2>
					<ul class="flex flex-wrap gap-0.5 justify-center">
						<li v-for="skill in nwuSkills" key="skill" class="strengthItems">{{ skill }}</li>
					</ul>
				</section>
			</div>

			<div class="education-cnt">
				<h2 class="pb-2 text-custcol-midnightgreen">North-West University</h2>
				<p class="pb-1 text-sm italic">University Preparatory Programme: Bachelor of Science in Information Technology</p>
				<p class="flex pb-2 text-sm text-custcol-midnightgreen"><IconsDateIcon class="[&>svg]:h-4 [&>svg]:w-4 pr-1"/>2020</p>
				<section class="mb-4">
					<h2 class="flex mb-2 border-b-2"><IconsTrophyIcon  class="pr-1 [&>svg]:h-7 [&>svg]:w-6 text-custcol-midnightgreen"/>Skills</h2>
					<ul class="flex flex-wrap gap-0.5 justify-center">
						<li v-for="skill in nwuPrepSkills" key="skill" class="majorSkillItems">{{ skill }}</li>
					</ul>
				</section>
			</div>

			<div class="education-cnt">
				<h2 class="pb-2 text-custcol-skobeloff">CTI Education Group</h2>
				<p class="pb-1 text-sm italic">Information Systems Engineering</p>
				<p class="flex pb-2 text-sm text-custcol-skobeloff"><IconsDateIcon class="[&>svg]:h-4 [&>svg]:w-4 pr-1"/>2009</p>
				<section class="mb-4">
					<h2 class="flex mb-2 border-b-2"><IconsTrophyIcon  class="pr-1 [&>svg]:h-7 [&>svg]:w-6 text-custcol-skobeloff"/>Skills</h2>
					<ul class="flex flex-wrap gap-0.5 justify-center">
						<li v-for="skill in ctiSkills" key="skill" class="minorSkillItems">{{ skill }}</li>
					</ul>
				</section>
			</div>
			
			<!-- Certificates heading -->
			<h1>
				<IconsEducationIcon class="pr-1 pl-2 [&>svg]:h-10 [&>svg]:w-10 text-custcol-teal" />Certificates
			</h1>
			
				<div class="flex flex-wrap gap-4 justify-center">
					
					<!-- Certificates, repeated below -->
					<div class="certificate-item">
						<h2>GitHub Codespaces</h2>
						<p>LinkedIn</p>
						<p>July 2024</p>
						<div class="image-container">
							<img src="/assets/img/githubcodespace.png" alt="Certificate" class="certificate-image rounded-md" />
						</div>
					</div>

					<div class="certificate-item">
						<h2>HTML Essential Training</h2>
						<p>LinkedIn</p>
						<p>July 2024</p>
						<div class="image-container">
							<img src="/assets/img/html.png" alt="Certificate" class="certificate-image rounded-md" />
						</div>
					</div>

					<div class="certificate-item">
						<h2>Learning GitHub Pages</h2>
						<p>LinkedIn</p>
						<p>July 2024</p>
						<div class="image-container">
							<img src="/assets/img/githubpages.png" alt="Certificate" class="certificate-image rounded-md" />
						</div>
					</div>

					<div class="certificate-item">
						<h2>Effective Listening</h2>
						<p>LinkedIn</p>
						<p>July 2023</p>
						<div class="image-container">
							<img src="/assets/img/effectivelistening.png" alt="Certificate" class="certificate-image rounded-md" />
						</div>
					</div>

					<div class="certificate-item">
						<h2>How to be a Good Mentee and Mentor</h2>
						<p>LinkedIn</p>
						<p>July 2023</p>
						<div class="image-container">
							<img src="/assets/img/mentor.png" alt="Certificate" class="certificate-image rounded-md" />
						</div>
					</div>

					<div class="certificate-item">
						<h2>Microsoft Collaboration: SharePoint, Teams, Groups, and Yammer</h2>
						<p>LinkedIn</p>
						<p>July 2023</p>
						<div class="image-container">
							<img src="/assets/img/mscollaboration.png" alt="Certificate" class="certificate-image rounded-md" />
						</div>
					</div>

					<div class="certificate-item">
						<h2>Developing Your Emotional Intelligence</h2>
						<p>LinkedIn</p>
						<p>June 2023</p>
						<div class="image-container">
							<img src="/assets/img/emotionalintelligence.png" alt="Certificate" class="certificate-image rounded-md" />
						</div>
					</div>

					<div class="certificate-item">
						<h2>Complete GDPR, GDPR Certification, Data Protection, Privacy</h2>
						<p>Udemy</p>
						<p>January 2022</p>
						<div class="image-container">
							<img src="/assets/img/gdprcert.png" alt="Certificate" class="certificate-image rounded-md" />
						</div>
					</div>

					<div class="certificate-item">
						<h2>Data Integrity</h2>
						<p>Research Quality Association (RQA)</p>
						<p>January 2022</p>
						<div class="image-container">
							<img src="/assets/img/dataintegrity.png" alt="Certificate" class="certificate-image rounded-md" />
						</div>
					</div>

					<div class="certificate-item">
						<h2>GDPR Certification & Preparation to CIPP Certification</h2>
						<p>Udemy</p>
						<p>January 2022</p>
						<div class="image-container">
							<img src="/assets/img/gdpr.png" alt="Certificate" class="certificate-image rounded-md" />
						</div>
					</div>

					<div class="certificate-item">
						<h2>Computerized Systems Validation to meet Quality System Requirements</h2>
						<p>Quality First Academy</p>
						<p>July 2019</p>
						<div class="image-container">
							<img src="/assets/img/csv.png" alt="Certificate" class="certificate-image rounded-md" />
						</div>
					</div>

					<div class="certificate-item">
						<h2>Microsoft: Certified Security Professional</h2>
						<p>CQURE | Microsoft</p>
						<p>May 2019</p>
						<div class="image-container">
							<img src="/assets/img/microsoftcsp.png" alt="Certificate" class="certificate-image rounded-md" />
						</div>
					</div>

					<div class="certificate-item">
						<h2>Mimecast Certified Technology Specialist</h2>
						<p>Mimecast</p>
						<p>November 2015</p>
						<div class="image-container">
							<img src="/assets/img/goodclinicalpractice.png" alt="Certificate" class="certificate-image rounded-md" />
						</div>
					</div>

					<div class="certificate-item">
						<h2>Avast Security Expert</h2>
						<p>Avast</p>
						<p>December 2013</p>
						<div class="image-container">
							<img src="/assets/img/avast.png" alt="Certificate" class="certificate-image rounded-md" />
					</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

	// NWU skills list
    const nwuSkills = ref([
        'Computer Science', 'Strategic Thinking', 'Financial Accounting', 'Business Management', 'Structure Programming', 'Critical Thinking', 'User Interface Programming', 'Descriptive Statistics', 'C++', 'C#', 'Python', 'HTML', 'CSS', 'Java', 'Problem Solving', 'Object-Oriented Programming', 'Systems Analysis & Design', 'Information Security', 'Networks', 'Artificial Intelligence', 'In Progress: Operating Systems', 'In Progress: IT Developments'
    ])

	// NWU skills list
    const nwuPrepSkills = ref([
        'Financial Accounting', 'Strategic Reading', 'Academic Literacy Development', 'Critical Thinking', 'End-User Computing', 'Mathematical Concepts'
    ])

	// CTI skills list
    const ctiSkills = ref([
        'Computer Literacy', 'Processing & Logic Concepts', 'Program Design', 'Software Engineering', 'Relational Database Modeling & Design'
    ])

</script>

<style>

</style>
