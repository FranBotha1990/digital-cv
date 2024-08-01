<template>
	<div>
		<!-- Certificate container -->
		<div class="certificates text-center">
		<h1>
			<IconsEducationIcon class="pr-1 pl-2 [&>svg]:h-10 [&>svg]:w-10 text-custcol-teal" />Education
		</h1>

		<div class="education-cnt">
			<h2 class="pb-2">University</h2>
			<p class="pb-1">Degree</p>
			<p class="pb-1">Date</p>
			<section class="mb-4">
				<h2 class="flex mb-2 border-b-2"><IconsTrophyIcon  class="pr-1 [&>svg]:h-7 [&>svg]:w-6 text-custcol-midnightgreen"/>Skills</h2>
				<ul class="flex flex-wrap gap-0.5 justify-center">
					<li v-for="skill in skills" key="skill" class="majorSkillItems">{{ skill }}</li>
				</ul>
			</section>
		</div>
		
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
			<h2>Computerised Systems Validation to meet Quality System Requirements</h2>
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

	// Skills list
    const skills = ref([
        'One', 'Two', 'Three', 'Four', 'Five', 'One', 'Two', 'Three', 'Four', 'Five'
    ])

</script>

<style>

</style>
