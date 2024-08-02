# Digital CV

Digital CV for Francois Botha

# System Documentation
## Project Overview
I built this web application project using NuxtJS and Tailwind CSS. NuxtJS provides the structure and framework for building a robust VueJS application, while TailwindCSS offers a utility-first approach to styling assisting in development and efficiency.

## Technology Stack
- **Nuxt JS** is a progressive framework based on VueJS for building server-side rendered (SSR) applications, statis websites, and single-page applications (SPA).
- **Taildind CSS** is a utility-first CSS framework for creating custom designs directly in markup.

## NuxtJS Implementation
**Project Structure**
NuxtJS structures the project in a highly organized manner, with directories for pages, components, layouts, plugins, and more.

- Pages: Each file in the pages directory automatically becomes a route in the application. This allows for a clear and concise routing setup.
- Components: Reusable Vue components are stored in the components directory. These are used throughout the application to maintain consistency and modularity.
- Layouts: NuxtJS layouts define the common structure of your pages. This is useful for setting up a consistent look and feel across different parts of the application.

**Key Features**
- Server-Side Rendering (SSR): NuxtJS enables SSR out of the box, which improves performance and SEO.
- Static Site Generation (SSG): The project leverages Nuxt’s static site generation capabilities to pre-render pages at build time.
- Vuex for State Management: NuxtJS seamlessly integrates with Vuex for state management, ensuring a reactive and centralized store for managing application state.
- Routing: Automatic routing based on the pages directory, simplifying the creation and management of routes.
- Plugins and Middleware: Custom plugins and middleware are used to extend the functionality of the Nuxt application, such as authentication handling and API integrations.

## Tailwind CSS Implementation
**Utility-First Approach**
Tailwind CSS provides utility classes that can be applied directly to HTML elements, allowing for rapid and efficient styling without writing custom CSS.

- Responsive Design: Tailwind's responsive utilities make it easy to create responsive designs by applying different styles at various breakpoints.
- Customization: Tailwind can be customized via its configuration file (tailwind.config.js), allowing you to extend the default theme with custom colors, spacing, typography, and more.
- Key Features
- Flexbox and Grid: Tailwind’s utilities for flexbox and grid layout enable complex layouts with minimal custom CSS.
- Typography: Utility classes for typography ensure consistent text styling across the application.
- Spacing and Sizing: Margin, padding, width, and height utilities provide precise control over the spacing and sizing of elements.
- State Variants: Hover, focus, and other state variants can be applied directly to utility classes, enhancing interactivity.

## Integration of NuxtJS and Tailwind CSS
The integration of NuxtJS and Tailwind CSS is straightforward and involves the following steps:

1. **Installation:** Tailwind CSS is installed as a dependency in the NuxtJS project.
2. **Configuration:** Tailwind CSS is configured in the NuxtJS project by creating a tailwind.config.js file and including it in the project’s build process.
3. **Usage:** Tailwind's utility classes are used directly in the component templates to style elements.

# Application Design
## Pages
In my application, I utilized the pages directory in NuxtJS to automatically generate routes for my application. Each file in the pages directory corresponds to a specific route, making it straightforward to set up and manage navigation. I created a pages/index.vue file for the home page, a pages/about.vue file for the about page, a pages/education.vue file for everything realted to my education and certificates, and finally a pages/projects.vue file for my current projects in GitHub (later to be expanded to my job projects, while are much more complex). This setup allowed me to organize my views efficiently and keep the routing logic simple and intuitive.

```html
<!-- index.vue -->
<template>
    <div>

        <div class="min-h-screen flex items-center justify-center -mt-32">
            <section class="flex flex-col items-center text-center">
                <p class="text-2xl text-white pb-2 fade-in delay-0">Hi, my name is</p>
                <h1 class="text-5xl pb-8 fade-in delay-100 text-white">FRANCOIS BOTHA</h1>
                <p class="text-2xl text-white pb-2 fade-in delay-200">Welcome to my</p>
                <h2 class="text-3xl text-white pb-4 fade-in delay-300">DIGITAL PROFILE</h2>
                <NuxtLink to="/profile" class="bg-white text-custcol-teal p-2 mb-2 rounded-full w-36 font-bold text-xl drop-shadow-2xl fade-in delay-400">ABOUT ME</NuxtLink>
            </section>
        </div>
        
    </div>
</template>

<script setup>
</script>

<style>
</style>
```

## Layouts
NuxtJS layouts allowed me to define the common structure of my pages. I created a default layout in the layouts directory, ensuring a consistent look and feel across the application. The default.vue layout wraps around the content of each page, providing a unified structure. This creates the container based on the viewport and also applies the background color and overlay image which sits on top of the background color, but behind all the content that is filled after the <slot />.

```html
<!-- default.vue -->
<template>
    <!-- Screen container, page-level -->
    <main class="screen-cnt">
        <!-- Overlay image, behind site content -->
        <div class="overlay-cnt">
        </div>
        <!-- Content container -->
        <div class="content-cnt">
            <!-- Buttons -->
            <nav>
            </nav>
            <!-- Page contents added below -->
            <slot />
        </div>
    </main>
</template>
```

## Custom CSS Classes
To style my application, I relied heavily on Tailwind CSS’s utility-first approach. I customized the Tailwind configuration to fit the design requirements of my project, adding custom colors, spacing, and other utilities. In my tailwind.config.js, I defined custom colors and extended the default theme. This allowed me to use these custom styles directly in my markup, making the styling process efficient and consistent. I applied Tailwind CSS classes directly in my Vue component templates to style elements. This approach kept my CSS concise and focused on the structure, while Tailwind handled the styling.

Example of classes created in main.css:
```css
/* main.css */
h1 {
    @apply text-2xl font-bold
}

h2 {
    @apply text-xl font-bold
}

h3 {
    @apply text-lg
}
```

Example of custom added css classes in tailwind.config.js:
```js
extend: {
      // Extend available colors
      colors: {
        'custcol-indigodye': '#044b7f',
        'custcol-teal': '#107e7d',
        'custcol-pennred': '#95190c',
        'custcol-midnightgreen': '#19535f',
        'custcol-skobeloff': '#209999',
      },
    },
```

## Components
To ensure reusability and maintainability, I broke down the UI into smaller, reusable components stored in the components directory (where possible). This approach helped me manage the complexity of the application and kept the codebase clean and modular. In some cases, I reverted to plain HTML simply to show versatility.

For instance, I created a Footer.vue to add the footer content where applicable, the Summary.vue to slot the summary in easily, and finally the Job.vue component to generate jobs dynamically using props (to be explained in the next section). These components are then included in the pages or layout files.

Lastly, I created my site icons as components in the components/icons/_.vue directory. The icons are then used across the entire site.

```html
<!-- Date icon SVG -->
<template>
    <span>
        <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="1.5" 
            stroke="currentColor" 
            class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
    </span> 
</template>
```

## Props
In my application, I made extensive use of props to create reusable and dynamic components. Props, short for properties, are custom attributes that can be registered on a component. When a value is passed to a prop, it becomes a reactive data source that can be used within the component. Here's a detailed explanation of how I utilized props in my job history component:

### Component Template
In the template section of my job history component, I defined the structure and layout of the component. This included displaying various pieces of job information such as the job title, company, date range, location, company description, and a list of responsibilities.

```html
<template>
    <!-- Job history component -->
    <section class="mb-6">
        <h2 class="mb-2">{{ title }}</h2>
        <div class="flex justify-between font-semibold text-sm text-custcol-indigodye">
            <p>{{ company }}</p>
            <p class="flex"><IconsDateIcon class="[&>svg]:h-4 [&>svg]:w-4 pr-1"/>{{ dateRange }}</p>
        </div>
        <p class="flex italic text-sm pt-1 pb-2 text-custcol-teal"><IconsLocationIcon class="[&>svg]:h-4 [&>svg]:w-4"/>{{ location }}</p>
        <p class="italic pb-2">{{ companyDescription }}</p>
        <ul class="list-disc pl-6">
            <li v-for="(responsibility, index) in responsibilities" :key="index" v-html="formatResponsibility(responsibility)"></li>
        </ul>
    </section>
</template>
```

### Defining Props
In the script section, I used defineProps to define the props that the component expects. Each prop has a specific type, ensuring that the data passed to the component is in the correct format.

```js
<script setup>
    // Job history props
    const props = defineProps({
        title: {
            type: String,
        },
        company: {
            type: String,
        },
        dateRange: {
            type: String,
        },
        location: {
            type: String,
        },
        companyDescription: {
            type: String,
        },
        responsibilities: {
            type: Array,
        }
    });
</script>
```

### Using Props with Data
I also leveraged props to pass dynamic job data to the job history component. The job data is stored in a ref array, which allows for reactive state management in my application. Here's an example of how I structured the job data and utilized props:

```js
const jobs = ref([
    {
        title: '',
        company: '',
        dateRange: '',
        location: '',
        companyDescription: '',
        responsibilities: [
            '',
            ''
        ]
    },
]);
```

### Rendering Job History Components
To render the job history components dynamically based on the job data, I used a v-for directive in the parent component. This directive iterates over the jobs array and passes the relevant data to each job history component using props.

```html
<template>
    <div>
        <JobHistory
            v-for="(job, index) in jobs"
            :key="index"
            :title="job.title"
            :company="job.company"
            :dateRange="job.dateRange"
            :location="job.location"
            :companyDescription="job.companyDescription"
            :responsibilities="job.responsibilities"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import JobHistory from '@/components/JobHistory.vue';

const jobs = ref([
    // Job data as defined above...
]);
</script>
```

# Conclusion
By leveraging the powerful combination of NuxtJS and Tailwind CSS, the project achieves a high level of performance, maintainability, and scalability. NuxtJS provides the robust structure and features needed for modern web applications, while Tailwind CSS allows for efficient and responsive design with a utility-first approach. This synergy enables rapid development and a high-quality user experience.