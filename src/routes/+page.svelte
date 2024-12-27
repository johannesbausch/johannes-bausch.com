<script lang="ts">
  import HighlightedHeadline from '$lib/components/typography/HighlightedHeadline.svelte';
  import RegularHeadline from '$lib/components/typography/RegularHeadline.svelte';
  import ShortStoryParagraph from '$lib/components/typography/ShortStoryParagraph.svelte';
  import LeaveAHeart from '$lib/components/buttons/LeaveAHeart.svelte';
  import IconBox from '$lib/components/boxes/IconBox.svelte';
  import ProjectBox from '$lib/components/boxes/ProjectBox.svelte';
  import { openSourceProjects, companyProjects, privateProjects } from '$lib/constants/projects';
  import { introduction, aboutMe, mySkills, workExperience, myProjects, leaveAHeart } from '$lib/constants/section-data';
  import type { Skills } from '$lib/types/skills';
  import type { SvgModules } from '$lib/types/svg-modules';
  import SocialButton from '$lib/components/buttons/SocialButton.svelte';
  import { contactMe } from '$lib/constants/section-data';

  const languagesSvgModules: SvgModules = import.meta.glob('../lib/components/svg/skills/languages/*.svg', { eager: true });
  const databasesSvgModules: SvgModules = import.meta.glob('../lib/components/svg/skills/databases/*.svg', { eager: true });
  const frameworksSvgModules: SvgModules = import.meta.glob('../lib/components/svg/skills/frameworks/*.svg', { eager: true });
  const toolsSvgModules: SvgModules = import.meta.glob('../lib/components/svg/skills/tools/*.svg', { eager: true });
  const enviromentsSvgModules: SvgModules = import.meta.glob('../lib/components/svg/skills/enviroments/*.svg', { eager: true });

  const skills: Skills = {
    Languages: Object.values(languagesSvgModules).map((mod: any) => mod.default),
    Frameworks: Object.values(frameworksSvgModules).map((mod: any) => mod.default),
    Databases: Object.values(databasesSvgModules).map((mod: any) => mod.default),
    Enviroments: Object.values(enviromentsSvgModules).map((mod: any) => mod.default),
    Tools: Object.values(toolsSvgModules).map((mod: any) => mod.default)
  };
</script>

<main class="bg-background">
  <section>
    <RegularHeadline regularHeadline={ introduction.regularHeadline } />
    <HighlightedHeadline highlightedHeadline={ introduction.highlightedHeadline } />
    <ShortStoryParagraph shortStoryParagraph={ introduction.shortStoryParagraph } />
  </section>
  <section>
    <RegularHeadline regularHeadline={ aboutMe.regularHeadline } />
    <HighlightedHeadline highlightedHeadline={ aboutMe.highlightedHeadline } />
    <ShortStoryParagraph shortStoryParagraph={ aboutMe.shortStoryParagraph } />
  </section>
  <section>
    <RegularHeadline regularHeadline={ mySkills.regularHeadline } />
    <HighlightedHeadline highlightedHeadline={ mySkills.highlightedHeadline } />
    <ShortStoryParagraph shortStoryParagraph={ mySkills.shortStoryParagraph } />
    <div class="mt-12 flex flex-wrap justify-center gap-8">
      {#each Object.entries(skills) as [category, svgs]}
      <IconBox category={category} icons={svgs} />
      {/each}
    </div>
  </section>
  <section>
    <RegularHeadline regularHeadline={ workExperience.regularHeadline } />
    <HighlightedHeadline highlightedHeadline={ workExperience.highlightedHeadline } />
    <ShortStoryParagraph shortStoryParagraph={ workExperience.shortStoryParagraph } />    
  </section>
  <section>
    <RegularHeadline regularHeadline={ myProjects.regularHeadline } />
    <HighlightedHeadline highlightedHeadline={ myProjects.highlightedHeadline } />
    <ShortStoryParagraph shortStoryParagraph={ myProjects.shortStoryParagraph }/>
    <div class="mt-12 flex flex-wrap justify-center gap-8">
      {#each companyProjects as project}
        <ProjectBox
          category="Company Project"
          title={project.title}
          link={`/projects/${project.slug}`}
        />
      {/each}
      {#each openSourceProjects as project}
        <ProjectBox
          category="Open Source Project"
          title={project.title}
          link={`/projects/${project.slug}`}
        />
      {/each}
      {#each privateProjects as project}
        <ProjectBox
          category="Private Project"
          title={project.title}
          link={`/projects/${project.slug}`}
        />
      {/each}
    </div>
  </section>
    <section>
    <RegularHeadline regularHeadline={ contactMe.regularHeadline } />
    <HighlightedHeadline highlightedHeadline={ contactMe.highlightedHeadline } />
    <ShortStoryParagraph shortStoryParagraph={ contactMe.shortStoryParagraph } />
    <div class="pt-5">
      <SocialButton link="mailto:private@johannes-bausch.com" label="Email" />
      <SocialButton link="https://www.github.com/johannesbausch" label="GitHub" />
      <SocialButton link="https://www.linkedin.com/in/johannesbausch" label="LinkedIn" />
    </div>
  </section>
  <section>
    <RegularHeadline regularHeadline={ leaveAHeart.regularHeadline } />
    <HighlightedHeadline highlightedHeadline={ leaveAHeart.highlightedHeadline } />
    <div class="mt-12">
      <LeaveAHeart />
    </div>
  </section>
</main>

